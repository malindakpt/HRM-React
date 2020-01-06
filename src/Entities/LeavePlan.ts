import { Entity } from "./Entity";

export class LeavePlan extends Entity {
    public userId: string;
    public annualCount: number;
    public casualCount: number;
    public medicalCount: number;
}