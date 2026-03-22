import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import BookRequest from "./pages/bookRequest";
import EventFeedBack from "./pages/eventFeedBack";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
 return (
    <>
      
      <Router>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about"> About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services"> Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact"> Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bookrequest"> Book Request</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/eventfeedback"> Event Feedback</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
          
        
 
        
          
        
  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookrequest" element={<BookRequest />} />
        <Route path="/eventfeedback" element={<EventFeedBack />} />
      </Routes>

    </Router>
     
    </>
  )
}

export default App