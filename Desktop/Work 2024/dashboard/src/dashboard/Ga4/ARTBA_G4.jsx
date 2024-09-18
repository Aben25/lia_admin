import React, { useState, useEffect, useRef } from "react";
import * as DM from "../../data/ga4";
import { filterFactory } from "@sisense/sdk-data";
import KPIWidget from "../../components/KPIWidget";
import DateRangeFilterBox from "../../components/DateRangeFilterBox";
import DashboardHeader from "../../components/DashboardHeader";
import TableWidget from "../../components/TableWidget";
import { FaEye, FaChartBar, FaUsers } from "react-icons/fa";
import html2pdf from 'html2pdf.js';

const widgets = [
  {
    icon: FaEye,
    title: "Views",
    widgetOid: "66e33ea57882b000321dcd5e",
    color: "blue",
    description: "Total number of page views across the website",
  },
  {
    icon: FaChartBar,
    title: "Event Count",
    widgetOid: "66e33ceb7882b000321dcd5a",
    color: "green",
    description: "Total number of tracked events on the website",
  },
  {
    icon: FaUsers,
    title: "Total Users",
    widgetOid: "66e333e77882b000321dcd4d",
    color: "purple",
    description: "Unique users who visited the website",
  },
];

export default function ARTBA_G4() {
  const [dateRange, setDateRange] = useState(() => {
    const savedDateRange = localStorage.getItem("dashboardDateRange");
    return savedDateRange ? JSON.parse(savedDateRange) : {
      startDate: new Date(new Date().setDate(new Date().getDate() - 30)),
      endDate: new Date(),
      key: "selection",
    };
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dashboardRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("dashboardDateRange", JSON.stringify(dateRange));
  }, [dateRange]);

  const dateRangeFilter = filterFactory.dateRange(
    DM.artba.Date.Days,
    dateRange.startDate,
    dateRange.endDate
  );

  const handleDateRangeChange = (newRange) => setDateRange(newRange);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const downloadPDF = () => {
    const element = dashboardRef.current;
    const opt = {
      margin: 10,
      filename: 'ga4_dashboard.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div ref={dashboardRef} className="max-w-7xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <DashboardHeader title="Google Analytics Dashboard" onDownload={downloadPDF} />

        <DateRangeFilterBox
          isOpen={isFilterOpen}
          onToggle={toggleFilter}
          dateRange={dateRange}
          onRangeChange={handleDateRangeChange}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {widgets.map((widget, index) => (
            <KPIWidget
              key={index}
              {...widget}
              index={index}
              dashboardOid="66e333977882b000321dcd47"
              dateRangeFilter={dateRangeFilter}
            />
          ))}
        </div>

        <TableWidget
          title="Most Visited Pages"
          dashboardOid="66e333977882b000321dcd47"
          widgetOid="66e341167882b000321dcd72"
          filters={[dateRangeFilter]}
        />
      </div>
    </div>
  );
}
