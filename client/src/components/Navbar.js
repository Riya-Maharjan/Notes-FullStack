import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="header">
          <h3 className="note-heading">Note Application</h3>
          <div className="right-section">
         <Link to='/create'>
         
    <Button animated='fade'>
      <Button.Content visible >Add New Note</Button.Content>
      <Button.Content hidden>
        <Icon name='add' />
      </Button.Content>
    </Button></Link>
        <Link to="/read">
    <Button animated='fade'>
      <Button.Content visible>View all Notes</Button.Content>
      <Button.Content hidden>
        <Icon name='list' />
      </Button.Content>
    </Button></Link>
   
          </div>
        </div>
  )
}

export default Navbar