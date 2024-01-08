import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'

export const Menus = () => {
  return (
    <ListGroup>
        <Link className='list-group-item list-group-item-action'  tag="a" to='/' >
            Home
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='/add-note' >
            Add Notes
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='/view-notes' >
            All Notes 
        </Link>
        <Link className='list-group-item list-group-item-action' tag="a" to='#!'>
            About 
        </Link>
    </ListGroup>
  )
}
