import React from "react";
import Developper from "../../assets/images/musculation/developpe-couche.gif";

const DeveloppeCouche = () => {
  return (
    <div className="flex-col">
      <div className="">
        <p className="text-white">
          Le développé couché est un exercice polyvalent qui cible
          principalement les muscles pectoraux, les triceps et les épaules
          antérieures. Il contribue à renforcer la force et la masse musculaire
          du haut du corps, améliore la stabilité de l'épaule et favorise la
          coordination intermusculaire. De plus, il peut être adapté pour
          différents niveaux de fitness et constitue un exercice de base dans de
          nombreux programmes d'entraînement.
        </p>
      </div>
      <div>
        <img src={Developper} alt="Developpe-Couche" className="w-2/4 rounded-xl mt-4" />
      </div>
    </div>
  );
};

export default DeveloppeCouche;
