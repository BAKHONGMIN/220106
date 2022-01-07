// 화면이 열리면 #main에 '화살표함수 멋지네' 라고 노출되게 실행한다.

// 2중어레이 접근법
var score = [
    ["국어", 90],
    ["영어", 65],
    ["수학", 60],
    ["독어", 19],
];
// window.onload = function(){
//     for(let i=0 ; i<score.length; i++){
//     fun(`main${i}`, `${score[i][0]}`,`${score[i][1]}`);
//     }
// }


var sum = 0;
var inmyScore = '';
window.onload = function(){
    for(let i=0 ; i<score.length; i++){
        inmyScore += `<p>${score[i][0]} ${score[i][1]}</p>`;
        sum += score[a][1]};
        fun(`main`, inmyScore);
        fun(`add`, `합계 ${sum}`)};

 




    // var inmyScore = '';
    // window.onload = function(){
    //     for(let i in score){
    //         inmyScore += `<p>${score[i][0]} ${score[i][1]}</p>`;
    //     }
    //     fun(`main`, inmyScore );
    //     }
    
    //   어레이되어진 개체가 있어야 사용 가능 i 가 score가 다 돌때 까지 돈다.


//es6 화살표 함수 return 키워드 생략가능
fun = (objtag, context) => {
    document.getElementById(objtag).innerHTML = context;};
// 화살표 함수 fun은 인자 num을 받으면 그 num을 #main 객체에 출력한다.