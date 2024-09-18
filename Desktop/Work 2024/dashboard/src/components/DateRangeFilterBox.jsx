import React from 'react';
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import DateRangePicker from "./DateRangePicker";

export default function DateRangeFilterBox({ isOpen, onToggle, dateRange, onRangeChange }) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg overflow-hidden mb-6">
      <button
        className="w-full p-4 text-left font-semibold flex justify-between items-center bg-blue-100"
        onClick={onToggle}
      >
        Date Range Filter
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-4 border-t border-blue-200">
          <DateRangePicker
            dateRange={dateRange}
            onRangeChange={onRangeChange}
            className="w-full"
          />
        </div>
      )}
    </div>
  );
}
