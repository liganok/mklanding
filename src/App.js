import React from 'react'
import { Router, Link } from 'react-static'
import AppBar from 'material-ui/AppBar'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

//
import Routes from 'react-static-routes'

import './app.css'

export default () => (
  <Router>
    <div>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <AppBar elevation={0} position="fixed" >
        <Toolbar>
          <Typography variant="title" color="inherit">
            Title
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>
        <Routes />
      </div>
    </div>
  </Router>
)
