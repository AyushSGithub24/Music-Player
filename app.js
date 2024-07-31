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
plyBtn.addEventListener('click', () => {
    // console.log(plyBtn.innerHTML);
    if (pause) {
        plyBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        audio.pause();
    } else {
        plyBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        audio.play();
    }
    pause = !pause
})
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
next.addEventListener('click', () => {
    idx = (idx + 1) % songs.length;
    audio.src = songs[idx].url;
    audio.currentTime = 0;
    audio.play();
    plyBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    songName.textContent = songs[idx].name;
    pause = true
})

prev.addEventListener('click',()=>{
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
})
