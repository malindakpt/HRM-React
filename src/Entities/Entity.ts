export class Entity {
    id: string;

    constructor(obj: object) {
        Object.assign(this, obj);
    }
}