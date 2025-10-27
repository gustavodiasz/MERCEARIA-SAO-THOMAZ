
import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#103a85] text-yellow-200 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h4 className="font-bold text-lg text-yellow-400 mb-2 inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>Contato</span>
          </h4>
          <p>(82) 99383 4348</p>
          <p>(82) 99108 1638</p>
        </div>

        <div>
          <h4 className="font-bold text-lg text-yellow-400 mb-2 inline-flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Endereços</span>
          </h4>
          <p>Rua Rosa lins, Centro, Rio Largo - AL</p>
          <p>Av. Int Júlio Calheiros, Mata do Rolo, Rio Largo - AL</p>
        </div>

        <div>
          <h4 className="font-bold text-lg text-yellow-400 mb-2 inline-flex items-center gap-2">
            <Instagram className="w-5 h-5" />
            <span>Siga-nos</span>
          </h4>
          <a 
            href="https://www.instagram.com/merc_sao_thomaz_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 hover:text-yellow-400 transition-colors"
            >
            <span>@merc_sao_thomaz_</span>
          </a>
        </div>

      </div>
      <div className="text-center text-yellow-300 text-sm mt-8 border-t border-yellow-400/20 pt-4">
        <p>&copy; {new Date().getFullYear()} Mercearia São Thomaz. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;