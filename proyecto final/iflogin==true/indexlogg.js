let headerbutns = document.getElementById("headerbutns")
console.log(headerbutns)

window.onscroll = function(headerbutns){
    let top = window.scrollY;
    console.log(top);

    if (top>=800){
        document.getElementById("headerbutns").id="headerbutnsactive" 

    };
    if (top<800){
        document.getElementById("headerbutnsactive").id="headerbutns" 
    }
    
}

