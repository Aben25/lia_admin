import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { DashboardWidget } from '@sisense/sdk-ui';
import { Tooltip } from 'react-tooltip';

export default function KPIWidget({ icon: Icon, widgetOid, color, description, index, dashboardOid, dateRangeFilter }) {
  return (
    <div className={`bg-${color}-50 rounded-lg shadow-sm p-4 border border-${color}-200 relative h-32 flex flex-col justify-between`}>
      <div className="flex items-center justify-between">
        <Icon className={`text-${color}-500 text-2xl`} />
        <FaQuestionCircle 
          className="text-gray-400 cursor-pointer text-sm"
          data-tooltip-id={`tooltip-${index}`}
          data-tooltip-content={description}
        />
      </div>
      <Tooltip id={`tooltip-${index}`} />
      <DashboardWidget
        dashboardOid={dashboardOid}
        widgetOid={widgetOid}
        styleOptions={{
          backgroundColor: "transparent",
          header: { hidden: true },
          content: { fontSize: "18px", fontWeight: "bold", color: "#374151" },
        }}
        filters={[dateRangeFilter]}
      />
    </div>
  );
}
