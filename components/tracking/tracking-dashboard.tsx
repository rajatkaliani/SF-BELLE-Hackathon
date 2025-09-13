"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Calendar } from "lucide-react"
import { ActivityChart } from "./activity-chart"
import { SleepChart } from "./sleep-chart"
import { VitalsChart } from "./vitals-chart"

export function TrackingDashboard() {
  const weeklyStats = [
    { label: "Avg Steps", value: "11,470", change: "+12%", trend: "up" },
    { label: "Avg Sleep", value: "7.3h", change: "-0.5h", trend: "down" },
    { label: "Avg SpO₂", value: "97.4%", change: "+0.2%", trend: "up" },
    { label: "Avg Glucose", value: "92 mg/dL", change: "-3 mg/dL", trend: "up" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Health Tracking</h1>
          <p className="text-muted-foreground mt-2">Monitor your health metrics and progress over time</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-3 py-1">
            <Calendar className="w-4 h-4 mr-2" />
            Last 7 Days
          </Badge>
          <Badge variant="outline" className="px-3 py-1">
            <TrendingUp className="w-4 h-4 mr-2" />
            Trending Up
          </Badge>
        </div>
      </div>

      {/* Weekly Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weeklyStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.change}
                  </div>
                  <div className="text-xs text-muted-foreground">vs last week</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Tabs */}
      <Tabs defaultValue="activity" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="activity">Activity & Steps</TabsTrigger>
          <TabsTrigger value="sleep">Sleep Patterns</TabsTrigger>
          <TabsTrigger value="vitals">Vital Signs</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <ActivityChart />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Weekly Goal</CardTitle>
                  <CardDescription>Step target progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">80,290</div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-medium">+15%</div>
                      <div className="text-xs text-muted-foreground">vs target</div>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Active Days</CardTitle>
                  <CardDescription>Days with 10k+ steps</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5/7</div>
                  <div className="text-sm text-muted-foreground mt-1">71% of week</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Workouts</CardTitle>
                  <CardDescription>Exercise sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-muted-foreground mt-1">This week</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <SleepChart />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Sleep Debt</CardTitle>
                  <CardDescription>Hours below target</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-600">-3.1h</div>
                  <div className="text-sm text-muted-foreground mt-1">This week</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Avg Quality</CardTitle>
                  <CardDescription>Sleep quality rating</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3.3/4</div>
                  <div className="text-sm text-green-600 mt-1">Good quality</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Consistency</CardTitle>
                  <CardDescription>Bedtime variance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">±45min</div>
                  <div className="text-sm text-muted-foreground mt-1">Average deviation</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="vitals" className="mt-6">
          <div className="grid grid-cols-1 gap-6">
            <VitalsChart />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">SpO₂ Range</CardTitle>
                  <CardDescription>Blood oxygen levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">96-99%</div>
                  <div className="text-sm text-muted-foreground mt-1">Optimal range</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Glucose Stability</CardTitle>
                  <CardDescription>Blood sugar variance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">±8 mg/dL</div>
                  <div className="text-sm text-green-600 mt-1">Stable levels</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Skin Trend</CardTitle>
                  <CardDescription>Health improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">+0.5</div>
                  <div className="text-sm text-muted-foreground mt-1">Points this week</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
