import React from "react";
import TapisIncliner from "../../assets/images/fitness/tapis-de-course.png";

const TapisCourseIncliner = () => {
  return (
    <div className="flex-col">
      <div className="">
        <p className="text-white">
        Le tapis de course incliné est un équipement d'entraînement polyvalent qui offre de nombreux avantages pour la condition physique. 
        Il est principalement utilisé pour améliorer l'endurance cardiorespiratoire, brûler des calories et renforcer les muscles inférieurs du corps, 
        notamment les muscles des jambes, des fessiers et des mollets.
        </p>
      </div>
      <div>
        <img src={TapisIncliner} alt="Developpe-Couche" className="w-2/4 rounded-xl mt-4" />
      </div>
    </div>
  );
};

export default TapisCourseIncliner;
