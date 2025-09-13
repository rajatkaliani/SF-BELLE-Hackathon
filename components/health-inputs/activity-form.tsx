"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dumbbell, Save } from "lucide-react"

interface ActivityData {
  steps: string
  workouts: string
  activityLevel: "sluggish" | "moderate" | "active" | "very-active"
  exerciseMinutes: string
}

export function ActivityForm() {
  const [activityData, setActivityData] = useState<ActivityData>({
    steps: "",
    workouts: "",
    activityLevel: "moderate",
    exerciseMinutes: "",
  })

  const handleSave = () => {
    console.log("Saving activity data:", activityData)
  }

  const getActivityLevelColor = (level: string) => {
    switch (level) {
      case "sluggish":
        return "text-red-600"
      case "moderate":
        return "text-yellow-600"
      case "active":
        return "text-green-600"
      case "very-active":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  const getActivityScore = (level: string) => {
    switch (level) {
      case "sluggish":
        return 1
      case "moderate":
        return 2
      case "active":
        return 3
      case "very-active":
        return 4
      default:
        return 2
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Dumbbell className="w-5 h-5 text-primary" />
          Physical Activity
        </CardTitle>
        <CardDescription>Track your daily movement and exercise</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="steps">Daily Steps</Label>
            <Input
              id="steps"
              type="number"
              placeholder="10000"
              value={activityData.steps}
              onChange={(e) => setActivityData({ ...activityData, steps: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="exerciseMinutes">Exercise Minutes</Label>
            <Input
              id="exerciseMinutes"
              type="number"
              placeholder="30"
              value={activityData.exerciseMinutes}
              onChange={(e) => setActivityData({ ...activityData, exerciseMinutes: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="workouts">Workouts Completed</Label>
          <Input
            id="workouts"
            type="number"
            placeholder="1"
            value={activityData.workouts}
            onChange={(e) => setActivityData({ ...activityData, workouts: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="activityLevel">Overall Activity Level</Label>
          <Select
            value={activityData.activityLevel}
            onValueChange={(value: "sluggish" | "moderate" | "active" | "very-active") =>
              setActivityData({ ...activityData, activityLevel: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sluggish">Sluggish</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="very-active">Very Active</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Activity Score</span>
            <div className="text-right">
              <div className="text-lg font-bold">{getActivityScore(activityData.activityLevel)}/4</div>
              <div className={`text-sm capitalize ${getActivityLevelColor(activityData.activityLevel)}`}>
                {activityData.activityLevel.replace("-", " ")}
              </div>
            </div>
          </div>
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Activity Data
        </Button>
      </CardContent>
    </Card>
  )
}
