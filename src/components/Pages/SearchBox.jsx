import React, { useState, useEffect } from 'react';

const SearchBox = () => {
    const [bestsellers, setBestsellers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (response.ok) {
                    const data = await response.json();
                    setBestsellers(data); // Update state with fetched data
                    setSearchResults(data); // Set initial search results to all products
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Filter products based on search term
        const results = bestsellers.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, bestsellers]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <div className='bg-orange-300 border border-red-200 rounded-lg'>
                <input
                    type="text"
                    placeholder="Search by product title..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className='p-2 m-4 border border-gray-300 rounded-lg'
                />
                <div className='flex flex-wrap p-10'>
                    {searchResults.length > 0 ? (
                        searchResults.map((product) => (
                            <div key={product.id} className='m-4 w-60 rounded-lg border border-gray-200 text-wrap text-center bg-white-100 hover:bg-gray-300'>
                                {/* Render product details */}
                            </div>
                        ))
                    ) : (
                        <p>No matching products found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchBox;
