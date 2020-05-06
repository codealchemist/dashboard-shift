import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import { BsFillPersonFill } from 'react-icons/bs'
import { Gap, Dashboard, Text, Blur, Outline, Label } from 'elements'
import Widget from 'components/Widget'
import data from 'data'

const usedShifts = {}
const skippedShifts = {}
const getShift = ({ roomId, shifts, time }) => {
  let selectedShift = null
  usedShifts[roomId] = usedShifts[roomId] || new Set()
  skippedShifts[roomId] = skippedShifts[roomId] || new Set()
  shifts.some((currentShift) => {
    if (time < currentShift.startTime || time > currentShift.endTime) {
      // Ended shift.
      if (usedShifts[roomId].has(currentShift)) {
        skippedShifts[roomId].add(currentShift)
      }
      return false
    }

    // Rotate.
    if (skippedShifts[roomId].size === shifts.length) {
      skippedShifts[roomId].clear()
      usedShifts[roomId].clear()
    }

    if (skippedShifts[roomId].has(currentShift)) {
      return false
    }

    // Matched shift.
    usedShifts[roomId].add(currentShift)
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

  return (
    <Gap>
      <Dashboard rows="2" cols="4">
        {/* CLOCK */}
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

        {/* ROOMS */}
        {data.rooms.map((room) => {
          const { id, name, label, shifts } = room
          const time = getTime(date)
          const shift = getShift({ roomId: id, shifts, time })

          // Closed.
          if (!shift) {
            return (
              <Widget key={id} cols="2" background="#333">
                <Text color="black" bold>
                  {id}
                </Text>
                <Text color="#222">…</Text>
                <Text size="0.5" color="#777" bottom light>
                  {label}
                </Text>
              </Widget>
            )
          }

          // Open.
          return (
            <Widget key={id} cols="2" background={shift.color}>
              <Label>
                <BsFillPersonFill />
                <span>{shift.person}</span>
              </Label>
              <Text color="black" bold>
                {id}
              </Text>
              <Outline>
                <Text bold>{shift.name}</Text>
              </Outline>
              <Text size="0.5" color="#aaa" bottom light>
                {label}
              </Text>
            </Widget>
          )
        })}
      </Dashboard>
    </Gap>
  )
}

export default App
