import React, { useState } from "react";
import "../app.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const inputShadow = {
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    message: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: firstName === "",
      lastName: lastName === "",
      phone: phone === "",
      email: email === "",
      message: message === "",
    };

    setFieldErrors(newErrors);

    if (Object.values(newErrors).includes(true)) {
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setFieldErrors((prevErrors) => ({
        ...prevErrors,
        phone: true,
      }));
      return;
    }

    // Afficher les valeurs des champs dans la console
    console.log("Prénom:", firstName);
    console.log("Nom:", lastName);
    console.log("Téléphone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);

    // Réinitialiser les champs après la soumission du formulaire
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-28">
        <h2 className="text-white text-5xl tracking-widest font-semibold mb-10">
          FORMULAIRE DE CONTACT
        </h2>
        <form
          className="grid grid-cols-2 gap-10 text-white"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="firstName">Prénom *</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (e.target.value) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    firstName: false,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.firstName ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Nom *</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (e.target.value) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    lastName: false,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.lastName ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col">
  <label htmlFor="phone">Téléphone *</label>
  <input
    id="phone"
    type="tel"
    value={phone}
    onChange={(e) => {
      setPhone(e.target.value);
      if (e.target.value) {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          phone: false,
        }));
      }
    }}
    className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
      fieldErrors.phone ? "border-red-500 border-2" : ""
    }`}
    style={inputShadow}
  />
  {fieldErrors.phone && phone !== "" && (
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
      Le numéro de téléphone doit contenir 10 chiffres.
    </div>
  )}
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
              className={`p-3 rounded-xl w-72 h-14 text-[#47010E] text-xl font-semibold ${
                fieldErrors.email ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (e.target.value) {
                  setFieldErrors((prevErrors) => ({
                    ...prevErrors,
                    message: false,
                  }));
                }
              }}
              className={`p-3 rounded-xl w-full text-[#47010E] text-xl font-semibold ${
                fieldErrors.message ? "border-red-500 border-2" : ""
              }`}
              style={inputShadow}
            />
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

export default Contact;
