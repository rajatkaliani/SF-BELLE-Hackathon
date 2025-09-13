"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, TrendingUp, Target, RefreshCw, Lightbulb } from "lucide-react"
import { RadialProgress } from "./radial-progress"
import { ScoreBreakdown } from "./score-breakdown"
import { Moon, Dumbbell, Apple, Heart, Thermometer, User, Droplets } from "lucide-react"

export function HealthScoreDashboard() {
  // Mock health data - in real app this would come from state/API
  const overallScore = 72

  const scoreCategories = [
    {
      name: "Sleep Quality",
      score: 65,
      weight: 20,
      icon: Moon,
      description: "Sleep duration and quality assessment",
      status: "fair" as const,
    },
    {
      name: "Physical Fitness",
      score: 85,
      weight: 18,
      icon: Dumbbell,
      description: "Activity level, steps, and exercise frequency",
      status: "excellent" as const,
    },
    {
      name: "Nutrition",
      score: 78,
      weight: 16,
      icon: Apple,
      description: "Caloric intake and macronutrient balance",
      status: "good" as const,
    },
    {
      name: "Cardiovascular",
      score: 82,
      weight: 15,
      icon: Heart,
      description: "Heart rate, blood pressure, and circulation",
      status: "excellent" as const,
    },
    {
      name: "Vital Signs",
      score: 88,
      weight: 12,
      icon: Thermometer,
      description: "SpO₂, glucose levels, and other vitals",
      status: "excellent" as const,
    },
    {
      name: "Body Composition",
      score: 75,
      weight: 10,
      icon: User,
      description: "BMI, weight management, and body metrics",
      status: "good" as const,
    },
    {
      name: "Biomarkers",
      score: 70,
      weight: 9,
      icon: Droplets,
      description: "Blood work, cholesterol, and lab results",
      status: "good" as const,
    },
  ]

  const blueprintTips = [
    "Prioritize 8 hours of quality sleep to boost your overall score by 15-20 points",
    "Your cardiovascular health is excellent - maintain current activity levels",
    "Consider intermittent fasting to improve metabolic markers",
    "Schedule quarterly blood work to track biomarker improvements",
  ]

  const getScoreImprovement = () => {
    const previousScore = 68 // Mock previous score
    const improvement = overallScore - previousScore
    return improvement > 0 ? `+${improvement}` : `${improvement}`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Blueprint Health Score</h1>
          <p className="text-muted-foreground mt-2">Your comprehensive health rating based on all metrics</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-3 py-1">
            <TrendingUp className="w-4 h-4 mr-2" />
            {getScoreImprovement()} this week
          </Badge>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Recalculate
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Score Display */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Overall Score
            </CardTitle>
            <CardDescription>Based on 7 key health categories</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <RadialProgress score={overallScore} size={200} strokeWidth={20} />
            <div className="mt-6 text-center space-y-2">
              <div className="text-sm text-muted-foreground">Score Range</div>
              <div className="flex items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span>0-39 Poor</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span>40-59 Fair</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>60-79 Good</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span>80+ Excellent</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Breakdown */}
        <div className="lg:col-span-2">
          <ScoreBreakdown categories={scoreCategories} />
        </div>
      </div>

      {/* Blueprint Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Blueprint Tips for Improvement
          </CardTitle>
          <CardDescription>Personalized recommendations to boost your health score</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blueprintTips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-3 h-3 text-primary" />
                </div>
                <p className="text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Historical Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Score History</CardTitle>
          <CardDescription>Your health score progression over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">65</div>
              <div className="text-xs text-muted-foreground">30 days ago</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">68</div>
              <div className="text-xs text-muted-foreground">7 days ago</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">72</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+7 points</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
