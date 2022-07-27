import React, { ChangeEvent, useState } from "react";

interface Props {
  title: string;
  description: string;
}

export default function EditForm({ title, description }: Props) {
  const [textInput, setTextInput] = useState({
    title: title,
    description: description,
  });
  const handleFormTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setTextInput({ ...textInput, [id]: value });
  };

  return (
    <form className="bg-teal-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs">
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
      <button
        className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Edit
      </button>
    </form>
  );
}
