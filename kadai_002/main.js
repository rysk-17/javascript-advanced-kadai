// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;

// 必要なHTML要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const wrap = document.getElementById('wrap');
const scorecount = document.getElementById('score');
const start = document.getElementById('start');
const count = document.getElementById('count');



const textLists = [
    'Hello World','This is my App','How are you?',
    'Today is sunny','I love JavaScript!','Good morning',
    'I am Japanese','Let it be','Samurai',
    'Typing Game','Information Technology',
    'I want to be a programmer','What day is today?',
    'I want to build a web app','Nice to meet you',
    'Chrome Firefox Edge Safari','machine learning',
    'Brendan Eich','John Resig','React Vue Angular',
    'Netscape Communications','undefined null NaN',
    'Thank you very much','Google Apple Facebook Amazon',
    'ECMAScript','console.log','for while if switch',
    'var let const','Windows Mac Linux iOS Android',
    'programming'
  ];

  const createText = () => {

    // 正タイプした文字列をクリア
   typed = '';
   typedfield.textContent = typed;

  //  ランダムな数値を生成する
    let random = Math.floor(Math.random() * textLists.length);
    

    untyped = textLists[random];
    untypedfield.textContent = untyped;
  };
  createText();

 
// キー入力の判定
const keyPress = e => {

    // 誤タイプの場合
    if(e.key !== untyped.substring(0, 1)) {
      wrap.classList.add('mistyped');
     // 100ms後に背景色を元に戻す
     setTimeout(() => {
      wrap.classList.remove('mistyped');
    }, 100);
   return;

    }
     // スコアのインクリメント
     score++;
    // 正解の場合
  
  wrap.classList.remove('mistyped');
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedfield.textContent = typed;
  untypedfield.textContent = untyped;
  scorecount.textContent = score;

   // テキストがなくなったら新しいテキストを表示
   if(untyped === '') {
    createText();
  }

};
const timer = () => {
 
  // タイマー部分のHTML要素（p要素）を取得する
  let time = count.textContent;

  const id = setInterval(() => {

    // カウントダウンする
    time--;
    count.textContent = time;

    // カウントが0になったらタイマーを停止する
    if(time <= 0) {
      clearInterval(id);
      
      console.log(id);
      gameOver(id);
    }
  }, 1000);
};


// タイピングスキルのランクを判定
const rankCheck = score => {};

// ゲームを終了
const gameOver = id => {
  clearInterval(id);
  setTimeout(() => {
  untypedfield.textContent= 'タイムアップ！';
  }, 1000);
};


// 　スタートボタン、キーボードイベント処理
start.addEventListener('click',() => {

  timer();


  // ランダム表示テキスト

  createText();
  // スタートボタン非表示
  start.style.display = 'none';

  // キーボードイベント処理
  document.addEventListener('keypress', keyPress);
  setTimeout

});

untypedfield.textContent = 'Aer You Ready?';



