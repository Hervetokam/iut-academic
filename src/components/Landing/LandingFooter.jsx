import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="bg-gradient-to-tl from-[#16011e] to-[#3a055b] text-white py-10 px-6 md:px-20 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div>
          <h1 className="text-2xl font-bold mb-2 text-purple-300">IUT Academic</h1>
          <p className="text-sm text-gray-300">
            Plateforme académique innovante pour les étudiants et enseignants de l’IUT de Douala.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Navigation</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Accueil</a></li>
            <li><a href="#apropos" className="hover:text-white">À propos</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="/login-etudiant" className="hover:text-white">Connexion Étudiant</a></li>
            <li><a href="/login-enseignant" className="hover:text-white">Connexion Enseignant</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <ul className="text-sm space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope /> iutacademic@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +237 6 99 99 99 99
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Douala, Cameroun
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Développé par</h2>
          <p className="text-sm text-gray-300">
            <span className="text-white font-semibold">Hervé Tokam</span> <br />
            Étudiant passionné de développement web.
          </p>
          <p className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} IUT Academic. Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
};

export default LandingFooter;
