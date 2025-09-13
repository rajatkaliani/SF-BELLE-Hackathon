"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { Thermometer } from "lucide-react"

const mockVitalsData = [
  { date: "Mon", spo2: 97, glucose: 95, skinHealth: 6 },
  { date: "Tue", spo2: 98, glucose: 88, skinHealth: 6 },
  { date: "Wed", spo2: 96, glucose: 102, skinHealth: 5 },
  { date: "Thu", spo2: 99, glucose: 85, skinHealth: 7 },
  { date: "Fri", spo2: 97, glucose: 92, skinHealth: 6 },
  { date: "Sat", spo2: 98, glucose: 89, skinHealth: 7 },
  { date: "Sun", spo2: 97, glucose: 94, skinHealth: 6 },
]

export function VitalsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-primary" />
          Vital Signs Trends
        </CardTitle>
        <CardDescription>SpO₂, glucose levels, and skin health over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockVitalsData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis yAxisId="spo2" domain={[90, 100]} orientation="left" className="text-xs" />
              <YAxis yAxisId="glucose" domain={[70, 120]} orientation="right" className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
                formatter={(value, name) => [
                  `${value}${name === "spo2" ? "%" : name === "glucose" ? " mg/dL" : "/10"}`,
                  name === "spo2" ? "SpO₂" : name === "glucose" ? "Glucose" : "Skin Health",
                ]}
              />
              <ReferenceLine yAxisId="spo2" y={95} stroke="hsl(var(--chart-1))" strokeDasharray="5 5" />
              <ReferenceLine yAxisId="glucose" y={100} stroke="hsl(var(--chart-2))" strokeDasharray="5 5" />
              <Line
                yAxisId="spo2"
                type="monotone"
                dataKey="spo2"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 4 }}
                name="spo2"
              />
              <Line
                yAxisId="glucose"
                type="monotone"
                dataKey="glucose"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                name="glucose"
              />
              <Line
                yAxisId="spo2"
                type="monotone"
                dataKey="skinHealth"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
                dot={{ fill: "hsl(var(--chart-4))", strokeWidth: 2, r: 4 }}
                name="skinHealth"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-between items-center mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-1 rounded-full" />
            <span>SpO₂ (%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-2 rounded-full" />
            <span>Glucose (mg/dL)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-4 rounded-full" />
            <span>Skin Health (1-10)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
