"use client";

import { SlideButtonProps } from "@/types";
import Image from "next/image";

const SlideButton = ({ title, styles, handleClick }: SlideButtonProps) => {
  return (
    <button
      disabled={false}
      className={`transition-all ease-in-out slide-btn py-2 px-4 -skew-x-12 border rounded-sm text-lg ${styles}`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default SlideButton;
