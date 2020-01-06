export class Entity {
    id: string;

    constructor(obj: object) {
        console.log('ssddd 2');
        Object.assign(this, obj);
    }
}