function clock(){
    let hours = document.getElementById('hour')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    console.log(hours.innerHTML)
    if(h > 12){
        h = h - 12;
    }

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

let interVal = setInterval(clock,1000)