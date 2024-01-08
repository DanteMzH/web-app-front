import React from 'react'
import { Card, CardBody } from 'reactstrap'


export const Header = ({name,title}) => {
  return (
    <div>
      <Card className='my-1 bg bg-warning'>
        <CardBody>
        <h1 className='my-1'>Welcome to NotesApp</h1>
        </CardBody>
      </Card>
    </div>
  )
}
