import React from "react";

const DashEventList = ({ events, type }) => (
  <div className="space-y-4">
    <h2 className="text-2xl font-bold text-purple-800">{type} Events</h2>
    {events.map((event, index) => (
      <div key={index} className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">{event.name}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="mt-2">{event.description}</p>
      </div>
    ))}
  </div>
);

export default DashEventList;
