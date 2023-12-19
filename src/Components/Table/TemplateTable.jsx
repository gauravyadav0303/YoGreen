function TemplateTable() {
    const data = [
        { name: "1 Template", status:"APPROVED", reason:"NONE", edit: "edit" },
        { name: "2 Template", status: "APPROVED", reason:"NONE", edit: "edit" },
        { name: "3 Template", status: "APPROVED", reason:"NONE", edit: "Jedit" },
        { name: "4 Template", status: "APPROVED", reason:"NONE", edit: "edit" },
        { name: "5 Template", status: "APPROVED", reason:"NONE", edit: "Maredit" },
        { name: "6 Template", status: "APPROVED", reason:"NONE", edit: "Maredit" },
    ]
     
    return ( <>
    
    <table className="border-2 rounded-xl w-full">
                <tr className="text-[15px] text-center text-[#FF4F44]">
                    <th className=" p-2">Template Name</th>
                    <th className="border-2 p-2">Status</th>
                    <th className="border-2 p-2">Rejected Reason</th>
                    <th className="border-2 p-2">Edit</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr className="text-center" key={key}>
                            <td className="border-2 p-2">{val.name}</td>
                            <td className="border-2 p-2">{val.status}</td>
                            <td className="border-2 p-2">{val.reason}</td>
                            <td className="border-2 p-2">{val.edit}</td>
                        </tr>
                    )
                })}
            </table>

    </> );
}

export default TemplateTable;