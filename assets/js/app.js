const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if (entry.isIntersecting){
      entry.target.classList.add('showLeft');
    } else {
      entry.target.classList.remove('showLeft');
    }
  });
});

const hiddenLeftElements = document.querySelectorAll('.hiddenLeft');
hiddenLeftElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) =>{
    if (entry2.isIntersecting){
      entry2.target.classList.add('showRight');
    } else {
      entry2.target.classList.remove('showRight');
    }
  });
});

const hiddenLeftElements2 = document.querySelectorAll('.hiddenRight');
hiddenLeftElements2.forEach((el2) => observer2.observe(el2));