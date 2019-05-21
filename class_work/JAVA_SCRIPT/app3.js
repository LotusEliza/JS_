class classParent {
    constructor() {}

    first() {
        console.log('Parent first');
    }

    second() {
        console.log('Parent second');
    }
}

class classChild extends classParent {
    first() {
        console.log('Child first')
    }
}