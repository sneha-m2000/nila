import './App.css';
import './index.css';
// import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Experts from './pages/Experts';

function App() {
    return (
        <>
            {/* Header always visible */}
            <Header />
            <Experts />
            {/* Page content changes below header */}
            {/* <Routes> */}
                {/* Home → nothing below header */}
                {/* <Route path="/" element={<></>} /> */}

                {/* Experts page */}
                {/* <Route path="/experts" element={<Experts />} /> */}
            {/* </Routes> */}
        </>
    );
}

export default App;
