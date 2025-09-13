import React from "react";
import { Heart } from "lucide-react";

interface Suggestion {
  id: string;
  text: string;
  category:
    | "nutrition"
    | "exercise"
    | "sleep"
    | "hydration"
    | "mental"
    | "general";
  priority: "high" | "medium" | "low";
}

interface SuggestionsCardProps {
  suggestions: Suggestion[];
  className?: string;
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-500 border-red-600 text-white";
    case "medium":
      return "bg-yellow-400 border-yellow-500 text-gray-900";
    case "low":
      return "bg-green-500 border-green-600 text-white";
    default:
      return "bg-gray-50 border-gray-200 text-gray-900";
  }
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case "high":
      return "High Priority";
    case "medium":
      return "Medium Priority";
    case "low":
      return "Low Priority";
    default:
      return "Priority";
  }
};

export const SuggestionsCard: React.FC<SuggestionsCardProps> = ({
  suggestions,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 ${className}`}
    >
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Action Items</h2>
          <p className="text-base text-gray-500">Do not Die</p>
        </div>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3">
        {suggestions.slice(0, 3).map((suggestion, index) => (
          <div
            key={suggestion.id}
            className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${getPriorityColor(
              suggestion.priority
            )}`}
          >
            <div className="flex items-start space-x-3">
              {/* Bullet Point */}
              <div className="flex-shrink-0 mt-2">
                <div className="w-2 h-2 rounded-full bg-current opacity-60"></div>
              </div>

              {/* Suggestion Content */}
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold uppercase tracking-wide opacity-90">
                    {getPriorityLabel(suggestion.priority)}
                  </span>
                </div>
                <p className="text-base leading-relaxed font-semibold">
                  {suggestion.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Updated {new Date().toLocaleDateString()}
          </span>
          <button className="text-xs text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200">
            View All Suggestions
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsCard;
