import React from 'react'
import {Button, Image, List} from 'semantic-ui-react'

const CandidateListItem = () => {
  return (
    <List.Item>
      <List.Content floated='right'>
        <Button color='yellow' style={{padding: '.78rem 0.5rem'}}>Update</Button>
        <Button color='red' style={{padding: '.78rem 0.5rem'}}>Delete</Button>
      </List.Content>
      <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
      <List.Content>John Doe</List.Content>
    </List.Item>
  )
}

export default CandidateListItem