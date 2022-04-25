const arrCars = ["BMW", "Audi", "Volvo"];
console.log(arrCars);
arrCars.push("Lambo");

//Print out new array Cars
console.log(arrCars);
for (let i =0; i<arrCars.length; i++){
    if(arrCars[i] == "BMW"){
        console.log("Found BMW car");
        break;
    }
}

console.log(arrCars);
arrCars.pop(); //Pop the last element out the array
console.log(arrCars);