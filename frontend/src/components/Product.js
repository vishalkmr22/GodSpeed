import React from 'react';

// Example product data (replace with your actual data or API call)
const products = [
  {
    title: 'Lightning Deploy',
    description: 'Deploy your apps in seconds with zero downtime.',
    image: require('../assets/product1.jpg'),
  },
  {
    title: 'Realtime Analytics',
    description: 'Monitor your app performance in real time.',
    image: require('../assets/product2.jpg'),
  },
  {
    title: 'Team Collaboration',
    description: 'Work together with your team seamlessly.',
    image: require('../assets/product3.jpg'),
  },
];

export default function Product() {
  return (
    <section id="product" className="section product-section">
      <h2>Our Products</h2>
      <div className="product-flex">
        {products.map((p, idx) => (
          <div key={idx} className="product-card">
            <img src={p.image} alt={p.title} className="product-image" />
            <div className="product-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}