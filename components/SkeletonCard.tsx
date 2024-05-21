
const SkeletonCard = () => {
  return (
    <div className="p-8 rounded-md min-h-[350px] min-w-[400px] bg-zinc-50">
      <div className="flex flex-row justify-between relative">
        <h2 className="w-2/5 rounded-full bg-zinc-200 h-4 animate-[pulse_1s_ease-in-out_infinite]"></h2>
      </div>
      <p className="rounded-full bg-zinc-200 w-1/4 mt-4 h-6 animate-[pulse_1s_ease-in-out_infinite]"></p>
      <p className="rounded-full bg-zinc-200 w-1/3 mt-2 h-4 animate-[pulse_1s_ease-in-out_infinite]"></p>
      <p className="w-full h-32 rounded-xl mt-4 bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
      <div className="flex flex-row mt-2 gap-8 w-full justify-between">
        <div className="flex flex-col items-center gap-2 w-1/3">
          <p className="w-1/3 h-8 rounded-lg bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
          <p className="w-2/3 h-4 rounded-full bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
        </div>
        <div className="flex flex-col items-center gap-2 w-1/3">
          <p className="w-1/3 h-8 rounded-lg bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
          <p className="w-2/3 h-4 rounded-full bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
        </div>
        <div className="flex flex-col items-center gap-2 w-1/3">
          <p className="w-1/3 h-8 rounded-lg bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
          <p className="w-2/3 h-4 rounded-full bg-zinc-200 animate-[pulse_1s_ease-in-out_infinite]"></p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
