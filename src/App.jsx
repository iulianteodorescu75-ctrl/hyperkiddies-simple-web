import React, { useState } from "react";
import Header from "./components/Header.jsx";
import ProductCard from "./components/ProductCard.jsx";
import { products, categories } from "./data/products.js";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products
    .filter(p => selectedCategory === "All" ? true : p.category === selectedCategory)
    .filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="hero">
          <h1>HyperKiddies — Toys & Characters</h1>
          <p>Curated toys — tap to buy on trusted stores.</p>
          <input
            className="search"
            placeholder="Search toys..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </section>

        <section className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={cat === selectedCategory ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </section>

        <section className="grid">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </main>
    </div>
  );
}
