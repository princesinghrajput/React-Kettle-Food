import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import { MenuShimmer } from './Shimmer';

const Bestsellers = ({product}) => {
    const [bestsellers, setBestsellers] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { addToCart } = useCart();  //to increase cart count
    const {increaseQuantity} = useCart();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (response.ok) {
                    const data = await response.json();
                    setBestsellers(data);
                    setSearchResults(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        if (bestsellers) {
            const results = bestsellers.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
    };

    const toggleDescription = (id) => {
        const updatedResults = searchResults.map((product) =>
            product.id === id ? { ...product, showFullDescription: !product.showFullDescription } : product
        );
        setSearchResults(updatedResults);
    };

    return !bestsellers ? (<MenuShimmer />) : (

        <div className='bg-orange-100 min-h-screen'>  

            <div className='container mx-auto px-4 py-8'>
                <div className='flex items-center justify-between mb-8'>
                    <input
                        type="text"
                        placeholder="Search by product title..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className='p-2 border border-gray-300 rounded-lg'
                    />
                    <button
                        onClick={handleSearch}
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-800 focus:outline-none hover:bg-gray-700"
                    >
                        Search
                    </button>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {searchResults.map((product) => (
                        <div key={product.id} className='bg-white rounded-lg overflow-hidden shadow-md'>
                            <img className='w-full h-40 object-cover' src={product.image} alt={product.title} />
                            <div className='p-4 flex flex-col justify-between'>
                                <div>
                                    <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
                                    {product.showFullDescription ? (
                                        <p className='text-gray-600 mb-4'>{product.description}</p>
                                    ) : (
                                        <p className='text-gray-600 mb-4'>{product.description.slice(0, 100)}...</p>
                                    )}
                                    <button
                                        className='text-blue-500 hover:text-blue-700 focus:outline-none'
                                        onClick={() => toggleDescription(product.id)}
                                    >
                                        {product.showFullDescription ? 'Read Less' : 'Read More'}
                                    </button>
                                    <p className='text-gray-800 font-semibold mb-2'>Price: ${product.price}</p>
                                </div>
                                <div className='flex justify-center'>
                                    <button
                                        onClick={()=>increaseQuantity(product)}
                                        className="px-4 py-2 uppercase rounded-full bg-gray-800 text-white border-2 border-gray-800 focus:outline-none hover:bg-gray-700"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bestsellers;
