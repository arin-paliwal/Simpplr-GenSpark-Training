import React, { useState, useEffect } from 'react'
import { Reminder } from '../../types/main-content'

interface ReminderModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (reminder: Reminder) => void
}

const ReminderModal: React.FC<ReminderModalProps> = ({ isOpen, onClose }) => {
  const [reminder, setReminder] = useState<Reminder>({
    category: '',
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
  })

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setReminder(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onClose()
  }

  if (!isOpen) return null

  const handleAddReminder = (reminder: Object) => {
    try {
        console.log(reminder);
        const currentUserData = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (!Array.isArray(currentUserData.reminders)) {
            currentUserData.reminders = [];
        }
        currentUserData.reminders.push(reminder);
        localStorage.setItem('currentUser', JSON.stringify(currentUserData));
    } catch (error) {
        console.error("Failed to update reminders:", error);
    }
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-light-bg dark:bg-dark-bg rounded-lg shadow-xl w-full max-w-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">Add New Reminder</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={reminder.category}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              >
                <option value="">Select a category</option>
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="health">Health</option>
              </select>
            </div>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={reminder.title}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={reminder.description}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                rows={3}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={reminder.location}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={reminder.date}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-light-texts dark:text-dark-texts mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={reminder.time}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border_color dark:border-border_color2 bg-light-secondarybg dark:bg-dark-secondary text-light-text dark:text-dark-text"
                required
              />
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md text-light-texts dark:text-dark-texts bg-light-secondarybg dark:bg-dark-secondary hover:bg-opacity-80 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md text-white bg-primary dark:bg-dark-primary hover:bg-opacity-80 transition-colors"
                onClick={() => handleAddReminder(reminder)}
              >
                Add Reminder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReminderModal
