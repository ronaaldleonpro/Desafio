import React from "react";
import { data } from "../data";

export const ProductList = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  return (
    <div class="container-items">
      {data.map((product) => (
        <div class="item" key={product.id}>
          <div class="item-title-container">
            <h2 class="item-title">{product.title}</h2>
          </div>
          <div class="item-info-container">
            <p class="item-info">{product.descripcion}</p>
          </div>
          <div class="item-image-container">
            <img src={product.imagen} alt={product.title} class="item-image" />
          </div>
          <div class="item-specif-container">
            <p class="item-specif">
              CARÁCTERISTICAS: {product.caracteristicas}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
