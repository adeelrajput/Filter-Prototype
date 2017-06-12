let arryofobj:{firstName:string, lastName:string,class:any,age:number}[]=[
{
    firstName:"Adeel",
    lastName:"Rajput",
    class:"BSit",
    age:12
},

{
    firstName:"noman",
    lastName:"Rajput",
    class:"czcz",
    age:14
},

{
     firstName:"Ahmed",
    lastName:"kham",
    class:"BSit",
    age:16
},

{
    firstName:"ab",
    lastName:"Rajput",
    class:"BSit",
    age:18
},

{
    firstName:"cd",
    lastName:"Rajput",
    class:"czcz",
    age:20
},

{
     firstName:"ef",
    lastName:"kham",
    class:"BSit",
    age:22
},

{
    firstName:"gh",
    lastName:"Rajput",
    class:"BSit",
    age:24
},

{
    firstName:"ij",
    lastName:"Rajput",
    class:"czcz",
    age:26
},

{
     firstName:"kl",
    lastName:"kham",
    class:"BSit",
    age:28
},

{
    firstName:"mn",
    lastName:"Rajput",
    class:"BSit",
    age:30
},

{
    firstName:"op",
    lastName:"Rajput",
    class:"czcz",
    age:32
},

{
     firstName:"qr",
    lastName:"kham",
    class:"BSit",
    age:34
},

{
    firstName:"st",
    lastName:"Rajput",
    class:"BSit",
    age:36
},

{
    firstName:"uv",
    lastName:"Rajput",
    class:"czcz",
    age:38
},

{
     firstName:"wx",
    lastName:"kham",
    class:"BSit",
    age:40
}
];

function filterbyage(age_val){
     return age_val.filter(function(object){
        return(object.age<=20 || object.age>=30)
}
);
}


        //Filter by name key

function filterbyname(name_val){
     return name_val.filter(function(object){
        return(object.firstName=="cd" || object.firstName=="ab")});}


console.log(filterbyage(arryofobj));
console.log(filterbyname(arryofobj));

