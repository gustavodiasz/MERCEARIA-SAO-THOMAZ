import React from 'react';
import { useAppContext } from '../contexts/AppContext';
import { Category } from '../types';
import { ShoppingBasket, ShoppingCart, Truck, Clock } from 'lucide-react';

const categories: (Category | 'Todos')[] = ['Todos', 'Essenciais', 'Bebidas', 'Mercearia', 'Açougue', 'Hortifruti'];

const Header: React.FC = () => {
    const { cartItems, toggleCart, selectedCategory, setCategory } = useAppContext();
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#103a85] shadow-lg sticky top-0 z-20">
      <div className="bg-yellow-400 text-[#103a85] py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
                <Truck className="w-6 h-6 flex-shrink-0" />
                <p className="font-bold text-sm sm:text-base">
                    Entrega grátis em Rio Largo para compras a partir de R$ 25,00
                </p>
            </div>
            <div className="flex items-center justify-center space-x-2">
                <Clock className="w-6 h-6 flex-shrink-0" />
                <p className="font-bold text-sm sm:text-base">
                    Aberto todos os dias
                </p>
            </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <ShoppingBasket className="w-12 h-12 text-yellow-400" />
            <div className="flex flex-col text-yellow-400 font-bold">
              <span className="text-xl sm:text-2xl tracking-wide uppercase">Mercearia</span>
              <span className="text-2xl sm:text-3xl tracking-wider uppercase -mt-1">São Thomaz</span>
            </div>
          </div>

          <div className="relative">
              <button onClick={toggleCart} className="relative text-yellow-400 hover:text-white transition-colors">
                  <ShoppingCart className="w-8 h-8"/>
                  {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                          {totalItems}
                      </span>
                  )}
              </button>
          </div>
        </div>

        <nav className="pb-3">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setCategory(category)}
                        className={`px-3 py-1 text-sm sm:text-base font-medium rounded-full transition-colors duration-200 ${
                            selectedCategory === category
                                ? 'bg-yellow-400 text-[#103a85]'
                                : 'bg-white/10 text-yellow-200 hover:bg-yellow-400/50 hover:text-white'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;