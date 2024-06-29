import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/cafe/Home';
import DisplayCabinet from './components/pages/DisplayCabinet';
import IngredientsRun from './components/ingredients-run/IngredientsRun';
import Kitchen from './components/pages/Kitchen';
import KitchenOven from './components/pages/KitchenOven';
import OvenBaking from './components/pages/OvenBaking';
import BakingInProgress from './components/pages/BakingInProgress';
import GettingYourStepsIn from './components/pages/GettingYourStepsIn';

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
