import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const vendorPerformanceData = [
  { id: 1, name: 'Acme Construction Supplies', onTimeDelivery: 95, qualityRating: 4.5, costEfficiency: 85 },
  { id: 2, name: 'Steel Masters', onTimeDelivery: 88, qualityRating: 4.2, costEfficiency: 90 },
  { id: 3, name: 'Lumber Co.', onTimeDelivery: 92, qualityRating: 4.7, costEfficiency: 82 },
]

function VendorPerformanceReports() {
  const [selectedMetric, setSelectedMetric] = useState('onTimeDelivery')

  const chartData = {
    labels: vendorPerformanceData.map(vendor => vendor.name),
    datasets: [
      {
        label: selectedMetric === 'onTimeDelivery' ? 'On-Time Delivery (%)' :
               selectedMetric === 'qualityRating' ? 'Quality Rating (out of 5)' :
               'Cost Efficiency (%)',
        data: vendorPerformanceData.map(vendor => vendor[selectedMetric]),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Construction Vendor Performance Reports</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
        <span className="font-semibold">Select Metric:</span>
        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={selectedMetric}
          onChange={(e) => setSelectedMetric(e.target.value)}
        >
          <option value="onTimeDelivery">On-Time Delivery (%)</option>
          <option value="qualityRating">Quality Rating</option>
          <option value="costEfficiency">Cost Efficiency (%)</option>
        </select>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="h-64 sm:h-96">
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Vendor Name</th>
              <th className="p-3 text-left">On-Time Delivery (%)</th>
              <th className="p-3 text-left">Quality Rating</th>
              <th className="p-3 text-left">Cost Efficiency (%)</th>
            </tr>
          </thead>
          <tbody>
            {vendorPerformanceData.map((vendor) => (
              <tr key={vendor.id} className="border-b">
                <td className="p-3">{vendor.name}</td>
                <td className="p-3">{vendor.onTimeDelivery}</td>
                <td className="p-3">{vendor.qualityRating}</td>
                <td className="p-3">{vendor.costEfficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VendorPerformanceReports