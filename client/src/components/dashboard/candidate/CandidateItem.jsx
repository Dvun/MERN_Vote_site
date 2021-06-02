import React from 'react'
import styles from './candidateItem.module.scss'
import {Button, Image, List} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import {deleteCandidate, getCurrentCandidate} from '../../../store/actions/candidateActions'

const CandidateItem = ({candidate}) => {
  const dispatch = useDispatch()
  const {createCandidateLoading} = useSelector(({candidateReducers}) => candidateReducers)


  return (
    <List.Item className={styles.candidateItem}>
      <Image avatar src="https://react.semantic-ui.com/images/avatar/small/lena.png"/>
      <List.Content>{candidate.name}</List.Content>

      <List.Content floated="right">
        <Button
          color="yellow"
          style={{padding: '.78rem 0.5rem'}}
          onClick={() => dispatch(getCurrentCandidate(candidate._id))}
        >
          Update
        </Button>
        <Button
          loading={createCandidateLoading}
          color="red"
          style={{padding: '.78rem 0.5rem'}}
          onClick={() => dispatch(deleteCandidate(candidate._id))}
        >
          Delete
        </Button>
      </List.Content>

    </List.Item>
  )
}

export default CandidateItem