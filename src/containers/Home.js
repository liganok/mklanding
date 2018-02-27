import React from 'react'
import { withSiteData } from 'react-static'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

export default withSiteData(() => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, backgroundColor: '#3f51b5', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div>
        <Typography variant="display2" style={{ color: 'white' }} gutterBottom>
          Meetingku
        </Typography>
        <Typography variant="title" style={{ color: 'white' }} gutterBottom>
          A tool for controlling your meeting time
        </Typography>
        <Button size="large" color="inherit" style={{ color: 'white', textTransform: 'none', fontSize: '2em' }}>
          Get start for FREE
        </Button>
      </div>
    </div>
    <div style={{ height: 500 }}>
      test
    </div>
  </div>
))
