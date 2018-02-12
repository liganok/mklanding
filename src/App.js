import React from 'react'
import { Router, Link } from 'react-static'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

//
import Routes from 'react-static-routes'

import './app.css'

const APPBAR_HEIGHT = '4rem'

export default () => (
  <Router>
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <AppBar elevation={0} position="fixed" style={{ height: APPBAR_HEIGHT, display: 'flex', justifyContent: 'center' }}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ paddingTop: APPBAR_HEIGHT }}>
        <Routes />
      </div>
    </div>
  </Router>
)
