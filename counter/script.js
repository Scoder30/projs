let c=0;
let p="Even";
let p1="Odd";

let cvalue=document.getElementById('count')
let eo=document.getElementById('evenodd')

 



function increment(){

    
    if(c<25){
        ++c;
        cvalue.innerText=c;
        if(c%2==0){
            eo.textContent=p;
        }
        else{
            eo.textContent=p1;
        }
       
    }
    
   


}
function decrement(){

    
    if(c>0){
        --c;
   cvalue.innerText=c;
   if(c%2==0){
    eo.textContent=p;
}
else{
    eo.textContent=p1;
}
}}
function reset(){

    c=0;
   cvalue.innerText=c;
    eo.textContent=p;    
}



 