import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Moon, Apple, Activity, Sun, Droplets, Brain, Wind } from 'lucide-react';
import { mockUser, mockHealthMetrics, calculateBMI } from '../data/mockData';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const { sleep, nutrition, bloodPressure, sunlightExposure, bioFluids, stressLevel, airQuality } = mockHealthMetrics;
  const bmi = calculateBMI(mockUser.weight, mockUser.height);

  const handleBackClick = () => {
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'good':
      case 'normal':
      case 'excellent':
        return 'text-gray-800';
      case 'fair':
      case 'borderline':
      case 'moderate':
        return 'text-gray-600';
      case 'poor':
      case 'high':
      case 'unhealthy':
        return 'text-gray-500';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <button
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Dashboard</span>
          </button>
        </div>

        {/* User Info Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {mockUser.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{mockUser.name}</h1>
              <p className="text-gray-600">{mockUser.email}</p>
              <p className="text-sm text-gray-500">Age: {mockUser.age} • Height: {mockUser.height}cm • Weight: {mockUser.weight}kg</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-3xl font-bold text-gray-700">{mockUser.healthScore}</div>
              <div className="text-sm text-gray-500">Health Score</div>
            </div>
          </div>
        </div>

        {/* Health Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sleep */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Moon className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Sleep</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Hours:</span>
                <span className="font-medium">{sleep.hours}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quality:</span>
                <span className={`font-medium ${getStatusColor(sleep.quality)}`}>{sleep.quality}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bedtime:</span>
                <span className="font-medium">{sleep.bedtime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Wake Time:</span>
                <span className="font-medium">{sleep.wakeTime}</span>
              </div>
            </div>
          </div>

          {/* BMI */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">BMI</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Value:</span>
                <span className="font-medium">{bmi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className={`font-medium ${getStatusColor(mockHealthMetrics.bmi.category)}`}>
                  {mockHealthMetrics.bmi.category}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-3">
                Calculated from {mockUser.height}cm height and {mockUser.weight}kg weight
              </div>
            </div>
          </div>

          {/* Nutrition */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Apple className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Nutrition</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Calories:</span>
                <span className="font-medium">{nutrition.calories}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Protein:</span>
                <span className="font-medium">{nutrition.protein}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Carbs:</span>
                <span className="font-medium">{nutrition.carbs}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fat:</span>
                <span className="font-medium">{nutrition.fat}g</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Water:</span>
                <span className="font-medium">{nutrition.water}L</span>
              </div>
              <div className="text-sm text-gray-500 mt-3">
                Last meal: {nutrition.lastMeal}
              </div>
            </div>
          </div>

          {/* Blood Pressure */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Blood Pressure</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Systolic:</span>
                <span className="font-medium">{bloodPressure.systolic} mmHg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Diastolic:</span>
                <span className="font-medium">{bloodPressure.diastolic} mmHg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className={`font-medium ${getStatusColor(bloodPressure.category)}`}>
                  {bloodPressure.category}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-3">
                Last reading: {bloodPressure.lastReading}
              </div>
            </div>
          </div>

          {/* Sunlight Exposure */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Sun className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Sunlight Exposure</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Today:</span>
                <span className="font-medium">{sunlightExposure.minutes} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">UV Index:</span>
                <span className="font-medium">{sunlightExposure.uvIndex}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Vitamin D:</span>
                <span className={`font-medium ${getStatusColor(sunlightExposure.vitaminDLevel)}`}>
                  {sunlightExposure.vitaminDLevel}
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-3">
                {sunlightExposure.lastExposure}
              </div>
            </div>
          </div>

          {/* Bio-fluids */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Droplets className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Bio-fluids</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Glucose:</span>
                  <span className={`font-medium ${getStatusColor(bioFluids.glucose.status)}`}>
                    {bioFluids.glucose.value} mg/dL
                  </span>
                </div>
                <div className="text-xs text-gray-500">{bioFluids.glucose.status}</div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Total Cholesterol:</span>
                  <span className="font-medium">{bioFluids.cholesterol.total} mg/dL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">LDL: {bioFluids.cholesterol.ldl}</span>
                  <span className="text-gray-500">HDL: {bioFluids.cholesterol.hdl}</span>
                </div>
                <div className={`text-xs ${getStatusColor(bioFluids.cholesterol.status)} mt-1`}>
                  {bioFluids.cholesterol.status}
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-3">
                Last test: {bioFluids.lastTest}
              </div>
            </div>
          </div>

          {/* Stress Level */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Stress Level</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Current:</span>
                <span className="font-medium">{stressLevel.current}/10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average:</span>
                <span className="font-medium">{stressLevel.average}/10</span>
              </div>
              <div className="mt-3">
                <div className="text-sm text-gray-600 mb-2">Main triggers:</div>
                <div className="flex flex-wrap gap-1">
                  {stressLevel.triggers.map((trigger, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {trigger}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-gray-500 mt-3">
                {stressLevel.lastAssessment}
              </div>
            </div>
          </div>

          {/* Air Quality */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <Wind className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Air Quality</h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">AQI:</span>
                <span className="font-medium">{airQuality.aqi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Category:</span>
                <span className={`font-medium ${getStatusColor(airQuality.category)}`}>
                  {airQuality.category}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Location:</span>
                <span className="font-medium">{airQuality.location}</span>
              </div>
              <div className="mt-3">
                <div className="text-sm text-gray-600 mb-2">Pollutants:</div>
                <div className="flex flex-wrap gap-1">
                  {airQuality.pollutants.map((pollutant, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {pollutant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;