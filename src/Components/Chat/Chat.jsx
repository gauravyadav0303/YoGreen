

function Chat() {
  return (
    <div className="w-full flex flex-col py-[2rem]  px-4 gap-[2rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Chat
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div className="bg-[#EBEBEB] w-full border-2 rounded-xl text-center p-2">
        <span className="text-[20px] font-bold">Whatsapp</span>
      </div>
    </div>
  );
}

export default Chat;
