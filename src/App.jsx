import './App.css'
import {  gradientBg } from './utils/gradientbg'
import { faculty } from './utils/data/faculty';
import Test from './pages/Test';
import PressStart from './pages/PressStart';
import Container from './components/Container';

function App() {
  const _gradientBg = gradientBg();
  console.log(faculty);
  return (
    <>      
      <PressStart/>
      <Test/>
    </>
  )
}

export default App
