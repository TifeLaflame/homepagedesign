// Javascript function to change bg image based on works clicked on
function doBgImageChange(){
    // this function does the switch
    function imgSwitch() {
        const heroDiv = document.querySelector('.heroImage');
        console.log(heroDiv);
        const imgBg = document.querySelectorAll("[data-bg]");
        for(var i=0; i<imgBg.length; i++)
        {
            const whichElement = imgBg[i];
            // console.log(whichElement);
            const imagePath = whichElement.getAttribute("data-bg");
            console.log(imagePath);
            heroDiv.style.backgroundImage = "url("+imagePath+")";
        }     
    }   
    const posters = document.querySelectorAll('.doSwitch');
    // console.log(posters);
    posters.forEach(function(item){
    const posterItem = item;
    posterItem.addEventListener("click", function(){
        console.log("clicked");
        imgSwitch();
    });
});
}
doBgImageChange();
