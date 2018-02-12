import React from 'react'
import { withSiteData } from 'react-static'
import Typography from 'material-ui/Typography'


export default withSiteData(() => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <div style={{ flex: 1, backgroundColor: '#3f51b5', minHeight: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div>
        <Typography variant="display2" style={{ color: 'white' }} gutterBottom>
          Meetingku
        </Typography>
        <Typography variant="title" style={{ color: 'white' }} gutterBottom>
          A tool for controlling your meeting time
        </Typography>
      </div>
    </div>
  </div>
))
