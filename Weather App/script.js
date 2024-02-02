
 let apikey = `195c3571d3dd825f713b348ac5bcbec7`
let url = `https://api.openweathermap.org/data/2.5/weather?q=`

let input = document.querySelector(".searchbox")
let btn = document.querySelector(".btn")
let h1 = document.querySelector(".temp")
let citynamee = document.querySelector(".city-name")
let humidity = document.querySelector(".humidity")
let wind = document.querySelector(".wind")
let imagese = document.querySelector(".images")

let daata = async function(names){
    let data = await fetch(`${url}${names}&appid=${apikey}`)
    let jsondata = await data.json()
    console.log(jsondata.weather[0].main);
    h1.innerHTML = jsondata.main.temp
citynamee.innerHTML = jsondata.name
humidity.innerHTML = jsondata.main.humidity
wind.innerHTML = jsondata.wind.speed
 


}

btn.addEventListener("click", function(){
   serachboxes()
   input.value = ""

})

function serachboxes(){
    if(input.value == ""){
        alert("enter some data which you wants")
    }else{
        daata(input.value)
    }
   
}


daata()

