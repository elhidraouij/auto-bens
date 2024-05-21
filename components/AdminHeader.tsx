"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { logOut } from "@/services/loginService";

const AdminHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('')

  const handleLogOut = async () => {
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('userid')

    await logOut()

    window.location.href = '/admin/login'
  }

  useEffect(() => {
    setUsername(localStorage.getItem('username')!)
  }, [])

  return (
    <header className="bg-zinc-050 top-0 z-50 w-full">
      <nav className="flex flex-row justify-between items-center px-6 py-3 relative">
        <Link href="/">
          <span className="text-zinc-700 text-xl font-bold">
            Dashboard d'administration
          </span>
        </Link>
        <div className="hover:bg-zinc-100 rounded-full px-4 py-2 flex flex-row items-center gap-3 cursor-pointer" onClick={() => setShowModal(!showModal)}>
          <div className="flex flex-col justify-center items-end">
            <span className="text-zinc-700 text-md font-semibold">
              {username}
            </span>
            <span className="text-zinc-500 text-xs">Admin </span>
          </div>
          <Image
            className="rounded-full bg-zinc-200 p-1.5"
            src="/images/auto-bens-logo.png"
            alt="logo"
            width={55}
            height={55}
          />
          <span className="text-zinc-500 font-semibold text-sm">v</span>
        </div>
        {showModal && <div className={"rounded-b-lg bg-white shadow-sm absolute right-0 top-[88px] cursor-pointer"}>
          <Link href="/shop"><div className="hover:bg-zinc-100 w-full px-4 py-2 text-center text-md text-zinc-700">
            Retourner à la boutique
          </div>
          </Link>
          <hr/>
          <div className="hover:bg-zinc-100 w-full px-4 py-2 text-center text-md text-zinc-700" onClick={() => {handleLogOut()}}>
            Se déconnecter
          </div>
        </div>}
      </nav>
    </header>
  );
};

export default AdminHeader;
