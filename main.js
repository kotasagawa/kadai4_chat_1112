

//Deeplで翻訳する処理
const API_KEY = '36bdc51f-4582-0fbf-c2d7-f6a19a2564cd:fx'; //apiキーを変数にする
const API_URL = 'https://api-free.deepl.com/v2/translate';

function output() { //翻訳ボタン(output)の処理
  const jatext = document.getElementById("jatext").value; //日本語入力した値（jatext）を取得

  let content = encodeURI('auth_key=' + API_KEY + '&text=' + jatext + '&source_lang=JA&target_lang=EN');
  let url = API_URL + '?' + content;

  fetch(url)
  .then(function(response) {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error("Could not reach the API: " + response.statusText);
      }
  }).then(function(data) {
      document.getElementById("text").value = data["translations"][0]["text"]; //翻訳した英語の文章を表示
  }).catch(function(error) { //エラーだったら
      document.getElementById("text").value = error.message; //エラーメッセージを表示
  });
};
//ここまででDeeplで翻訳する


// $("#sakujo").on("click", function() {
//     $('#sakujo').remove();
//   });


// let element = document.querySelector('p');
// element.setAttribute("id", "message_style");

