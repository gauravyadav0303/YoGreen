function PropertyTable() {
  const data = [
    {
      date: "11/30/23",
      duration: "1/30/23 To 30/11/23",
      conversation: "500",
      cost: "11/30/2023",
      stat: "Paid",
    },
    {
      date: "11/30/23",
      duration: "1/30/23 To 30/11/23",
      conversation: "400",
      cost: "11/30/2023",
      stat: "Pending",
    },
    {
      date: "11/30/23",
      duration: "1/30/23 To 30/11/23",
      conversation: "1500",
      cost: "11/30/2023",
      stat: "Pending",
    },
    {
      date: "11/30/23y",
      duration: "1/30/23 To 30/11/23",
      conversation: "200",
      cost: "11/30/2023",
      stat: "Paid",
    },
    {
      date: "11/30/23o",
      duration: "1/30/23 To 30/11/23",
      conversation: "3000",
      cost: "11/30/2023",
      stat: "Pending",
    },
  ];

  const makeStyle = (status) => {
    if (status === "Paid") {
      return {
        background: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Pending") {
      return {
        background: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        background: "#59bfff",
        color: "white",
      };
    }
  };

  return (
    <div className="w-full overflow-auto">
      <table className="border-2 rounded-xl overflow-hidden md:w-full">
        <tr className="bg-[#E0E0E0] text-[15px] text-center">
          <th className=" p-4">Id</th>
          <th className=" p-4">Name of Property</th>
          <th className="p-4">Id</th>
          <th className="p-4">Location</th>
          <th className="p-4">Id</th>
          <th className="p-4">Images</th>
          <th className="p-4">Id</th>
          <th className="p-4">Address</th>
          <th className="p-4">Id</th>
          <th className="p-4">City</th>
          <th className="p-4">Id</th>
          <th className="p-4">State</th>
          <th className="p-4">Id</th>
          <th className="p-4">Country</th>
          <th className="p-4">Id</th>
          <th className="p-4">Bedroom</th>
          <th className="p-4">Id</th>
          <th className="p-4">Area/Size</th>
          <th className="p-4">Id</th>
          <th className="p-4">Floor</th>
          <th className="p-4">Id</th>
          <th className="p-4">AskingPrize</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr className="border-2 bg-[#FBFBFB] text-center" key={key}>
              <td className="font-bold p-4">{key + 1}</td>
              <td className="p-4">{val.date}</td>
              <td className="p-4">{val.duration}</td>
              <td className="p-4">{val.conversation}</td>
              <td className="p-4">{val.cost}</td>
              <td className="p-4">
                <span className="p-2 border-2" style={makeStyle(val.stat)}>
                  {val.stat}
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default PropertyTable;
