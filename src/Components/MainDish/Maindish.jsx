import React, { useState } from 'react';
import NewCard from "../Cards/NewCard";
import Chat from "../Chat/Chat";
import Dashboard from "../Dashboard/Dashboard";
import Invoice from "../Invoice/Invoice";
import Lead from "../Lead/Lead";
import LeadTwo from "../Lead/LeadTwo";
import Payment from "../Payment/Payment";
import PropertyListing from "../PropertyListing/PropertyListing";

function Maindish({selectedComponent}) {
  
    const renderComponent = () => {
      switch (selectedComponent) {
        case 'dashboard':
          return <Dashboard />;
        case 'chat':
          return <Chat />;
        case 'invoice':
          return <Invoice />;
        case 'lead':
          return <Lead />;
        case 'leadTwo':
          return <LeadTwo />;
        case 'payment':
          return <Payment />;
        case 'propertylisting':
          return <PropertyListing />;
        default:
          return null;
      }
    };
  
    return (
      <div className="absolute left-[15%] w-[90vw] md:w-[90vw] lg:w-[80vw] md:left-[10%] lg:left-[20%]">
        {renderComponent()}
      </div>
    );
  }
  
  export default Maindish;