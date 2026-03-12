AOS.init({
duration:1000,
once:true
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{
nav.classList.toggle("show");
});

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach(img=>{
img.addEventListener("click",()=>{
const modal=document.createElement("div");
modal.style.position="fixed";
modal.style.top=0;
modal.style.left=0;
modal.style.width="100%";
modal.style.height="100%";
modal.style.background="rgba(0,0,0,0.8)";
modal.style.display="flex";
modal.style.alignItems="center";
modal.style.justifyContent="center";

const modalImg=document.createElement("img");
modalImg.src=img.src;
modalImg.style.maxWidth="90%";
modalImg.style.maxHeight="90%";

modal.appendChild(modalImg);

modal.addEventListener("click",()=>{
modal.remove();
});

document.body.appendChild(modal);
});
});

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{
e.preventDefault();
console.log("Form submitted");
alert("Message sent!");
});