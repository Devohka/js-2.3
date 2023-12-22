const imgsEl = document.querySelectorAll(`img[class="lazyloded"]`);

const options = {
    rootMargin: "50px",
    threshold: 0.5,
}

const cullImgs = (imgsEl, observer) => {
    imgsEl.forEach(img => {
        img.addEventLisener("load", (e) => {
            console.log("fakevhf")
            e.target.classList.add("move");
        }, { ones: true });
    });
};

const observer = new IntersectionObserver(cullImgs);
