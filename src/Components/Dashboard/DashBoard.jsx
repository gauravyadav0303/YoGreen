import { company, calender } from "../../assets";
import ActivityCards from "../Cards/ActivityCards";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

function Dashboard() {
  return (
    <div className="w-full flex flex-col py-[2rem]  px-4 gap-[2rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Dashboard
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div className="flex flex-row gap-4">
        <img src={company} className="w-[5rem]" alt="" />
        <div>
          <h1 className="text-[18px] md:text-[25px] text-[#EE786C]">
            Hello, Jade & Co Real Estate
          </h1>
          <h2 className="text-[15px] md:text-[15px] text-[#BABEC6]">Company</h2>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4">
        <Cards />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="xl:w-[72%] flex flex-col gap-[2rem]">
          <div className="flex flex-col md:flex-row gap-4 ">
            <ActivityCards />
          </div>
          <div className="border-2  text-center p-2 text-[white] bg-[#EE786C] text-[20px] rounded-xl">
            <button>Wish to Meet</button>
          </div>
          <div className="">
            <Table />
          </div>
        </div>
        <div className="pb-4 md:pb-0 md:w-[27%] border-2 shadow-lg rounded-xl">
          <h1 className="p-4 text-[20px] font-semibold">Meetings</h1>
          <img src={calender} className="mx-auto " alt="" />
          <h2 className="text-center text-[15px] text-[#FF4F44]">
            Add your <br /> Google Calendar
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
