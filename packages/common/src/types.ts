export type GameState = 'waiting' | 'lobby' | 'game';
export type GameMode = 'deathmatch' | 'team deathmatch';
export type Teams = 'Red' | 'Blue';
export type WallCollisionType = 'full' | 'none';

/**
 * Represent the initial parameters of a Player
 */
export interface PlayerOptions {
    playerName?: string;
    /** MongoDB _id of the authenticated user — passed by the client on join */
    userId?: string;
}

/**
 * Represent the initial parameters of a Room
 */
export interface RoomOptions {
    playerName?: string;
    roomName: string;
    roomMap: string;
    roomMaxPlayers: number;
    mode: GameMode;
}
