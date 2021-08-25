


function tempload(){
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color="#FFFFFF";

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color="#0000FF";
    }, 1000);
    
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color="#00FF00";
    }, 2000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color="#FFA500";
    }, 3000);
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color="#FF0000";
    }, 4000);
  
}

tempload();

setInterval(tempload, 5000);
