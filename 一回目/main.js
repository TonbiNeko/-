'use strict';
// ①inputに入力された文字数を取得する
// ②入力された文字数をカウントし、counterに表示する
// ③文字数が１０文字以上の時は文字を赤くする

// inputを取得
const inputField = document.getElementById('inputField');
// 文字を表示するpタグを取得
let counter = document.getElementById('counter');
// 残り文字数をpタグに表示する
// 文字数がマイナスになったら文字を赤くする
// HTMLに"残り"、"文字"を追加
function count(){
    if(inputField.value.length > 10){
        counter.setAttribute('class', 'red');
        counterText.setAttribute('class', 'red');
        counter.textContent = 10 - inputField.value.length;
    }else{
        counter.setAttribute('class', 'black');
        counterText.setAttribute('class', 'black');
        counter.textContent = 10 - inputField.value.length;
    }
}
inputField.addEventListener("keyup", count, false);

