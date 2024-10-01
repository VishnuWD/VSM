import React, { useState } from 'react'

const initialInventory = [
  { id: 1, material: 'Concrete', quantity: 1000, unit: 'cubic yards', lastUpdated: '2023-09-15' },
  { id: 2, material: 'Steel Rebar', quantity: 5000, unit: 'tons', lastUpdated: '2023-09-14' },
  { id: 3, material: 'Lumber', quantity: 10000, unit: 'board feet', lastUpdated: '2023-09-13' },
]

function MaterialsInventory() {
  const [inventory, setInventory] = useState(initialInventory)
  const [newMaterial, setNewMaterial] = useState({ material: '', quantity: 0, unit: '' })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddMaterial = () => {
    if (newMaterial.material && newMaterial.quantity && newMaterial.unit) {
      setInventory([...inventory, { ...newMaterial, id: inventory.length + 1, lastUpdated: new Date().toISOString().split('T')[0] }])
      setNewMaterial({ material: '', quantity: 0, unit: '' })
      setIsModalOpen(false)
    } else {
      alert('Please fill in all fields')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Materials Inventory</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Add Material
      </button>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Material</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Unit</th>
              <th className="p-3 text-left">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3">{item.material}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">{item.unit}</td>
                <td className="p-3">{item.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add New Material</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Material Name"
                className="w-full p-2 border rounded"
                value={newMaterial.material}
                onChange={(e) => setNewMaterial({ ...newMaterial, material: e.target.value })}
              />
              <input
                type="number"
                placeholder="Quantity"
                className="w-full p-2 border rounded"
                value={newMaterial.quantity}
                onChange={(e) => setNewMaterial({ ...newMaterial, quantity: Number(e.target.value) })}
              />
              <input
                type="text"
                placeholder="Unit (e.g., tons, cubic yards)"
                className="w-full p-2 border rounded"
                value={newMaterial.unit}
                onChange={(e) => setNewMaterial({ ...newMaterial, unit: e.target.value })}
              />
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddMaterial}
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

export default MaterialsInventory