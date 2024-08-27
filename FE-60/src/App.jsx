import React from 'react'
import "./App.css"
import { Grid } from '@mui/material'
import { Navbar } from './components/Navbar'
import { CameraInformation } from './components/CameraInformation'

const App = () => {
  return (
    <Grid >
      <Navbar />
      <CameraInformation />
    </Grid>
  )
}

export default App