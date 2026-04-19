import { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Indoor" },

  { id: 4, name: "Rose", price: 12, category: "Flowering" },
  { id: 5, name: "Tulip", price: 14, category: "Flowering" },
  { id: 6, name: "Sunflower", price: 18, category: "Flowering" },

  { id: 7, name: "Cactus", price: 8, category: "Succulent" },
  { id: 8, name: "Jade Plant", price: 11, category: "Succulent" },
  { id: 9, name: "Agave", price: 13, category: "Succulent" }
];

export default function ProductList() {
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState({});

  const addToCart = (plant) => {
    setCart([...cart, plant]);
    setAdded({ ...added, [plant.id]: true });
  };

  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div>
      <h1>Plants</h1>

      {/* Navbar */}
      <nav>
        <a href="#">Home</a> | <a href="#">Plants</a> | <a href="#">Cart ({cart.length})</a>
      </nav>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          {plants
            .filter(p => p.category === category)
            .map(plant => (
              <div key={plant.id}>
                <p>{plant.name} - ${plant.price}</p>

                <button
                  onClick={() => addToCart(plant)}
                  disabled={added[plant.id]}
                >
                  {added[plant.id] ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
