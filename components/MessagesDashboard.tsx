"use client";

import { getMessages, readMessage } from "@/services/messageService";
import { MessageProps } from "@/types";
import { useEffect, useState } from "react";
import MessageSkeleton from "./MessageSkeleton";
import Pagination from "./Pagination";
import MessageDialog from "./MessageDialog";

const MessagesDashboard = () => {
  const [messages, setMessages] = useState<Array<MessageProps>>([]);
  const [page, setPage] = useState(1);
  const [elementPerPage, setElementPerPage] = useState(8);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showDialog, setShowDialog] = useState(false);
  const [message, setMessage] = useState<MessageProps | undefined>(undefined);

  const getAllMessages = async () => {
    const allMessages = await getMessages(page, elementPerPage);

    setTotalElements(allMessages.totalMessages);

    setMessages(allMessages.messages);

    setIsLoading(false);
  };

  useEffect(() => {
    getAllMessages();
  }, [page]);

  useEffect(() => {
    const totalP = Math.ceil(totalElements / elementPerPage);
    setTotalPages(totalP);
  }, [totalElements]);

  return (
    <>
      {showDialog && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-30 max-h-full min-h-screen w-full">
          <MessageDialog message={message!} setShowDialog={setShowDialog} />
        </div>
      )}
      <div className="flex flex-col">
        <h2 className="text-4xl font-extrabold">
          Découvrez les messages de vos clients
        </h2>

        <div className="mt-10 overflow-scroll shadow-md">
          <div className=" bg-zinc-50 rounded-lg min-w-[800px] overflow-x-scroll">
            <div className="grid grid-cols-4 border-b bg-zinc-50 border-zinc-300 px-6 py-4">
              <div className="col-span-4 text-lg">Messages récents</div>
            </div>
            <div className="grid grid-cols-5 border-b bg-zinc-100 text-zinc-600 border-zinc-300 px-6 py-3">
              <div className="col-span-1">Nom Prenom</div>
              <div className="col-span-4">Content</div>
            </div>
            {isLoading ? (
              Array.from({ length: elementPerPage }, (_, i) => (
                <MessageSkeleton key={i} />
              ))
            ) : messages && messages.length > 0 ? (
              messages.map((m) => {
                const messageDateString = m.datePublication.toString();
                const messageDate = `${messageDateString.slice(
                  4,
                  6
                )}/${messageDateString.slice(2, 4)} ${messageDateString.slice(
                  6,
                  8
                )}:${messageDateString.slice(8)}`;
                return (
                  <div
                    key={m.id!}
                    onClick={() => {
                      if (!m || !m.id) return;
                      setMessage(m);
                      try {
                        if (m.read === 0) {
                          readMessage(m.id);
                          m.read = 1;
                        }
                      } catch {
                        return;
                      }
                      setShowDialog(true);
                    }}
                    className={`transition grid grid-cols-5 gap-4 px-6 py-2 cursor-pointer ${
                      m.read === 1 ? "bg-zinc-100 hover:bg-zinc-200" : "bg-zinc-50 hover:bg-zinc- 100"
                    } border-b border-b-zinc-200 text-zinc-600`}
                  >
                    <div
                      className={`col-span-1 text-md text-zinc-700 ${
                        !m.read && "font-semibold"
                      } text-nowrap overflow-hidden`}
                    >
                      {m.nom} {m.prenom}
                    </div>
                    <div className="col-span-3 overflow-hidden">
                      <span
                        className={`text-md text-zinc-700 ${
                          !m.read && "font-semibold"
                        } text-nowrap overflow-hidden`}
                      >
                        {m.object}
                      </span>
                      <span className="text-zinc-500 text-nowrap overflow-hidden">
                        {" - "}
                        {m.description}
                      </span>
                    </div>
                    <div className="flex flex-row justify-end col-span-1">
                      <span
                        className={`text-md text-zinc-700 ${
                          !m.read && "font-semibold"
                        }`}
                      >
                        {messageDate}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="transition grid grid-cols-4 px-6 py-4 border-b border-b-zinc-200 text-zinc-600">
                <div className="col-span-4 text-center">
                  Aucun message trouvé
                </div>
              </div>
            )}
            {page > 0 && totalPages > 0 && (
              <div className="flex flex-row justify-end col-span-4 px-6 py-3">
                <Pagination
                  page={page}
                  setPage={setPage}
                  totalPage={totalPages}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagesDashboard;
