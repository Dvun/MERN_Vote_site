import VoteRoomDetails from '../components/voteRooms/VoteRoomDetails'
import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'
import AdminPage from '../pages/AdminPage'


export const adminRoutes = [

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
    path: '/dashboard/rooms',
    component: AdminPage,
  },
  {
    path: '/dashboard/candidates',
    component: AdminPage,
  },

]