import React, { useState } from "react";
import CustomEvent from "../../customEvent/CustomEvent";
import DashSideBar from "../DashSidebar/DashSideBar";
import DashTransaction from "../DashTransaction/DashTransaction";
import DashFooter from "../DashFooter/DashFooter";
import DashEventList from "../DashEventList/DashEventList";

const WinngooGalaDashboard = () => {
  const [activeSection, setActiveSection] = useState("");
  const [username, setUsername] = useState("");

  const dummyEvents = [
    {
      name: "Virtual Gala Night",
      date: "2023-06-15",
      description:
        "Join us for a night of virtual celebration and entertainment!",
    },
    {
      name: "Online Auction",
      date: "2023-07-01",
      description: "Bid on exclusive items and support our cause.",
    },
    {
      name: "Virtual Concert",
      date: "2023-07-15",
      description:
        "Enjoy live music from top artists in the comfort of your home.",
    },
  ];

  const dummyTransactions = [
    {
      date: "2023-05-01",
      event: "Virtual Gala Night",
      amount: 50,
      status: "Completed",
    },
    {
      date: "2023-05-15",
      event: "Online Auction",
      amount: 100,
      status: "Pending",
    },
    {
      date: "2023-06-01",
      event: "Virtual Concert",
      amount: 75,
      status: "Completed",
    },
  ];

  return (
    <div className="flex flex-col max-h-full bg-gray-100">
      <div className="flex flex-1 flex-col lg:flex-row">
        <DashSideBar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className="flex-1 p-8 overflow-auto">
          {activeSection === "eventList" && (
            <DashEventList events={dummyEvents} type="All" />
          )}
          {activeSection === "pastEvents" && (
            <DashEventList
              events={dummyEvents.filter((e) => new Date(e.date) < new Date())}
              type="Past"
            />
          )}
          {activeSection === "presentEvents" && (
            <DashEventList
              events={dummyEvents.filter((e) => new Date(e.date) >= new Date())}
              type="Present"
            />
          )}
          {activeSection === "featuredEvents" && (
            <DashEventList events={dummyEvents} type="Featured" />
          )}

          {activeSection === "/create-your-event" && <CustomEvent />}
          {activeSection === "transactions" && (
            <DashTransaction transactions={dummyTransactions} />
          )}
        </main>
      </div>
      <DashFooter />
    </div>
  );
};

export default WinngooGalaDashboard;
