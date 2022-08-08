
// HTMLで作成したinput要素を、変数inputFileに代入
var inputFile = document.getElementById('input-file');

// そのinputファイルに変化が生じた（画像が選択された）とき、
// ファイルの情報をコンソール上に出力せよ
inputFile.addEventListener("change", function(e) {
 console.log(e.target.files)
},false);

// ファイルを選択するためのinput要素と、選択したファイルのURLを差し込むためのimg要素をそれぞれ取得
var inputfile = document.getElementById('inputfile')
var image = document.getElementById('image')

// input要素に変化が起きたとき（ファイルが選択されたとき）、以下の処理を実行させる
inputfile.addEventListener("change", function(e) {

  // 選択されたファイルの内容を代入
  var file = e.target.files 

  // FileReaderクラスをインスタンス化し、ファイル出力の準備をする
  var reader = new FileReader()

  // ファイルオブジェクトの一番最初のファイルのローカルURLを読み取り、それをreaderインスタンスのresultプロパティにセット
  reader.readAsDataURL(file[0])

  //読み取り終了後、読み取ったローカルURLをimgタグのsrc属性に代入する。
  reader.onload = function() {
    image.src = reader.result;
  }
}, false)
