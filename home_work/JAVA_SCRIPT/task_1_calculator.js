
function CalcClass(a,b){
	
    this.a = a;
    this.b = b;

    this.mult = function(){
        return a * b;
    }

    this.add = function(){
        return a + b;
    }

    this.subs = function(){
        return a - b;
    }

    this.dev = function(){
        return a / b;
    }

    this.print = function(answer){
        console.log(answer);
    }
}

var app = new CalcClass(2,3);
app.print(app.dev());