import React, { useEffect, useState } from 'react';
import Moviecard from '../components/Moviecard';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=b4bfa0a0531a43a691a9dba4b8564d07`;

        if (search.trim() !== "") {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&api_key=b4bfa0a0531a43a691a9dba4b8564d07`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
    }, [page, search]);

    return (
        <div className="p-4 pt-16">
            <input
                type="text"
                placeholder="Search movies..."
                className="p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 bg-opacity-60 backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-50"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="movies-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
                {movies.map((movie) => (
                    <Moviecard key={movie.id} movie={movie} />
                ))}
            </div>

            <div className="pagination-container flex justify-between mt-5">
                <button
                    disabled={page === 1}
                    className="p-2 bg-gray-700 text-white rounded disabled:opacity-50"
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    PREV
                </button>
                <button
                    className="p-2 bg-gray-700 text-white rounded"
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    NEXT
                </button>
            </div>
        </div>
    );
};

export default Home;