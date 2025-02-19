import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Dashboard() {
  return (
    <CardGroup className='p-3 m-4 gap-4 '>
      <Card>

        <Card.Body className='shadow-lg rounded-3' style={{ height: '15rem', }}>
          <Card.Title>  Total Users </Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
      <Card>

        <Card.Body className='shadow-lg rounded-3' style={{ height: '15rem', }}>
          <Card.Title> Total Event</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
      <Card>

        <Card.Body className='shadow-lg rounded-3' style={{ height: '15rem', }}>
          <Card.Title> Total Instructor</Card.Title>
          <Card.Text>

          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  )
}
