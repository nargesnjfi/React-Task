import React, { useState } from "react";

function ProductForm({ categories, addProduct }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      title,
      quantity,
      category,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setQuantity("");
    setCategory("");
  };

  return (
    <>
      <a className="text-xl font-bold mb-4">Add New Product</a>
      <div className="bg-[#364159] p-6 rounded-lg shadow-lg text-white mb-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" px-3 py-2 bg-gray-800 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className=" px-3 py-2 bg-gray-800 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 bg-gray-800 rounded"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-[#67758E] w-full text-white py-2 px-4 rounded hover:bg-green-300 hover:text-[#67758E] transition-colors"
          >
            Add Product
          </button>
        </form>
      </div>
    </>
  );
}

export default ProductForm;
