import React from 'react';
import { FaDownload } from "react-icons/fa";

export default function DashboardHeader({ title, onDownload }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <button 
        onClick={onDownload} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <FaDownload className="mr-2" /> Download PDF
      </button>
    </div>
  );
}
