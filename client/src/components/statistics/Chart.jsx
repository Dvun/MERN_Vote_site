import React, {useEffect} from 'react'
import styles from './chart.module.scss'
import ChartBar from './ChartBar'
import {useDispatch, useSelector} from 'react-redux'
import {getAllStatistic} from '../../store/actions/statisticActions'
import {getAllCandidates} from '../../store/actions/candidateActions'
import {Loader} from 'semantic-ui-react'

const Chart = () => {
  const dispatch = useDispatch()
  const {statistics, isLoading} = useSelector(({statisticReducers}) => statisticReducers)
  const {candidates, isLoading: isLoadingCandidates} = useSelector(({candidateReducers}) => candidateReducers)

  useEffect(() => {
    dispatch(getAllStatistic())
    dispatch(getAllCandidates())
  }, [dispatch])


  return (
    <div className="container mt-5">
      <h1>Statistics</h1>
      <div className={styles.charts}>
        {
          isLoadingCandidates ?
            <Loader active content="Loading..."/>
            :
            candidates.map(candidate => (
              <ChartBar
                key={candidate._id}
                value="null"
                maxValue=""
                candidate={candidate}
                totalCandidates={candidates.length}
              />
            ))
        }
      </div>
    </div>
  )
}

export default Chart