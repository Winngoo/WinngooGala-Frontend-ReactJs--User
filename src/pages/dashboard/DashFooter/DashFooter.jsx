import React from "react";

const DashFooter = () => (
  <footer className="bg-primary text-white p-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2025 Winngoo Gala. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |
        <a href="#" className="hover:underline ml-2">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
);

export default DashFooter;
