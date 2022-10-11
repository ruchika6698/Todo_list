import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Dashboard from "./component/Dashboard"; 
import AddItem from "./component/AddItem"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />} ></Route>
          <Route exact path='/addNewItem' element={<AddItem />} ></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
