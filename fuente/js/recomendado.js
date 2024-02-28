let videos = document.querySelectorAll(".video");


videos.forEach((video) => {
    video.addEventListener('click', (e) => {
        window.open(video.dataset.urlVideo);
        
    });
});