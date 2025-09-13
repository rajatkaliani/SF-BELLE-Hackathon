"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ScoreCategory {
  name: string
  score: number
  weight: number
  icon: React.ComponentType<{ className?: string }>
  description: string
  status: "excellent" | "good" | "fair" | "poor"
}

interface ScoreBreakdownProps {
  categories: ScoreCategory[]
}

export function ScoreBreakdown({ categories }: ScoreBreakdownProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200"
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "fair":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "poor":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-500"
      case "good":
        return "bg-blue-500"
      case "fair":
        return "bg-yellow-500"
      case "poor":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Score Breakdown</CardTitle>
        <CardDescription>Detailed analysis of your health metrics</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => {
          const Icon = category.icon
          return (
            <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{category.name}</h4>
                    <Badge className={`text-xs ${getStatusColor(category.status)}`} variant="outline">
                      {category.status}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{category.score}/100</div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                <div className="flex items-center gap-2">
                  <Progress value={category.score} className="flex-1 h-2" />
                  <span className="text-xs text-muted-foreground">{category.weight}% weight</span>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
