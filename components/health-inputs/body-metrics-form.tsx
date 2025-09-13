"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Save } from "lucide-react"

interface BodyMetrics {
  weight: string
  weightUnit: "kg" | "lbs"
  height: string
  heightUnit: "cm" | "in"
}

export function BodyMetricsForm() {
  const [metrics, setMetrics] = useState<BodyMetrics>({
    weight: "",
    weightUnit: "kg",
    height: "",
    heightUnit: "cm",
  })

  const handleSave = () => {
    // TODO: Save to state management or API
    console.log("Saving body metrics:", metrics)
  }

  const calculateBMI = () => {
    if (!metrics.weight || !metrics.height) return null

    let weightInKg = Number.parseFloat(metrics.weight)
    let heightInM = Number.parseFloat(metrics.height)

    if (metrics.weightUnit === "lbs") {
      weightInKg = weightInKg * 0.453592
    }

    if (metrics.heightUnit === "in") {
      heightInM = heightInM * 0.0254
    } else {
      heightInM = heightInM / 100
    }

    const bmi = weightInKg / (heightInM * heightInM)
    return bmi.toFixed(1)
  }

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { category: "Underweight", color: "text-yellow-600" }
    if (bmi < 25) return { category: "Normal", color: "text-green-600" }
    if (bmi < 30) return { category: "Overweight", color: "text-orange-600" }
    return { category: "Obese", color: "text-red-600" }
  }

  const bmi = calculateBMI()
  const bmiInfo = bmi ? getBMICategory(Number.parseFloat(bmi)) : null

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-primary" />
          Body Metrics
        </CardTitle>
        <CardDescription>Track your weight and height for BMI calculation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="weight">Weight</Label>
            <div className="flex gap-2">
              <Input
                id="weight"
                type="number"
                placeholder="70"
                value={metrics.weight}
                onChange={(e) => setMetrics({ ...metrics, weight: e.target.value })}
                className="flex-1"
              />
              <Select
                value={metrics.weightUnit}
                onValueChange={(value: "kg" | "lbs") => setMetrics({ ...metrics, weightUnit: value })}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="lbs">lbs</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <div className="flex gap-2">
              <Input
                id="height"
                type="number"
                placeholder="175"
                value={metrics.height}
                onChange={(e) => setMetrics({ ...metrics, height: e.target.value })}
                className="flex-1"
              />
              <Select
                value={metrics.heightUnit}
                onValueChange={(value: "cm" | "in") => setMetrics({ ...metrics, heightUnit: value })}
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cm">cm</SelectItem>
                  <SelectItem value="in">in</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {bmi && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">BMI</span>
              <div className="text-right">
                <div className="text-lg font-bold">{bmi}</div>
                <div className={`text-sm ${bmiInfo?.color}`}>{bmiInfo?.category}</div>
              </div>
            </div>
          </div>
        )}

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Metrics
        </Button>
      </CardContent>
    </Card>
  )
}
