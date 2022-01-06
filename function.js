//es6 화살표 함수 return 키워드 생략가능
fun = (objtag, context) => {
    document.getElementById(objtag).innerHTML = context;
    // 화살표 함수 fun은 인자 num을 받으면 그 num을 #main 객체에 출력한다.
}

// 화면이 열리면 #main에 '화살표함수 멋지네' 라고 노출되게 실행한다.

window.onload = function(){
    fun('main','화살표함수 멋지네');
    var btn1 = document.getElementsByTagName('button')[0];
    btn1.onclick = function(){
        this.innerText = 'enter';
    }      
}

        