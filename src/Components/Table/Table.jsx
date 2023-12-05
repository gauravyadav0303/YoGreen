function Table() {
    const data = [
        { name: "Om Prakash sao", number:"+96 234 45 45455", dates: "May 25, 2023" },
        { name: "Neilsan mando", number: "+45 346 86 67565", dates: "Jun 20, 2023" },
        { name: "Tiruvelly priya", number: "+92 789 41 55661", dates: "July 13, 2023" },
        { name: "Matte hannery", number: "+63 411 85 96748", dates: "Dec 20, 2023" },
        { name: "Sukumar rao", number: "+45 346 86 67565", dates: "Mar 15, 2024" },
        { name: "Sukumar rao", number: "+45 346 86 67565", dates: "Mar 15, 2024" },
    ]
     
    return ( <>
    
    <table className="border-2 rounded-xl w-full">
                <tr className="text-[15px] text-center text-[#FF4F44]">
                    <th className=" p-2">No.</th>
                    <th className="border-2 p-2">Name</th>
                    <th className="border-2 p-2">Phone Number</th>
                    <th className="border-2 p-2">Dates</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr className="text-center" key={key}>
                            <td className="border-2 font-bold p-2">{key+1}</td>
                            <td className="border-2 p-2">{val.name}</td>
                            <td className="border-2 p-2">{val.number}</td>
                            <td className="border-2 p-2">{val.dates}</td>
                        </tr>
                    )
                })}
            </table>

    </> );
}

export default Table;