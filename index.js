// define dom var
// add event listener on submit :
// 1. take the name
// 2. go to api gender
// 3. go to api age
// 4. go to api country
// 5. take flag from attributes and make it inner html
// 6. local storage
//7. upload to github


let person = document.querySelector('#person');
let btn = document.querySelector('#btn');


btn.addEventListener('click', async (event) => {
    let n = person.value; // input (name)

// Gender :
let response = await fetch ('https://api.genderize.io/?name='+ n);
let resJson = await response.json();
let gender = resJson.gender; // result


let G = document.querySelector('#gen');
G.innerText=gender; // show the result


// Age
let Agify = await fetch('https://api.agify.io?name='+ n);
let ageJson = await Agify.json();
let age = ageJson.age;

let A = document.querySelector('#age');
A.innerText= age;


// country ID
let nat= await fetch('https://api.nationalize.io/?name='+n);
let natJson = await nat.json();
// let con = natJson.country;
let countries = natJson.country

// iteration to get every possible county ID
let codes ='';
for (let country of countries){
codes = country.country_id + ',' + codes ;
}
let C = document.querySelector('#country');
C.innerText = codes; // there is problem here: I can't clear the last comma ,


// get flag img from ID's => sends codes to api
let flagApi= await fetch('https://restcountries.com/v3.1/alpha?codes='+ codes)
let flagJson = await flagApi.json();
let img = flagJson.flag;


// append img
function append(){
    document.querySelector('#flag').src=img;
}
append();
// document.createElement 

// local storage
localStorage.setItem('name',n);

})
