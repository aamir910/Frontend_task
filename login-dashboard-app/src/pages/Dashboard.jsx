import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import CompanyDetails from '../components/CompanyDetails';
import RequestHistory from '../components/RequestHistory';
import WorkflowStatus from '../components/WorkflowStatus';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex min-h-screen w-full bg-[#36393B]">
      {/* Sidebar - hidden on mobile, shown on larger screens */}
      <div className="hidden lg:block lg:w-64">
        <Sidebar />
      </div>
      
      {/* Main content area with proper offset for fixed sidebar */}
      <div className="flex-1 flex flex-col bg-[#F6F8FA]">
        <Header />
        
        {/* Main Content Container */}
        <div className="flex-1 flex flex-col p-3 sm:p-4 lg:p-6 overflow-y-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            
            {/* Main Content Section */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6 order-2 lg:order-1">
              <CompanyDetails />
              <RequestHistory />
            </div>
            
            {/* Workflow Status Section */}
            <div className="w-full lg:w-[250px] xl:w-[250px] flex-shrink-0 order-1 lg:order-2">
              <WorkflowStatus />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;