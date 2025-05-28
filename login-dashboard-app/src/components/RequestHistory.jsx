import React, { useState } from 'react'
import { Card } from './ui/Card'
import { Button } from './ui/Button'

const ACTION_BADGE = {
  Submitted: 'bg-[#E3EFFF] text-[#1565C0]',
  Approved: 'bg-[#E6F7F1] text-[#4CB7A7]',
  'In Progress': 'bg-[#FFF4E5] text-[#FF9800]'
}

const DEMO_REQUESTS = [
  { performedBy: 'John Doe Contractor', assignedTo: 'John Doe ROW', dateTime: '11/03/2025 11:23 AM', comments: '-', action: 'Submitted' },
  { performedBy: 'John Doe Row', assignedTo: 'John Doe Master Coordinator', dateTime: '11/04/2025 12:45 PM', comments: 'Emphasize thorough requirements gathering and project scope.', action: 'Approved' },
  { performedBy: 'John Doe Consultant', assignedTo: 'John Doe Master Coordinator', dateTime: '11/05/2025 01:10 PM', comments: 'Remember to capture all project requirements clearly.', action: 'In Progress' },
]

function RequestHistory() {
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(DEMO_REQUESTS)

  function handleFilter() {
    if (!search.trim()) return setFiltered(DEMO_REQUESTS)
    const s = search.toLowerCase()
    setFiltered(
      DEMO_REQUESTS.filter(r =>
        Object.values(r).some(v => v.toLowerCase().includes(s))
      )
    )
  }

  function handleInput(e) {
    setSearch(e.target.value)
    if (!e.target.value.trim()) setFiltered(DEMO_REQUESTS)
  }

  return (
    <div className="w-full">
      <Card className="p-0">
        <div className="bg-[white] rounded-t-xl px-6 py-4 flex items-center justify-between border-b border-[#F2F4F7]">
          <span className="text-lg font-semibold text-gray-800">Request history</span>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={search}
              onChange={handleInput}
              placeholder="Search"
              className="px-4 py-2 border border-gray-200 rounded-lg bg-[#F6F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#4CB7A7]"
              onKeyDown={e => { if (e.key === 'Enter') handleFilter() }}
            />
            <Button variant="outline" size="sm" onClick={handleFilter}>Filter</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className=" bg-[#EDF2F7] text-xs text-gray-500 bg-white border-b border-[#F2F4F7]">
                <th className="py-3 px-6 font-medium bg-[#EDF2F7] ">Performed By</th>
                <th className="py-3 px-6 font-medium bg-[#EDF2F7] ">Assigned To</th>
                <th className="py-3 px-6 font-medium bg-[#EDF2F7] ">Date & Time</th>
                <th className="py-3 px-6 font-medium bg-[#EDF2F7] ">Comments</th>
                <th className="py-3 px-6 font-medium bg-[#EDF2F7] ">Action Taken</th>
                <th className="py-3 px-2 bg-[#EDF2F7] "></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">No records found.</td>
                </tr>
              )}
              {filtered.map((req, index) => (
                <tr key={index} className="bg-white border-b border-[#F2F4F7] last:border-b-0 hover:bg-[#F7FAFC] transition">
                  <td className="py-3 px-6 align-top text-sm text-gray-700 whitespace-pre-line">{req.performedBy}</td>
                  <td className="py-3 px-6 align-top text-sm text-gray-700 whitespace-pre-line">{req.assignedTo}</td>
                  <td className="py-3 px-6 align-top text-sm text-gray-700 whitespace-pre-line">{req.dateTime}</td>
                  <td className="py-3 px-6 align-top text-sm text-gray-700 whitespace-pre-line">{req.comments}</td>
                  <td className="py-3 px-6 align-top whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ACTION_BADGE[req.action] || 'bg-gray-100 text-gray-500'}`}>{req.action}</span>
                  </td>
                  <td className="py-3 px-2 align-top">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                      <svg width="18" height="18" fill="none" stroke="#B0B7C3" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/><circle cx="5" cy="12" r="1.5"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default RequestHistory