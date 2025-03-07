import Banner from '../components/Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories/Categories';

const Home = () => {
    const data = useLoaderData(); // Fetch the data from loader
    const categories = data?.categories || [];
  
    return (
        <div>
            {/* Banner Section */}
            <Banner />

            {/* Section Header */}
            <div className="mt-6">
                <h2 className="text-center text-4xl font-bold text-[#9538E2]">
                    Explore Cutting-Edge Gadgets
                </h2>
            </div>

            {/* Main Layout: Sidebar & Products */}
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
                
                {/* Sidebar for Categories */}
                <aside className="w-full lg:w-1/4 p-4 bg-gray-100 rounded-lg">
                    <Categories categories={categories} />
                </aside>

                {/* Product Cards Section */}
                <main className="w-full lg:w-3/4">
                    <Outlet  /> {/* Pass products to child routes */}
                </main>

            </div>
        </div>
    );
};

export default Home;
