import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import Card from "./Card";
import {
  Container,
  Label,
  Option,
  Select,
  SortOptions,
} from "../Styled/Styled";

const itemsPerPage = 8;

const ProductCard = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [sortOption, setSortOption] = useState("none");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const filteredItems = items
    .filter(
      (item) => categoryFilter === "all" || item.category === categoryFilter
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      } else if (sortOption === "price-desc") {
        return b.price - a.price;
      }
      return 0;
    });

  const displayedItems = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Check if the number of filtered items is less than or equal to 8
  const shouldRenderPagination = filteredItems.length > itemsPerPage;

  return (
    <>
      <SortOptions>
        <Label>
          Sort by Price:
          <Select value={sortOption} onChange={handleSortChange}>
            <Option value="none">None</Option>
            <Option value="price-asc">Price Low to High</Option>
            <Option value="price-desc">Price High to Low</Option>
          </Select>
        </Label>
        <Label>
          Filter by Category:
          <Select value={categoryFilter} onChange={handleCategoryFilterChange}>
            <Option value="all">All Categories</Option>
            {uniqueCategories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Label>
      </SortOptions>
      <Container>
        {displayedItems.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </Container>
      {shouldRenderPagination && (
        <ReactPaginate
          previousLabel={"Previous"}
          className="paginate-container"
          nextLabel={"Next"}
          breakLabel={null}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousLinkClassName={"pagination-button"}
          nextLinkClassName={"pagination-button"}
          disabledClassName={"pagination-disabled"}
        />
      )}
    </>
  );
};

export default ProductCard;
