import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCandidates} from '../../../store/actions/candidateActions'
import {List} from 'semantic-ui-react'
import CandidateItem from '../candidate/CandidateItem'

const RoomsList = () => {
  const dispatch = useDispatch()
  const {candidates} = useSelector(({candidateReducers}) => candidateReducers)

  useEffect(() => {
    dispatch(getAllCandidates())
  }, [dispatch])

  return (
    <div className="col col-md-5 offset-1 mt-5">
      <h1>List</h1>

      <List divided verticalAlign='middle'>
        {candidates.length === 0 && <h3 style={{textAlign: 'center'}}>Candidates List is Empty</h3>}
        {
          candidates.map(candidate => (
            <CandidateItem key={candidate._id} candidate={candidate}/>
          ))
        }
      </List>

    </div>
  )
}

export default RoomsList