import React from 'react'
import { withSiteData } from 'react-static'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'

export default withSiteData(() => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ flex: 1, backgroundColor: '#3f51b5', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div>
        <Typography variant="display3" style={{ color: 'white' }} gutterBottom>
          Meetingku
        </Typography>
        <Typography variant="title" style={{ color: 'white' }} gutterBottom>
          A tool for controlling your meeting time
        </Typography>
        <Button href="https://app.meetingku.com" size="large" color="inherit" style={{ color: 'white', marginTop: '50px', textTransform: 'none', border: '1px solid white', fontSize: '1.5em' }}>
          Get start for FREE
        </Button>
      </div>
    </div>
    {/* <div style={{ textAlign: 'center', height: 800 }}>
      test
    </div> */}
    <div style={{ textAlign: 'center', margin: '5px', paddingTop: '40px' }}>
      © 2018 Meetingku
    </div>
  </div>
))
