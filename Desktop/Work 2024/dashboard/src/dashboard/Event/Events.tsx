import React, { useState, useEffect, useRef } from "react";
import { FaBuilding, FaTicketAlt, FaUsers, FaDollarSign } from "react-icons/fa";
import { Chart, DashboardWidget } from "@sisense/sdk-ui";
import * as DM from "../../data/event";
import { filterFactory } from "@sisense/sdk-data";
import KPIWidget from "../../components/KPIWidget";
import DateRangeFilterBox from "../../components/DateRangeFilterBox";
import DashboardHeader from "../../components/DashboardHeader";
import TableWidget from "../../components/TableWidget";
import FilterWidget from "../../components/FilterWidget";
import PieChart from "../../components/PieChart";
import { downloadPDF } from "../../components/downloadPDF";

const widgets = [
  {
    widgetOid: "66e4a0697882b000321dd7d0",
    color: "blue",
    description: "Total number of companies",
    icon: FaBuilding,
  },
  {
    widgetOid: "66e4a06d7882b000321dd7d2",
    color: "green",
    description: "Total number of attendees",
    icon: FaUsers,
  },
  {
    widgetOid: "66e4a0a97882b000321dd7dc",
    color: "yellow",
    description: "Total price paid",
    icon: FaDollarSign,
  },
  {
    widgetOid: "66e4a0ca7882b000321dd7e0",
    color: "purple",
    description: "Total tickets sold",
    icon: FaTicketAlt,
  },
];

export default function Events() {
  const [dateRange, setDateRange] = useState(() => {
    const savedDateRange = localStorage.getItem("eventsDashboardDateRange");
    return savedDateRange
      ? JSON.parse(savedDateRange)
      : {
          startDate: new Date(
            new Date().setFullYear(new Date().getFullYear() - 1)
          ),
          endDate: new Date(),
          key: "selection",
        };
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dashboardRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("eventsDashboardDateRange", JSON.stringify(dateRange));
  }, [dateRange]);

  const dateRangeFilter = filterFactory.dateRange(
    DM.events.StartDate.Days,
    dateRange.startDate,
    dateRange.endDate
  );

  interface DateRange {
    startDate: Date;
    endDate: Date;
    key: string;
  }

  const handleDateRangeChange = (newRange: DateRange) => setDateRange(newRange);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div
        ref={dashboardRef}
        className="max-w-7xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <DashboardHeader 
          title="Events Dashboard" 
          onDownload={() => downloadPDF(dashboardRef)} 
        />

        <DateRangeFilterBox
          isOpen={isFilterOpen}
          onToggle={toggleFilter}
          dateRange={dateRange}
          onRangeChange={handleDateRangeChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {widgets.map((widget, index) => (
            <KPIWidget
              key={index}
              {...widget}
              index={index}
              dashboardOid="66e4a0297882b000321dd7ce"
              dateRangeFilter={dateRangeFilter}
            />
          ))}
        </div>
        <DashboardWidget
          widgetOid="66e4a1607882b000321dd7e6"
          dashboardOid="66e4a0297882b000321dd7ce"
          filters={[dateRangeFilter]}
        />
        <DashboardWidget
          widgetOid="66e4a1397882b000321dd7e4"
          dashboardOid="66e4a0297882b000321dd7ce"
          filters={[dateRangeFilter]}
        />
      </div>
    </div>
  );
}
