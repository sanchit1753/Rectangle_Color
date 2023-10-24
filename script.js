var rect = document.querySelector("#rec");

rect.addEventListener("mousemove", function(details) {
    var RectangleLocation = rect.getBoundingClientRect();
    var CurrRecValue = details.clientX - RectangleLocation.left;
     
    if(CurrRecValue<RectangleLocation.width/2){
       var RedColor = gsap.utils.mapRange(0,RectangleLocation.width/2,255,0,CurrRecValue);
       gsap.to(rect,{
        backgroundColor: `rgb(${RedColor},0,0)`,
        ease: Power4,
       });
    }
    else{
        var BlueColor = gsap.utils.mapRange(RectangleLocation.width/2,RectangleLocation.width,0,255,CurrRecValue);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${BlueColor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white",
    });
})
