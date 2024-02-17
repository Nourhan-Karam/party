/// <reference types="../@types/jquery" />

$('.icon').on('click',function(){
    
    $('.box-inner').animate({width:'show' ,paddingInline :'show'},(500))
})
$('.close').on('click',function(){
    $('.box-inner').animate({width:'hide' ,paddingInline :'hide'},(500))
        // $('.icon').css('left','2%')
    
   
})
 $('.items').on('click',function(e){
   let Href=  e.target.getAttribute('href')
  // console.log(Href)
 let sectionOffset= $(Href).offset().top
 $("html,body").animate({scrollTop:sectionOffset},2000)
 })
//  $('.icon').on('click',function(){
//     $('.icon').css('left','10%')
   

$('.singer').on('click',function(e){
   $(e.target).next().slideToggle();
   $('p').not($(e.target).next()).slideUp() ;
})



window.onload = function() {
   
    countDownToTime("18 august 2024 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }








var maxLength = 100;
$('textarea').keypress(function() {
  var length = $(this).val().length;
  var mychars = maxLength-length;
  if(mychars<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(mychars);
        }
});