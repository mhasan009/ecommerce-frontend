import { FaCarSide, FaQuestion } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/product-detail.css";
import { useState, useEffect } from "react";
import { addToCart } from "../redux/cartSlice";
import { fetchProductById } from "../redux/productSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const { selectedProduct, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (loading || !selectedProduct) {
    return (
      <div role="status" aria-live="polite">
        Loading...
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...selectedProduct,
        quantity, // e.g., 3
      }),
    );

    alert(`${quantity} x ${selectedProduct.name} added to cart!`);
  };

  return (
    <>
      <main className="product-detail" role="main">
        <div className="product-detail__layout">
          {/* Image */}
          <div className="product-detail__image-wrapper">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-detail__image"
            />
          </div>

          {/* Info */}
          <section className="product-detail__info">
            <h2 className="product-detail__title">{selectedProduct.name}</h2>

            <p className="product-detail__price">
              ${selectedProduct.price.toFixed(2)}
            </p>

            <div className="product-detail__cart">
              <input
                type="number"
                value={quantity}
                min="1"
                max="10"
                className="product-detail__quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />

              <button
                className="product-detail__button"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>

            <div className="product-detail__actions">
              <p className="product-detail__action">
                <FaCarSide className="product-detail__icon" />
                Free Delivery & Easy Returns
              </p>

              <p className="product-detail__action">
                <FaQuestion className="product-detail__icon" />
                Ask a Question
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Description */}
      <section className="product-detail__description">
        <h3 className="product-detail__description-title">
          Product Description
        </h3>

        <p className="product-detail__description-text">
          {selectedProduct.description}
        </p>
      </section>
    </>
  );
};

export default ProductDetail;
