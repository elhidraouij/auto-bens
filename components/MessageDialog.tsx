import { MessageProps } from "@/types";
import React from "react";

interface MessageDialogProps {
  message: MessageProps;
  setShowDialog: (value: boolean) => void;
}
const MessageDialog = ({ message, setShowDialog }: MessageDialogProps) => {
  return (
    <div className="relative bg-white rounded-lg shadow  md:min-w-[700px] max-w-[800px]">
      <div className="flex flex-row gap-6 items-center justify-between p-4 md:p-5 border-b rounded-t ">
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 ">
            {message.object}
          </h3>
          <h3 className="text-sm text-gray-600 ">
            {message.nom} {message.prenom}
            {" <"}
            {message.email}
            {"> "}
            {message.telephone}
          </h3>
        </div>

        <button
          onClick={() => {
            setShowDialog(false);
          }}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Fermer le dialog</span>
        </button>
      </div>
      <div className="p-4 md:p-5">
        <p className="whitespace-pre-wrap text-wrap overflow-hidden">{message.description}</p>
      </div>
    </div>
  );
};

export default MessageDialog;
