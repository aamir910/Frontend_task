import React from 'react'

function CheckIcon({ className = '' }) {
  return (
    <svg className={`w-5 h-5 text-white ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" fill="#4CB7A7" />
      <path stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 7-7" />
    </svg>
  )
}

function StepBadge({ status, children }) {
  let color = status === 'completed' ? 'bg-[#E6F7F1] text-[#4CB7A7]' : status === 'inprogress' ? 'bg-[#FFF4E5] text-[#FF9800]' : 'bg-[#E3EFFF] text-[#1565C0]'
  return <span className={`px-2 py-0.5 rounded text-xs font-medium ${color}`}>{children}</span>
}

const steps = [
  {
    title: 'Request Created',
    status: 'submitted',
    badge: 'Submitted',
    description: 'Great job on the design project, team!',
    name: 'Lorem Ipsum',
    role: 'Contractor',
    time: '12 Mar 2025, 11:00 am',
  },
  {
    title: 'Assigned to ROW',
    status: 'completed',
    badge: 'Completed',
    description: 'Emphasize thorough requirements gathering and project scope.',
    name: 'John Doe',
    role: 'Contractor',
    time: '12 Mar 2025, 11:00 am',
  },
  {
    title: 'Assigned to Master Coordinator',
    status: 'inprogress',
    badge: 'In Progress',
    percent: 65,
    description: 'Remember to capture all project requirements clearly.',
    name: 'Ahmed Hassan',
    role: 'Contractor',
    time: '12 Mar 2025, 11:00 am',
  },
]

function WorkflowStatus() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Process</h2>
        <span className="text-xs text-gray-400">Updated 2h ago</span>
      </div>
      <p className="text-xs text-gray-400 mb-4">Current workflow status</p>
      <div className="relative flex flex-col gap-0.5">
        {/* Step 1 */}
        <div className="flex items-start gap-3 relative pb-8">
          <span className="mt-1"><CheckIcon /></span>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{steps[0].title}</span>
              <StepBadge status={steps[0].status}>{steps[0].badge}</StepBadge>
            </div>
            <div className="text-xs text-gray-500 mb-1">{steps[0].description}</div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{steps[0].name}</span>
              <span className="text-gray-300">|</span>
              <span>{steps[0].role}</span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{steps[0].time}</div>
          </div>
          <span className="absolute left-2.5 top-7 w-0.5 h-[calc(100%-1.5rem)] bg-[#E6F7F1] z-0" />
        </div>
        {/* Step 2 */}
        <div className="flex items-start gap-3 relative pb-8">
          <span className="mt-1"><CheckIcon /></span>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{steps[1].title}</span>
              <StepBadge status={steps[1].status}>{steps[1].badge}</StepBadge>
            </div>
            <div className="text-xs text-gray-500 mb-1">{steps[1].description}</div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{steps[1].name}</span>
              <span className="text-gray-300">|</span>
              <span>{steps[1].role}</span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{steps[1].time}</div>
          </div>
          <span className="absolute left-2.5 top-7 w-0.5 h-[calc(100%-1.5rem)] bg-[#E6F7F1] z-0" />
        </div>
        {/* Step 3 */}
        <div className="flex items-start gap-3 relative">
          <span className="mt-1">
            <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#FF9800] text-white font-bold">!</span>
          </span>
          <div className="flex-1 pb-2">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-sm">{steps[2].title}</span>
              <StepBadge status={steps[2].status}>{steps[2].badge}</StepBadge>
              <span className="text-xs text-gray-400 ml-2">{steps[2].percent}%</span>
            </div>
            <div className="text-xs text-gray-500 mb-1">{steps[2].description}</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-1">
              <div className="bg-[#4CB7A7] h-2.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>{steps[2].name}</span>
              <span className="text-gray-300">|</span>
              <span>{steps[2].role}</span>
            </div>
            <div className="text-xs text-gray-400 mt-0.5">{steps[2].time}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkflowStatus