import "./Home.css";

function Home({products,addToCart}) {
 
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <div className="product-container">
            <div className="product">
              <img src={product.image} alt="product image" srcset="" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button onClick={addToCart}>Add To cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
