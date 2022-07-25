export class Pokemon {

    constructor(
        private _id: any,
        private _name: string,
        private _entry: string,
        private _sprites: string,
        private _hp: number,
        private _attack: number,
        private _defense: number,
        private _specialAttack: number,
        private _specialDefense: number,
        private _speed: number,
        private _types: string[]
    ){}


    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get entry(): string {
        return this._entry;
    }
    public set entry(value: string) {
        this._entry = value;
    }

    public get sprites(): string {
        return this._sprites;
    }
    public set sprites(value: string) {
        this._sprites = value;
    }

    public get types(): string[] {
        return this._types;
    }
    public set types(value: string[]) {
        this._types = value;
    }

    public get specialDefense(): number {
        return this._specialDefense;
    }
    public set specialDefense(value: number) {
        this._specialDefense = value;
    }

    public get specialAttack(): number {
        return this._specialAttack;
    }
    public set specialAttack(value: number) {
        this._specialAttack = value;
    }

    public get defense(): number {
        return this._defense;
    }
    public set defense(value: number) {
        this._defense = value;
    }

    public get attack(): number {
        return this._attack;
    }
    public set attack(value: number) {
        this._attack = value;
    }

    public get hp(): number {
        return this._hp;
    }
    public set hp(value: number) {
        this._hp = value;
    }

    public get speed() : number {
        return this._speed;
    }
    public set speed(speed: number) {
        this._speed = speed;
    }
}