import React, {useEffect} from 'react'
import styles from './chart.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import {getAllStatistic} from '../../store/actions/statisticActions'
import {Loader} from 'semantic-ui-react'
import {getAllRooms} from '../../store/actions/roomActions'
import ChartRooms from './ChartRooms'

const Chart = () => {
  const dispatch = useDispatch()
  const {statistics, isLoading} = useSelector(({statisticReducers}) => statisticReducers)
  const {rooms, isLoading: isLoadingRooms} = useSelector(({roomReducers}) => roomReducers)

  useEffect(() => {
    dispatch(getAllStatistic())
    dispatch(getAllRooms())
  }, [dispatch])

  return (
    <div className="container mt-5">
      <h1>Statistics</h1>
      <div className={styles.charts}>
        <div className={styles.wrapper}>

          {
            isLoading && isLoadingRooms ?
              <Loader active content="Loading..."/>
              :
              rooms.map(room => (
                <ChartRooms key={room._id} room={room} statistics={statistics}/>
              ))
          }

        </div>
      </div>
    </div>
  )
}

export default Chart