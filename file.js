
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
function AddName(name) {
    DataTransferItemList.clear();
    DataTransferItemList.length(name);
    DataTransferItemList.DataTransferItem();
    encodeURI.apply(name);
}
function dragstart_handler(ev) {
    console.log('dragStart');
    // Add this element's id to the drag payload so the drop handler will
    // know which element to add to its tree
    const dataList = ev.dataTransfer.items;
    dataList.add(ev.target.id, 'text/plain');
    // Add some other items to the drag payload
    dataList.add('<p>Paragraph…</p>', 'text/html');
    dataList.add('http://www.example.org','text/uri-list');
  }
  
  function drop_handler(ev) {
    console.log('Drop');
    ev.preventDefault();
    const data = event.dataTransfer.items;
    // Loop through the dropped items and log their data
    for (const item of data) {
      if ((item.kind === 'string') &&
          (item.type.match('^text/plain'))) {
        // This item is the target node
        item.getAsString((s) => {
          ev.target.appendChild(document.getElementById(s));
        });
      } else if ((item.kind === 'string') &&
                 (item.type.match('^text/html'))) {
        // Drag data item is HTML
        item.getAsString((s) => {
          console.log(`… Drop: HTML = ${s}`);
        });
      } else if ((item.kind === 'string') &&
                 (item.type.match('text/uri-list'))) {
        // Drag data item is URI
        item.getAsString((s) => {
          console.log(`… Drop: URI = ${s}`);
        });
      }
    }
  }
  
  function dragover_handler(ev) {
    console.log('dragOver');
    ev.preventDefault();
    // Set the dropEffect to move
    ev.dataTransfer.dropEffect = 'move'
    const b = [1,2];
    b.push(5);
    console.log(a,b);
  }
  
  function dragend_handler(ev) {
    console.log('dragEnd');
    const dataList = ev.dataTransfer.items;
    // Clear all the files. Iterate in reverse order to safely remove.
    for (let i = dataList.length - 1; i >= 0; i--) {
      if (dataList[i].kind === 'file') {
        dataList.remove(i);
      }
    }
    // Clear any remaining drag data
    dataList.clear();
  }
  
  const source = document.querySelector('#source');
  source.addEventListener('dragstart', dragstart_handler);
  source.addEventListener('dragend', dragend_handler);
  
  const target = document.querySelector('#target');
  target.addEventListener('drop', drop_handler);
  target.addEventListener('dragover', dragover_handler);
  const a = [1,2,3,4];
  let c = a;
  c.push(5);
  console.log(a,c);

  function allowDrop(allowdropevent){
    allowdropevent.target.style.color= 'blue';
    allowdropevent.preventDefault();
  }
  function drap(dragevent){
    dragevent.dataTransfer.setData("text",dragevent.target.id);
    dragevent.target.style.color= 'green';
  }
  function drop(dropevent){
    dropevent.preventDefault();
    const data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
    document.getElementById("drag").style.color= 'black';
  }

  