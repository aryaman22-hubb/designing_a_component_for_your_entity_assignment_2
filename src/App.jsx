import "./App.css";
import ProductCard from "./components/productcard";
import Button from "./components/button";

function App() {
  const cards = Array.from({ length: 10 });

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    padding: "16px",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Product List</h1>
      <div style={gridStyle}>
        {cards.map((_, index) => (
          <div key={index}>
            <ProductCard />
            <Button label="View Product" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
