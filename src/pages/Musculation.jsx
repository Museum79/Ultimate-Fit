import React, { useState } from "react";
import "../app.css";

import DeveloppeCouche from "../components/composants-muscu/DeveloppeCouche";

const Musculation = () => {
  const [showSubMenu1, setShowSubMenu1] = useState(false);
  const [showSubMenu2, setShowSubMenu2] = useState(false);
  const [showSubMenu3, setShowSubMenu3] = useState(false);
  const [showSubMenu4, setShowSubMenu4] = useState(false);

  const handleSubMenuToggle1 = () => {
    setShowSubMenu1(!showSubMenu1);
  };
  const handleSubMenuToggle2 = () => {
    setShowSubMenu2(!showSubMenu2);
  };
  const handleSubMenuToggle3 = () => {
    setShowSubMenu3(!showSubMenu3);
  };
  const handleSubMenuToggle4 = () => {
    setShowSubMenu4(!showSubMenu4);
  };

  const [showDeveloppeCouche, setShowDeveloppeCouche] = useState(false);
  const handleDeveloppeCoucheClick = () => {
    setShowDeveloppeCouche(true);
  };

  return (
    <>
      <div className="relative mt-20 ml-28">
        <div className="flex-col z-10">
          <h2 className="annonce text-5xl text-white font-bold">
            MUSCULATION
          </h2>
          <p className="text-lg text-white font-light mt-2">
            Découvrez les exercices Ultimate-Fit
          </p>
          <div className="grid grid-cols-3">
            <div className="mt-12 col-span-1 text-white">
              <ul>
                <li className="mb-6 ml-6 hover:text-yellow-400 cursor-pointer duration-300" onClick={handleSubMenuToggle1}>
                  • Entrainement du haut du corps
                  {showSubMenu1 && (
                    <div className="col-span-2">
                    <ul className="ml-6 mt-2 transition-all duration-300">
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300" onClick={handleDeveloppeCoucheClick}>
                        Développé couché
                      </li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Tractions</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Dips</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Rowing</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Elévations latérales</li>
                    </ul>
                    </div>
                  )}
                </li>

                <li className="mb-6 ml-6 hover:text-yellow-400 cursor-pointer duration-300" onClick={handleSubMenuToggle2}>
                  • Entrainement du bas du corps
                  {showSubMenu2 && (
                    <ul className="ml-6 mt-2">
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Squats</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Fentes</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Soulevé de terre</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Fentes latérales</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Extensions de jambes</li>
                    </ul>
                  )}
                </li>

                <li className="mb-6 ml-6 hover:text-yellow-400 cursor-pointer duration-300" onClick={handleSubMenuToggle3}>
                  • Entrainement du dos
                  {showSubMenu3 && (
                    <ul className="ml-6 mt-2">
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Tractions</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Tirage horizontales</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Hyperextensions</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Deadlift</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Rowing avec haltères</li>
                    </ul>
                  )}
                </li>

                <li className="mb-6 ml-6 hover:text-yellow-400 cursor-pointer duration-300" onClick={handleSubMenuToggle4}>
                  • Entrainement du cardio
                  {showSubMenu4 && (
                    <ul className="ml-6 mt-2">
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Saut à la corde</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Burpees</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Circuit training</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Vélo</li>
                      <li className="text-white hover:text-yellow-400 cursor-pointer duration-300">Tapis de course</li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            {showDeveloppeCouche && <DeveloppeCouche />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Musculation;
