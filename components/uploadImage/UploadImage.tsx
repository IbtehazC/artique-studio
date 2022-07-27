import React, { ChangeEvent, FormEvent, useState } from "react";
import { supabaseAdmin } from "../../utils/supabase.utils";

export default function UploadImage() {
  const [textInput, setTextInput] = useState({
    title: "",
    description: "",
  });
  const [imgSrc, setImgSrc] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(textInput);
    console.log(imgSrc?.name);

    const { data, error } = await supabaseAdmin.storage
      .from("images")
      .upload(`${imgSrc?.name}`, imgSrc as File);

    if (data) {
      const imgUrl = `https://vmpkfzmgcwrtqhrhzfmb.supabase.co/storage/v1/object/public/${data.Key}`;
      updateDatabase(textInput.title, textInput.description, imgUrl);
    } else {
      console.log(error);
    }
  };

  const updateDatabase = async (
    title: string,
    description: string,
    imgSrc: string
  ) => {
    const { data, error } = await supabaseAdmin
      .from("images")
      .insert({ title: title, description: description, imgSrc: imgSrc });
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  };

  const handleFormTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setTextInput({ ...textInput, [id]: value });
  };

  const handleFormFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    setImgSrc(e.target.files[0]);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-teal-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Title"
          onChange={handleFormTextInputChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="description"
          onChange={handleFormTextInputChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="file_input"
        >
          file_input
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="file_input"
          type="file"
          accept="images/*"
          onChange={(e) => handleFormFileInputChange(e)}
        />
      </div>
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
