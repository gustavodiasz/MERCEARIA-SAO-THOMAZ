import React from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { AppProvider } from './contexts/AppContext';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#1e4ba0]">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <ProductGrid />
        </main>
        <Footer />
        <Cart />
      </div>
    </AppProvider>
  );
};

export default App;
