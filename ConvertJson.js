console.log("Hello World From JavaScript");

//JSON object
const data = {
    "name" : "John",
    "age" : 22,
    "hobby" : {
        "swimming" : true,
        "gaming" : false,
        "sport" : "football"
    },
    "class" : ["JavaScript", "HTML" , "CSS"]
}

//Accessing JSON Object
console.log("Name is : " + data.name);
console.log("Like swimming ? : " + data.hobby.swimming);
console.log("Studying class : " +data.class[2]);

//Convert to JS Object
const jsonData = '{ "name": "John", "age": 22 }';
const obj = JSON.parse(jsonData);

//Convert to JS Object 
const objData = JSON.stringify(data);
console.log("Name is " + objData.name + " Age is " + objData.age);
console.log(objData);
console.log(obj);

