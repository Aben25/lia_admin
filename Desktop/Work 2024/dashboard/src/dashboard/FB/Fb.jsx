import React, { useState, useEffect, useRef } from "react";
import { FaNewspaper, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import * as DM from "../../data/fb";
import { filterFactory } from "@sisense/sdk-data";
import KPIWidget from "../../components/KPIWidget";
import DateRangeFilterBox from "../../components/DateRangeFilterBox";
import DashboardHeader from "../../components/DashboardHeader";
import TableWidget from "../../components/TableWidget";
import html2pdf from 'html2pdf.js';

const widgets = [
  { icon: FaNewspaper, widgetOid: "66e4913f7882b000321dd66d", color: "blue", description: "Total number of posts" },
  { icon: FaThumbsUp, widgetOid: "66e491d07882b000321dd695", color: "green", description: "Total number of likes" },
  { icon: FaComment, widgetOid: "66e491d37882b000321dd697", color: "yellow", description: "Total number of comments" },
  { icon: FaShare, widgetOid: "66e492007882b000321dd69d", color: "purple", description: "Total number of shares" },
];

export default function Fb() {
  const [dateRange, setDateRange] = useState(() => {
    const savedDateRange = localStorage.getItem('fbDashboardDateRange');
    return savedDateRange ? JSON.parse(savedDateRange) : {
      startDate: new Date(new Date().setDate(new Date().getDate() - 90)),
      endDate: new Date(),
      key: 'selection'
    };
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dashboardRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('fbDashboardDateRange', JSON.stringify(dateRange));
  }, [dateRange]);

  const dateRangeFilter = filterFactory.dateRange(
    DM.Posts.CreatedTime.Days,
    dateRange.startDate,
    dateRange.endDate
  );

  const handleDateRangeChange = (newRange) => setDateRange(newRange);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const downloadPDF = () => {
    const element = dashboardRef.current;
    const opt = {
      margin: 10,
      filename: 'facebook_dashboard.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div ref={dashboardRef} className="max-w-7xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <DashboardHeader title="Facebook Analytics Dashboard" onDownload={downloadPDF} />

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
              dashboardOid="66e4910b7882b000321dd66b"
              dateRangeFilter={dateRangeFilter}
            />
          ))}
        </div>

        <TableWidget
          title="Post Details"
          dashboardOid="66e4910b7882b000321dd66b"
          widgetOid="66e4933a7882b000321dd72a"
          filters={[dateRangeFilter]}
        />
      </div>
    </div>
  );
}
