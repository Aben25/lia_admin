import React from 'react';
import { DashboardWidget } from "@sisense/sdk-ui";

export default function PieChart({ title, dashboardOid, widgetOid, filters }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="h-80">
        <DashboardWidget
          dashboardOid={dashboardOid}
          widgetOid={widgetOid}
          filters={filters}
          styleOptions={{
            backgroundColor: "transparent",
            header: { hidden: true },
          }}
        />
      </div>
    </div>
  );
}
