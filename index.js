const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

let today = new Date()

let days = [
]

for (i = 0; i < 30; i++) {
  newDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
  days = days.concat({
    id: i + 1,
    weekday: newDay.getDay(),
    date: newDay.getDate(),
    month: newDay.getMonth(),
    year: newDay.getFullYear()
  })
}

app.get('/', (req, res) => {
  res.send('Calendar')
})

app.get('/days', (req, res) => {
  res.json(days)
})

app.get('/days/:id', (req, res) => {
  const id = Number(req.params.id)
  const day = days.find(day => day.id === id)

  if (day) {
    res.json(day)
  } else {
    res.status(404).end()
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
