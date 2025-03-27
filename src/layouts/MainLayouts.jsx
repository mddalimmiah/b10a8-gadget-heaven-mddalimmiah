import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div>
          <Toaster></Toaster>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-285px)]'>
              <div className='container mx-auto'>
              {
                <Outlet></Outlet>
               }
              </div>
            </div>
            <div className='mt-150'>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayouts;