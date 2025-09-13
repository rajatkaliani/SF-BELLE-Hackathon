"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Apple, Save } from "lucide-react"

interface NutritionData {
  calories: string
  protein: string
  carbs: string
  fat: string
}

export function NutritionForm() {
  const [nutritionData, setNutritionData] = useState<NutritionData>({
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  })

  const handleSave = () => {
    console.log("Saving nutrition data:", nutritionData)
  }

  const getTotalMacros = () => {
    const protein = Number.parseFloat(nutritionData.protein) || 0
    const carbs = Number.parseFloat(nutritionData.carbs) || 0
    const fat = Number.parseFloat(nutritionData.fat) || 0
    return protein + carbs + fat
  }

  const getMacroPercentage = (macro: number) => {
    const total = getTotalMacros()
    return total > 0 ? ((macro / total) * 100).toFixed(1) : "0"
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Apple className="w-5 h-5 text-primary" />
          Nutrition Tracking
        </CardTitle>
        <CardDescription>Log your daily caloric intake and macronutrients</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="calories">Total Calories</Label>
          <Input
            id="calories"
            type="number"
            placeholder="2000"
            value={nutritionData.calories}
            onChange={(e) => setNutritionData({ ...nutritionData, calories: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="protein">Protein (g)</Label>
            <Input
              id="protein"
              type="number"
              placeholder="150"
              value={nutritionData.protein}
              onChange={(e) => setNutritionData({ ...nutritionData, protein: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="carbs">Carbs (g)</Label>
            <Input
              id="carbs"
              type="number"
              placeholder="200"
              value={nutritionData.carbs}
              onChange={(e) => setNutritionData({ ...nutritionData, carbs: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="fat">Fat (g)</Label>
            <Input
              id="fat"
              type="number"
              placeholder="70"
              value={nutritionData.fat}
              onChange={(e) => setNutritionData({ ...nutritionData, fat: e.target.value })}
            />
          </div>
        </div>

        {getTotalMacros() > 0 && (
          <div className="p-4 bg-muted rounded-lg space-y-2">
            <h4 className="text-sm font-medium">Macro Distribution</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-medium text-blue-600">
                  {getMacroPercentage(Number.parseFloat(nutritionData.protein) || 0)}%
                </div>
                <div className="text-muted-foreground">Protein</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-green-600">
                  {getMacroPercentage(Number.parseFloat(nutritionData.carbs) || 0)}%
                </div>
                <div className="text-muted-foreground">Carbs</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-orange-600">
                  {getMacroPercentage(Number.parseFloat(nutritionData.fat) || 0)}%
                </div>
                <div className="text-muted-foreground">Fat</div>
              </div>
            </div>
          </div>
        )}

        <Button onClick={handleSave} className="w-full">
          <Save className="w-4 h-4 mr-2" />
          Save Nutrition Data
        </Button>
      </CardContent>
    </Card>
  )
}
