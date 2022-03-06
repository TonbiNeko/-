'use strict';
// イベントハンドラ
function keyUp(e) {
    // console.log('keyUp'); 
    // 👉textareaに文字を入力するとコンソールにkeyUpが表示される
    // console.log(inputText.value);
    // 👉textareaに入力された、文字を取得
    // console.log(inputText.value.length);
    // 👉textareaに入力された文字数を取得

    // 入力された値を取得
    let str = inputText.value;
    // 正規表現にて改行を文字と認識しない（削除する）ための処理
    str = str.replace(/\r?\n/g, '');
    // 残りの文字数
    let num = 10 - str.length;
    console.log(num);
    // 文字数表示部分の要素を取得
    const characterCount = document.getElementById('characterCount');
    // 残りの文字数をセットして表示
    characterCount.textContent = num;
    // 残り文字数表示部分のp要素を取得
    const characterCountWrap = document.getElementById('characterCountWrap');
    // 文字色の設定
    if(num >= 0) {
        characterCountWrap.style.color = 'black';
    } else {
        characterCountWrap.style.color = 'red';
    }
}
const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);

