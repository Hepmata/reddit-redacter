import Redactor from "./Redactor";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
import { AuthContextProvider} from '../util/AuthContext'
function App() {
  return (
    <>
      <AuthContextProvider>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/redactor'} element={<Redactor/>}/>
      </Routes>
      </AuthContextProvider>
      
    </>
  );
}

export default App;
