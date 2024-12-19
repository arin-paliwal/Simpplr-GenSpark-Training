import { useState } from 'react'
import {
  getWeek, // Gets the ISO week number for the given date
  set, // Sets specific parts of a date (e.g., hours, minutes, seconds) and returns a new date
  eachDayOfInterval, // Creates an array of dates for each day within the given interval
  getDaysInMonth, // Returns the number of days in the month of the given date
  nextDay, // Returns the next occurrence of a specific day of the week from a given date
  isLeapYear, // Checks if the year of the given date is a leap year
  roundToNearestMinutes, // Rounds the given date to the nearest specified number of minutes
  isSameDay, // Checks if two dates are on the same calendar day
  endOfMonth, // Gets the last moment of the month for the given date
  startOfMonth, // Gets the start of the month for the given date
  addBusinessDays, // Adds the specified number of business days (skipping weekends) to a date
  lastDayOfWeek, // Gets the last day of the week for the given date
  isWeekend, // Checks if the given date falls on a weekend (Saturday or Sunday)
  getQuarter, // Gets the quarter of the year for the given date (1, 2, 3, or 4)
  differenceInMilliseconds, // Calculates the difference in milliseconds between two dates
  endOfDay, // Gets the last moment of the day for the given date
  format, // Formats the given date into a string based on the provided format
  addDays, // Adds a specific number of days to a date
  subMonths, // Subtracts a specific number of months from a date
  parseISO, // Parses a date string in ISO 8601 format into a JavaScript Date object
  isValid, // Checks if the given date is valid
  getUnixTime, // Gets the Unix timestamp (seconds since January 1, 1970) for the given date
} from 'date-fns'

export default function DateFnsShowcase() {
  const [baseDate, setBaseDate] = useState(new Date())
  const [comparisonDate, setComparisonDate] = useState(new Date())

  const formatDate = (date: Date) => format(date, 'yyyy-MM-dd HH:mm:ss')

  const DateMethod = ({ name, result }: { name: string; result: string | number | boolean }) => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{name}</h3>
      <p className="text-gray-600">{result.toString()}</p>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">date-fns Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="baseDate" className="block text-sm font-medium text-gray-700 mb-2">
              Base Date
            </label>
            <input
              type="datetime-local"
              id="baseDate"
              value={format(baseDate, "yyyy-MM-dd'T'HH:mm")}
              onChange={(e) => setBaseDate(parseISO(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="comparisonDate" className="block text-sm font-medium text-gray-700 mb-2">
              Comparison Date
            </label>
            <input
              type="datetime-local"
              id="comparisonDate"
              value={format(comparisonDate, "yyyy-MM-dd'T'HH:mm")}
              onChange={(e) => setComparisonDate(parseISO(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DateMethod name="getWeek" result={getWeek(baseDate)} />
          <DateMethod
            name="set"
            result={formatDate(set(baseDate, { hours: 12, minutes: 0, seconds: 0 }))}
          />
          <DateMethod
            name="eachDayOfInterval"
            result={eachDayOfInterval({ start: baseDate, end: addDays(baseDate, 6) })
              .map((date) => format(date, 'yyyy-MM-dd'))
              .join(', ')}
          />
          <DateMethod name="getDaysInMonth" result={getDaysInMonth(baseDate)} />
          <DateMethod name="nextDay" result={formatDate(nextDay(baseDate, 1))} />
          {/* <DateMethod
            name="closestTo"
            result={formatDate(
              closestTo(baseDate, [
                subMonths(baseDate, 1),
                addDays(baseDate, 15),
                addDays(baseDate, 30),
              ])
            )}
          /> */}
          <DateMethod name="isLeapYear" result={isLeapYear(baseDate)} />
          <DateMethod
            name="roundToNearestMinutes"
            result={formatDate(roundToNearestMinutes(baseDate, { nearestTo: 15 }))}
          />
          {/* <DateMethod
            name="formatInTimeZone"
            result={formatInTimeZone(baseDate, 'America/New_York', 'yyyy-MM-dd HH:mm:ss zzz')}
          /> */}
          <DateMethod name="isSameDay" result={isSameDay(baseDate, comparisonDate)} />
          <DateMethod name="endOfMonth" result={formatDate(endOfMonth(baseDate))} />
          <DateMethod name="startOfMonth" result={formatDate(startOfMonth(baseDate))} />
          <DateMethod name="addBusinessDays" result={formatDate(addBusinessDays(baseDate, 5))} />
          <DateMethod name="lastDayOfWeek" result={formatDate(lastDayOfWeek(baseDate))} />
          <DateMethod name="isWeekend" result={isWeekend(baseDate)} />
          <DateMethod name="getQuarter" result={getQuarter(baseDate)} />
          <DateMethod
            name="differenceInMilliseconds"
            result={differenceInMilliseconds(comparisonDate, baseDate)}
          />
          <DateMethod name="endOfDay" result={formatDate(endOfDay(baseDate))} />
          <DateMethod name="isValid" result={isValid(baseDate)} />
          <DateMethod name="getUnixTime" result={getUnixTime(baseDate)} />
        </div>
      </div>
    </div>
  )
}

