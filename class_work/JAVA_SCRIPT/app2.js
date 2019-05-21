function classParent() {

}

classParent.prototype.first = function() {
    console.log('Parent first')
}

classParent.prototype.second = function() {
    console.log('Parent second')
}

function classChild() {

}

extend(classChild, classParent);

classChild.prototype.first = function() {
    console.log('Child first');
}