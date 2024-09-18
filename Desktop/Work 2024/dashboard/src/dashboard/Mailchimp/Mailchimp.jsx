import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaMousePointer, FaPaperPlane } from "react-icons/fa";
import { Chart, DashboardWidget } from "@sisense/sdk-ui";
import * as DM from "../../data/mailchimp";
import { filterFactory } from "@sisense/sdk-data";
import KPIWidget from "../../components/KPIWidget";
import DateRangeFilterBox from "../../components/DateRangeFilterBox";
import DashboardHeader from "../../components/DashboardHeader";
import { downloadPDF } from "../../components/downloadPDF";

const widgets = [
  {
    widgetOid: "66e4a5827882b000321dd7eb",
    color: "blue",
    description: "Open Rate",
    icon: FaEnvelope,
  },
  {
    widgetOid: "66e4a68b7882b000321dd7f3",
    color: "green",
    description: "Click Rate",
    icon: FaMousePointer,
  },
  {
    widgetOid: "66e4a68e7882b000321dd7f5",
    color: "yellow",
    description: "Emails Sent",
    icon: FaPaperPlane,
  },
];

export default function MailchimpDashboard() {
  const [dateRange, setDateRange] = useState(() => {
    const savedDateRange = localStorage.getItem("mailchimpDashboardDateRange");
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
    localStorage.setItem("mailchimpDashboardDateRange", JSON.stringify(dateRange));
  }, [dateRange]);

  const dateRangeFilter = filterFactory.dateRange(
    DM.Reports.SendTime,
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
          title="Mailchimp ARTBA Dashboard" 
          onDownload={() => downloadPDF(dashboardRef)} 
        />

        <DateRangeFilterBox
          isOpen={isFilterOpen}
          onToggle={toggleFilter}
          dateRange={dateRange}
          onRangeChange={handleDateRangeChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {widgets.map((widget, index) => (
            <KPIWidget
              key={index}
              {...widget}
              index={index}
              dashboardOid="66e4a50b7882b000321dd7e9"
              dateRangeFilter={dateRangeFilter}
            />
          ))}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Campaign Details</h3>
          <DashboardWidget
            widgetOid="66e4a8077882b000321dd807"
            dashboardOid="66e4a50b7882b000321dd7e9"
            filters={[dateRangeFilter]}
          />
        </div>
      </div>
    </div>
  );
}
