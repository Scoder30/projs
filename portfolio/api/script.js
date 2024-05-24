const mainDiv=document.getElementById('joke')
const btn=document.getElementById('btn')
let getjoke =()=>{
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
    .then((res) => res.json())
    // .then((data)=>{
    //    const para= document.createElement('p')
    //    para.textContent=data.joke
    // })
     .then((data) => mainDiv.textContent=`${data.joke}`)
.catch((err)=>console.log(err))}
btn.addEventListener('click',fun);
btn.addEventListener('click',getjoke)
getjoke();

function fun ()
 {
    const randomColor = Math.round(Math.random() * 10000000).toString(16)
 document.body.style.backgroundColor="#"+randomColor
 }
//  let change=(backgroundColor) => {
//     if(mainDiv.style.backgroundColor=="active"){
//         mainDiv.style.backgroundColor="dark"
//         mainDiv.style.color="#active"
//     }
//     else{
//         mainDiv.style.backgroundColor="dark";
//         mainDiv.style.color="active";

//     }

//  }
//  Toggle.addEventListener('click',change)






 










