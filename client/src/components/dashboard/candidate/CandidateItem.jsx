import React from 'react'
import styles from './candidateItem.module.scss'
import {Button, Image, List} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import {getCurrentCandidate} from '../../../store/actions/candidateActions'
import {OPEN_MODAL} from '../../../store/reducers/modalWindowReducers'

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
          color="red"
          style={{padding: '.78rem 0.5rem'}}
          onClick={
            () => dispatch(OPEN_MODAL({
              id: candidate._id,
              header: 'Remove Candidate',
              removeType: 'removeCandidate',
              isLoading: createCandidateLoading,
              content: `Are you really want remove candidate ${candidate.name} ?`,
            }))
          }
        >
          Delete
        </Button>
      </List.Content>

    </List.Item>
  )
}

export default CandidateItem