class Person{
	
constructor(fullName, favColor){
this.name = fullName;
this.favoriteColor = favColor;
}

greet() {
console.log("Hi there, my name is "+this.name+" and my favorite color is "+this.favoriteColor)
}
}

export default Person;
//należy dokładonie wskazać na to co ma zostać przesłanie, tutaj chcę przesłać jedynie sam konstruktor stąd zapis z module
//module.exports = Person;


//za pomocą zapisu z exports przesyłam obiekt w raz z właściwością example i metodą exampleFun
/*exports.example = "hi";
exports.exampleFun = function(){
	alert('heyka')
}*/











