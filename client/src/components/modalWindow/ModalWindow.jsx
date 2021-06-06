import React, {useState} from 'react'
import styles from './modalWindow.module.scss'
import {Button} from 'semantic-ui-react'
import {useDispatch, useSelector} from 'react-redux'
import {CLOSE_MODAL} from '../../store/reducers/modalWindowReducers'
import {deleteCandidate} from '../../store/actions/candidateActions'
import {deleteRoom} from '../../store/actions/roomActions'

const ModalWindow = () => {
  const dispatch = useDispatch()
  const {modalWindowProps} = useSelector(({modalWindowReducers}) => modalWindowReducers)
  const [loading, setLoading] = useState(false)

  const handleDelete = async () => {
    setLoading(true)
    if (modalWindowProps.removeType === 'removeCandidate') {
      await dispatch(deleteCandidate(modalWindowProps.id))
      setLoading(false)
    }
    if (modalWindowProps.removeType === 'removeRoom') {
      await dispatch(deleteRoom(modalWindowProps.id))
      setLoading(false)
    }
    await dispatch(CLOSE_MODAL())
  }

  return (
    <>
      <div className={styles.backdrop} onClick={() => dispatch(CLOSE_MODAL())}/>
      <div className={styles.modalWindow}>
        <div className={`${styles['modalWindow-header']}`}>
          <h3>{modalWindowProps.header}</h3>
        </div>
        <div className={`${styles['modalWindow-content']}`}>
          <p>{modalWindowProps.content}</p>
        </div>
        <div className={`${styles['modalWindow-buttons']}`}>
          <Button color="red" onClick={() => dispatch(CLOSE_MODAL())}>Close</Button>
          <Button loading={loading} disabled={loading} color="blue"
                  onClick={handleDelete}>Delete</Button>
        </div>
      </div>
    </>
  )
}

export default ModalWindow