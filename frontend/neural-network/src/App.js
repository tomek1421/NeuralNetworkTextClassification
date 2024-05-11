import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { Diabetes } from './pages/Diabetes';
import { Model } from './pages/Model';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/diabetes" element={<Diabetes />} />
          <Route path="/heart" element={<div>heart</div>} />
          <Route path="/model" element={<div><Model /></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
