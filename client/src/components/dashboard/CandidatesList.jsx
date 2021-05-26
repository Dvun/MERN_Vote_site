import React from 'react'
import {List} from 'semantic-ui-react'
import CandidateListItem from './CandidateListItem'

const CandidatesList = () => {
  return (
    <div className="col col-md-5 offset-1 mt-5">
      <h1>List</h1>

      <List divided verticalAlign='middle'>
        <CandidateListItem/>
      </List>

    </div>
  )
}

export default CandidatesList