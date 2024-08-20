import React, { useState, useEffect } from "react";
import CategoryForm from "./component/CategoryForm/CategoryForm";
import ProductForm from "./component/ProductForm/ProductForm";
import ProductList from "./component/ProductList/ProductList";

function App() {
  const [categories, setCategories] = useState(() => {
    const storedCategories =
      JSON.parse(localStorage.getItem("categories")) || [];
    return storedCategories;
  });

  const [products, setProducts] = useState(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    return storedProducts;
  });
  //show category form or no
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  //  saved data in local storage when changed categores nd products
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  // method for add category
  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
    setShowCategoryForm(false);
  };

  // method for add product
  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  // method for update products  when delete product and need update list
  const updateProducts = (updatedProducts) => {
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-[#1E2A38] p-8 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">REACT </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {showCategoryForm ? (
            <CategoryForm addCategory={addCategory} />
          ) : (
            <div className="mb-8 text-left">
              <a
                onClick={() => setShowCategoryForm(true)}
                className="text-white py-2 px-4 text-left mr-0 rounded hover:text-gray-300 transition-colors"
              >
                Add New Category?
              </a>
            </div>
          )}
          <ProductForm categories={categories} addProduct={addProduct} />
        </div>

        <div>
          <ProductList
            products={products}
            categories={categories}
            updateProducts={updateProducts}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
