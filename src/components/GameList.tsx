import GCard from './GameCard';
import { defaultGames } from '../data';

export default function GList() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {defaultGames.map(game => (
        <GCard key={game.id} game={game} />
      ))}
    </div>
  );
}
