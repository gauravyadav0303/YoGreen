import { logo2,dashboard,chat,invoice,payment,lead,search,logo_mobile } from "../../assets";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Sidebar() {
    // useEffect(() => {

    //     gsap.to(".trigger", {
    //         scrollTrigger: {
    //           trigger: ".sidebar",
    //           pin: true,
    //           start: "top top",
    //           end: +100,
    //           scrub: 1,
    //         },
    //       });

    // },[]);
    return ( 


<div className="sidebar w-[15%] lg:w-[25%] h-[100vh] bg-[#3D3D3D] flex flex-col gap-[4rem] fixed">

    <div className="flex flex-col mx-auto mt-[2rem] gap-[0.5rem]">
        <img className="lg:hidden mx-auto w-[3rem]" src={logo_mobile} alt="Logo_mobile" />
        <img className="hidden lg:inline-block mx-auto lg:w-[10rem] xl:w-full" src={logo2} alt="Logo" />
        <div className="border-2"></div>
        <h3 className="text-white text-[10px] text-center font-semibold hidden lg:inline-block">Chat Smart, Sell Homes - Your Friendly Robot Helper!</h3>
    </div>
    <div className="">
        <ul className="text-white lg:text-[15px] xl:text-[20px] font-semibold flex flex-col gap-[2rem]">
            <li className="rounded-xl bg-[#FF4F44] "><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href=""><img src={dashboard} alt="" /><span title="Dashboard" className="hidden lg:inline-block">DashBoard</span></a></li>
            <li><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href=""><img src={chat} alt="" /><span className="hidden lg:inline-block">Chat</span></a></li>
            <li><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href=""><img src={invoice} alt="" /><span className="hidden lg:inline-block">Invoice</span></a></li>
            <li><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href=""><img src={payment} alt="" /><span className="hidden lg:inline-block">Payment</span></a></li>
            <li><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href=""><img src={lead} alt="" /><span className="hidden lg:inline-block">Leads</span></a></li>
            <li><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href=""><img src={search} alt="" /><span className="hidden lg:inline-block">Property Listing</span></a></li>
        </ul>
    </div>
</div>
);
}

export default Sidebar;