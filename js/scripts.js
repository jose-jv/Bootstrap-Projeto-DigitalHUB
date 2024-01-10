
//vai carregar so quando doc estiver pronto
$(document).ready(function(){
   
    //progress bar
    let containerA = document.getElementById("circleA");
    
    let circleA = new ProgressBar.Circle(containerA,{
       color: '#FF0000',
       strokeWidth:6 ,
       duration:1400,
       from: {color:'#AAA'},
       to:{color: '#FF0000'},

       step: function( state, circle){
         circle.path.setAttribute('stroke',state.color);

          let value = Math.round(circle.value()* 60);


          circle.setText(value);
       },
    });

     





     let containerB = document.getElementById("circleB");
    
    let circleB = new ProgressBar.Circle(containerB,{
       color: '#FF0000',
       strokeWidth:6 ,
       duration:1600,
       from: {color:'#AAA'},
       to:{color: '#FF0000'},

       step: function( state, circle){
         circle.path.setAttribute('stroke',state.color);

          let value = Math.round(circle.value()* 120);


          circle.setText(value);
       },
    });

    



     
     let containerC = document.getElementById("circleC");
    
    let circleC= new ProgressBar.Circle(containerC,{
       color: '#FF0000',
       strokeWidth:6 ,
       duration:1800,
       from: {color:'#AAA'},
       to:{color: '#FF0000'},

       step: function( state, circle){
         circle.path.setAttribute('stroke',state.color);

          let value = Math.round(circle.value()* 90);


          circle.setText(value);
       },
    });
    









     
     let containerD = document.getElementById("circleD");
    
    let circleD = new ProgressBar.Circle(containerD,{
       color: '#FF0000',
       strokeWidth:6 ,
       duration:2000,
       from: {color:'#AAA'},
       to:{color: '#FF0000'},

       step: function( state, circle){
         circle.path.setAttribute('stroke',state.color);

          let value = Math.round(circle.value()* 130);


          circle.setText(value);
       },
    });

          //iniciando o loader quando o usuario chega no elemento
     let dataAreaOffset = $('#data-area').offset();
     let stop = 0;

     $(window).scroll(function(e){
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top -500)&& stop == 0){
             circleA.animate(1,9);
             circleB.animate(1,8);
             circleC.animate(1,6);
             circleD.animate(1,2);

             stop =1;
        }
     });




     //parallax
     setTimeout(function(){
        $('#data-area').parallax({imageSrc:'img/imgparallax.jpg'});

     }, 250);


     //filtro portfolio

     $('.filter-btn').on('click', function(){

      let type = $(this).attr('id');
      let boxes = $('.projectBox');


      $('.main-btn').removeClass('active');
      $(this).addClass('active');
      



    if(type == 'dsg-btn'){
         eachBoxes('dsg',boxes)
    }else if(type == 'dev-btn') {
      eachBoxes('dev',boxes)

    }else if(type == 'seo-btn') {
      eachBoxes('seo',boxes)

    }else  {
      eachBoxes('all',boxes)

    }

 
     });

   

function eachBoxes(type,boxes){
   if(type == 'all'){
      $(boxes).fadeIn();

   }else{
      $(boxes).each(function(){
         if(!$(this).hasClass(type)){
            $(this).fadeOut('slow');
         }else {
            $(this).fadeIn();
         }
      });
   }
}


//navbar responsivo

const menuToggle = $('.navbar-toggler');
const navbarLinks = $('#navbar-links');

menuToggle.click(function () {
  navbarLinks.toggleClass('show');
});


  // Rolagem suave para links do menu
  $('.nav-item').click(function (e) {
   e.preventDefault();
   const targetSection = $(this).attr('id') + '-area';
   const targetOffset = $('#' + targetSection).offset();

   if (targetOffset) {
     $('html, body').animate({
       scrollTop: targetOffset.top - 70
     }, 1500);

     // Fechar o menu após clicar
     navbarLinks.removeClass('show');
   }
 });


















//scroll para secoes
let navBtn = $('.nav-item');

let homeSection = $("#carouselExampleCaptions")
let bannerSection = $("#mainSlider");
let aboutSection = $("#about-area");
let servicesSection = $("#services-area");
let teamSection = $("#team-area");
let portfolioSection = $("#portfolio-area");
let contactSection = $("#contact-area");

let scrolTo = '';

$(navBtn).click(function(){
   let btnId = $(this).attr('id');
   console.log(btnId);

    if(btnId == 'home-menu'){
      scrollTo = carouselExampleCaptions;
    }
    else if(btnId == 'about-menu'){
      scrollTo = aboutSection;
   }else if(btnId == 'services-menu'){
      scrollTo = servicesSection;}
      else if (btnId == 'team-menu') {
         scrollTo = teamSection;
       }
       else if(btnId == 'portfolio-menu'){
      scrollTo = portfolioSection;
   }else if(btnId == 'contact-menu'){
      scrollTo = contactSection;
   }else if(btnId == 'portfolio-menu'){
      scrollTo = portfolioSection;
   } else {
      scrollTo = bannerSection;
   }


$([document.documentElement, document.body]).animate({
   scrollTop: $(scrollTo).offset().top - 70
}, 1500);

});












    
});