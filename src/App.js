import logo from "./logo.svg";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Pizza = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Fast Pizza company</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const pizzaLength = pizzas.length;
  return (
    <main className="menu">
      <h2>Menu</h2>
      {pizzaLength > 0 ? (
        <>
          <p>
            Authentic ithalic cusine. 6 crative didhes you can choose from. All
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <div>we are still working on menu please comback later</div>
      )}
    </main>
  );
};

const Footer = () => {
  const currentHours = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = currentHours >= openHours && currentHours <= closeHours;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} />
      ) : (
        <>
          <p className="order">
            <br />
            we are closed. we will open again {openHours}:00 Come visit us or
            order online
          </p>
        </>
      )}
    </footer>
  );
};

const Order = ({ closeHours }) => {
  return (
    <div className="order">
      <br />
      <p>we are open untill {closeHours}:00 Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    </div>
  );
}

export default App;
