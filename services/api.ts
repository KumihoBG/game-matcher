import { SearchProps } from "types/components";

export const searchGames = async ({ query, setResults}: SearchProps) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/games?search=${query}&key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const gamesList = await response.json();
        setResults && setResults(gamesList.results || []);

        return gamesList.results || [];
    } catch (error) {
        console.error('Error searching games:', error);
        throw error;
    }
};

export const getGames = async ({ setResults }: SearchProps ) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const gamesList = await response.json();
        setResults && setResults(gamesList.results || []);

        return gamesList.results || [];
    } catch (error) {
        console.error('Error getting games:', error);
        throw error;
    }
};