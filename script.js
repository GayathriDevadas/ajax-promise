// async an sync 

// setInterval(() => {
//     console.log("hii");
// }, 3000);

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// setTimeout(() => {
//     console.log("hai");
// },4000);

// call 

// var btn =document.getElementById("btn1")
// btn.addEventListener("click",()=>{
//     alert("Clicked")
// })

// function add (a,b) {

// }

// // async and sync 

// setInterval(()=>{
//     console.log("Hello");
// },3000);

// setTimeout(() => {
//     console.log("Hai");
// }, 4000);

// function add1(a,b){
//     var sum =a+b
//     return sum
// }

// function display(val){
//     console.log(val)
//     document.getElementById("textc").innerText=`The sum is ${val}`
// }

// display(result)
// var result = add1(10,15)    

// // callback function
// function add1(a,b,callback){
//     var sum = a+b
//     callback(sum)
// }
// function display(val){
//     document.getElementById("textc").innerText=`The sum is =${val}`
// }

// add1(10,45,display)

// function add1(a,b){
//     return promise = new Promise((resolve,reject)=>{
//         var sum =a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("sum is not greater than 10")
//         }
//     })
// }

// add1(2,3)
// promise.then((val)=>{
//     document.getElementById("textc").innerText=`The sum is ${val}`
// })
// .catch((err)=>{
//     document.getElementById("textc").innerText=`The error massage is ${err}`
// })



// function subtraction(a,b){
//      let promise = new Promise((resolve,reject)=>{
//         var sub =a-b
//         if(sub>10){
//             resolve(sub)
//         }
//         else{
//             reject("sub is not less than 10")
//         }
//     })



// promise.then((val)=>{
//     document.getElementById("textA").innerText=`The sub is ${val}`
// })
// .catch((err)=>{
//     document.getElementById("textA").innerText=`The error massage is ${err}`
// })}
// subtraction(50,15)

// function multiplication(a,b){
//     let promise = new Promise((resolve,reject)=>{
//        var mult =a*b
//        if(mult>10){
//            resolve()
//        }
//        else{
//            reject("mult is not greater than 10")
//        }
//    })



// promise.then((val)=>{
//    document.getElementById("textB").innerText=`The sub is ${val}`
// })
// .catch((err)=>{
//    document.getElementById("textB").innerText=`The error massage is ${err}`
// })}
// subtraction(50,15)


// async  function add1(a,b){
//     let promise = new Promise((resolve,reject)=>{
//         var sum = a+b
//         if(sum>10){
//             resolve(sum)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans = await promise
//     document.getElementById("textc").innerHTML=`The sum is ${ans}`
// }

// add1(10,2)

// async  function subtraction(a,b){
//     let promise1 = new Promise((resolve,reject)=>{
//         var sub = a-b
//         if(sub>10){
//             resolve(sub)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans1 = await promise1
//     document.getElementById("textA").innerHTML=`The sub is ${ans1}`
// }

// subtraction(50,15)


// async  function multiplication(a,b){
//     let promise2 = new Promise((resolve,reject)=>{
//         var mult = a*b
//         if(mult>10){
//             resolve(mult)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans2 = await promise2
//     document.getElementById("textB").innerHTML=`The sub is ${ans2}`
// }

// multiplication(50,15)


// async  function division(a,b){
//     let promise3 = new Promise((resolve,reject)=>{
//         var div = a/b
//         if(div>10){
//             resolve(div)
//         }
//         else{
//             reject("Error")
//         }
//     })
//     var ans3 = await promise3
//     document.getElementById("textC").innerHTML=`The DIV is ${ans3}`
// }

// division(100,2)





function ajaxcall(){
    var xhttp = new XMLHttpRequest()
    xhttp.open('GET','https://dummyjson.com/products',true)
    xhttp.send()
    xhttp.onreadystatechange= function (){
        let promise = new Promise((resolve,reject)=>{
            if(this.readyState==4 && this.status==200){
            resolve("It is done")
        }
        })
        promise.then((val)=>{
            document.getElementById("textc").innerHTML=`The result is ${val}`
        })
    }
}

ajaxcall()
