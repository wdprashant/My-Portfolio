
  $(document).ready(function () {
    $("#menu").click(function () {
      $("#sidebar").toggleClass("left-none");
      $(".menu").toggleClass("fa-x");
    });
  });


  $(document).ready(function () {
    const textContainer = $('#text-container');
    const words = ['Web Developer', 'WordPress Developer'];

    function animateWords(index) {
      const currentWord = words[index % words.length];
      let charIndex = 0;

      function type() {
        if (charIndex < currentWord.length) {
          textContainer.append(currentWord.charAt(charIndex));
          charIndex++;
          setTimeout(type, 100); // Adjust typing speed here
        } else {
          setTimeout(removeCharacters, 1000); // Wait before removing characters
        }
      }
      function removeCharacters() {
        const currentText = textContainer.text();
        if (currentText.length > 0) {
          textContainer.text(currentText.slice(0, -1));
          setTimeout(removeCharacters, 50); // Adjust removal speed here
        } else {
          setTimeout(function () {
            animateWords(index + 1);
          }, 500); // Wait before next word
        }
      }

      type();
    }

    // Start the animation
    animateWords(0);
  });


 
  gsap.from(".card", {
    delay: 0.3,
    stagger: 0.3,
    opacity: 0,
    scale: 0
  })