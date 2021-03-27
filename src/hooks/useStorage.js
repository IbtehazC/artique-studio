import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../firebase/config';

const useStorage = (file, details) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = storage.ref(file.name);
        const collectionRef = firestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({
                url,
                createdAt,
                details
            })
            setUrl(url);
        })
    }, [file, details])

    return { progress, url, error }
}

export default useStorage