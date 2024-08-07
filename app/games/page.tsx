'use client';

import React, { useState, useEffect } from 'react';
import AllGames from '@/src/components/AllGames';
import { GameProps } from '@/src/types/components';
import { getGamesByPage } from 'services/gamesAPI';

const Games = () => {
  const [gamesList, setGamesList] = useState<GameProps[]>();
  const [totalGamesCount, setTotalGamesCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getGamesByPage({
      setGamesList,
      setTotalGamesCount,
      currentPage,
      setCurrentPage,
    });
  }, []);

  return (
    <div className="w-full h-auto min-h-screen">
      <div className="flex flex-col w-11/12 h-full mx-auto lg:mt-24">
        {gamesList && gamesList?.length > 0 && (
          <AllGames
            gamesList={gamesList}
            setGamesList={setGamesList}
            totalGamesCount={totalGamesCount}
            setTotalGamesCount={setTotalGamesCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Games;
