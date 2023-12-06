function PropertyListingTwo() {
    return (
      <div className="h-[100vh]">
        <div className="flex flex-col md:flex-row justify-between p-4">
          <h1 className="text-black xl:text-[35px] font-semibold uppercase">
            Leads
          </h1>
          <div className="hidden">Search</div>
        </div>
        <div className="h-[500px] w-[800px] mx-auto my-auto border-2 rounded-lg px-8 py-8">
          <h1 className="text-black text-[25px] font-bold">
            Create a new Overdrive site
          </h1>
          <p className="text-[#6F7482] text-[15px] mt-[3rem]">
            Ready to create your new Overdrive site? Choose a Drive folder or
            enter your site
          </p>
        
          <h1 className="text-[#6F7482] text-[15px] mb-[2rem]">Name:</h1>
          <form className="mx-auto w-[70%] flex flex-col gap-8">
            <div className="flex flex-row justify-between">
              <label className="text-[#6F7482] text-[15px] text-center p-2">
                Drive Site Folder:
              </label>{" "}
              <input
                type="text"
                className="p-2 border-2 w-[70%]"
                placeholder="File Name"
              />
                
            </div>
            <p className="text-right">(If left blank a new folder will be created automatically)</p>
            <div className="flex flex-row justify-between">
              <label className="text-[#6F7482] text-[15px] text-center p-2">
                Site Name:
              </label>{" "}
              <input
                type="text"
                className="p-2 border-2 w-[80%]"
                placeholder="File Name"
              />
            </div>
            <div className="border-2 max-w-[250px] mx-auto text-center p-2 text-[white] bg-[#ED3226] text-[20px] rounded-xl">
              <button>Next{">"}{">"}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default PropertyListingTwo;
  