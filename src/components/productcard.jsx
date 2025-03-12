import "./ProductCard.css"; // Import external CSS for styling

const ProductCard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h3 className="product-name">{productName}</h3>
      <p className="product-price">{productPrice}</p>
    </div>
  );
};

export default ProductCard;
