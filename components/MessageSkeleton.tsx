import React from 'react'

const MessageSkeleton = () => {
  return (
    <div className="animate-[pulse_1s_ease-in-out_infinite] grid grid-cols-4 px-6 py-3 border-b border-b-zinc-200">
              <div className='w-[100px] h-[13px] bg-zinc-300 rounded-full'></div>
              <div className='w-[100px] h-[13px] bg-zinc-300 rounded-full'></div>
              <div className='w-[100px] h-[13px] bg-zinc-300 rounded-full'></div>
              <div className='w-[100px] h-[13px] bg-zinc-300 rounded-full'></div>
            </div>
  )
}

export default MessageSkeleton