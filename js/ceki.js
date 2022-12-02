gsap.registerPlugin(ScrollTrigger);

{
  const process = document.querySelector('.process');
  if ((typeof(process) != 'undefined' && process != null)) {
    let sections = gsap.utils.toArray('.process__item');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: process,
        markers: false,
        scrub: 1,
        pin: true,
        // onEnter: () => gsap.to(sections, {
        //   backgroundColor: "#d5d5d5",
        //   duration: 1.4
        // }),
        // onLeave: () => gsap.to(sections, {
        //     backgroundColor: '#fef9ef',
        //     duration: 1.4
        // }),
        // onLeaveBack: () => gsap.to(sections, {
        //     backgroundColor: '#fef9ef',
        //     duration: 1.4
        // }),
        // onEnterBack: () => gsap.to(sections, {
        //     backgroundColor: '#d5d5d5',
        //     duration: 1.4
        // }),
        // onToggle: (self) => gsap.to(sections, {
        //   backgroundColor: self.isActive ? color : '#fef9ef',
        //   duration: 1.4
        // }),
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".process").offsetWidth
      },
    });
  }

  const process2 = document.querySelector('.process2');
  if ((typeof(process2) != 'undefined' && process2 != null)) {
    let sections = gsap.utils.toArray('.process2__item');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: process2,
        markers: false,
        scrub: 1,
        pin: true,
        end: () => "+=" + document.querySelector(".process2").offsetWidth
      },
    });
  }
}


var targetsEndTrigger = document.querySelectorAll(".endtrigger");

var targetsHeight = document.querySelectorAll(".height");

var targetsBreak = document.querySelectorAll(".break");

targetsEndTrigger.forEach((target, index) => {
  const pinSpacing = index === targetsEndTrigger.length - 1 ? "true" : false;
  const endTrigger = `#card${index + 1}`
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsEndTrigger.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        // end,
        endTrigger,
        markers: false,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsHeight.forEach((target, index) => {
  const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
  const end =
    index === targetsHeight.length - 1
      ? `+=${target.offsetHeight}px`
      : `+=${targetsHeight[index + 1].offsetHeight}px`;
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        end,
        markers: false,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

targetsBreak.forEach((target, index) => {
  const pinSpacing = index === targetsBreak.length - 1 ? "true" : false;
  const end =
    index === targetsBreak.length - 1
      ? `+=${target.offsetHeight}px`
      : `+=${targetsBreak[index + 1].offsetHeight}px`;
  const opacityFirst = index === 0 ? 1 : 0;
  const opacitySecond = index === targetsBreak.length - 1 ? 1 : 0;
  const tl = gsap
    .timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: target,
        pin: true,
        scrub: true,
        start: "center center",
        end,
        markers: false,
        toggleActions: "restart none reverse reset",
        pinSpacing,
      },
    })
    .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
    .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
});

//bulan juni full page
let sectionsx = gsap.utils.toArray(".panel");

sectionsx.forEach((eachPanel, index) => {
  ScrollTrigger.create({
    trigger: eachPanel,
    start: "top top",

    pin: true,
    pinSpacing: false,

    scrub: 3,
    snap: {
      snapTo: 1,
      duration: { min: 0.3, max: 0.7 },
      ease: "power2.inOut",
      anticipatePin: 0.2,
      delay: 0
    },
    markers: false
  });
});




$(document).ready(function(){
  AOS.init({
    duration: 1200,
  })
})