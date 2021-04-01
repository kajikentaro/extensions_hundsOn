var new_element = document.createElement('p');//新しいp要素を作成
new_element.innerHTML = 'Hello World!'//そこにHello World!っていうテキストを設定

var container = document.getElementById('container');//containerというIDを持つ要素を検索
var header = document.getElementById('header');//headerというIDを持つ要素を検索

container.insertBefore(new_element, header);//containerの中で、headerの前にnew_elementを追加する。

console.log('F12キーをおした先で見れるコメント')//コメントを出力(printfみたいな感じ)
