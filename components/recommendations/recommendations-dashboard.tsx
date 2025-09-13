"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Apple, Moon, Heart, Brain, Shield, Zap, Target, TrendingUp } from "lucide-react"
import { RecommendationCard } from "./recommendation-card"

export function RecommendationsDashboard() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Mock health data - in real app this would come from state/API
  const mockHealthData = {
    bmi: 24.2,
    sleepHours: 6.5,
    steps: 8432,
    spo2: 97,
    glucose: 95,
    skinHealth: 6,
  }

  const recommendations = [
    {
      title: "Sleep Optimization",
      description: "Improve sleep duration and quality",
      priority: "high" as const,
      category: "Sleep",
      icon: Moon,
      metrics: {
        current: "6.5",
        target: "8.0",
        unit: "hours",
      },
      recommendations: [
        "Maintain consistent sleep schedule (10 PM - 6 AM)",
        "Keep bedroom temperature at 65-68°F (18-20°C)",
        "Use blackout curtains and blue light blocking glasses 2 hours before bed",
        "Take 0.5mg melatonin 30 minutes before bedtime",
        "Avoid caffeine after 2 PM",
      ],
    },
    {
      title: "Cardiovascular Health",
      description: "Optimize heart health and circulation",
      priority: "medium" as const,
      category: "Fitness",
      icon: Heart,
      metrics: {
        current: "8,432",
        target: "12,000",
        unit: "steps",
      },
      recommendations: [
        "Aim for 150 minutes of moderate aerobic activity weekly",
        "Include 2-3 strength training sessions per week",
        "Take walking breaks every 2 hours during work",
        "Monitor resting heart rate and HRV daily",
        "Consider Zone 2 cardio training 3x per week",
      ],
    },
    {
      title: "Nutrition Protocol",
      description: "Optimize nutrient intake and timing",
      priority: "medium" as const,
      category: "Nutrition",
      icon: Apple,
      recommendations: [
        "Eat within 12-hour window (7 AM - 7 PM)",
        "Consume 1g protein per kg body weight daily",
        "Include 5-7 servings of colorful vegetables",
        "Take Omega-3 supplement (1000mg EPA/DHA)",
        "Drink 2-3L water daily, more on training days",
        "Limit processed foods and added sugars",
      ],
    },
    {
      title: "Cognitive Enhancement",
      description: "Support brain health and mental performance",
      priority: "low" as const,
      category: "Mental",
      icon: Brain,
      recommendations: [
        "Practice 10-15 minutes daily meditation",
        "Engage in challenging mental activities",
        "Limit screen time 1 hour before bed",
        "Consider Lion's Mane mushroom supplement",
        "Practice deep breathing exercises",
        "Maintain social connections and relationships",
      ],
    },
    {
      title: "Skin Health Protocol",
      description: "Improve skin quality and appearance",
      priority: "low" as const,
      category: "Dermatology",
      icon: Shield,
      metrics: {
        current: "6",
        target: "8",
        unit: "/10",
      },
      recommendations: [
        "Use broad-spectrum SPF 30+ sunscreen daily",
        "Apply retinoid cream 2-3 times per week",
        "Use gentle cleanser and moisturizer twice daily",
        "Consider red light therapy 10-15 minutes daily",
        "Stay hydrated and eat antioxidant-rich foods",
        "Get adequate sleep for skin repair",
      ],
    },
    {
      title: "Metabolic Optimization",
      description: "Enhance glucose control and energy",
      priority: "medium" as const,
      category: "Metabolic",
      icon: Zap,
      metrics: {
        current: "95",
        target: "80-90",
        unit: "mg/dL",
      },
      recommendations: [
        "Practice intermittent fasting (16:8 protocol)",
        "Take 10-minute walks after meals",
        "Include fiber-rich foods with each meal",
        "Consider berberine or metformin (consult doctor)",
        "Monitor continuous glucose if available",
        "Prioritize protein and healthy fats",
      ],
    },
  ]

  const categories = [
    { id: "all", label: "All Recommendations", count: recommendations.length },
    { id: "high", label: "High Priority", count: recommendations.filter((r) => r.priority === "high").length },
    { id: "sleep", label: "Sleep", count: recommendations.filter((r) => r.category === "Sleep").length },
    { id: "fitness", label: "Fitness", count: recommendations.filter((r) => r.category === "Fitness").length },
    { id: "nutrition", label: "Nutrition", count: recommendations.filter((r) => r.category === "Nutrition").length },
  ]

  const filteredRecommendations = recommendations.filter((rec) => {
    if (activeCategory === "all") return true
    if (activeCategory === "high") return rec.priority === "high"
    return rec.category.toLowerCase() === activeCategory
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Health Recommendations</h1>
          <p className="text-muted-foreground mt-2">Personalized Blueprint protocol based on your health metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-3 py-1">
            <Target className="w-4 h-4 mr-2" />
            {filteredRecommendations.length} Active Protocols
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <TrendingUp className="w-4 h-4 mr-2" />
            Blueprint Score: 72/100
          </Badge>
        </div>
      </div>

      {/* Health Status Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Current Health Status</CardTitle>
          <CardDescription>Key metrics driving your recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">{mockHealthData.bmi}</div>
              <div className="text-xs text-muted-foreground">BMI</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{mockHealthData.sleepHours}h</div>
              <div className="text-xs text-muted-foreground">Sleep</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{mockHealthData.steps.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Steps</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-600">{mockHealthData.spo2}%</div>
              <div className="text-xs text-muted-foreground">SpO₂</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-600">{mockHealthData.glucose}</div>
              <div className="text-xs text-muted-foreground">Glucose</div>
            </div>
            <div className="text-center p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{mockHealthData.skinHealth}/10</div>
              <div className="text-xs text-muted-foreground">Skin</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Filters */}
      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory} className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRecommendations.map((rec, index) => (
              <RecommendationCard key={index} {...rec} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {filteredRecommendations.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Recommendations Found</h3>
            <p className="text-muted-foreground">Try selecting a different category or complete more health inputs.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
