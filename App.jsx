import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Accueil() {
  return <h1>Bienvenue au Restaurant Délice 🍽️</h1>;
}

function Menu() {
  return <h1>Notre Menu 🍔🍕🥤</h1>;
}

function Produits() {
  return <h1>Nos Produits ⭐</h1>;
}

function Contact() {
  return <h1>Contactez-nous 📞</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h2>🍽️ Délice</h2>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/produits">Produits</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <footer>
        <p>© 2026 Restaurant Délice - Tous droits réservés</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;