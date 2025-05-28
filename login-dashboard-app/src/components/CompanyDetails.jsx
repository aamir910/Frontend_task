import React, { useState } from 'react'
import AssignIcon from '../icons/AssignIcon'
import ApproveIcon from '../icons/ApproveIcon'
import RejectIcon from '../icons/RejectIcon'
import ReturnIcon from '../icons/ReturnIcon'

function CompanyDetails() {
  const [activeTab, setActiveTab] = useState('details')

  function handleTab(tab) {
    setActiveTab(tab)
  }

  return (
    <div className="max-w-full">
      <div className="bg-white rounded-lg shadow p-6 max-w-full">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-lg font-semibold mb-1">Lorem Ipsum Request</h1>
            <p className="text-xs text-gray-400">Application no# 1122545266455</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button className="text-sm px-2 py-2 bg-[#396F7E] text-white rounded-[8px] hover:bg-[#399e8c] transition flex items-center gap-2">
              <AssignIcon />
              <span>Assign</span> 
            </button>
            <button className="text-sm  px-2 py-2 bg-[#DEFFEE] text-[#1B5E20] rounded-[8px] hover:bg-[#a3d6b7] transition flex items-center gap-2">
              <ApproveIcon />
              <span>Approve</span>
            </button>
            <button className="text-sm  px-2 py-2 bg-[#FCDEDF] text-[#B71C1C] rounded-[8px] hover:bg-[#f2bcbc] transition flex items-center gap-2">
              <RejectIcon />
              <span>Reject</span>
            </button>
            <button className="text-sm px-2 py-2 bg-[#DCEBEF] text-[#1565C0] rounded-[8px] hover:bg-[#c7e0ff] transition flex items-center gap-2">
              <ReturnIcon />
              <span>Return for modification</span>
            </button>
          </div>
        </div>
        <hr className="border-gray-200 my-4" />
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 text-base font-semibold focus:outline-none ${activeTab === 'details' ? 'border-b-2 border-[#4CB7A7] text-[#4CB7A7]' : 'text-gray-500'}`}
            onClick={() => handleTab('details')}
          >
            Company Details
          </button>
          <button
            className={`ml-4 px-4 py-2 text-base font-semibold focus:outline-none ${activeTab === 'profile' ? 'border-b-2 border-[#4CB7A7] text-[#4CB7A7]' : 'text-gray-500'}`}
            onClick={() => handleTab('profile')}
          >
            Company Profile
          </button>
        </div>
        <div className="pt-4">
          {activeTab === 'details' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Company Name (En)</p>
                  <p className="font-bold text-gray-800 mb-2">Lorem Ipsum</p>
                  <p className="text-xs text-gray-400 mb-1">Trade License Number</p>
                  <p className="font-bold text-gray-800 mb-2">CN-1000770</p>
                  <p className="text-xs text-gray-400 mb-1">License Issue Date</p>
                  <p className="font-bold text-gray-800 mb-2">01-05-2023</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Company Name (Ar)</p>
                  <p className="font-bold text-gray-800 mb-2">شركة لوريم إيبسوم</p>
                  <p className="text-xs text-gray-400 mb-1">Company Type</p>
                  <p className="font-bold text-gray-800 mb-2">Lorem Ipsum</p>
                  <p className="text-xs text-gray-400 mb-1">License Expiry Date</p>
                  <p className="font-bold text-gray-800 mb-2">01-05-2025</p>
                </div>
                <div></div>
              </div>
              <div>
                <p className="text-lg font-bold text-[#8D8C8E] mb-2">Contact Person</p>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Contact Person Name</p>
                    <p className="font-bold text-gray-800">John Doe</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Email</p>
                    <p className="font-bold text-gray-800">johndoe@ypmail.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Mobile</p>
                    <p className="font-bold text-gray-800">123456789</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Phone</p>
                    <p className="font-bold text-gray-800">123456789</p>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeTab === 'profile' && (
            <div className="text-gray-500 text-sm">Company Profile content goes here...</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CompanyDetails