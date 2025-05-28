import React from 'react';
import { 
  Home, 
  LayoutDashboard, 
  Building2, 
  Users, 
  FolderOpen, 
  FileText, 
  Settings, 
  Bell 
} from 'lucide-react';
import LogoIcon from './icons/LogoIcon';

const Sidebar = () => {
  const menuItems = [
    { name: 'Home', icon: Home, badge: '6' },
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Companies', icon: Building2 },
    { name: 'Engineers', icon: Users },
    { name: 'Projects', icon: FolderOpen, badge: '3' },
    { name: 'Design documents', icon: FileText, badge: '3' },
    { name: 'Settings', icon: Settings },
    { name: 'Notification', icon: Bell, badge: '3', badgeColor: 'bg-red-500' }
  ];

  return (
    <div className='bg-white h-screen w-64 relative'>

    <div className="bg-[#396F7E] text-white h-screen flex flex-col fixed w-64">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">logipsum</h1>
          <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
            <span className="text-sm">⊞</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        <ul className="space-y-1">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <li key={index}>
                <a
                  href="#"
                  className={`
                    flex items-center px-3 py-2 text-sm rounded-lg transition-colors relative group
                    ${item.active 
                      ? 'bg-white text-[#4A7C7E] font-medium' 
                      : 'text-white/90 hover:bg-white/10'
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="flex-1">{item.name}</span>
                  {item.badge && (
                    <span 
                      className={`
                        ml-2 px-1.5 py-0.5 text-xs rounded-full font-medium
                        ${item.badgeColor || 'bg-white/20 text-white'}
                        ${item.badgeColor === 'bg-red-500' ? 'text-white' : ''}
                      `}
                    >
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Decorative bottom element */}
      <div className="p-4">
        <div className="flex justify-center items-end h-16">
          <LogoIcon />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Sidebar;