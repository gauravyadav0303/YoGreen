function PropertyListing() {
    return ( 
        <div className="w-full flex flex-col py-[2rem] px-4 gap-[10rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Property Listing
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div className=" w-full text-center p-2">
        <span className="text-[18px] md:text-[25px] font-bold">
          Connecting Your Google Account for <br /> Seamless Integration
        </span>
        <div className="mt-4">
        <button className="p-2 mx-auto max-w-[200px] text-[15px] border-2 text-[#80868B]">
        Connect Google Sheet
      </button>
      </div>
      </div>      
    </div>
     );
}

export default PropertyListing;