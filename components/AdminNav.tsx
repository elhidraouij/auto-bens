"use client";

import Image from "next/image";
import Link from "next/link";

const AdminNav = () => {
  return (
    <div className="lg:flex flex-col min-w-[250px] py-8 px-6 justify-between bg-zinc-800 text-zinc-200 h-screen sticky left-0 top-0 hidden">
      <div className="flex flex-col gap-20">
        <h1 className="text-xl font-bold">Dashboard</h1>

        <div className="flex flex-col text-md font-semibold gap-4">
          <span>Voitures</span>
          <nav className="flex flex-col gap-2 text-md font-normal">
            <Link href="/admin/dashboard/">
              <span className="py-2 px-4 rounded-md hover:bg-zinc-700">
                Toutes les voitures
              </span>
            </Link>
            <Link href="/admin/dashboard/all-cars">
              <span className="py-2 px-4 rounded-md hover:bg-zinc-700">
                Voitures à vendre
              </span>
            </Link>
            <Link href="/admin/dashboard/hidden-cars">
              <span className="py-2 px-4 rounded-md hover:bg-zinc-700">
                Voitures désactivées
              </span>
            </Link>
            <Link href="/admin/dashboard/solded-cars">
              <span className="py-2 px-4 rounded-md hover:bg-zinc-700">
                Voitures vendues
              </span>
            </Link>
          </nav>
        </div>

        <div className="flex flex-col text-md font-semibold gap-4">
          <span>Messages</span>
          <nav className="flex flex-col gap-2 text-md font-normal">
            <Link href="/admin/dashboard/messages">
              <span className="py-2 px-4 rounded-md hover:bg-zinc-700">
                Vos messages
              </span>
            </Link>
          </nav>
        </div>
      </div>

      

      <div className="flex flex-row gap-4 items-center pt-4 border-t border-t-zinc-600">
        <Image
          src={"/images/auto-bens-logo.png"}
          alt="logo"
          width={50}
          height={50}
        />{" "}
        <span>AutoBens 2022</span>
      </div>
    </div>
  );
};

export default AdminNav;
