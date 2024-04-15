$(document).ready(function(){
    $(".slider").slick({
        arrows: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 3000,
        cssEase: 'cubic-bezier(1,-0.36,0,1.02)'
    });

    $(".hero_sec_inner h1 span").lettering();

    var t1 = gsap.timeline();

    t1.from('.menu a', {
        y: -50,
        duration: .1,
        delay: 2,
        opacity: 0,
        stagger: {
            amount: .3
        }
    }).from('.hero_sec h1 span span', {
        y: -50,
        opacity: 0,
        stagger: {
            amount: .6
        }
    })
    .from('.slider', {
        y: -50,
        opacity: 0,
        duration: 1.5
    });

    // Delayed animation for the elements with class 'down'
    gsap.from('.down', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        delay: 3 // Adjust the delay as needed to synchronize with other animations
    });

    var cursor = $(".cursor"), cursorBack = $(".cursor-back");
    var posX = 0, posY = 0;
    var mouseX = 0, mouseY = 0;

    gsap.to({}, 0.018,{
        repeat: -1,
        onRepeat: function(){
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
            gsap.set(cursorBack, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            });
        }
    });

    $(document).on("mousemove", function(e){
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    $(".menu a").on("mouseenter", function(){
        cursor.addClass("active");
        cursorBack.addClass("active");
    });
    $(".menu a").on("mouseleave", function(){
        cursor.removeClass("active");
        cursorBack.removeClass("active");
    });

});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
