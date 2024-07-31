let plyBtn = document.querySelector('#play-btn')
let progress = document.querySelector('#progress')
let songList = document.querySelector('#song-list')
let songName = document.querySelector('h3')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

let songs = [
    {
        name: "Hanuman Chalisa",
        id: 0,
        url: "./media/Hanuman Chalisa(PagalWorld.com.sb).mp3"
    },
    {
        name: "Husn Tera Tauba",
        id: 1,
        url: "./media/Husn Tera Tauba Tauba (Bad Newz)(PagalWorld.com.sb).mp3"
    },
    {
        name: "O Sajni Re",
        id: 2,
        url: "./media/O Sajni Re(PagalWorld.com.sb).mp3"
    },
    {
        name: "Ve Haniya",
        id: 3,
        url: "./media/Ve Haniya.mp3"
    },
    {
        name: "Big Dawgs",
        id: 4,
        url: "./media/Big Dawgs(PagalWorld.com.so).mp3"
    }
]
//show all songs ul
for (let song of songs) {
    let li = document.createElement('li')
    li.innerHTML = song.name;

    li.addEventListener('click', () => {
        songName.textContent = song.name;
        audio.src = song.url;
        audio.currentTime = 0;
        audio.play();
        plyBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        idx = song.id;
        pause = !pause
    })
    li.classList.add('song-item')
    songList.append(li)
}
let idx = 0;
//play pause btn
const audio = new Audio("./media/Hanuman Chalisa(PagalWorld.com.sb).mp3")
let pause = false;
function pausebtn(){
    if (pause) {
        plyBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        audio.pause();
    } else {
        plyBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audio.play();
    }
    pause = !pause
}
plyBtn.addEventListener('click', pausebtn())
//time update
audio.addEventListener('timeupdate', function () {
    let currentProgress = (audio.currentTime * 100) / audio.duration;
    progress.value = currentProgress
})

// event(change)
progress.addEventListener('change', function () {
    audio.currentTime = audio.duration * progress.value / 100
})


//next and previous functionality
function nextbtn(){
    idx = (idx + 1) % songs.length;
    audio.src = songs[idx].url;
    audio.currentTime = 0;
    audio.play();
    plyBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    songName.textContent = songs[idx].name;
    pause = true
}
next.addEventListener('click',nextbtn() )
function prevbtn(){
    if(idx==0){
        idx=4;
    }else{
        idx--;
    }
    audio.src = songs[idx].url;
    audio.currentTime = 0;
    audio.play();
    plyBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    songName.textContent = songs[idx].name;
    pause = true
}
prev.addEventListener('click',prevbtn())

//add keyboard functionality
window.addEventListener("keydown", (e) => {
    // console.log(e.code);
    if(e.code=='Space'|| e.code=='MediaPlayPause'){
        pausebtn();
    }
    else if(e.code=='MediaTrackNext'||(e.code=='ArrowRight')){
        nextbtn();
    }
    else if(e.code=='MediaTrackPrevious' || e.code=='ArrowLeft'){
        prevbtn();
    }
})

let idTimeout=setTimeout(()=>{
    alert("Now KeyBoard Functionality also added \nUse Space for Play/Pause \nUse left or right arrow key for previous and next track")
},50)

setTimeout(()=>{
    clearTimeout(idTimeout)
},10000);