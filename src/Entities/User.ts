import { Entity } from "./Entity";

export class User extends Entity {
    public accountIdentifier: string;
    public userName: string;
    public name: number;

    public annualCount: number;
    public casualCount: number;
    public medicalCount: number;

    constructor(obj: any) {   
        super(obj);
    }
}