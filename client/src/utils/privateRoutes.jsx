import VoteRoomDetails from '../components/voteRooms/VoteRoomDetails'
import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'
import AdminPage from '../pages/AdminPage'


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
    path: '/rooms/:id',
    component: VoteRoomDetails,
  },
  {
    path: '/dashboard',
    component: AdminPage,
  },

]