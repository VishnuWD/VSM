import React, { useState } from 'react'

const initialVendors = [
  { id: 1, name: 'Acme Construction Supplies', contact: 'john@acme.com', material: 'Concrete', deliverySchedule: 'Weekly', rating: 4.5, lastDelivery: '2023-09-15' },
  { id: 2, name: 'Steel Masters', contact: 'sarah@steelmasters.com', material: 'Steel', deliverySchedule: 'Bi-weekly', rating: 4.2, lastDelivery: '2023-09-10' },
  { id: 3, name: 'Lumber Co.', contact: 'mike@lumberco.com', material: 'Lumber', deliverySchedule: 'Monthly', rating: 4.7, lastDelivery: '2023-08-30' },
]

function VendorManagement() {
  const [vendors, setVendors] = useState(initialVendors)
  const [searchTerm, setSearchTerm] = useState('')
  const [newVendor, setNewVendor] = useState({ name: '', contact: '', material: '', deliverySchedule: '', rating: 0, lastDelivery: '' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredVendors = vendors.filter((vendor) =>
    Object.values(vendor).some((value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const handleAddVendor = () => {
    if (newVendor.name && newVendor.contact && newVendor.material && newVendor.deliverySchedule) {
      setVendors([...vendors, { ...newVendor, id: vendors.length + 1 }])
      setNewVendor({ name: '', contact: '', material: '', deliverySchedule: '', rating: 0, lastDelivery: '' })
      setIsModalOpen(false)
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Construction Vendor Management</h1>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search vendors"
          className="flex-1 p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setIsModalOpen(true)}
        >
          Add Vendor
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Material</th>
              <th className="p-3 text-left">Delivery Schedule</th>
              <th className="p-3 text-left">Rating</th>
              <th className="p-3 text-left">Last Delivery</th>
            </tr>
          </thead>
          <tbody>
            {filteredVendors.map((vendor) => (
              <tr key={vendor.id} className="border-b">
                <td className="p-3">{vendor.name}</td>
                <td className="p-3">{vendor.contact}</td>
                <td className="p-3">{vendor.material}</td>
                <td className="p-3">{vendor.deliverySchedule}</td>
                <td className="p-3">{vendor.rating}</td>
                <td className="p-3">{vendor.lastDelivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Vendor</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Vendor Name"
                className="w-full p-2 border rounded"
                value={newVendor.name}
                onChange={(e) => setNewVendor({ ...newVendor, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Contact Email"
                className="w-full p-2 border rounded"
                value={newVendor.contact}
                onChange={(e) => setNewVendor({ ...newVendor, contact: e.target.value })}
              />
              <input
                type="text"
                placeholder="Material Supplied"
                className="w-full p-2 border rounded"
                value={newVendor.material}
                onChange={(e) => setNewVendor({ ...newVendor, material: e.target.value })}
              />
              <select
                className="w-full p-2 border rounded"
                value={newVendor.deliverySchedule}
                onChange={(e) => setNewVendor({ ...newVendor, deliverySchedule: e.target.value })}
              >
                <option value="">Select Delivery Schedule</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-weekly">Bi-weekly</option>
                <option value="Monthly">Monthly</option>
              </select>
              <input
                type="number"
                placeholder="Rating (0-5)"
                className="w-full p-2 border rounded"
                value={newVendor.rating}
                onChange={(e) => setNewVendor({ ...newVendor, rating: Number(e.target.value) })}
                min="0"
                max="5"
                step="0.1"
              />
              <input
                type="date"
                placeholder="Last Delivery Date"
                className="w-full p-2 border rounded"
                value={newVendor.lastDelivery}
                onChange={(e) => setNewVendor({ ...newVendor, lastDelivery: e.target.value })}
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddVendor}
              >
                Add
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default VendorManagement