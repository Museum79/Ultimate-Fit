import React, { useState } from "react";
import Livres from "../components/composants-boutique/Livres";
import ProduitsDeRecuperation from "../components/composants-boutique/ProduitsRecuperation";
import ProduitsDeBienEtre from "../components/composants-boutique/ProduitsBienEtre";
import EquipementDEntrainement from "../components/composants-boutique/EquipementEntrainement";

const Boutique = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (menu) => {
    setActiveMenu(menu !== activeMenu ? menu : null);
  };

  return (
    <>
      <div className="w-11/12 mt-16 ml-20 rounded-lg shadow-2xl backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 border border-gray-100">
        <h1 className="text-white text-4xl p-5">BOUTIQUE</h1>
        <div>
          <ul className="flex flex-row text-sm text-white justify-center mt-6">
            <li
              className="cursor-pointer backdrop-filter backdrop-blur-sm bg-white bg-opacity-5 rounded-t-md p-2 m-0 mr-1 hover:bg-[#2F002E] hover:text-white hover:border-blue-600 transition-colors duration-300 ease-in-out border-transparent"
              onClick={() => handleMenuToggle("livres")}
            >
              Livres et guides
            </li>
            <li
              className="cursor-pointer bg-white backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-t-md p-2 m-0 mr-1 hover:bg-[#310029] hover:text-white hover:border-blue-600 transition-colors duration-300 ease-in-out border-transparent"
              onClick={() => handleMenuToggle("recuperation")}
            >
              Produits de récupération
            </li>
            <li
              className="cursor-pointer backdrop-filter backdrop-blur-sm bg-white bg-opacity-5 rounded-t-md p-2 m-0 mr-1 hover:bg-[#350126] hover:text-white hover:border-blue-600 transition-colors duration-300 ease-in-out border-transparent"
              onClick={() => handleMenuToggle("bienetre")}
            >
              Produits de bien-être
            </li>
            <li
              className="cursor-pointer backdrop-filter backdrop-blur-sm bg-white bg-opacity-5 rounded-t-md p-2 m-0 hover:bg-[#360122] hover:text-white hover:border-blue-600 transition-colors duration-300 ease-in-out border-transparent"
              onClick={() => handleMenuToggle("entrainement")}
            >
              Equipement d'entraînement
            </li>
          </ul>
          {activeMenu === "livres" && <Livres />}
          {activeMenu === "recuperation" && <ProduitsDeRecuperation />}
          {activeMenu === "bienetre" && <ProduitsDeBienEtre />}
          {activeMenu === "entrainement" && <EquipementDEntrainement />}
        </div>
      </div>
    </>
  );
};

export default Boutique;
