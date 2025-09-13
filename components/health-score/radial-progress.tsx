"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

interface RadialProgressProps {
  score: number
  size?: number
  strokeWidth?: number
}

export function RadialProgress({ score, size = 200, strokeWidth = 20 }: RadialProgressProps) {
  const data = [
    { name: "completed", value: score },
    { name: "remaining", value: 100 - score },
  ]

  const getScoreColor = (score: number) => {
    if (score >= 80) return "hsl(var(--chart-1))" // Green
    if (score >= 60) return "hsl(var(--chart-3))" // Yellow
    if (score >= 40) return "hsl(var(--chart-5))" // Orange
    return "hsl(var(--destructive))" // Red
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Needs Improvement"
  }

  return (
    <div className="relative flex items-center justify-center">
      <ResponsiveContainer width={size} height={size}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size / 2 - strokeWidth - 10}
            outerRadius={size / 2 - 10}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            <Cell fill={getScoreColor(score)} />
            <Cell fill="hsl(var(--muted))" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold" style={{ color: getScoreColor(score) }}>
          {score}
        </div>
        <div className="text-sm text-muted-foreground">/ 100</div>
        <div className="text-xs font-medium mt-1" style={{ color: getScoreColor(score) }}>
          {getScoreLabel(score)}
        </div>
      </div>
    </div>
  )
}
