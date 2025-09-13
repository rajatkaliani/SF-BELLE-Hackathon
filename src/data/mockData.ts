// Mock data for RxMindr Blueprint application

export interface User {
  id: string;
  name: string;
  avatar?: string;
  healthScore: number;
  age: number;
  height: number; // in cm
  weight: number; // in kg
  email: string;
}

export interface HealthMetrics {
  sleep: {
    hours: number;
    quality: 'Poor' | 'Fair' | 'Good' | 'Excellent';
    bedtime: string;
    wakeTime: string;
  };
  bmi: {
    value: number;
    category: 'Underweight' | 'Normal' | 'Overweight' | 'Obese';
  };
  nutrition: {
    calories: number;
    protein: number; // in grams
    carbs: number; // in grams
    fat: number; // in grams
    water: number; // in liters
    lastMeal: string;
  };
  bloodPressure: {
    systolic: number;
    diastolic: number;
    category: 'Normal' | 'Elevated' | 'High Stage 1' | 'High Stage 2';
    lastReading: string;
  };
  sunlightExposure: {
    minutes: number;
    uvIndex: number;
    vitaminDLevel: 'Low' | 'Normal' | 'High';
    lastExposure: string;
  };
  bioFluids: {
    glucose: {
      value: number; // mg/dL
      status: 'Low' | 'Normal' | 'High';
    };
    cholesterol: {
      total: number; // mg/dL
      ldl: number;
      hdl: number;
      status: 'Good' | 'Borderline' | 'High';
    };
    lastTest: string;
  };
  stressLevel: {
    current: number; // 1-10 scale
    average: number;
    triggers: string[];
    lastAssessment: string;
  };
  airQuality: {
    aqi: number;
    category: 'Good' | 'Moderate' | 'Unhealthy for Sensitive Groups' | 'Unhealthy' | 'Very Unhealthy';
    location: string;
    pollutants: string[];
  };
}

export interface Suggestion {
  id: string;
  text: string;
  category: 'nutrition' | 'exercise' | 'sleep' | 'hydration' | 'mental' | 'general';
  priority: 'high' | 'medium' | 'low';
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// Mock user data
export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  healthScore: 142, // Unlimited HAI score - shows user has completed many suggestions
  age: 28,
  height: 175, // 5'9"
  weight: 70, // 154 lbs
  email: 'alex.johnson@email.com'
};

// Additional mock users with various unlimited HAI scores
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    healthScore: 142,
    age: 28,
    height: 175,
    weight: 70,
    email: 'alex.johnson@email.com'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    healthScore: 89,
    age: 32,
    height: 165,
    weight: 58,
    email: 'sarah.chen@email.com'
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    healthScore: 203,
    age: 25,
    height: 180,
    weight: 75,
    email: 'mike.rodriguez@email.com'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    healthScore: 35,
    age: 29,
    height: 170,
    weight: 65,
    email: 'emma.wilson@email.com'
  },
  {
    id: '5',
    name: 'David Kim',
    healthScore: 156,
    age: 34,
    height: 178,
    weight: 82,
    email: 'david.kim@email.com'
  }
];

// Mock health metrics
export const mockHealthMetrics: HealthMetrics = {
  sleep: {
    hours: 7.2,
    quality: 'Good',
    bedtime: '10:30 PM',
    wakeTime: '6:15 AM'
  },
  bmi: {
    value: 22.9,
    category: 'Normal'
  },
  nutrition: {
    calories: 2150,
    protein: 85,
    carbs: 280,
    fat: 75,
    water: 2.1,
    lastMeal: '7:30 PM - Grilled salmon with quinoa'
  },
  bloodPressure: {
    systolic: 118,
    diastolic: 76,
    category: 'Normal',
    lastReading: '2 days ago'
  },
  sunlightExposure: {
    minutes: 45,
    uvIndex: 6,
    vitaminDLevel: 'Normal',
    lastExposure: 'Today at 2:30 PM'
  },
  bioFluids: {
    glucose: {
      value: 95,
      status: 'Normal'
    },
    cholesterol: {
      total: 185,
      ldl: 110,
      hdl: 55,
      status: 'Good'
    },
    lastTest: '3 weeks ago'
  },
  stressLevel: {
    current: 4,
    average: 5,
    triggers: ['Work deadlines', 'Traffic', 'Poor sleep'],
    lastAssessment: 'Today at 9:00 AM'
  },
  airQuality: {
    aqi: 42,
    category: 'Good',
    location: 'Downtown Area',
    pollutants: ['PM2.5', 'Ozone']
  }
};

