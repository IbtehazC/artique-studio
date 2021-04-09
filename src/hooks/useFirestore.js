import { useState, useEffect } from 'react';
import { firestore } from '../firebase/config'

const useFirestore = (collection, setLoading) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        setLoading(true);
        return firestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id })
                });
                setDocs(documents);
                setLoading(false);
            });
    }, [collection, setLoading]);

    return { docs };
}

export default useFirestore;