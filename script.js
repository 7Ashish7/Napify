const audioPlayer=document.getElementById("audioPlayer");
const playButton=document.getElementById("playButton");
const pauseButton=document.getElementById("pauseButton");
const volumeSlider=document.getElementById("volumeSlider");
const progressBar=document.getElementById("progress-bar");
const playlistItem=document.querySelectorAll(".song");
playButton.addEventListener("click",function(){
    audioPlayer.play();
});
pauseButton.addEventListener("click",function(){
    audioPlayer.pause();
});
volumeSlider.addEventListener("input",function(){
    audioPlayer.volume=volumeSlider.value;
});
audioPlayer.addEventListener("timeupdate",function(){
    const progress=(audioPlayer.currentTime/audioPlayer.duration)*100;
    progressBar.style.width=`${progress}%`;
});
playlistItem.forEach(function(item){
    item.addEventListener("click",function(){
        playlistItem.forEach(function(item){
            item.classList.remove("active");
        });
        this.classList.add("active");
        const songSrc=this.innerText.toLowerCase().replaceAll(" ","")+".mp3";
        audioPlayer.src=songSrc;
        audioPlayer.play();
    });
});

