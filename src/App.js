import React from 'react'
import Clock from 'react-live-clock'
import { Gap, Dashboard, Text } from 'elements'
import Widget from 'components/Widget'

const App = () => {
  return (
    <Gap>
      <Dashboard rows="2" cols="4">
        <Widget cols="4">
          <Clock format={'HH:mm'} ticking={true} timezone={'US/Pacific'} />
        </Widget>

        <Widget cols="2"  background="red">
          <Text color="black">1</Text>
          <Text>A</Text>
        </Widget>

        <Widget cols="2" background="blue">
          <Text color="black">1</Text>
          <Text>A</Text>
        </Widget>
      </Dashboard>
    </Gap>
  )
}

export default App
