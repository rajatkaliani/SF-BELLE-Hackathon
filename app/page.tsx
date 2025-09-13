"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Activity, Heart, Target, Settings, BarChart3, Clipboard, Award } from "lucide-react"

import { BodyMetricsForm } from "@/components/health-inputs/body-metrics-form"
import { SleepForm } from "@/components/health-inputs/sleep-form"
import { ActivityForm } from "@/components/health-inputs/activity-form"
import { VitalsForm } from "@/components/health-inputs/vitals-form"
import { NutritionForm } from "@/components/health-inputs/nutrition-form"
import { BiofluidsForm } from "@/components/health-inputs/biofluids-form"
import { RecommendationsDashboard } from "@/components/recommendations/recommendations-dashboard"
import { TrackingDashboard } from "@/components/tracking/tracking-dashboard"
import { HealthScoreDashboard } from "@/components/health-score/health-score-dashboard"

type ActiveSection = "inputs" | "recommendations" | "tracking" | "health-score"

export default function RxMindrDashboard() {
  const [activeSection, setActiveSection] = useState<ActiveSection>("inputs")

  const sidebarItems = [
    { id: "inputs" as const, label: "Health Inputs", icon: Clipboard, description: "Enter your health data" },
    { id: "recommendations" as const, label: "Recommendations", icon: Target, description: "Personalized health tips" },
    { id: "tracking" as const, label: "Tracking", icon: BarChart3, description: "Monitor your progress" },
    { id: "health-score" as const, label: "Health Score", icon: Award, description: "Your overall health rating" },
  ]

  const renderMainContent = () => {
    switch (activeSection) {
      case "inputs":
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-balance">Health Inputs</h1>
                <p className="text-muted-foreground mt-2">
                  Enter your daily health metrics to get personalized insights
                </p>
              </div>
              <Badge variant="secondary" className="px-3 py-1">
                <Activity className="w-4 h-4 mr-2" />
                Active Monitoring
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BodyMetricsForm />
              <SleepForm />
              <ActivityForm />
              <VitalsForm />
              <NutritionForm />
              <BiofluidsForm />
            </div>
          </div>
        )

      case "recommendations":
        return <RecommendationsDashboard />

      case "tracking":
        return <TrackingDashboard />

      case "health-score":
        return <HealthScoreDashboard />

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-sidebar border-r border-sidebar-border p-6 min-h-screen">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-xl font-bold">RxMindr Blueprint</h2>
            </div>
            <p className="text-sm text-muted-foreground">Your personalized health dashboard</p>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors duration-200 ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                      : "hover:bg-sidebar-accent text-sidebar-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    <div
                      className={`text-xs ${isActive ? "text-sidebar-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      {item.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </nav>

          <div className="mt-8 pt-6 border-t border-sidebar-border">
            <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">{renderMainContent()}</div>
      </div>
    </div>
  )
}
