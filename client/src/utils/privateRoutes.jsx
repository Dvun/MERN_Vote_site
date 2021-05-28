import VoteRoomDetails from '../components/voteRooms/VoteRoomDetails'
import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'


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

]