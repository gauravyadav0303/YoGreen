import { Link } from "react-router-dom";
import { card1, mastercard_logo } from "../../assets";
import InvoiceTable from "../Table/InvoiceTable";

function Payment() {
  return (
    <div className="w-full flex flex-col py-[2rem]  px-4 gap-[2rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Payment
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="bg-[black] text-[white] w-full h-[170px]  md:w-[350px] md:h-auto p-4 relative rounded-xl">
          <h1 className="absolute">Credit Card</h1>
          <div className="absolute top-[45%]">1234 &nbsp; &nbsp; 5678 &nbsp; &nbsp; 9103 &nbsp; &nbsp; 8474</div>
          <h2 className="absolute bottom-[20px] left-[15px]">Jack Lewis</h2>
          <h2 className="absolute bottom-[20px] right-[15px]">06/21</h2>
          <img src={mastercard_logo} className="absolute right-[15px]" alt="" />
        </div>
        <Link to="/new-card"><img  src={card1} alt="" /></Link>
      </div>
      <div><h1 className="text-[15px] md:text-[20px] lg:text-[30px]">Payment Overview</h1></div>
      <InvoiceTable/>
    </div>
  );
}

export default Payment;
