class Papers {
    constructor(){
        this._type = null

    }

    get type () {
        return this._type
    }

    set type (newValue) {
        this._type = newValue
    }
}

let paper = new Papers()
paper.type = "toilet"
console.log(paper.type)

class Brushes {
    constructor(){
        this._type = null
    }
    get type(){
        return this._type
    }
    set type (newValue){
        this._type = newValue
    }
}
let brushes = new Brushes()
brushes.type = "round"
console.log(brushes.type)