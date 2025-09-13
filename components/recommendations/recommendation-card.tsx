import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface RecommendationCardProps {
  title: string
  description: string
  priority: "high" | "medium" | "low"
  category: string
  icon: LucideIcon
  recommendations: string[]
  metrics?: {
    current?: string
    target?: string
    unit?: string
  }
}

export function RecommendationCard({
  title,
  description,
  priority,
  category,
  icon: Icon,
  recommendations,
  metrics,
}: RecommendationCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-sm">{description}</CardDescription>
            </div>
          </div>
          <Badge className={`text-xs ${getPriorityColor(priority)}`} variant="outline">
            {priority.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {metrics && (
          <div className="p-3 bg-muted rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Current</span>
              <span className="font-medium">
                {metrics.current} {metrics.unit}
              </span>
            </div>
            {metrics.target && (
              <div className="flex justify-between items-center text-sm mt-1">
                <span className="text-muted-foreground">Target</span>
                <span className="font-medium text-primary">
                  {metrics.target} {metrics.unit}
                </span>
              </div>
            )}
          </div>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{category} Protocol</h4>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-foreground leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
