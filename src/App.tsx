import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import HealthIndexBadge from './components/HealthIndexBadge';
import SuggestionsCard from './components/SuggestionsCard';
import ChatbotCard from './components/ChatbotCard';
import UserProfile from './pages/UserProfile';
import { mockUser, mockSuggestions, mockMessages, generateAIResponse, addMessage, Message } from './data/mockData';

// Dashboard Component
const Dashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const handleSendMessage = (messageText: string) => {
    // Add user message
    const userMessage = addMessage(messageText, 'user');
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(messageText);
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section - Profile and HAI Score */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 space-y-4 lg:space-y-0">
          {/* Left Side - Profile */}
          <div className="flex items-center space-x-6">
            <ProfileCard 
              userName={mockUser.name}
              userAvatar={mockUser.avatar}
              className=""
            />
          </div>
          
          {/* Right Side - HAI Score */}
          <div className="flex justify-center lg:justify-end">
            <HealthIndexBadge 
              score={mockUser.healthScore}
              className=""
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Daily Suggestions */}
          <div className="space-y-6">
            <SuggestionsCard 
              suggestions={mockSuggestions}
              className=""
            />
          </div>

          {/* Right Column - AI Health Assistant */}
          <div className="space-y-6">
            <ChatbotCard 
              messages={messages}
              onSendMessage={handleSendMessage}
              className=""
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            RxMindr Blueprint - Your AI-Powered Health Companion
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Powered by advanced health analytics and personalized AI recommendations
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
