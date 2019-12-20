//Slide slick
$('.character-content').slick({
  dots: false,
  variableWidth: true,
  arrows: true,
  prevArrow: '<img class="slide-arrow prev-arrow" src="images/arrow-prev.png" alt="">',
  nextArrow: '<img class="slide-arrow next-arrow" src="images/arrow-next.png" alt="">',
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 320,
      settings: {
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

//Formulário de validação
$("#form").submit(function() {
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('msg').value;

  console.log(nome);
  console.log(email);
  console.log(msg);

  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
  if(regex.test(email)){
      document.getElementById("resposta").innerHTML = '';

      if(nome != "" && email != "" && msg != ""){
          document.getElementById("resposta").innerHTML = 'Mensagem enviada com sucesso!';
          return false;
      }else{
          document.getElementById("resposta").innerHTML = '';
      }
  }else{
      document.getElementById("resposta").innerHTML = '';
  }
});

//Scroll to top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  mybutton.style.display = "none";
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    mybutton.style.display = "block";
  }
}