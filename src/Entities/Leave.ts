import ***REMOVED*** Entity ***REMOVED*** from "./Entity";

export enum LeaveType ***REMOVED***
    CASUAL, MEDICAL, ANNUAL, NOPAY
***REMOVED***

export class Leave extends Entity ***REMOVED***
    public userId: string;
    public date: Date;
    public type: LeaveType
***REMOVED***