var navMenu = document.querySelectorAll(".nav_manu li a")
for (var i = 0; i < navMenu.length; i++){
    navMenu[i].addEventListener('click',function(event){
        event.preventDefault();

        var targetSectionid = this.textContent.trim().toLocaleLowerCase();
        var targetSection = document.getElementById(targetSectionid)
        console.log(targetSection);
        let interval = setInterval(()=>{
            var targetSectionidCoordinate = targetSection.getBoundingClientRect();
            if( targetSectionidCoordinate.top < 50){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50)
        },50);
    });
}

