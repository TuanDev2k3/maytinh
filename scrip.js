let dislay = document.getElementById('screen');

const wipe = () =>{
    dislay.value = '';
}
const show = (n) =>{
    dislay.value += n;
}
const calc = () =>{
    dislay.value = eval(dislay.value);
}

// 