import React from 'react';
import { Activity } from 'lucide-react';

interface HealthIndexBadgeProps {
  score: number;
  className?: string;
}

export const HealthIndexBadge: React.FC<HealthIndexBadgeProps> = ({ 
  score, 
  className = '' 
}) => {
  // Remove 100 cap - allow unlimited scores
  const displayScore = Math.max(1, score);
  
  // Calculate relative progress for visual indicator (capped at 100 for display)
  const progressPercentage = Math.min(100, displayScore);
  
  // Determine colors based on unlimited score ranges
  const getScoreColors = (score: number) => {
    if (score >= 71) {
      return {
        textColor: 'text-green-700',
        bgColor: 'bg-green-500',
        ringColor: 'text-green-600',
        gradientStart: 'text-green-500',
        gradientEnd: 'text-green-700',
        borderColor: 'border-green-600',
        level: 'Excellent'
      };
    } else if (score >= 41) {
      return {
        textColor: 'text-yellow-700',
        bgColor: 'bg-yellow-400',
        ringColor: 'text-yellow-500',
        gradientStart: 'text-yellow-400',
        gradientEnd: 'text-yellow-600',
        borderColor: 'border-yellow-500',
        level: 'Good'
      };
    } else {
      return {
        textColor: 'text-red-700',
        bgColor: 'bg-red-500',
        ringColor: 'text-red-600',
        gradientStart: 'text-red-500',
        gradientEnd: 'text-red-700',
        borderColor: 'border-red-600',
        level: 'Needs Improvement'
      };
    }
  };

  const colors = getScoreColors(displayScore);

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* HAI Label */}
      <div className="flex items-center space-x-2">
        <Activity className="w-6 h-6 text-gray-600" />
        <span className="text-base font-semibold text-gray-600">HAI</span>
      </div>
      
      {/* Progress Badge */}
      <div className="relative">
        {/* Background Circle */}
        <div className={`w-20 h-20 rounded-full ${colors.bgColor} ${colors.borderColor} border-2 p-1`}>
          <div className="w-full h-full rounded-full bg-white shadow-inner flex items-center justify-center relative overflow-hidden">
            {/* Progress Ring - Visual indicator only, not tied to score percentage */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={colors.ringColor}
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={`${progressPercentage}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" className={colors.gradientStart} stopColor="currentColor" />
                  <stop offset="100%" className={colors.gradientEnd} stopColor="currentColor" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Score Text */}
            <div className="text-center z-10">
              <div className={`text-3xl font-bold ${colors.textColor}`}>
                {displayScore}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Score Description */}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Health AI Index</span>
        <span className={`text-base font-bold ${colors.textColor}`}>
          {colors.level}
        </span>
      </div>
    </div>
  );
};

export default HealthIndexBadge;