import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import Clock from 'react-live-clock'
import { Gap, Dashboard, Text, Blur } from 'elements'
import Widget from 'components/Widget'
import data from 'data'

const getShift = ({ roomId, shifts, time }) => {
  let selectedShift = null
  shifts.some((currentShift) => {
    if (time < currentShift.startTime || time > currentShift.endTime) {
      return false
    }

    selectedShift = currentShift
    return true
  })

  return selectedShift
}

const getTime = (date) => {
  const dateObj = dayjs(date)
  const hour = dateObj.hour()
  const minute = dateObj.minute()
  return parseFloat(`${hour}.${minute}`)
}

const App = () => {
  const [date, setDate] = useState(dayjs().format())

  // This will be really boring if we don't accelerate time!
  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = dayjs(date).add(1, 'hour').add(15, 'minute')
      setDate(newDate.format())
    }, 1000)
    return () => clearInterval(interval)
  }, [date])

  useEffect(() => {
    console.log('DATE', date)
  }, [date])

  return (
    <Gap>
      <Dashboard rows="2" cols="4">
        <Widget cols="4">
          <Gap>
            <Text size="0.35" color="#363f48">
              {dayjs(date).format('ddd D, MMM, YYYY')}
            </Text>
          </Gap>

          <Blur>
            <Text color="#385f88">{dayjs(date).format('HH:mm')}</Text>
          </Blur>
        </Widget>

        {data.rooms.map((room) => {
          const { id, name, label, shifts } = room
          const time = getTime(date)
          const shift = getShift({ roomId: id, shifts, time })
          console.log('SHIFT', shift)

          // Closed.
          if (!shift) {
            return (
              <Widget key={id} cols="2" background="#333">
                <Text color="black">{id}</Text>
                <Text color="#222">…</Text>
              </Widget>
            )
          }

          // Open.
          return (
            <Widget key={id} cols="2" background={shift.color}>
              <Text color="black">{id}</Text>
              <Text>{shift.name}</Text>
            </Widget>
          )
        })}
      </Dashboard>
    </Gap>
  )
}

export default App
