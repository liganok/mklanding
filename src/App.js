import React, { Component } from 'react';
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid';

import logo from './logo.svg';
import './App.css';

import img1 from './pic/schedule.jpg'
import img2 from './pic/start.jpg'
import img3 from './pic/monitor.jpg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*           <img src={logo} className="App-logo" alt="logo" />
 */}
          <Typography className="App-title" variant="title" color="inherit">
            Meetingku
          </Typography>
        </header>
        
        <body>
          <div className="App-content">
            <Typography variant="display3" style={{ color: 'white', paddingTop: "5rem" }} gutterBottom>
              Meetingku
            </Typography>
            <Typography variant="title" style={{ color: 'white',padding:'20px',textAlign:'center' }} gutterBottom>
              A tool for controlling your meeting time
            </Typography>
            <Button href="https://app.meetingku.com" size="large" color="inherit" style={{ color: 'white', marginTop: '50px', textTransform: 'none', border: '1px solid white', fontSize: '1.5em' }}>
              Get start for FREE
            </Button>
          </div>
          <div className="App-how">
            <Typography variant="title" gutterBottom>
              HOW IT WORKS ?
          </Typography>
          </div>
          <Grid container spacing={0} className="App-step">
            <Grid item xs={12} md={4} className="App-step-1">
              <div className="App-step-1-1">
                <hr className="App-step-divider" size="2" width="40" />
                <Typography variant="display3" style={{ paddingLeft: 10, paddingRight: 10 }}>1</Typography>
                <hr className="App-step-divider" size="2" width="40" />
              </div>
              <Typography variant="headline" style={{ padding: 10, color: "#0000008a" }}>SCHEDULE</Typography>
              <Typography variant="subheading" style={{ color: "#0000008a" }}>
                Schedule the meeting with the start time, location, meeting items and save it.
              </Typography>
              <img className="App-pic-1" src={img1} width="100%"/>
            </Grid>
            <Grid item xs={12} md={4} className="App-step-1">
              <div className="App-step-1-1">
                <hr className="App-step-divider" size="2" width="40" />
                <Typography variant="display3" style={{ paddingLeft: 10, paddingRight: 10 }}>2</Typography>
                <hr className="App-step-divider" size="2" width="40" />
              </div>
              <Typography variant="headline" style={{ padding: 10, color: "#0000008a" }}>START</Typography>
              <Typography variant="subheading" style={{ color: "#0000008a" }}>
                The meeting will start on your start time, you also can start it locally before the start time.
              </Typography>
              <img className="App-pic-1" src={img2} />
            </Grid>
            <Grid item xs={12} md={4} className="App-step-1">
              <div className="App-step-1-1">
                <hr className="App-step-divider" size="2" width="40" />
                <Typography variant="display3" style={{ paddingLeft: 10, paddingRight: 10 }}>3</Typography>
                <hr className="App-step-divider" size="2" width="40" />
              </div>
              <Typography variant="headline" style={{ padding: 10, color: "#0000008a" }}>MONITOR</Typography>
              <Typography variant="subheading" style={{ color: "#0000008a" }}>
                When the meeting start, you can check the meeting progress and monitor it.
              </Typography>
              <img className="App-pic-1" src={img3} />
            </Grid>
          </Grid>
        </body>
        <footer style={{ textAlign: 'center', margin: '5px', paddingTop: '40px' }}>
          © 2018 Meetingku
        </footer>
      </div>
    );
  }
}

export default App;
