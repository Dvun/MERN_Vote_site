import VoteRoomDetails from '../components/voteRooms/VoteRoomDetails'
import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'
import AdminPage from '../pages/AdminPage'
import StatisticsPage from '../pages/StatisticsPage'


export const adminRoutes = [

  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/statistics',
    component: StatisticsPage,
  },
  {
    path: '/rooms',
    component: VoteRooms,
  },
  {
    path: '/rooms/:id',
    component: VoteRoomDetails,
  },
  {
    path: '/dashboard/rooms',
    component: AdminPage,
  },
  {
    path: '/dashboard/candidates',
    component: AdminPage,
  },

]