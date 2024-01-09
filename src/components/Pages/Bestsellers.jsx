import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext'


const Bestsellers = () => {
    const [bestsellers, setBestsellers] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const {addToCart} = useCart();  //to increase cart count
    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (response.ok) {
                    const data = await response.json();
                    setBestsellers(data); // Update state with fetched data
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    const handleSearch = () => {
        if (bestsellers) {
            // Filter products based on search term
            const results = bestsellers.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
        }
    };



    return (
        <div className=' bg-orange-300 border border-red-200 rounded-lg'>
            <div>
                <input
                    type="text"
                    placeholder="Search by product title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='p-2 m-4 border border-gray-300 rounded-lg'
                />
                <button
                    onClick={handleSearch}
                    className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                >
                    Search
                </button>
            </div>
            {searchResults.length >= 0 ? (
                <div className='flex flex-wrap p-10'>
                    {searchResults.map((product) => (
                        <div key={product.id} className='m-4 w-60 rounded-lg border border-gray-200 text-wrap text-center bg-white-100 hover:bg-gray-300'>
                            <img className='w-48 h-40 mx-auto mt-3' src={product.image} alt={product.title} />
                            <h2 className='p-2 text-xl text-center text-red-600 font-bold'>{product.title}</h2>
                            <p className='h-30 p-1 text-xs text-wrap font-bold truncate'>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
                            <div className='pt-3 pb-2'>
                                <button onClick={addToCart} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-10">
                    {bestsellers ? <p>No matching results found.</p> : <p>Loading...</p>}
                </div>
            )}
        </div>
    );
};

export default Bestsellers;
