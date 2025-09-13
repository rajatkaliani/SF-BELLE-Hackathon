"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Droplets, Save } from "lucide-react"

interface BiofluidsData {
  cholesterolTotal: string
  cholesterolLDL: string
  cholesterolHDL: string
  triglycerides: string
  testDate: string
}

export function BiofluidsForm() {
  const [biofluidsData, setBiofluidsData] = useState<BiofluidsData>({
    cholesterolTotal: "",
    cholesterolLDL: "",
    cholesterolHDL: "",
    triglycerides: "",
    testDate: "",
  })

  const handleSave = () => {
    console.log("Saving biofluids data:", biofluidsData)
  }

  const getCholesterolStatus = (total: number, ldl: number, hdl: number) => {
    if (total < 200 && ldl < 100 && hdl > 40) {
      return { status: "Optimal", color: "text-green-600" }
    }
    if (total < 240 && ldl < 130) {
      return { status: "Borderline", color: "text-yellow-600" }
    }
    return { status: "High Risk", color: "text-red-600" }
  }

  const showStatus = biofluidsData.cholesterolTotal && biofluidsData.cholesterolLDL && biofluidsData.cholesterolHDL
  const status = showStatus
    ? getCholesterolStatus(
        Number.parseFloat(biofluidsData.cholesterolTotal),
        Number.parseFloat(biofluidsData.cholesterolLDL),
        Number.parseFloat(biofluidsData.cholesterolHDL),
      )
    : null

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Droplets className="w-5 h-5 text-primary" />
          Blood Markers
        </CardTitle>
        <CardDescription>Track your cholesterol and lipid panel results</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="testDate">Test Date</Label>
          <Input
            id="testDate"
            type="date"
            value={biofluidsData.testDate}
            onChange={(e) => setBiofluidsData({ ...biofluidsData, testDate: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cholesterolTotal">Total Cholesterol (mg/dL)</Label>
            <Input
              id="cholesterolTotal"
              type="number"
              placeholder="180"
              value={biofluidsData.cholesterolTotal}
              onChange={(e) => setBiofluidsData({ ...biofluidsData, cholesterolTotal: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="triglycerides">Triglycerides (mg/dL)</Label>
            <Input
              id="triglycerides"
              type="number"
              placeholder="120"
              value={biofluidsData.triglycerides}
              onChange={(e) => setBiofluidsData({ ...biofluidsData, triglycerides: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cholesterolLDL">LDL Cholesterol (mg/dL)</Label>
            <Input
              id="cholesterolLDL"
              type="number"
              placeholder="90"
              value={biofluidsData.cholesterolLDL}
              onChange={(e) => setBiofluidsData({ ...biofluidsData, cholesterolLDL: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cholesterolHDL">HDL Cholesterol (mg/dL)</Label>
            <Input
              id="cholesterolHDL"
              type="number"
              placeholder="50"
              value={biofluidsData.cholesterolHDL}
              onChange={(e) => setBiofluidsData({ ...biofluidsData, cholesterolHDL: e.target.value })}
            />
          </div>
        </div>

        {status && (
          <div className="p-4 bg-muted rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Lipid Panel Status</span>
              <span className={`text-sm font-medium ${status.color}`}>{status.status}</span>
            </div>
          </div>
        )}

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Lab Results
        </Button>
      </CardContent>
    </Card>
  )
}
