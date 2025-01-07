import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { SiEventbrite } from "react-icons/si";
import { IoCreate } from "react-icons/io5";
import { TbTransactionDollar } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";

const DashSideBar = ({ setActiveSection }) => {
  const [open, setOpen] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Button */}
      {!isSidebarOpen && (
        <button
          className="lg:hidden fixed top-14 z-50 p-2 bg-blue-500 text-white rounded-md"
          onClick={toggleSidebar}>
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-xl z-40 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:w-64`}>
        <Card className="h-full w-full p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4 flex justify-between items-center">
            <Typography variant="h5" color="blue-gray">
              DASHBOARD
            </Typography>
            {/* Close Button */}
            <button
              className="lg:hidden p-2 text-blue-500 rounded-md"
              onClick={toggleSidebar}>
              ✕
            </button>
          </div>
          <List>
            {/* Home Accordion */}
            <Accordion open={open === 1}>
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3">
                  <ListItemPrefix>
                    <HomeModernIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Home
                  </Typography>
                </AccordionHeader>
              </ListItem>
            </Accordion>

            {/* Events Accordion */}
            <Accordion open={open === 2}>
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3">
                  <ListItemPrefix>
                    <SiEventbrite className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Events
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem
                    onClick={() => setActiveSection("pastEvents")}
                    className="cursor-pointer">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Past Events
                  </ListItem>
                  <ListItem
                    onClick={() => setActiveSection("presentEvents")}
                    className="cursor-pointer">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Present Events
                  </ListItem>
                  <ListItem
                    onClick={() => setActiveSection("featuredEvents")}
                    className="cursor-pointer">
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Featured Events
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>

            {/* Create Event */}
            <ListItem>
              <ListItemPrefix>
                <IoCreate className="h-5 w-5" />
              </ListItemPrefix>
              <button
                onClick={() => setActiveSection("/create-your-event")}
                className="text-blue-gray-700 hover:underline">
                Create Event
              </button>
            </ListItem>

            {/* Transaction */}
            <ListItem>
              <ListItemPrefix>
                <TbTransactionDollar className="h-5 w-5" />
              </ListItemPrefix>
              <button
                onClick={() => setActiveSection("transactions")}
                className="text-blue-gray-700 hover:underline">
                Transaction
              </button>
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};

export default DashSideBar;
