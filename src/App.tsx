import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Details from 'pages/Details';
import Layout from 'layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:character' element={<Details />} />
      </Route>
    </Routes>

  )
}

