import { defaultGames } from "../data";
import { GameItem } from "../types";

export default function GDetails() {
  return (
    <div className="games-details">
      <h1>Game Details</h1>
      <div className="games-list">
        {defaultGames.map((game: GameItem) => (
          <div key={game.id} className="game-item">
            <h2>{game.title}</h2>
            <img src={game.img} alt={game.title} className="game-image" />
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Rating:</strong> {game.stars} stars</p>
          </div>
        ))}
      </div>
    </div>
  );
}
