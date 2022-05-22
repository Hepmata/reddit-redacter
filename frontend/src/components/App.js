import Redactor from "./Redactor";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import { AuthContextProvider} from '../util/AuthContext'
import Navigator from "./Navigator";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigator/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/redactor'} element={<Redactor/>}/>
      </Routes>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
