
import './App.css';
import Navbar from './Routes/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Slider from './Components/Slider';

const url = 'https://puzzled-fawn-sweatsuit.cyclic.app/api/getdata'
function App() {
  return (
    <div className="App">
      <Navbar />
       <AllRoutes/> 
      
      {/* <Card /> */}
    </div>
  );
}

export default App;
