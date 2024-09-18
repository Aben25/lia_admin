import React from 'react';
import { DashboardWidget } from "@sisense/sdk-ui";

export default function TableWidget({ title, dashboardOid, widgetOid, filters }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 mt-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <DashboardWidget
          dashboardOid={dashboardOid}
          widgetOid={widgetOid}
          filters={filters}
          styleOptions={{
            table: {
              alternateRowColors: true,
              headerBackgroundColor: '#f3f4f6',
              headerTextColor: '#374151',
              rowBackgroundColor: '#ffffff',
              alternateRowBackgroundColor: '#f9fafb',
            }
          }}
        />
      </div>
    </div>
  );
}
