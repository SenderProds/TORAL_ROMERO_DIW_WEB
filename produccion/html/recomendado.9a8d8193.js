let videos = document.querySelectorAll(".video");
videos.forEach((video)=>{
    video.addEventListener("click", (e)=>{
        window.open(video.dataset.urlVideo);
    });
});

//# sourceMappingURL=recomendado.9a8d8193.js.map
