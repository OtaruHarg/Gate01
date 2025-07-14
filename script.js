var codes = 0;
var sharps = 'off';

function crick_E(){
    if(codes == 555){
        hyouji = 'Standing by...';
        gamenyouso = document.getElementById('gamen');
        gamenyouso.innerHTML = hyouji;
    }
}

function crick_1(){
    var codes = codes * 10;
    var codes = codes + 1;
}

function crick_2(){
    var codes = codes * 10;
    var codes = codes + 2;
}

function crick_3(){
    var codes = codes * 10;
    var codes = codes + 3;
}

function crick_4(){
    var codes = codes * 10;
    var codes = codes + 4;
}

function crick_5(){
    codes = codes * 10;
    codes = codes + 5;
}

function crick_6(){
    var codes = codes * 10;
    var codes = codes + 6;
}

function crick_7(){
    var codes = codes * 10;
    var codes = codes + 7;
}

function crick_8(){
    var codes = codes * 10;
    var codes = codes + 8;
}

function crick_9(){
    var codes = codes * 10;
    var codes = codes + 9;
}

function crick_0(){
    var codes = codes * 10;
}

function crick_S(){
    sharps = 'on';
}

function crick_C(){
    codes = 0;
    sharps = 'off';
    hyouji = 'N/A';
}

