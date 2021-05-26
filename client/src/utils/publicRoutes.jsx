import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

export const publicRoutes = [

  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/rooms',
    component: VoteRooms,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },

]
