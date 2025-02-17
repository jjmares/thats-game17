export type GameItem = {
    id: string;
    title: string;
    stars: number;
    genre: string;
};

export type NewGameItem = Omit<GameItem, "id">;