import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GifsProvider } from './context/GifsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GifsProvider>
    <App />
  </GifsProvider>
)
