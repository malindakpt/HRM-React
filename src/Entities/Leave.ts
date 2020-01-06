import { Entity } from "./Entity";

export enum LeaveType {
    CASUAL, MEDICAL, ANNUAL, NOPAY
}

export class Leave extends Entity {
    public userId: string;
    public date: Date;
    public type: LeaveType

    constructor(obj: any) {   
        super(obj);
    }
}