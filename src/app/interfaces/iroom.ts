import { IReservation } from "../interfaces/ireservation";

export interface IRoom {
    id: string;
    name: string;
    picture: string;
    reservations?: IReservation[];
}
