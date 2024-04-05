
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ModalContext from './context/ModalContext.jsx'
import ActiveModal from './components/modals/index.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(

    <ModalContext>
        <BrowserRouter>
            <App />
            <ActiveModal />
        </BrowserRouter>
    </ModalContext>

)
