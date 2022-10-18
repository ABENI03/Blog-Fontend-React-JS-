

import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewBlog from './components/newBlog';
import BlogDetail from './components/blogDetail';
import Login from './components/Login';

function App() {
  return (
    <div className="App">


      <Router>

        <Routes>
          <Route exact path="/" element={< Home />}></Route>
        </Routes>
        <Routes>
          <Route  path="/createnew" element={<NewBlog/>}></Route>
        </Routes>
        <Routes>
          <Route  path="/id/:id" element={<BlogDetail></BlogDetail>}></Route>
        </Routes>
        <Routes>
          <Route  path="/login" element={<Login></Login>}></Route>
        </Routes>



      </Router>
    </div>
  );
}

export default App;
