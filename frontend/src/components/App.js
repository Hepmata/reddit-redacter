import Redactor from "./Redactor";
import {Routes, Route} from 'react-router-dom'
import Home from "./Home";
function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/redactor'} element={<Redactor/>}/>
      </Routes>
    </>
  );
}

export default App;
