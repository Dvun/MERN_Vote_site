import VoteRoomDetails from '../components/voteRooms/VoteRoomDetails'
import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'
import StatisticsPage from '../pages/StatisticsPage'


export const privateRoutes = [

  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/rooms',
    component: VoteRooms,
  },
  {
    path: '/statistics',
    component: StatisticsPage,
  },
  {
    path: '/rooms/:id',
    component: VoteRoomDetails,
  },

]