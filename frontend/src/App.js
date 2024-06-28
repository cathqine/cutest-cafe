import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DisplayCabinet from './components/DisplayCabinet';
import IngredientsRun from './components/IngredientsRun';
import Kitchen from './components/Kitchen';
import KitchenOven from './components/KitchenOven';
import OvenBaking from './components/OvenBaking';
import BakingInProgress from './components/BakingInProgress';
import GettingYourStepsIn from './components/GettingYourStepsIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/home" element=<Home /> />
        <Route path="/display-cabinet" element=<DisplayCabinet /> />
        <Route path="/ingredients-run" element=<IngredientsRun /> />
        <Route path="/kitchen" element=<Kitchen /> /> {/* display style */}
        <Route path="/kitchen-oven" element=<KitchenOven /> /> {/* kitchen: zoom into oven */}
        <Route path="/oven-baking" element=<OvenBaking /> />
        <Route path="/baking-in-progress" element=<BakingInProgress /> />
        <Route path="/getting-your-steps-in" element=<GettingYourStepsIn /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
