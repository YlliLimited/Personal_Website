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













// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();