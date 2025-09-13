"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Activity } from "lucide-react"

const mockActivityData = [
  { date: "Mon", steps: 8432, activityScore: 3, workouts: 1 },
  { date: "Tue", steps: 12543, activityScore: 4, workouts: 1 },
  { date: "Wed", steps: 6789, activityScore: 2, workouts: 0 },
  { date: "Thu", steps: 15234, activityScore: 4, workouts: 2 },
  { date: "Fri", steps: 9876, activityScore: 3, workouts: 1 },
  { date: "Sat", steps: 18765, activityScore: 4, workouts: 1 },
  { date: "Sun", steps: 7654, activityScore: 2, workouts: 0 },
]

export function ActivityChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" />
          Activity Level Trend
        </CardTitle>
        <CardDescription>Daily steps and activity score over the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockActivityData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis yAxisId="steps" orientation="left" className="text-xs" />
              <YAxis yAxisId="score" orientation="right" domain={[0, 4]} className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Line
                yAxisId="steps"
                type="monotone"
                dataKey="steps"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                name="Steps"
              />
              <Line
                yAxisId="score"
                type="monotone"
                dataKey="activityScore"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                name="Activity Score"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-1 rounded-full" />
            <span>Daily Steps</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-2 rounded-full" />
            <span>Activity Score (1-4)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
