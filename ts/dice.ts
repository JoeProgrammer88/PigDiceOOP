class Die{
    
    private _faceUpValue:number;

    /**
     * Creates the die with a random number 1 - 6
     */
    constructor(){
        this.roll();
    }

    get faceUpValue(){
        return this._faceUpValue;
    }

    /**
     * Rolls a random number between 1 - 6
     * assigns it to the faceUpValue and returns the number
     */
    roll():number{
        this._faceUpValue = Math.floor((Math.random() * 6) + 1);
        return this._faceUpValue;
    }
}