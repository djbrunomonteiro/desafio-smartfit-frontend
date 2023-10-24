import { ISchedules } from "./schedules";

export interface ILocation {
    id?: number,
    title?: string,
    towel?: string,
    opened?: boolean,
    mask?: string,
    locker_room?: string,
    fountain?: string,
    content?: string,
    schedules?: ISchedules[]


}