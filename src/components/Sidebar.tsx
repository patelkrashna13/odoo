
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileInput, 
  BarChart2, 
  Brain, 
  Settings as SettingsIcon, 
  HelpCircle,
  Leaf,
  User,
  SmartphoneIcon
} from 'lucide-react';
import { UserProfile } from '../types/user';

interface SidebarProps {
  userProfile: UserProfile | null;
}

const Sidebar = ({ userProfile }: SidebarProps) => {
  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/data-entry', icon: FileInput, label: 'Data Entry' },
    { path: '/reports', icon: BarChart2, label: 'Reports' },
    { path: '/ml-insights', icon: Brain, label: 'ML Insights' },
    { path: '/digital-wellbeing', icon: SmartphoneIcon, label: 'Digital Wellbeing' },


    { path: '/settings', icon: SettingsIcon, label: 'Settings' },
    { path: '/help', icon: HelpCircle, label: 'Help' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <Leaf className="h-8 w-8 text-green-600" />
        <h1 className="text-xl font-bold text-gray-800">Carbon Tracker</h1>
      </div>

      {userProfile && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
              <User className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{userProfile.full_name}</h3>
              <p className="text-sm text-gray-500">{userProfile.occupation}</p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-sm text-gray-600">Daily Screen Time</p>
            <p className="text-lg font-semibold text-gray-900">
              {Math.round(userProfile.daily_screen_time / 60)}h {userProfile.daily_screen_time % 60}m
            </p>
          </div>
        </div>
      )}

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;