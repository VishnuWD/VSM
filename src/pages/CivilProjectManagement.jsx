import React, { useState } from 'react'
import { Gantt } from 'gantt-task-react'
import "gantt-task-react/dist/index.css"

const initialProjects = [
  { id: 1, name: 'City Center Renovation', manager: 'John Doe', startDate: '2023-06-01', endDate: '2023-12-31', progress: 30, type: 'Commercial', budget: 5000000 },
  { id: 2, name: 'Highway Bridge Construction', manager: 'Jane Smith', startDate: '2023-07-15', endDate: '2024-03-31', progress: 15, type: 'Infrastructure', budget: 10000000 },
]

const initialTasks = [
  {
    start: new Date(2023, 5, 1),
    end: new Date(2023, 11, 31),
    name: 'City Center Renovation',
    id: 'Task 1',
    type: 'project',
    progress: 30,
    isDisabled: true,
    styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
  },
  {
    start: new Date(2023, 6, 15),
    end: new Date(2024, 2, 31),
    name: 'Highway Bridge Construction',
    id: 'Task 2',
    type: 'project',
    progress: 15,
    isDisabled: true,
    styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
  },
]

function CivilProjectManagement() {
  const [projects, setProjects] = useState(initialProjects)
  const [tasks, setTasks] = useState(initialTasks)
  const [newProject, setNewProject] = useState({ name: '', manager: '', startDate: '', endDate: '', progress: 0, type: '', budget: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddProject = () => {
    if (newProject.name && newProject.manager && newProject.startDate && newProject.endDate && newProject.type) {
      const updatedProjects = [...projects, { ...newProject, id: projects.length + 1 }]
      setProjects(updatedProjects)
      
      const newTask = {
        start: new Date(newProject.startDate),
        end: new Date(newProject.endDate),
        name: newProject.name,
        id: `Task ${tasks.length + 1}`,
        type: 'project',
        progress: newProject.progress,
        isDisabled: true,
        styles: { progressColor: '#ffbb54', progressSelectedColor: '#ff9e0d' },
      }
      setTasks([...tasks, newTask])

      setNewProject({ name: '', manager: '', startDate: '', endDate: '', progress: 0, type: '', budget: 0 })
      setIsModalOpen(false)
    } else {
      alert('Please fill in all required fields')
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">Civil Project Management</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Add Project
      </button>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Manager</th>
              <th className="p-3 text-left">Start Date</th>
              <th className="p-3 text-left">End Date</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Budget</th>
              <th className="p-3 text-left">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b">
                <td className="p-3 whitespace-nowrap">{project.name}</td>
                <td className="p-3 whitespace-nowrap">{project.manager}</td>
                <td className="p-3 whitespace-nowrap">{project.startDate}</td>
                <td className="p-3 whitespace-nowrap">{project.endDate}</td>
                <td className="p-3 whitespace-nowrap">{project.type}</td>
                <td className="p-3 whitespace-nowrap">${project.budget.toLocaleString()}</td>
                <td className="p-3">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Project Timeline</h2>
        <div className="overflow-x-auto">
          <div className="w-full" style={{ minWidth: '750px', height: '300px' }}>
            <Gantt tasks={tasks} viewMode="Month" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Add New Civil Project</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Project Name"
                className="w-full p-2 border rounded"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Project Manager"
                className="w-full p-2 border rounded"
                value={newProject.manager}
                onChange={(e) => setNewProject({ ...newProject, manager: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value={newProject.startDate}
                    onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded"
                    value={newProject.endDate}
                    onChange={(e) => setNewProject({ ...newProject, endDate: e.target.value })}
                  />
                </div>
              </div>
              <select
                className="w-full p-2 border rounded"
                value={newProject.type}
                onChange={(e) => setNewProject({ ...newProject, type: e.target.value })}
              >
                <option value="">Select Project Type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Industrial">Industrial</option>
              </select>
              <input
                type="number"
                placeholder="Budget"
                className="w-full p-2 border rounded"
                value={newProject.budget}
                onChange={(e) => setNewProject({ ...newProject, budget: Number(e.target.value) })}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Progress (%)</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full"
                  value={newProject.progress}
                  onChange={(e) => setNewProject({ ...newProject, progress: Number(e.target.value) })}
                />
                <span className="text-sm text-gray-500">{newProject.progress}%</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleAddProject}
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

export default CivilProjectManagement