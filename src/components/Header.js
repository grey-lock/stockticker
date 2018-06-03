import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <header>
      <Link to='/'>
        <h1>STCKTCKR</h1>
      </Link>
   </header>
  )
}


export default Header