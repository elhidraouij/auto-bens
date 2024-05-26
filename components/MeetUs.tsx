import React from "react";

const MeetUs = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <h2 className="text-yellow-400 text-lg">RENCONTREZ NOUS</h2>
        <p className="italic text-4xl">NOTRE AGENCE</p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between justify-center gap-12 items-center md:items-start text-center">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-zinc-100 rounded-xl h-[100px] w-[100px] p-4">
            <svg
              aria-hidden="true"
              className=" fill-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-xl my-2 font-semibold text-zinc-900">
              Nos Informations:
            </h3>
            <p className="SczeiPsQKuBQsFlbqCbz osxEM2eQc4Pc_arzCZsv oTkHpmOXEgQRdykOe3sq K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
              AutoBens
              <br />
              Commerce de voitures
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-zinc-100 rounded-xl h-[100px] w-[100px] p-4">
            <svg
              aria-hidden="true"
              className="fill-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="KgBTWt39fdiAC__YVNt8">
            <h3 className="text-xl my-2 font-semibold text-zinc-900">
              Notre Adresse:
            </h3>
            <p className="SczeiPsQKuBQsFlbqCbz osxEM2eQc4Pc_arzCZsv oTkHpmOXEgQRdykOe3sq K1PPCJwslha8GUIvV_Cr eCx_6PNzncAD5yo7Qcic">
              Carcassonne, France
              <br />
              79 All. D'Iléna
              <br />
              Code postal: 11 000
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-zinc-100 rounded-xl h-[100px] w-[100px] p-4">
            <svg
              aria-hidden="true"
              className="fill-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl my-2 font-semibold text-zinc-900">
              Notre contact:
            </h3>
            <p>
              Pour nous contacter:
            </p>
            <span className="font-semibold underline hover:no-underline cursor-pointer transition">
              autobenspro@gmail.com
            </span>
            <span className="font-semibold underline hover:no-underline cursor-pointer transition">
              07 67 71 89 68
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetUs;
