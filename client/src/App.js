import Header from './components/header/Header'
import Routes from './Routes'
import ToastMessage from './components/toastMessages/toastMessage'
import ModalWindow from './components/modalWindow/ModalWindow'
import {useSelector} from 'react-redux'


function App() {
  const {modalWindow} = useSelector(({modalWindowReducers}) => modalWindowReducers)


  return (
    <>
      <Header/>
      <ToastMessage/>
      <Routes/>
      {modalWindow && <ModalWindow/>}
    </>
  )
}

export default App
