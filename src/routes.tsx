import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponents from './Componentes/Header/headerComponents';
import Footer from './Componentes/Footer/footer';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';


export default function AppRouter() {
    return (
        <Router future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
        }}
        >
            <HeaderComponents />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='sobre' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}