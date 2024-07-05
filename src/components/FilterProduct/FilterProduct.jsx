
import { useEffect } from "react";
import "./FilterProduct.css";
import axios from "axios";
import { getAllCategories } from "../../apis/fakeStoreProdApis";

function FilterProduct() {
  const minPriceOptions = [0, 10, 20, 50, 100, 200, 1000];
  const maxPriceOptions = [0, 1000, 2000, 3000, 5000, 100000];

  async function downloadCategories(){
    const response = await axios.get(getAllCategories);
  }
  useEffect(() => {
    downloadCategories();
  }, [])

  return (
    <div className="product-list-sidebar d-flex flex-column">
      <div className="sidebar-title">Search Products</div>
      <div className="sidebar-search form-group">
        <input
          type="text"
          placeholder="Search by name"
          className="form-control"
          id="searchInput"
        />
      </div>

      <div className="sidebar-title fw-bold">Categories</div>
      <div id="categoryList">
        {/* Will be Populated by Js */}

        <a
          href="productList.html?category=electronics"
          className="d-flex text-decoration-none"
        >
          Electronics
        </a>
        <a
          href="productList.html?category=jewelery"
          className="d-flex text-decoration-none"
        >
          Jewellary
        </a>
        <a
          href="productList.html?category=men's clothing"
          className="d-flex text-decoration-none"
        >
          Men's Clothing
        </a>
        <a
          href="productList.html?category=women's clothing"
          className="d-flex text-decoration-none"
        >
          Women's Clothing
        </a>
        <a
          href="productList.html?category=electronics"
          className="d-flex text-decoration-none"
        >
          Gaming
        </a>
      </div>

      <div className="sidebar-title">Filter by price</div>
      <div className="price-filter">
        <div className="price-filter-select d-flex flex-row justify-content-between">
          <div className="form-group">
            <select name="minPrice" className="form-select" id="minPrice">
              {minPriceOptions.map((optionValue) => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <select name="maxPrice" className="form-select" id="maxPrice">
              {maxPriceOptions.map((optionValue) => (
                <option key={optionValue} value={optionValue}>
                  {optionValue}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="price-filter-title d-flex flex-row justify-content-start">
          <div id="price-filter-label-min">Min Price</div>
          <div id="price-filter-label-max">Max Price</div>
        </div>
      </div>

      <button className="btn btn-warning clear-filter" id="search">
        Search
      </button>

      <button className="btn btn-danger clear-filter" id="clear">
        Clear Filters
      </button>
    </div>
  );
}

export default FilterProduct;
