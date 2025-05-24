"use client"

import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

interface CustomCalendarProps {
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  disabled?: (date: Date) => boolean
  className?: string
}

export function CustomCalendar({ selected, onSelect, disabled, className }: CustomCalendarProps) {
  return (
    <div className={cn("p-3", className)}>
      <style jsx global>{`
        .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: #3b82f6;
          --rdp-background-color: #eff6ff;
          --rdp-accent-color-dark: #1d4ed8;
          --rdp-background-color-dark: #1e40af;
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-selected: 2px solid #1d4ed8;
          margin: 0;
        }

        .rdp-months {
          display: flex;
          justify-content: center;
        }

        .rdp-month {
          margin: 0;
        }

        .rdp-table {
          width: 100%;
          max-width: none;
        }

        .rdp-head_cell {
          font-weight: 600;
          font-size: 0.875rem;
          color: #6b7280;
          padding: 0.5rem;
          text-align: center;
        }

        .rdp-cell {
          text-align: center;
          position: relative;
          padding: 2px;
        }

        .rdp-button {
          width: var(--rdp-cell-size);
          height: var(--rdp-cell-size);
          border-radius: 8px;
          border: none;
          background: transparent;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .rdp-button:hover {
          background-color: #f3f4f6;
          transform: scale(1.05);
        }

        .rdp-button_reset {
          all: unset;
          width: var(--rdp-cell-size);
          height: var(--rdp-cell-size);
          border-radius: 8px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rdp-day_today {
          font-weight: 600;
          color: #3b82f6;
          background-color: #eff6ff;
          border: 2px solid #3b82f6;
        }

        .rdp-day_today:hover {
          background-color: #dbeafe;
        }

        .rdp-day_selected {
          background-color: #3b82f6 !important;
          color: white !important;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
        }

        .rdp-day_selected:hover {
          background-color: #1d4ed8 !important;
          transform: scale(1.05);
        }

        .rdp-day_disabled {
          color: #d1d5db;
          cursor: not-allowed;
        }

        .rdp-day_disabled:hover {
          background-color: transparent;
          transform: none;
        }

        .rdp-day_outside {
          color: #9ca3af;
        }

        .rdp-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .rdp-nav_button {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rdp-nav_button:hover {
          background-color: #f9fafb;
          border-color: #3b82f6;
        }

        .rdp-nav_button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .rdp-caption_label {
          font-weight: 600;
          font-size: 1rem;
          color: #1f2937;
        }

        .rdp-head_row {
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 0.5rem;
        }

        .rdp-row {
          margin-bottom: 2px;
        }

        .rdp-weeknumber {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 500;
        }
      `}</style>
      <Calendar
        mode="single"
        selected={selected}
        onSelect={onSelect}
        disabled={disabled}
        className="rounded-md border shadow-sm"
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center",
          nav_button: cn("h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn("h-9 w-9 p-0 font-normal aria-selected:opacity-100"),
          day_range_end: "day-range-end",
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside:
            "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
        }}
      />
    </div>
  )
}
