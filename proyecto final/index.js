var headerbutns = document.getElementById("headerbutns")
console.log(headerbutns)

window.onscroll = function(headerbutns){
    var top = window.scrollY;
    console.log(top);

    if (top>=880){
        headerbutns.style.id="headerbutnsactive" 
    };
    
}







