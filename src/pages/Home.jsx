import React from "react";
import { Link } from "react-router-dom";
import Couple from "../assets/images/home/couple.png";
import { useSpring, animated } from "@react-spring/web";


const Home = () => {
  const imageAnimation = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { duration: 1000 },
    delay: 2000
  });

  
  return (
    <>
      <div className="relative mt-5 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-20 ml-4 sm:ml-8 md:ml-16 lg:ml-24 xl:ml-28">
        <div className="flex-col z-10">
          <h2 className=" annonce text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-bold">
            BOOSTEZ VOS PERFORMANCES
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mt-6 font-bold">
            AVEC ULTIMATE-FIT.
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg text-white font-light mt-6">
            Atteignez de nouveaux sommets grâce à des entraînements
            personnalisés
            <br />
            et un suivi avancé de vos progrès.
          </p>
        </div>
        <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-12 space-x-4 sm:space-x-5 md:space-x-6 lg:space-x-8 xl:space-x-8 z-10">
          <Link
            to="/register"
            className="bg-[#7E0000] hover:bg-yellow-600 duration-200 rounded-xl w-32 sm:w-40 md:w-48 lg:w-50 xl:w-50 p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-white font-semibold"
          >
            Rejoignez-nous
          </Link>
          <Link
            to="/contact"
            className="bg-[#7E0000] hover:bg-yellow-600 duration-200 rounded-xl w-32 sm:w-40 md:w-48 lg:w-50 xl:w-50 p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-white font-semibold"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
      <animated.img
    src={Couple}
    className="
    hidden
    absolute
    md:block
    top-10
    sm:top-16
    md:top-24
    lg:top-32
    xl:top-36
    right-4
    sm:right-8
    md:right-12
    lg:right-20
    xl:right-36
    sm:w-4/12
    md:w-3/12
    lg:w-3/12
    xl:w-3/12
    h-auto"
    alt=""
    style={imageAnimation}
/>
    </>
  );
};

export default Home;
