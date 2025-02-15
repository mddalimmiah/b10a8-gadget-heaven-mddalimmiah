import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Categories = ({ categories = [] }) => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="flex flex-col gap-2">
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <NavLink 
                            key={index} 
                            to={`/category/${category.category}`} 
                            className={({isActive})=> `tab block p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ${isActive? 'tab-active':''}`}
                        >
                            {category.category}
                        </NavLink>
                    ))
                ) : (
                    <p className="text-gray-500">No categories available</p>
                )}
            </div>
        </div>
    );
};

export default Categories;
