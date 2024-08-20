import React, { useState, useEffect } from "react";

function ProductList({ products, categories, updateProducts }) {
  const [filterCategory, setFilterCategory] = useState("");
  const [searchTitle, setSearchTitle] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");

  const [productList, setProductList] = useState(products);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const filteredAndSortedProducts = productList
    .filter(
      (product) =>
        (filterCategory === "" || product.category === filterCategory) &&
        (searchTitle
          ? product.title.toLowerCase().includes(searchTitle.toLowerCase())
          : true)
    )
    .sort((a, b) =>
      sortOrder === "latest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  const deleteProduct = (indexToDelete) => {
    const updatedProducts = productList.filter(
      (_, index) => index !== indexToDelete
    );
    setProductList(updatedProducts);
    updateProducts(updatedProducts); // Notify the parent component about the update
  };

  return (
    <div>
      <div className="mb-8">
        <h5 className="text-[#ccd7f0] font-medium border-b-2 border-[#ccd7f0] mb-5">
          Filter
        </h5>
        {/* search and filter */}
        <div className="flex justify-between space-x-4 mb-4">
          <h3>Search</h3>
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            placeholder="Search by title"
            className="px-3 border border-[#ccd7f0] bg-transparent py-2 rounded"
          />
        </div>

        <div className="flex justify-between space-x-4 mb-4">
          <h3>Category</h3>
          <select
            className="px-3 py-2 bg-transparent border border-[#ccd7f0] rounded"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {/* sort by date */}
        <div className="flex justify-between space-x-10 mb-4">
          <h3>Sort</h3>
          <select
            className="px-3 border border-[#ccd7f0] py-2 bg-transparent rounded"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      <div>
        <h5 className="text-[#ccd7f0] font-medium border-b-2 border-[#ccd7f0] mb-5">
          Product List
        </h5>
        {filteredAndSortedProducts.map((product, index) => (
          <div key={index} className="bg-transparent flex p-4 mb-4">
            <div className="flex-1">
              <h3 className="text-sm font-bold">{product.title}</h3>
            </div>
            <div className="flex flex-col ml-4">
              <p className="text-sm">Quantity: {product.quantity}</p>
              <p className="text-sm">Category: {product.category}</p>
            </div>
            <div className="ml-auto text-sm">
              <p>
                Created At:{" "}
                {new Date(product.createdAt).toLocaleDateString(
                  "fa-IR",
                  options
                )}
              </p>
            </div>
            <button
              className="border border-red-500 text-xs text-red-500 bg-transparent p-2 rounded"
              onClick={() => deleteProduct(index)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
