import { createContext, useState, useEffect} from 'react';

export const WatchListContext = createContext();

export const WatchListProvider = ({ children }) => {
    const [watchlist, setWatchList] = useState([]);
    const [genreList, setGenreList] = useState([]);

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=b4bfa0a0531a43a691a9dba4b8564d07`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setGenreList(data.genres || []))
    }, []);

    const toggleWatchlist = (movie) => {
        const index = watchlist.findIndex((m) => m.id === movie.id);

        if (index === -1) {
            setWatchList([...watchlist, movie]);
        } else {
            setWatchList([
                ...watchlist.slice(0, index),
                ...watchlist.slice(index + 1)
            ]);
        }
    };

    return (
        <WatchListContext.Provider value={{ watchlist, toggleWatchlist, genreList }}>
            {children}
        </WatchListContext.Provider>
    );
};

export default WatchListContext;