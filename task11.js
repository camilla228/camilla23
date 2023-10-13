const sec = 3600; 

let hour = (sec / 3600);
let min = (sec / 60);
let time = (hour + ' ч ' + min + ' мин ' + sec + ' сек');

console.log(time);