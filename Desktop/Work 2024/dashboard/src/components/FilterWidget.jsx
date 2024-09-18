import React from 'react';
import { DashboardWidget } from "@sisense/sdk-ui";

export default function FilterWidget({ widgetOid, dashboardOid, title }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <DashboardWidget
        widgetOid={widgetOid}
        dashboardOid={dashboardOid}
        styleOptions={{
          backgroundColor: "transparent",
          header: { hidden: true },
        }}
      />
    </div>
  );
}
