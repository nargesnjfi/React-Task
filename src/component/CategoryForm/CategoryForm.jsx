import React, { useState } from "react";

function CategoryForm({ addCategory }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-[#364159] p-6 rounded-lg shadow-lg text-white mb-8">
      <h2 className="text-xl font-bold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className=" text-white py-2 px-4 rounded hover:bg-green-300 hover:text-[#67758E] bg-[#67758E] transition-colors"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}

export default CategoryForm;
