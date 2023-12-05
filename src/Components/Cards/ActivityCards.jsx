import { activity } from "../../assets";

function ActivityCards() {
  return (
    <>
      <div className="flex flex-row w-full md:w-[50%] shadow-xl rounded-xl border-2 p-4 gap-6">
        <img src={activity} alt="" />
        <div>
          <h1 className="text-[17px] xl:text-[25px] text-[black] font-bold">Conversations</h1>
          <h2 className="text-[15px] text-[rgb(238,120,108)] font-bold">(1 Month)</h2>
          <h1 className="text-black text-[20px] xl:text-[35px] font-bold">500</h1>
        </div>
      </div>
      <div className="flex flex-row w-full md:w-[50%] shadow-xl rounded-xl border-2 p-4 gap-6">
        <img src={activity} alt="" />
        <div>
          <h1 className="text-[17px] xl:text-[25px] text-[black] font-bold">
            Meeting Arrange
          </h1>
          <h2 className="text-[15px] text-[#EE786C] font-bold">(1 Month)</h2>
          <h1 className="text-black text-[20px] xl:text-[35px] font-bold">50</h1>
        </div>
      </div>
    </>
  );
}

export default ActivityCards;
