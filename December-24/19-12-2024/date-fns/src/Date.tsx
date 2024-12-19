import { useState } from 'react'
import {
  getWeek,
  set,
  eachDayOfInterval,
  getDaysInMonth,
  nextDay,
  closestTo,
  isLeapYear,
  roundToNearestMinutes,
  isSameDay,
  endOfMonth,
  startOfMonth,
  addBusinessDays,
  lastDayOfWeek,
  isWeekend,
  getQuarter,
  differenceInMilliseconds,
  endOfDay,
  format,
  addDays,
  subMonths,
  parseISO,
  isValid,
  getUnixTime,
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

