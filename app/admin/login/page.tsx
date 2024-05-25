"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

import { logIn } from "@/services/loginService";

export default function AdminLogin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!login || login.length < 1 || !password || password.length < 1) {
      setError('Veuillez entrer des identifiants valides')
      return
    }

    let response = null;
    try {
      response = await logIn(login, password)

      localStorage.setItem('token', response.token)
      localStorage.setItem('username', response.username)
      localStorage.setItem('userid', response.userid)
      
      window.location.href = '/admin/dashboard'
    } catch (err: Error | string | unknown) {
      console.error(err);
      if (typeof err === "string") {
        setError(err)
      } else if (err instanceof Error){
        setError(err.message)
      }
    }
  }

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
          <Image width={100} height={100} src="/images/auto-bens-logo.png" alt="logo" />
        </div>
        <div className="w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0   mb-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Connectez-vous à votre compte
            </h1>
            {error && error.length > 0 &&
            <div className="bg-red-50 rounded-lg p-2.5 text-red-500 sm:text-sm">
              {error}
              </div>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="login"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Identifiant
                </label>
                <input
                  type="login"
                  name="login"
                  id="login"
                  value={login}
                  onChange={(event) => {setLogin(event.target.value);}}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="User1234"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(event) => {setPassword(event.target.value);}}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-primary-600 block w-full p-2.5 "
                />
              </div>
              <button
                type="submit"
                className="transition w-full text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Se connecter
              </button>

              <p className="text-sm font-light text-gray-500 ">
                <Link
                  href="/shop"
                  className="font-medium hover:underline"
                >
                  Retourner à la boutique
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
