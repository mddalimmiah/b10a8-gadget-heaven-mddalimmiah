import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-285px)]'>
               {
                <Outlet></Outlet>
               }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;