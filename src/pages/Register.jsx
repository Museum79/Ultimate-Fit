import React, { useState } from "react";
import "../app.css";
import { Link } from "react-router-dom";

const Register = () => {
  const inputShadow = {
    boxShadow: " 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  };

  const [pseudo, setPseudo] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    pseudo: false,
    dob:    false,
    email:  false,
  });
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newErrors = {
      pseudo: pseudo === "",
      dob: dob === "",
      email: email === "",
    };
  
    setFieldErrors(newErrors);
  
    if (Object.values(newErrors).includes(true)) {
      return;
    }
  
    if (!isValidPassword(password)) {
      setPasswordError(
        "Mot de passe invalide. Le mot de passe doit contenir au moins 8 caractères, un chiffre, une lettre majuscule, une lettre minuscule et un caractère spécial."
      );
      return;
    }
  
    setPasswordError("");

    // Affiche les valeurs des champs dans la console
    console.log("Pseudo:", pseudo);
    console.log("Date de naissance:", dob);
    console.log("Email:", email);
    console.log("Password:", password);

    // Réinitialisation des champs après la soumission du formulaire
    setPseudo("");
    setDob("");
    setEmail("");
    setPassword("");
  };

  const isValidPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    return passwordRegex.test(password);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="text-white text-5xl tracking-widest font-semibold mb-10">
          INSCRIPTION
        </h2>
        <form
          className="grid grid-cols-2 gap-10 text-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="pseudo">Pseudo *</label>
            <input
              id="pseudo"
              type="text"
              value={pseudo}
              onChange={(e) => {
                setPseudo(e.target.value);
                if (e.target.value) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    pseudo: false,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.pseudo ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob">Date de naissance *</label>
            <input
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                if (e.target.value) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    dob: false,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.dob ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    email: false,
                  }));
                }
              }}
              className={`p-3 w-72 h-14 rounded-xl text-[#47010E] text-xl font-semibold ${
                fieldErrors.email ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col relative">
            <label htmlFor="password">Password *</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              className={`p-3 w-72 h-14 rounded-xl text-[#47010E] text-xl font-semibold ${
                passwordError ? "border-red-500 border-2" : ""
              }`}
              style={
                passwordError
                  ? { ...inputShadow, borderColor: "red", borderWidth: 2 }
                  : inputShadow
              }
            />
            {passwordError && (
              <div
                style={{
                  color: "red",
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                }}
                className="text-xs text-justify"
              >
                {passwordError}
              </div>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <div className="mt-4 text-center">
              <button
                type="submit"
                className="w-72 h-14 text-2xl rounded-xl bg-green-800 hover:bg-green-600 duration-200 flex items-center justify-center"
              >
                Valider
              </button>
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

          <div style={{ position: "relative" }}>
            <div className="mt-4 text-center">
              <Link
                to="/home"
                type="submit"
                className="w-72 h-14 text-2xl rounded-xl bg-gray-500 hover:bg-gray-400 duration-200 flex items-center justify-center"
                >
                Retour
              </Link>
            </div>
          </div>


        </form>
      </div>
    </>
  );
};

export default Register;
