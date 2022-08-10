import './App.css';
import { LastLocationProvider } from 'react-router-last-location';
import Routes from './router/Routes';
import { BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
        <BrowserRouter>
          <LastLocationProvider>
            <Routes />
          </LastLocationProvider>
        </BrowserRouter>

  );
}

export default App;
