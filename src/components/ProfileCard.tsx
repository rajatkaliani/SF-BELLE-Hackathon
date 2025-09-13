import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  avatarUrl?: string;
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ 
  name, 
  avatarUrl, 
  className = '' 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile');
  };

  return (
    <div 
      className={`flex items-center space-x-4 cursor-pointer hover:bg-gray-100 rounded-lg p-2 transition-colors duration-200 ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Circular Profile Picture */}
      <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900 p-0.5 shadow-lg">
        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={`${name}'s profile`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-600" />
            </div>
          )}
        </div>
      </div>
      
      {/* User Name */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-900 font-inter">
          {name}
        </h2>
        <p className="text-sm text-gray-500">Health Tracker User</p>
      </div>
    </div>
  );
};

export default ProfileCard;