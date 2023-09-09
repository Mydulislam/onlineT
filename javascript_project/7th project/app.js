let container = document.getElementById('container');
container.addEventListener('mousemove',function(e){
    let x = e.clientX;
    let y = e.clientY;
    container.style.backgroundPositionX = x + 'px';
    container.style.backgroundPositionY = y + 'px';
})