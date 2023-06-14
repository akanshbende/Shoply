import React from "react";
import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../../public/images/wish.svg" alt="" />
            </Link>
          </div>
          {/* Product image */}
          <div className="product-image">
            <img
              className="img-fluid"
              src="../../public/images/watch.jpg"
              alt="product image"
            />
            <img
              className="img-fluid"
              src="../../public/images/watch-1.webp"
              alt="product image"
              width={269}
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              ipsam nulla eaque nobis ducimus sapiente placeat temporibus magni,
              quidem inventore commodi quasi natus vel animi obcaecati! Porro
              nostrum dignissimos quas.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="../../public/images/view.svg" alt="add cart" />
              </Link>
              <Link>
                <img src="../../public/images/prodcompare.svg" alt="add cart" />
              </Link>
              <Link>
                <img src="../../public/images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../../public/images/wish.svg" alt="" />
            </Link>
          </div>
          {/* Product image */}
          <div className="product-image">
            <img
              className="img-fluid"
              src="../../public/images/watch.jpg"
              alt="product image"
            />
            <img
              className="img-fluid"
              src="../../public/images/watch-1.webp"
              alt="product image"
              width={269}
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              ipsam nulla eaque nobis ducimus sapiente placeat temporibus magni,
              quidem inventore commodi quasi natus vel animi obcaecati! Porro
              nostrum dignissimos quas.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="../../public/images/view.svg" alt="add cart" />
              </Link>
              <Link>
                <img src="../../public/images/prodcompare.svg" alt="add cart" />
              </Link>
              <Link>
                <img src="../../public/images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="../../public/images/wish.svg" alt="" />
            </Link>
          </div>
          {/* Product image */}
          <div className="product-image">
            <img
              className="img-fluid"
              src="../../public/images/watch.jpg"
              alt="product image"
            />
            <img
              className="img-fluid"
              src="../../public/images/watch-1.webp"
              alt="product image"
              width={269}
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid == 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              ipsam nulla eaque nobis ducimus sapiente placeat temporibus magni,
              quidem inventore commodi quasi natus vel animi obcaecati! Porro
              nostrum dignissimos quas.
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute ">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="../../public/images/view.svg" alt="add cart" />
              </Link>
              <Link>
                <img src="../../public/images/prodcompare.svg" alt="add cart" />
              </Link>
              <Link>
                <img src="../../public/images/add-cart.svg" alt="add cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
