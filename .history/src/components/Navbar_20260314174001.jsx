import "../styles/navbar.css";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const cartProducts = useSelector((state) => state.cart.products);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");

  const totalCartQuantity = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    dispatch(setSearchTerm(search));
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link to="/" aria-label="Go to homepage">
            e-Shop
          </Link>
        </div>

        {/* Search */}
        <div className="navbar__search">
          <form
            className="navbar__search-form"
            role="search"
            aria-label="Site Search"
            onSubmit={handleSearch}
          >
            <input
              type="search"
              placeholder="Search Product"
              className="navbar__search-input"
              aria-label="Search products"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="submit"
              className="navbar__search-button"
              aria-label="Submit search"
            >
              <FaSearch aria-hidden="true" />
            </button>
          </form>
        </div>

        {/* Actions */}
        <div className="navbar__actions" role="group" aria-label="User actions">
          {/* Cart */}
          <Link
            to="/cart"
            className="navbar__cart"
            aria-label="View shopping cart"
          >
            <FaShoppingCart aria-hidden="true" />

            {totalCartQuantity > 0 && (
              <span className="navbar__cart-count" aria-live="polite">
                {totalCartQuantity}
              </span>
            )}
          </Link>

          {/* Login/Register */}
          <button
            className="navbar__auth-btn"
            onClick={() => setIsModalOpen(true)}
            aria-label="Login or Register"
          >
            Login | Register
          </button>

          {/* User Icon */}
          <button className="navbar__user-icon" aria-label="User account">
            <FaUser aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Menu */}
      <div className="navbar__menu" role="menubar" aria-label="Primary menu">
        <Link to="/" className="navbar__menu-link" role="menuitem">
          Home
        </Link>

        <Link to="/shop" className="navbar__menu-link" role="menuitem">
          Shop
        </Link>

        <Link to="/contact" className="navbar__menu-link" role="menuitem">
          Contact
        </Link>

        <Link to="/about" className="navbar__menu-link" role="menuitem">
          About
        </Link>
      </div>

      {/* Auth Modal */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
