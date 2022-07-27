$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//burger
const burger=document.querySelector(".burger");
if(burger){
  burger.addEventListener("click", function () {
      const mobilnav = document.querySelector(".nav_list");
      if (mobilnav.style.transform == "translateX(-500px)") {
        mobilnav.style.transform = "translateX(0px)";
      }
      else  {
        mobilnav.style.transform = "translateX(-500px)";
      }
    })
}
//accardion
const openAccardion=document.querySelector(".accardion_data")
if(openAccardion){
  openAccardion.addEventListener("click",()=>{
    const Opendata=document.querySelector(".accardion-form")
    Opendata.classList.toggle("active")
    
  })
}

// emek haqqi
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  
  } );
 
// etrafli axtaris
$( ".etrafli-axtar" ).click(function() {
  $( ".filter-toogle" ).toggle();
  $( ".slider-div" ).toggle();
  $( ".catacory" ).toggle();
  $( ".search" ).toggle();
  $( ".first-input input" ).toggle();
})

//login register
function showSignup(){
  document.getElementById("signUp").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("btns2").style.backgroundColor = "white";
  document.getElementById("btns1").style.backgroundColor = "#cdb4db";
}
function showLogin(){
  document.getElementById("signUp").style.display = "none";
  document.getElementById("login").style.display = "flex";
  document.getElementById("btns1").style.backgroundColor = "white";
  document.getElementById("btns2").style.backgroundColor = "#cdb4db";
}