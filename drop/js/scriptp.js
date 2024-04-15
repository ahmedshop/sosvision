document.addEventListener("DOMContentLoaded", async function() {
    try {
        const response = await fetch("http://192.168.1.6/drop/php/read.php");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        createSlider(data);
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});
// Adjust slider behavior based on screen size
const handleResize = () => {
    if (window.innerWidth <= 768) {
        // Disable horizontal scrolling
        scroll.calculate();
        scroll.move();
    } else {
        // Enable horizontal scrolling for larger screens
        scroll.maxScroll = scroll.wrapWidth - scroll.el.clientWidth;
        scroll.progress = clamp(scroll.progress, 0, scroll.maxScroll);
        scroll.move();
    }
};



window.addEventListener("resize", handleResize);
function createSlider(data) {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const sliderItems = data.map(item => {
        return `
            <div class="slider-item">
                <figure>
                    <div class="title">${item.title}</div>
                    <div class="mini-title">${item.description}</div>
                    <img src="${item.image}" alt="${item.title}">
                </figure>
            </div>
        `;
    }).join("");
    sliderWrapper.innerHTML = sliderItems;

    const scroll = new DragScroll({
        el: ".slider2",
        wrap: ".slider-wrapper",
        item: ".slider-item",
        bar: ".slider-progress-bar",
    });

    const animateScroll = () => {
        requestAnimationFrame(animateScroll);
        scroll.raf();
    };
    animateScroll();

    // Adjust slider behavior based on screen size
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            // Disable horizontal scrolling
            scroll.calculate();
            scroll.move();
        }
    };

    window.addEventListener("resize", handleResize);
}

class DragScroll {
    constructor(obj) {
        this.el = document.querySelector(obj.el);
        this.wrap = document.querySelector(obj.wrap);
        this.items = document.querySelectorAll(obj.item);
        this.bar = document.querySelector(obj.bar);
        this.init();
    }

    init() {
        this.progress = 0;
        this.speed = 0;
        this.oldX = 0;
        this.x = 0;
        this.playrate = 0;
        this.bindings();
        this.events();
        this.calculate();
        this.raf();
    }

    bindings() {
        [
            "events",
            "calculate",
            "raf",
            "handleWheel",
            "move",
            "handleTouchStart",
            "handleTouchMove",
            "handleTouchEnd",
        ].forEach((method) => {
            this[method] = this[method].bind(this);
        });
    }

    calculate() {
        this.progress = 0;
        this.wrapWidth = this.items[0].clientWidth * this.items.length;
        this.wrap.style.width = `${this.wrapWidth}px`;
        this.maxScroll = this.wrapWidth - this.el.clientWidth;
    }

    handleWheel(e) {
        this.progress += e.deltaY;
        this.move();
    }

    handleTouchStart(e) {
        e.preventDefault();
        this.dragging = true;
        this.startX = e.clientX || e.touches[0].clientX;
    }

    handleTouchMove(e) {
        if (!this.dragging) return false;
        const x = e.clientX || e.touches[0].clientX;
        this.progress += (this.startX - x) * 2.5;
        this.startX = x;
        this.move();
    }

    handleTouchEnd(e) {
        this.dragging = false;
    }

    move() {
        this.progress = clamp(this.progress, 0, this.maxScroll);
    }

    events() {
    window.addEventListener("resize", this.calculate, { passive: false });
    window.addEventListener("wheel", this.handleWheel, { passive: false });
    this.el.addEventListener("touchstart", this.handleTouchStart, { passive: false });
    window.addEventListener("touchmove", this.handleTouchMove, { passive: false });
    window.addEventListener("touchend", this.handleTouchEnd, { passive: false });
    window.addEventListener("mousedown", this.handleTouchStart, { passive: false });
    window.addEventListener("mousemove", this.handleTouchMove, { passive: false });
    window.addEventListener("mouseup", this.handleTouchEnd, { passive: false });
    document.body.addEventListener("mouseleave", this.handleTouchEnd, { passive: false });
    document.body.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false }); // Prevent scrolling on touchmove
}



    raf() {
        this.x = lerp(this.x, this.progress, 0.1);
        this.playrate = this.x / this.maxScroll;
        this.wrap.style.transform = `translateX(${-this.x}px)`;
        this.bar.style.transform = `scaleX(${0.18 + this.playrate * 0.82})`;
        this.speed = Math.min(100, this.oldX - this.x);
        this.oldX = this.x;
        this.scale = lerp(this.scale, this.speed, 0.1);
        this.items.forEach(item => {
            item.style.transform = `scale(${1 - Math.abs(this.speed) * 0.005})`;
            item.querySelector("img").style.transform = `scaleX(${1 + Math.abs(this.speed) * 0.004})`;
        });
    }
}

const lerp = (f0, f1, t) => (1 - t) * f0 + t * f1;
const clamp = (val, min, max) => Math.max(min, Math.min(val, max));
