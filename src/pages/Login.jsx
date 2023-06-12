import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const inputShadow = {
    boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  };

  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    pseudo: false,
    password: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (pseudo === "" || password === "") {
      setFieldErrors({
        pseudo: pseudo === "",
        password: password === "",
      });
      return;
    }

    setFieldErrors({
      pseudo: false,
      password: false,
    });

    const newErrors = {
      pseudo: pseudo === "",
      password: password === "",
    };

    setFieldErrors(newErrors);
  };

  // Affiche les valeurs des champs dans la console
  console.log("Pseudo:", pseudo);
  console.log("Password:", password);

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="text-white text-5xl tracking-widest font-semibold mb-10">
          CONNECTEZ-VOUS
        </h2>
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col mb-4">
            <label htmlFor="pseudo" className="text-white">
              Pseudo
            </label>
            <input
              id="pseudo"
              type="text"
              value={pseudo}
              onChange={(e) => {
                setPseudo(e.target.value);
                if (formSubmitted && e.target.value === "") {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    pseudo: true,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.pseudo ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-white">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (formSubmitted && e.target.value === "") {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    password: true,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.password ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div style={{ position: "relative" }}>
            <div className="flex flex-col mt-10 text-white">
              <Link
                to="#"
                onClick={handleSubmit}
                className={`w-72 h-14 text-2xl rounded-xl bg-green-800 hover:bg-green-600 duration-200 flex items-center justify-center`}
              >
                Valider
              </Link>
            </div>
            {Object.values(fieldErrors).includes(true) && (
              <div
              style={{
                color: "red",
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
              }}
              className="text-xs"
              >
                Veuillez remplir tous les champs obligatoires.
              </div>
            )}
          </div>
            <Link
            to="/register"
            className="text-xs text-white font-light tracking-wide flex justify-end  mt-2 underline ">Pas encore incsrit ? Cliquez-ici</Link>
        </form>

      </div>
    </>
  );
};

export default Login;
