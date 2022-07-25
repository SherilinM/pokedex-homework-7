export class PokemonBasicData {

    constructor(private _name: string, private _imageUrl: string) {}
    
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get imageUrl(): string {
        return this._imageUrl;
    }

    public set imageUrl(value: string) {
        this._imageUrl = value;
    }
}