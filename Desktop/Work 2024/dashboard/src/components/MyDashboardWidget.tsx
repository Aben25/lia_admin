import React from 'react';

interface MyDashboardWidgetProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

export default function MyDashboardWidget({ title, value, icon, color }: MyDashboardWidgetProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center">
      <div className={`rounded-full p-3 ${color} mr-4`}>
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <div>
        <h2 className="text-sm font-medium text-gray-500 uppercase">{title}</h2>
        <p className="mt-1 text-3xl font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}
