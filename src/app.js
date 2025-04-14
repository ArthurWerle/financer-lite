import { BFF_BASE_URL } from './constants.js'

const removeDecimals = (value) => {
  return value.toFixed(0)
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch(`${BFF_BASE_URL}/all-values`)
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    
    const data = await response.json()
    
    const month = document.getElementById('month')
    const week = document.getElementById('week')
    const day = document.getElementById('day')
    
    month.textContent = removeDecimals(data.month)
    week.textContent = removeDecimals(data.week)
    day.textContent = removeDecimals(data.day)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}) 