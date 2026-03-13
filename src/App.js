import './App.css';
import { BrowserRouter as  Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproduct from './components/Addproduct';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
       <h1>Welcome to sokogarden</h1>
      </header>
      {/* Below is our different routes toghether with the rendered components */}
      <Routes>
        <Route path='/' element={<Getproducts/>} />
        <Route path='/addproduct' element={<Addproduct/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/getproduct' element={<Getproducts/>} />
        <Route path='*' element={<Notfound/>} />
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;
