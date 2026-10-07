import Navbar from "./components/navbar";
import Footer from "./components/footer";
import EventCards from "./components/Eventcard";

function App() {
  return (
    <>
      <Navbar />
      <h1> Campus Events</h1>
      <EventCards title ="Campus Tech Conference" 
      location = "Main Campus Hall" 
      price = {15}/>
      <Footer />
    </>
  )
}

export default App
