
let songIndex=0;
let audioElement=new Audio('songs/song1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById("myProgressBar")
// let songItem=Array.from(document.getElementsByClassName('songlist'))
let songItemPlay=document.getElementsByClassName('plays')
let songs=[
    
    { filepath:"songs/song1.mp3"},
    { filepath:" songs/song2.mp3"},
    { filepath:"songs/song3.mp3"},
    {filepath:"songs/song4.mp3"},
]



masterPlay.addEventListener('click',function(){
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
    }
})
if(audioElement.play()){
    myProgressBar.addEventListener('timeupdate', function(){
        console.log('timeupdate')
        progress=int((audioElement.currentTime/audioElement.duration)*100)
        console.log(time)
        myProgressBar.value=progress
    
     })
     myProgressBar.addEventListener('change', function(){
        audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
     })
}


// const makeAllPlays=function(){
//     songItemPlay.forEach(function(element){
//         element.target.classList('fa-play-circle')
        
//         element.target.classList.add('fa-pause-circle')

//     })
      
    
//     }
//     Array.from(document.getElementsByClassName('plays')).forEach(function(element){
//         element.addEventListener('click',function(e){
//             makeAllPlays();
//             songIndex=int(e.target.id);
//             e.target.classList.remove('fa-pause-circle')
//             e.target.classList.add('fa-play-circle')
//             audioElement.currentTime=0;
//             audioElement.play();
//             masterPlay.classList.remove('fa-play-cirle')
//             masterPlay.classList.add('fa-pause-circle')

//         })


//     })
        



 document.getElementById('next').addEventListener('click',function(){
    if(songIndex>=3){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/song${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-cirle')
    masterPlay.classList.add('fa-pause-circle')
 })
 document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/song${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-cirle')
    masterPlay.classList.add('fa-pause-circle')
 })



    












    

 
 
 

    


 

 



 



// function playSong(songs){
//     songs.foreach(function(ele,i){
//         let audioElement=new Audio('filepath')

//     })
    

// }
// playSong(songs);