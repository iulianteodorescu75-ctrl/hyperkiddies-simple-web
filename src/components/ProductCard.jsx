import React from "react";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <img src={product.image_url} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category} · {product.price}</p>
      <p className="desc">{product.description}</p>
      <div className="card-actions">
        <a
          className="cta"
          href={product.affiliate_url}
          target="_blank"
          rel="noreferrer"
        >
          Buy
        </a>
      </div>
    </article>
  );
}
