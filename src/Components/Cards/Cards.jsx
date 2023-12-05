function Cards() {
  return (
    <>
      <div className="flex flex-col w-full xl:w-[50%] shadow-xl rounded-xl border-2 p-4 gap-4">
        <h1 className="text-center font-bold text-[25px]">Leads</h1>
        <div className="flex flex-row mx-auto gap-2 md:gap-[6.5rem]">
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">Total Leads : 100%</h1>
              <h2 className="text-[15px] text-[#8E8E8E]">(Upload by Team)</h2>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">Active Leads : 30%</h1>
              <h2 className="text-[15px] text-[#8E8E8E]">
                (Replied to Conversation)
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row mx-auto gap-2 md:gap-[4rem]">
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">
                Hot Leads Today : 2.5%
              </h1>
              <h2 className="text-[15px] text-[#8E8E8E]">(Wish to Meetup)</h2>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">
                Not Interested : 2.5%
              </h1>
              <h2 className="text-[15px] text-[#8E8E8E]">(Not Interested)</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full xl:w-[50%] shadow-xl rounded-xl border-2 p-4 gap-4">
        <h1 className="text-center font-bold text-[25px] ">Property Listings</h1>
        <div className="flex flex-row mx-auto gap-2 md:gap-[6rem]">
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">Property Listings</h1>
              <h2 className="text-[15px] text-[#8E8E8E]">(Replied to Conversation)</h2>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">Total Property : 100%</h1>
              <h2 className="text-[15px] text-[#8E8E8E]">
              (Upload by Team)
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[4rem] mx-auto">
          <div className="flex flex-row gap-2">
            <div className="mt-2 w-[11.62px] h-[11.62px] bg-red-600 rounded-[26.81px]" />
            <div>
              <h1 className="font-semibold text-[17px] ">
              Hot Property : 40.5%
              </h1>
              <h2 className="text-[15px] text-[#8E8E8E]">(Wish to Meetup)</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
