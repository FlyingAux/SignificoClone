function homepageAnimation(){
    gsap.set('.mcontslide',{
        scale: 5
    })
    
    var tl = gsap.timeline({
        scrollTrigger: {
                    trigger: '.home',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: true
                },
    })
    
    tl.to('.video',{
        '--clip': '0%',
        ease: Power2
    },'a')
    
    .to('.mcontslide',{
        scale: 1,
        ease: Power2
    },'a')
    .to('.lft',{
        xPercent: -10,
        ease: Power2
    },'b')
    .to('.lft2',{
        xPercent: -10,
        ease: Power2
    },'b')
    .to('.rgt',{
        xPercent: 10,
        ease: Power2
    },'b')
    .to('.rgt2',{
        xPercent: 10,
        ease: Power2
    },'b')
}


function realpageAnimation(){
    gsap.to('.slideholder',{
        scrollTrigger: {
            trigger: '.real',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        },
        xPercent: -300,
        ease: Power4,
        
    }) 
    
}

function teamAnimation(){
    document.querySelectorAll('.listelem')
.forEach(function(el){
    el.addEventListener('mousemove',function(dets){
        gsap.to(this.querySelector('.picture'),{opacity: 1,x: gsap.utils.mapRange(0,window.innerWidth, -200, 200, dets.clientX),y: gsap.utils.mapRange(0,window.innerWidth, -50, 50, dets.clientY)})
    })
    el.addEventListener('mouseleave',function(dets){
        gsap.to(this.querySelector('.picture'),{opacity: 0})
    })
})
}

function paraAnimation(){
    var clutter = "";
document.querySelector('.edittext').textContent.split("").forEach(function(ele){
    if(ele === " " ) clutter += `<span>&nbsp;</span>`
    clutter += `<span class="opacity-10">${ele}</span>`
})
document.querySelector(".edittext").innerHTML = clutter;


var clutter = "";
document.querySelector('.edittexttwo').textContent.split("").forEach(function(ele){
    if(ele === " " ) clutter += `<span>&nbsp;</span>`
    clutter += `<span class="opacity-10">${ele}</span>`
})
document.querySelector(".edittexttwo").innerHTML = clutter;

gsap.set('.edittext span',{opacity: .1})
gsap.to('.edittext span',{
    scrollTrigger: {
        trigger: '.para',
        start: 'top 60%',
        end: 'bottom 90%',
        scrub: 2
    },
    opacity: 1,
    stagger: 0.3,
    ease: Power4
})

gsap.set('.edittexttwo span',{opacity: .1})
gsap.to('.edittexttwo span',{
    scrollTrigger: {
        trigger: '.paratwo',
        start: 'top 60%',
        end: 'bottom 90%',
        scrub: 2
    },
    opacity: 1,
    stagger: 0.3,
    ease: Power4
})
}


function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsule(){
    gsap.to('.Semi-circle-2',{
        scrollTrigger: {
            trigger: '.capsules',
            start: 'top 70%',
            end: 'bottom bottom',
            scrub: 1,
        },
        y: 10,
        ease: Power4
    })
}


function bodyColorChange(){
    document.querySelectorAll('.section')
.forEach(function(e){
    ScrollTrigger.create({
        trigger: e,
        start: 'top 50%',
        end: 'bottom 50%',
        markers: true,
        onEnter: function(){
            document.body.setAttribute('theme',e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute('theme',e.dataset.color);
        }
    })
})
}


loco();
capsule();
paraAnimation();
teamAnimation();
bodyColorChange();
realpageAnimation();
homepageAnimation();