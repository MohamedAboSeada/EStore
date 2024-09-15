import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../../API/ProductsAPI.mjs";
import Fancybox from "../Fancybox";

/*
{
		"id": 1,
		"name": "Redmi 10 Power (Power Black, 8GB RAM, 128GB Storage)",
		"main_category": "tv, audio & cameras",
		"sub_category": "All Electronics",
		"image": "https://m.media-amazon.com/images/I/81eM15lVcJL._AC_UL320_.jpg",
		"link": "https://www.amazon.in/Redmi-Power-Black-128GB-Storage/dp/B09Y64H8VS/ref=sr_1_4?qid=1679133649&s=electronics&sr=1-4",
		"ratings": "4.0",
		"no_of_ratings": "965",
		"discount_price": "₹10,999",
		"actual_price": "₹18,999"
}
*/
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    getProductByID(id, function (data) {
      setProduct(data[0]);
      console.log(data[0]);
    });
  }, [id]);

  const discountPercent = useMemo(() => {
    if (!product) return 0;
    const actualPrice = parseInt(product.actual_price.replace(/[^0-9]/g, ""));
    const discountPrice = parseInt(
      product.discount_price.replace(/[^0-9]/g, "")
    );

    return Math.floor(((actualPrice - discountPrice) / actualPrice) * 100);
  }, [product]);

  const addToCart = () => {};

  const buyNow = () => {};

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Product Image Section */}
        <div className="col-md-6">
          <Fancybox
            options={{
              contentClick: "toggleMax",
              Toolbar: {
                display: {
                  left: [],
                  middle: [],
                  right: ["close"],
                },
              },
              Images: {
                Panzoom: {
                  panMode: "mousemove",
                  mouseMoveFactor: 1.1,
                  mouseMoveFriction: 0.12,
                  maxScale: 3,
                },
              },
            }}
          >
            <a data-fancybox href={product.image}>
              <img
                src={product.image}
                className="img-fluid mb-3"
                alt={product.name}
              />
            </a>
          </Fancybox>
          {/* <img
            src={product.image}
            alt={product.name}
            className="img-fluid mb-3"
          /> */}
        </div>

        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">
            {product.main_category} / {product.sub_category}
          </p>

          <div className="d-flex align-items-center">
            <span className="badge bg-success me-2">
              {product.ratings} <i className="fa-solid fa-star"></i>
            </span>
            <span className="text-muted ml-2">
              ({product.no_of_ratings} ratings)
            </span>
          </div>

          {/* Price and Discount */}
          <div className="my-4 d-flex align-items-center">
            <span className="fs-4 text-primary fw-bold px-2">
              {product.discount_price}
            </span>
            <span className="text-muted ml-2  px-2">
              <del>{product.actual_price}</del>
            </span>
            <span className="text-success  px-2">{discountPercent}% OFF</span>
          </div>

          {/* Action Buttons */}
          <div className="act-btns d-flex justify-content-between ">
            {/* Quantity */}
            <div className="quntity d-flex align-items-center border border-1">
              <button
                className="btn btn-outline-secondary"
                onClick={() =>
                  quantity > 1 ? setQuantity((old) => old - 1) : null
                }
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="text"
                className=" mx-2 text-center border border-0"
                style={{ width: "40px" }}
                value={quantity}
                readOnly
              />
              <button
                className="btn btn-outline-secondary"
                onClick={() => setQuantity((old) => old + 1)}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>

            <button
              className="btn btn-success btn-lg mr-2 w-50"
              onClick={() => addToCart()}
            >
              <i className="fa-solid fa-cart-shopping me-2"></i>
              Add to Cart
            </button>

            <button
              className="btn btn-buy btn-lg fw-medium"
              style={{
                borderRadius: "2px",
                color: "#FA8232",
                backgroundColor: "transparent",
                border: "1px solid #FA8232",
              }}
              onClick={() => buyNow()}
            >
              Buy Now
            </button>
          </div>

          {/* Link to product page */}
          <div className="mt-3">
            <a href={product.link} className="text-muted">
              View on Amazon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
