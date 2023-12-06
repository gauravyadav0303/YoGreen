import InvoiceTable from "../Table/InvoiceTable";

function Invoice() {
  return (
    <div className="w-full flex flex-col py-[2rem]  px-4 gap-[2rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Invoice
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div><h1 className="text-[15px] md:text-[20px] lg:text-[30px]">Payment Overview</h1></div>
      <InvoiceTable/>
    </div>
  );
}

export default Invoice;
