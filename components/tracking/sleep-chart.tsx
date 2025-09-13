"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { Moon } from "lucide-react"

const mockSleepData = [
  { date: "Mon", actual: 6.5, target: 8, quality: 3 },
  { date: "Tue", actual: 7.2, target: 8, quality: 4 },
  { date: "Wed", actual: 5.8, target: 8, quality: 2 },
  { date: "Thu", actual: 8.1, target: 8, quality: 4 },
  { date: "Fri", actual: 7.5, target: 8, quality: 3 },
  { date: "Sat", actual: 8.5, target: 8, quality: 4 },
  { date: "Sun", actual: 7.8, target: 8, quality: 3 },
]

export function SleepChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Moon className="w-5 h-5 text-primary" />
          Sleep Duration Tracking
        </CardTitle>
        <CardDescription>Actual vs target sleep hours with quality indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockSleepData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis domain={[0, 10]} className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value, name) => [
                  `${value}${name === "actual" || name === "target" ? "h" : "/4"}`,
                  name === "actual" ? "Actual Sleep" : name === "target" ? "Target Sleep" : "Quality",
                ]}
              />
              <ReferenceLine y={8} stroke="hsl(var(--primary))" strokeDasharray="5 5" />
              <Bar dataKey="actual" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} name="actual" />
              <Bar dataKey="quality" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} name="quality" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-1 rounded-full" />
            <span>Actual Sleep (hours)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-3 rounded-full" />
            <span>Sleep Quality (1-4)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 bg-primary" />
            <span>Target (8h)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
