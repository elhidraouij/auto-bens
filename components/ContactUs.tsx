"use client";

import { postMessage } from "@/services/messageService";
import { MouseEvent, useState } from "react";

const ContactUs = () => {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    setError("");
    setMessage("");

    const form = new FormData();

    let telephoneInput = telephone.replace(/\s+/g, "");
    let emailInput = email.replace(/\s+/g, "");

    if (
      !prenom ||
      !nom ||
      !telephoneInput ||
      !emailInput ||
      !subject ||
      !description
    ) {
      setError("Veuillez bien renseigner tous les champs.");
      return;
    }

    if (
      (telephoneInput[0] === "+" && telephoneInput.length != 12) ||
      (telephoneInput[0] === "0" && telephoneInput.length != 10)
    ) {
      setError("Veuillez entrer un numéro de téléphone valide.");
      return;
    }

    if (
      emailInput.length < 5 ||
      !emailInput.includes("@") ||
      !emailInput.includes(".")
    ) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    form.append("prenom", prenom);
    form.append("nom", nom);
    form.append("telephone", telephoneInput);
    form.append("email", emailInput);
    form.append("object", subject);
    form.append("description", description);

    try { 
      await postMessage(form);
    } catch (err) {
      console.error(err);
      if (typeof err === "string") {
        setError(err)
      } else if (err instanceof Error){
        setError(err.message)
      }
      return
    }

    setPrenom("");
    setNom("");
    setTelephone("");
    setEmail("");
    setSubject("");
    setDescription("");
    setMessage("Votre message a bien été reçu. Merci pour vos retours.");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <h2 className="text-yellow-400 text-lg">NOUS CONTACTER</h2>
        <p className="italic text-4xl">COMPLETEZ CE FORMULAIRE</p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <div className="col-span-1">
            <label
              htmlFor="prenom"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Prenom
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="Jean"
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="nom"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="Dupont"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="tel"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Téléphone
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="0606060606"
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
              }}
              required
            />
          </div>
          <div className="col-span-1">
            <label
              htmlFor="mail"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              E-mail
            </label>
            <input
              type="mail"
              name="mail"
              id="mail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="jeandupont@mail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Objet
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="Vente de voiture"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              required
            />
          </div>
          <div className="md:col-span-2 col-span-1">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Dis nous tout
            </label>
            <textarea
              name="description"
              id="description"
              rows={5}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
              placeholder="Message"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </div>
        </div>
        {message && message.length > 0 && (
          <div className="mt-6 bg-green-50 rounded-lg p-2.5 text-green-500 sm:text-sm border border-green-300">
            {message}
          </div>
        )}
        {error && error.length > 0 && (
          <div className="mt-6 bg-red-50 rounded-lg p-2.5 text-red-500 sm:text-sm border border-red-300">
            {error}
          </div>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-6 transition hover:bg-yellow-600 hover:border-600-yellow bg-yellow-500 border border-yellow-500 text-zinc-900 font-semibold rounded-md -skew-x-12 py-2 px-4"
        >
          Envoyer
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
