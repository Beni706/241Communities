"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Clock } from "lucide-react"

interface TimePickerProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  label?: string
  className?: string
}

export function TimePicker({ date, setDate, label = "Heure", className }: TimePickerProps) {
  const [hours, setHours] = useState(date ? date.getHours() : 23)
  const [minutes, setMinutes] = useState(date ? date.getMinutes() : 59)

  useEffect(() => {
    if (date) {
      setHours(date.getHours())
      setMinutes(date.getMinutes())
    }
  }, [date])

  const updateTime = (newHours: number, newMinutes: number) => {
    if (date) {
      const newDate = new Date(date)
      newDate.setHours(newHours)
      newDate.setMinutes(newMinutes)
      setDate(newDate)
    }
  }

  const handleHoursChange = (value: string) => {
    const newHours = Number.parseInt(value) || 0
    if (newHours >= 0 && newHours <= 23) {
      setHours(newHours)
      updateTime(newHours, minutes)
    }
  }

  const handleMinutesChange = (value: string) => {
    const newMinutes = Number.parseInt(value) || 0
    if (newMinutes >= 0 && newMinutes <= 59) {
      setMinutes(newMinutes)
      updateTime(hours, newMinutes)
    }
  }

  const presetTimes = [
    { label: "Matin", hours: 9, minutes: 0 },
    { label: "Midi", hours: 12, minutes: 0 },
    { label: "Après-midi", hours: 14, minutes: 0 },
    { label: "Soir", hours: 18, minutes: 0 },
    { label: "Fin de journée", hours: 23, minutes: 59 },
  ]

  return (
    <div className={className}>
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-start text-left font-normal">
            <Clock className="mr-2 h-4 w-4" />
            {date
              ? `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
              : "Sélectionner l'heure"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-4">
          <div className="space-y-4">
            <div className="text-sm font-medium">Sélectionner l'heure</div>

            <div className="flex items-center space-x-2">
              <div className="flex-1">
                <Label htmlFor="hours" className="text-xs">
                  Heures
                </Label>
                <Input
                  id="hours"
                  type="number"
                  min="0"
                  max="23"
                  value={hours}
                  onChange={(e) => handleHoursChange(e.target.value)}
                  className="text-center"
                />
              </div>
              <div className="text-2xl font-bold">:</div>
              <div className="flex-1">
                <Label htmlFor="minutes" className="text-xs">
                  Minutes
                </Label>
                <Input
                  id="minutes"
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => handleMinutesChange(e.target.value)}
                  className="text-center"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium text-gray-600">Heures courantes</div>
              <div className="grid grid-cols-2 gap-2">
                {presetTimes.map((preset) => (
                  <Button
                    key={preset.label}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setHours(preset.hours)
                      setMinutes(preset.minutes)
                      updateTime(preset.hours, preset.minutes)
                    }}
                    className="text-xs"
                  >
                    {preset.label} ({preset.hours.toString().padStart(2, "0")}:
                    {preset.minutes.toString().padStart(2, "0")})
                  </Button>
                ))}
              </div>
            </div>

            {date && (
              <div className="text-center text-sm text-gray-600 bg-gray-50 p-2 rounded">
                Heure sélectionnée : {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
