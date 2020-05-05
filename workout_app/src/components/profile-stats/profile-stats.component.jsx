import React from 'react'

import './comp.scss'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={Profile} />
            <Route path="/Login" component={LoginAndLogout} />
            <Route component={Error} />
          </Switch>
        </div>
        <h1 style={{ textAlign: 'center' }}>workout App</h1>
      </div>
    </Router>
  )
}

export default App
