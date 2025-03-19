import React from 'react'
import rose from '/rose.jpg'
import './Lab2.css'

const Lab2 = () => {
  return (
    <div class="container">
    <header>
      <h1>E-Commerce</h1>
    </header>

    <div class="sidebar">
      <h3>Categories</h3>
      <ul>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Accessories</li>
        <li>Home & Furniture</li>
      </ul>
    </div>

    <main>
      <div class="product">
        <img src={rose} alt="Product 1" />
        <h4>Product 1</h4>
        <p>$10.00</p>
      </div>
      <div class="product">
        <img src={rose} alt="Product 2" />
        <h4>Product 2</h4>
        <p>$20.00</p>
      </div>
      <div class="product">
        <img src={rose} alt="Product 3" />
        <h4>Product 3</h4>
        <p>$15.00</p>
      </div>
      <div class="product">
        <img src={rose} alt="Product 4" />
        <h4>Product 4</h4>
        <p>$25.00</p>
      </div>
    </main>
    <footer>
      &copy; 2025 E-Commerce Website
    </footer>
  </div>
  )
}

export default Lab2