// Helper function to calculate BMI
export const calculateBMI = (weight: number, height: number): number => {
  return Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
};

// Helper function to get BMI category
export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

// Mock daily suggestions
export const mockSuggestions: Suggestion[] = [
  {
    id: 'sug-1',
    text: 'Schedule blood pressure check - your last reading was 2 days ago and monitoring is crucial',
    category: 'general',
    priority: 'high'
  },
  {
    id: 'sug-2',
    text: 'Reduce sodium intake to under 2300mg daily to support cardiovascular health',
    category: 'nutrition',
    priority: 'medium'
  },
  {
    id: 'sug-3',
    text: 'Walk 10,000 steps today to maintain your current fitness level',
    category: 'exercise',
    priority: 'low'
  },
  {
    id: 'sug-4',
    text: 'Practice stress management techniques - your current stress level is moderate',
    category: 'mental',
    priority: 'medium'
  },
  {
    id: 'sug-5',
    text: 'Maintain 7-8 hours of sleep to support recovery and mental clarity',
    category: 'sleep',
    priority: 'low'
  }
];

// Mock chat messages
export const mockMessages: Message[] = [
  {
    id: 'msg-1',
    text: 'Hello! I\'m your AI Health Assistant. How can I help you improve your health today?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 3600000) // 1 hour ago
  },
  {
    id: 'msg-2',
    text: 'Hi! I\'ve been feeling tired lately. Any suggestions?',
    sender: 'user',
    timestamp: new Date(Date.now() - 3500000) // 58 minutes ago
  },
  {
    id: 'msg-3',
    text: 'I understand you\'re feeling tired. This could be due to several factors like sleep quality, hydration, or nutrition. Let me ask a few questions to help you better. How many hours of sleep did you get last night?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 3400000) // 56 minutes ago
  },
  {
    id: 'msg-4',
    text: 'I got about 6 hours of sleep.',
    sender: 'user',
    timestamp: new Date(Date.now() - 3300000) // 55 minutes ago
  },
  {
    id: 'msg-5',
    text: 'That\'s below the recommended 7-8 hours for most adults. Try to establish a consistent bedtime routine and aim for earlier sleep tonight. Also, make sure you\'re staying hydrated throughout the day. Would you like some specific tips for better sleep?',
    sender: 'ai',
    timestamp: new Date(Date.now() - 3200000) // 53 minutes ago
  }
];

// Function to add a new message (for demo purposes)
export const addMessage = (text: string, sender: 'user' | 'ai'): Message => {
  return {
    id: `msg-${Date.now()}`,
    text,
    sender,
    timestamp: new Date()
  };
};

// Function to generate AI response (mock)
export const generateAIResponse = (userMessage: string): Message => {
  const responses = [
    "That's a great question! Based on your health profile, I'd recommend focusing on consistent sleep patterns and regular hydration.",
    "I understand your concern. Let me suggest some evidence-based approaches that might help improve your situation.",
    "Thank you for sharing that information. Here are some personalized recommendations based on your current health data.",
    "That's very insightful! Maintaining good health habits is key. Let me provide some specific guidance for your situation.",
    "I appreciate you asking about this. Based on current health research, here's what I'd recommend for your specific needs."
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  
  return addMessage(randomResponse, 'ai');
};