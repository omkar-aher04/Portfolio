gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".career-row",
  start: "80px 110px",  // adjust to match where you want the image to stick
  end: () => {
    const left = document.querySelector(".txt");
    // pin until the text section has scrolled through
    return "+=" + (left.scrollHeight - window.innerHeight + 190);
  },
  pin: ".Fimages",
  pinSpacing: true,
  
});
const infos = document.querySelectorAll(".info");
infos.forEach((info, index) => {
  ScrollTrigger.create({
    trigger: info,
    start: "top 20%",
    onEnter: () => switchImage(index),
    onEnterBack: () => switchImage(index)
  });
});

function switchImage(idx) {
  const allImages = document.querySelectorAll(".images");
  allImages.forEach((img, i) => {
    img.style.display = i === idx ? "block" : "none";
  });
}
const follower = document.querySelector('.mouse-follower');

window.addEventListener('mousemove', (e) => {
  gsap.to(follower, {
    x: e.clientX,
    y: e.clientY,
    duration: 1.7, // Lower = faster follow
    ease: "power2.out"
  });
});