import React, { useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { X, Trash2, Plus, Minus } from 'lucide-react';

const Cart: React.FC = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart } = useAppContext();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  const handleWhatsAppCheckout = () => {
    const storePhoneNumber = '5582993834348'; // Primary contact number
    let message = 'Olá Mercearia São Thomaz! Gostaria de fazer o seguinte pedido:\n\n';
    cartItems.forEach(item => {
      message += `- ${item.quantity}x ${item.title}\n`;
    });
    message += '\nAguardo o contato para combinar o pagamento e a entrega. Obrigado!';
    
    const whatsappUrl = `https://wa.me/${storePhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-30" aria-modal="true">
      <div onClick={toggleCart} className="absolute inset-0"></div>
      <div className="fixed top-0 right-0 bottom-0 bg-gray-100 w-full max-w-sm flex flex-col shadow-2xl animate-slide-in">
        <header className="flex items-center justify-between p-4 bg-[#103a85] text-yellow-400">
          <h2 className="text-xl font-bold">Seu Carrinho</h2>
          <button onClick={toggleCart} className="hover:text-white transition-colors">
            <X className="w-7 h-7" />
          </button>
        </header>

        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-8">Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-4">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-start space-x-4 bg-white p-3 rounded-lg shadow">
                  <img src={item.imageUrl || `https://picsum.photos/100/100?random=${item.id}`} alt={item.title} className="w-16 h-16 object-cover rounded-md"/>
                  <div className="flex-grow">
                    <p className="font-bold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 border rounded-md hover:bg-gray-100">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 font-bold">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 border rounded-md hover:bg-gray-100">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 className="w-5 h-5"/>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className="p-4 border-t bg-white">
            <button
                onClick={handleWhatsAppCheckout} 
                className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 text-lg"
            >
              Finalizar Compra no WhatsApp
            </button>
          </footer>
        )}
      </div>
      <style>{`
        @keyframes slide-in {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
        }
        .animate-slide-in {
            animation: slide-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Cart;