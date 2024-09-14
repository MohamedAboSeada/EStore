import React from "react";
import { getProducts } from "../../../../API/ProductsAPI.mjs";
import ProductItem from "./ProductItem";
import "./ProductList.css";

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

export default function ProductList() {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    getProducts(page, function (data) {
      setProducts(data);
    });
  }, [page]);
  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            originalPrice={product.actual_price}
            discountPrice={product.discount_price}
            ratings={product.ratings}
            numRatings={product.no_of_ratings}
          />
        ))}
      </div>

      <div className="pagination">
        {page > 1 ? (
          <li class="page-item">
            <button className="page" onClick={() => setPage(page - 1)}><i class="fa-solid fa-arrow-left-long"></i></button>
          </li>

        ) : undefined
        }
        <span className="page page-num">{page}</span>
        <li class="page-item">
          <button className="page" onClick={() => setPage(page + 1)}><i class="fa-solid fa-arrow-right-long"></i></button>
        </li>
      </div>
    </div>
  );
}
