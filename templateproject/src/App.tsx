import Footer from "./components/pages/Footer";
import Header from "./components/pages/Header";
import AboutUs from "./Page/About_Us/AboutUs";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = ()=> {
  return (
    <Router>
       <Header/>
       <Routes>
          <Route path="/" element={<AboutUs/>}> </Route>
          </Routes>
    <Footer/>
    </Router>
  )
}

export default App;