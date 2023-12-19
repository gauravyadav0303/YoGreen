import React,{useState} from 'react';
import { logo2, dashboard, chat, invoice, payment, lead, search, logo_mobile } from '../../assets';

function Sidebar({ onSelectComponent }) {
    const [activeComponent, setActiveComponent] = useState('dashboard');


  const handleComponentClick = (component) => {
    event.preventDefault();
    setActiveComponent(component);
    onSelectComponent(component);
    
  };

  const getListItemClassName = (component) => {
    return component === activeComponent ? 'rounded-xl bg-[#FF4F44] active' : '';
  };
    return ( 


<div className="sidebar w-[15vw] md:w-[10vw] lg:w-[20vw] h-[106vh] bg-[#3D3D3D] flex flex-col gap-[4rem] fixed">

    <div className="flex flex-col mx-auto mt-[2rem] gap-[0.5rem]">
        <img className="lg:hidden mx-auto w-[3rem]" src={logo_mobile} alt="Logo_mobile" />
        <img className="hidden lg:inline-block mx-auto lg:w-[10rem] xl:w-full" src={logo2} alt="Logo" />
        <div className="border-2"></div>
        <h3 className="text-white text-[10px] text-center font-semibold hidden lg:inline-block">Chat Smart, Sell Homes - Your Friendly Robot Helper!</h3>
    </div>
    <div className="">
        <ul className="text-white lg:text-[15px] xl:text-[20px] font-semibold flex flex-col gap-[2rem]">
            <li onClick={() => handleComponentClick('dashboard')} className={getListItemClassName('dashboard')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={dashboard} alt="" /><span title="Dashboard" className="hidden lg:inline-block">DashBoard</span></a></li>
            <li onClick={() => handleComponentClick('chat')} className={getListItemClassName('chat')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={chat} alt="" /><span className="hidden lg:inline-block">Chat</span></a></li>
            <li onClick={() => handleComponentClick('invoice')} className={getListItemClassName('invoice')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={invoice} alt="" /><span className="hidden lg:inline-block">Invoice</span></a></li>
            <li onClick={() => handleComponentClick('lead')} className={getListItemClassName('lead')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={payment} alt="" /><span className="hidden lg:inline-block">Payment</span></a></li>
            <li onClick={() => handleComponentClick('payment')} className={getListItemClassName('payment')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={lead} alt="" /><span className="hidden lg:inline-block">Leads</span></a></li>
            <li onClick={() => handleComponentClick('propertylisting')} className={getListItemClassName('propertylisting')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={search} alt="" /><span className="hidden lg:inline-block">Property Listing</span></a></li>
            <li onClick={() => handleComponentClick('template')} className={getListItemClassName('template')}><a className="flex flex-row lg:gap-x-[2rem] xl:gap-x-[3rem] p-4" href="#"><img src={search} alt="" /><span className="hidden lg:inline-block">Template</span></a></li>
        </ul>
    </div>
</div>
);
}

export default Sidebar;