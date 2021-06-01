import HomePage from '../pages/HomePage'
import VoteRooms from '../pages/VoteRooms'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import StatisticsPage from '../pages/StatisticsPage'

export const publicRoutes = [

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
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/register',
    component: RegisterPage,
  },

]
