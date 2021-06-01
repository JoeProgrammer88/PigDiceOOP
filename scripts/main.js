class Die {
    constructor() {
        this.roll();
    }
    get faceUpValue() {
        return this._faceUpValue;
    }
    roll() {
        this._faceUpValue = Math.floor((Math.random() * 6) + 1);
        return this._faceUpValue;
    }
}
let myDie = new Die();
myDie.roll();
let value = myDie.faceUpValue;
