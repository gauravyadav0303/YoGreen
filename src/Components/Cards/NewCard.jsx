function NewCard() {
  return (
    <div className="w-full flex flex-col py-[2rem]  px-4 gap-[6rem]">
      <div className="flex flex-col md:flex-row justify-between">
        <h1 className="text-black xl:text-[35px] font-semibold uppercase">
          Payment
        </h1>
        <div className="hidden">Search</div>
      </div>
      <div className="mx-auto w-full md:w-[470px] flex flex-col gap-[1rem]">
        <h1 className="text-[20px] font-bold">Payment</h1>
        <div className="border-2"></div>
        <div className="flex flex-col gap-[1.5rem]">
        <h1 className="font-bold">Card Number</h1>
        <input
          className="border-2 p-2 rounded-lg w-full"
          type="text"
          placeholder="1234 5678 9876 3456"
        />
        <div className="flex flex-row gap-4 w-full">
          <div className="w-[50%]">
            <h1 className="font-bold mb-[1rem]">Expiration Date</h1>
            <input
              className="border-2 p-2 rounded-lg w-full"
              type="text"
              placeholder="10/23"
            />
          </div>
          <div className="w-[50%]">
            <h1 className="font-bold mb-[1rem]">CVV</h1>
            <input
              className="border-2 p-2 rounded-lg w-full"
              type="text"
              placeholder="123"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4">
        <input type="checkbox" id="card1" name="card1" value="CardDetails"/>
  <label className="" for="card1">Save card details</label>
        </div>
        {/* <input type="checkbox" name="save" id="save" /> <label htmlFor="save">Save card details </label> */}
        <div className="border-2  text-center p-2 text-[white] bg-gradient-to-r from-red-400 to-red-300 text-[15px] md:text-[20px] rounded-lg">
            <button>Add Payment Gateway</button>
          </div>
          <p className="text-[12px] md:text-[15px] text-[#ACACAC]">
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
          </p>
      </div>
      </div>
    </div>
  );
}

export default NewCard;
