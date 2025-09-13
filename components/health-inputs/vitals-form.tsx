"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Thermometer, Save } from "lucide-react"

interface VitalsData {
  spo2: string
  glucose: string
  skinHealth: string
}

export function VitalsForm() {
  const [vitalsData, setVitalsData] = useState<VitalsData>({
    spo2: "",
    glucose: "",
    skinHealth: "",
  })

  const handleSave = () => {
    console.log("Saving vitals data:", vitalsData)
  }

  const getSpo2Status = (spo2: number) => {
    if (spo2 >= 95) return { status: "Normal", color: "text-green-600" }
    if (spo2 >= 90) return { status: "Low", color: "text-yellow-600" }
    return { status: "Critical", color: "text-red-600" }
  }

  const getGlucoseStatus = (glucose: number) => {
    if (glucose < 70) return { status: "Low", color: "text-yellow-600" }
    if (glucose <= 100) return { status: "Normal", color: "text-green-600" }
    if (glucose <= 125) return { status: "Elevated", color: "text-orange-600" }
    return { status: "High", color: "text-red-600" }
  }

  const getSkinHealthStatus = (rating: number) => {
    if (rating >= 8) return { status: "Excellent", color: "text-green-600" }
    if (rating >= 6) return { status: "Good", color: "text-blue-600" }
    if (rating >= 4) return { status: "Fair", color: "text-yellow-600" }
    return { status: "Poor", color: "text-red-600" }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-primary" />
          Vital Signs
        </CardTitle>
        <CardDescription>Track your key health indicators</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="spo2">Blood Oxygen (SpO₂) %</Label>
          <Input
            id="spo2"
            type="number"
            min="0"
            max="100"
            placeholder="98"
            value={vitalsData.spo2}
            onChange={(e) => setVitalsData({ ...vitalsData, spo2: e.target.value })}
          />
          {vitalsData.spo2 && (
            <div className="text-sm">
              <span className={getSpo2Status(Number.parseFloat(vitalsData.spo2)).color}>
                {getSpo2Status(Number.parseFloat(vitalsData.spo2)).status}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="glucose">Blood Glucose (mg/dL)</Label>
          <Input
            id="glucose"
            type="number"
            placeholder="90"
            value={vitalsData.glucose}
            onChange={(e) => setVitalsData({ ...vitalsData, glucose: e.target.value })}
          />
          {vitalsData.glucose && (
            <div className="text-sm">
              <span className={getGlucoseStatus(Number.parseFloat(vitalsData.glucose)).color}>
                {getGlucoseStatus(Number.parseFloat(vitalsData.glucose)).status}
              </span>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="skinHealth">Skin Health Rating (1-10)</Label>
          <Input
            id="skinHealth"
            type="number"
            min="1"
            max="10"
            placeholder="7"
            value={vitalsData.skinHealth}
            onChange={(e) => setVitalsData({ ...vitalsData, skinHealth: e.target.value })}
          />
          {vitalsData.skinHealth && (
            <div className="text-sm">
              <span className={getSkinHealthStatus(Number.parseFloat(vitalsData.skinHealth)).color}>
                {getSkinHealthStatus(Number.parseFloat(vitalsData.skinHealth)).status}
              </span>
            </div>
          )}
        </div>

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Vitals
        </Button>
      </CardContent>
    </Card>
  )
}
