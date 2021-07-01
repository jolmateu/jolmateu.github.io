function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide")
}

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var day = currentDate.getDay();        
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
                           
document.getElementById("lastmodified").textContent = `${days[day]}, ${date} ${months[month]} ${year}`;

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};


const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
          }
      });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });

  } else {
      imagesToLoad.forEach((img) => {
          loadImages(img);
      });
  }
