"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Moon, Save } from "lucide-react"

interface SleepData {
  hours: string
  quality: "poor" | "fair" | "good" | "excellent"
  bedtime: string
  wakeTime: string
}

export function SleepForm() {
  const [sleepData, setSleepData] = useState<SleepData>({
    hours: "",
    quality: "good",
    bedtime: "",
    wakeTime: "",
  })

  const handleSave = () => {
    console.log("Saving sleep data:", sleepData)
  }

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "poor":
        return "text-red-600"
      case "fair":
        return "text-orange-600"
      case "good":
        return "text-green-600"
      case "excellent":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Moon className="w-5 h-5 text-primary" />
          Sleep Quality
        </CardTitle>
        <CardDescription>Track your sleep duration and quality</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bedtime">Bedtime</Label>
            <Input
              id="bedtime"
              type="time"
              value={sleepData.bedtime}
              onChange={(e) => setSleepData({ ...sleepData, bedtime: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="wakeTime">Wake Time</Label>
            <Input
              id="wakeTime"
              type="time"
              value={sleepData.wakeTime}
              onChange={(e) => setSleepData({ ...sleepData, wakeTime: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hours">Sleep Duration (hours)</Label>
          <Input
            id="hours"
            type="number"
            step="0.5"
            placeholder="7.5"
            value={sleepData.hours}
            onChange={(e) => setSleepData({ ...sleepData, hours: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quality">Sleep Quality</Label>
          <Select
            value={sleepData.quality}
            onValueChange={(value: "poor" | "fair" | "good" | "excellent") =>
              setSleepData({ ...sleepData, quality: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="poor">Poor</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {sleepData.quality && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Quality Rating</span>
              <span className={`text-sm font-medium capitalize ${getQualityColor(sleepData.quality)}`}>
                {sleepData.quality}
              </span>
            </div>
          </div>
        )}

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Sleep Data
        </Button>
      </CardContent>
    </Card>
  )
}
