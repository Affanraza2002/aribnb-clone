import React, { useState } from 'react';

import axiosInstance from '@/utils/axios';
import { usePlaces } from '../../../hooks';

const SearchBar = () => {
  const Places = usePlaces();
  const { setPlaces, setLoading } = Places;

  const [searchText, setSearchText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);

  const handleSearch = async () => {
    clearTimeout(searchTimeout);

    if (searchText.trimStart() !== '') {
      setLoading(true);
      setSearchTimeout(
        setTimeout(async () => {
          const { data } = await axiosInstance.get(
            `/places/search/${searchText.trimStart()}`,
          );
          setPlaces(data);
          setLoading(false);
        }, 500),
      );
    }
  };

  const toggleInput = () => {
    setShowInput((prev) => !prev);
    setSearchText(''); // Clear input text when toggling
  };

  return (
    <>
      <div className={`flex overflow-hidden rounded-full border border-gray-400 bg-gray-300 shadow-sm hover:shadow-lg ${showInput ? 'md:w-full' : 'md:w-1/2'}`}>
        {showInput ? (
          <div className="grow">
            <input
              type="search"
              placeholder="Where you want to go?"
              className="w-full border-none py-1 px-2 text-sm focus:outline-none md:text-lg"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
          </div>
        ) : null}
        <div className={`bg-blue flex cursor-pointer items-center bg-primary text-white ${showInput ? 'rounded-r-none' : 'rounded-r-full'}`}>
          <button
            className="flex rounded-full bg-primary py-2 px-4 md:p-2"
            onClick={() => {
              toggleInput();
              if (showInput) {
                handleSearch();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="mt-1 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
