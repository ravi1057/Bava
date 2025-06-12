// react-typescript-app/src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage'; // Import the new page
// You might have other imports like './App.css' or Tailwind's base styles if not globally handled
// import './App.css'; // Assuming App.css might have some global styles or component-specific ones initially.
// If Tailwind base/components/utilities are in index.css and imported in main.tsx, this might not be needed or could be cleaned up.

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col"> {/* Applied flex flex-col here */}
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold hover:text-blue-200">E-Commerce</Link>
            <div>
              <Link to="/products" className="mr-4 hover:text-blue-200">Products</Link>
              {/* Add other nav links here */}
            </div>
          </div>
        </nav>

        <main className="container mx-auto py-8 flex-grow"> {/* Added flex-grow to push footer down */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListPage />} />
            {/* Define other routes here */}
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center p-4"> {/* Removed mt-auto as flex-grow on main and flex-col on parent should handle it */}
          <p>&copy; 2024 Your E-Commerce Site</p>
        </footer>
      </div>
    </Router>
  );
}

// Simple Home component for the root path
const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store!</h1>
      <p className="text-lg mb-6">Check out our amazing products.</p>
      <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Shop Now
      </Link>
    </div>
  );
};

export default App;
