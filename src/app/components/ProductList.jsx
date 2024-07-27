import React from "react";
import { data } from "../data";

export const ProductList = ({}) => {
  return (
    <div className="container-items">
      {data.map((product) => (
        <div className="item" key={product.id}>
          <div className="item-image-container">
            <img
              src={product.imagen}
              alt={product.title}
              className="item-image"
            />
          </div>
          <div className="item-content">
            <div className="item-title-container">
              <h2 className="item-title">{product.title}</h2>
            </div>
            <div className="item-info-container">
              <p className="item-info">{product.descripcion}</p>
            </div>
            <div className="item-specif-container">
              <p className="item-specif">
                CARÁCTERISTICAS: {product.caracteristicas}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
