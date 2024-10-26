import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
           <Routes>
            <Route exact path="/" element={<Home />} /> 
            </Routes>
          <Routes>
            <Route path="/create" element={<Create />} /> 
          </Routes>
          <Routes>
            <Route path="/blogs/:id" element={<BlogDetails />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
