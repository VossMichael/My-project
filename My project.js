var sprite = document.getElementById('sprite');
var obstacle = document.getElementById('obstacle');
var counter = 0;
function jump(){
    if(sprite.classList !="animate"){
        sprite.classList.add("animate");
    }
    setTimeout(function(){
        sprite.classList.remove("animate");
        counter++;
    }, 500);
}

var lose = setInterval(function(){
    var spriteTop =
    parseInt(window.getComputedStyle(sprite).
        getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(obstacle).
        getPropertyValue("left"));
    if(blockLeft<50 && blockLeft>0 && spriteTop>=200){
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        alert("YOU DIED! SCORE: "+ counter);
        counter = 0;
    }
}, 10);