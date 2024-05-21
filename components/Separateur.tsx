import React from "react";

interface SeparateurProps {
  title: String;
}

const Separateur = ({ title }: SeparateurProps) => {
  return (
    <div className="relative flex flex-row justify-start w-full">
        <div className="absolute top-0 left-0 min-h-full bg-slate-50 w-2/5 -skew-x-12"></div>
      <div className="z-10 relative top-0 r-0 text-yellow-500 opacity-40 text-[220px] leading-none font-bold italic">
        {title}
      </div>
    </div>
  );
};

export default Separateur;
