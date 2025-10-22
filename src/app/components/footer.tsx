"use client";
import feather from "feather-icons";
import { useEffect } from "react";
export default function Footer() {
  useEffect(() => {
    feather.replace();
  }, []);
  return (
    <div className="footer bg-slate-800 text-white py-12 pt-16">
      <div className="footer-container">
        <div className="footer-about">
          <div className="footer-logo">Tiệm Mùa Chậm</div>
          <p className="footer-description">
            Your destination for the latest fashion trends and styles.
          </p>
          <div className="footer-social">
            <a href="#">
              <i data-feather="facebook"></i>
            </a>
            <a href="#">
              <i data-feather="instagram"></i>
            </a>
            <a href="#">
              <i data-feather="twitter"></i>
            </a>
            <a href="#">
              <i data-feather="youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Shop</h3>
          <ul>
            <li>
              <a href="/men.html">{"Men's Clothing"}</a>
            </li>
            <li>
              <a href="/women.html">{"Women's Clothing"}</a>
            </li>
            <li>
              <a href="/accessories.html">Accessories</a>
            </li>
            <li>
              <a href="/footwear.html">Footwear</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="/faq.html">FAQ</a>
            </li>
            <li>
              <a href="/shipping.html">Shipping & Returns</a>
            </li>
            <li>
              <a href="/size-guide.html">Size Guide</a>
            </li>
            <li>
              <a href="/contact.html">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about.html">About Us</a>
            </li>
            <li>
              <a href="/blog.html">Blog</a>
            </li>
            <li>
              <a href="/careers.html">Careers</a>
            </li>
            <li>
              <a href="/privacy.html">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FashionFiesta. All rights reserved.
      </div>
    </div>
  );
}
