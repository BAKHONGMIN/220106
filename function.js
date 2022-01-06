//es6 화살표 함수 return 키워드 생략가능
fun = (num) => {
    document.getElementById("main").innerHTML = num;
    // 화살표 함수 fun은 인자 num을 받으면 그 num을 #main 객체에 출력한다.
}

window.onload = function(){

    var bth1 = document.getElementsByTagName('button')[0];
    btn1.onclick = function(){
        this.innerText = 'enter';
    }      
}

        