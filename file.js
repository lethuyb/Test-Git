
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
    define([
      'require',
      'dependency'
    ], function(require, factory) {
      'use strict';
      
    });
    testFunc;
    return define;
  }
  testFunc.add();

    // Add this element's id to the drag payload so the drop handler will
    // know which element to add to its tree
    const dataList = ev.dataTransfer.items;
    dataList.add(ev.target.id, 'text/plain');
    // Add some other items to the drag payload
    dataList.add('<p>Paragraph…</p>', 'text/html');
    dataList.add('http://www.example.org','text/uri-list');
  }
  cuoi t10: 12, di mua 12+10=22= gui ve nha 11man 
  co 17tr; thue rap: 12tr  con 5tr,  
  TD+ Anhoi:5M; mua do:3tr,
  mua do lt:10tr
  -> vay c 20tr

  
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
  rap: 12tr, xe: 3tr, mua do: 3M , Make: 5M , do Lt: 5M -> tong 30M 
gui ve 11man- 17tr rap, xe ,do:3, Make: 5, lt: 5, di cho: 5 : 20M 
-> vay 20M 
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
  function dragstartHandler(ev) {
    log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  
    // Add this element's id to the drag payload so the drop handler will
    // know which element to add to its tree
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  $test
  {
    function test($n)

  }
  function dropHandler(ev) {
    log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  
    ev.preventDefault();
   // Get the id of the target and add the element to the target's DOM
   const data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
  }
  
  function dragoverHandler(ev) {
    log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
    ev.preventDefault();
  }
  
  const source = document.querySelector("#source");
  const target = document.querySelector("#target");
  
  source.addEventListener("dragstart", dragstartHandler)
  target.addEventListener("dragover", dragoverHandler)
  target.addEventListener("drop", dropHandler)
  
  function log(message) {
    const output = document.querySelector("#output");
    output.textContent = `${output.textContent}\n${message}`;
    output.scrollTop = output.scrollHeight;
  }
  xe: 5, ah, make:5,banh keo+lt: 5, bome:3,9: vay c 25tr
  thang 
 defin.this($test);
  this.$i = new testFunc(s
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => document.location.reload());
  function dragstartHandler(ev) {
    log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  28+7=35man -11=24 - 14=10, doi 6man = 9tr6
  giay dep, vay: 4M, 
  cuoi thang 10 di mua do. 20/9: 12+7=19.
  chup anh: 8.5, con 10, 10+12=22, 
    // Add this element's id to the drag payload so the drop handler will
    // know which element to add to its tree
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  
  function dropHandler(ev) {
    log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  
    ev.preventDefault();
   // Get the id of the target and add the element to the target's DOM
   const data = ev.dataTransfer.getData("text");
   ev.target.appendChild(document.getElementById(data));
  }
  
  function dragoverHandler(ev) {
    log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
    ev.preventDefault();
  }
DO huyet ap: 2cai, nho mat: 10 cai, C: 3tui,  banh: 10 hop, 
srm: 4hop, thuoc: 6 hop , mat na: 2 hop binh thuong, 2 hop xin 
may lo thuoc giam huyet ap: 5, quan ao 1bo, tui xach, 
1quan : 2.5, chup anh cuoi: 8.5 -> tong: 16
24x2=48+10 =58, 58-11= 47, 47-16=31 -foi sang tien viet: 5mwn -> 26nan
  const source = document.querySelector("#source");
  const target = document.querySelector("#target");
  
  source.addEventListener("dragstart", dragstartHandler)
  target.addEventListener("dragover", dragoverHandler)
  target.addEventListener("drop", dropHandler)
  
  function log(message) {
    const output = document.querySelector("#output");
    output.textContent = `${output.textContent}\n${message}`;
    output.scrollTop = output.scrollHeight;
  }
  const do {
	reset
} for (const key in object) {
	if (Object.hasOwnProperty.call(object, key)) {
		const element = object[key];
		whilefor
	}
} (let (for (index = 0; index < array.length; index++) {
	const element = array[index];
	index = 0; index < array.length; index++) {
	const element = array[index];
	 (CSSConditionRule)
}; 
document.querySelector("#reset");
  reset.addEventListener("click", () => document.location.reload());
 select query {
    {
      "id": 28708,
      "customer_id": "20600101",
      "customer_name": "一般社団法人　日本自由化事業協会",
      "user_name": "一般社団法人　日本自由化事業協会",
      "shop": "",
      "imei": "869714042393161",
      "product_code": 21061,
      "plan": "ペンギン専用国内月額100GBプラン(海外1GB/日)",
      "orgCode": "MS_Peng_GL100m",
      "ucl_account": "869714042393161@P_GL100m.ms01.com",
      "ucl_password": "123456",
      "open_date": "2022-08-19",
      "comment": "test thuy b condiiton",
      "plan_changed": "null",
      "deactivate_date": "2022-07-30",
      "period": "2022-04-05",
      "device_code": "21061",
      "device": "Glocalme U3　White",
      "created_at": "2022-08-19"
    }
  
{
  var performance  = new  performance;
}

xom3: Thao2, Quyen, Long, Duc, tang, Van hoa, Linh ki, Anh, 
      Lan, Loi dan, Manh cu, Mot so thanh nien xom 
      => 12

TS: Thach, yen bay, nga son, Quyet Tam, => 4

Cap3: Huong, hoa, Huyen, Yen Mau, KS+CT, Kien Thao, Huong Loi, Nga sen,
      Minh Sung, Duc hoa, My Hanh 
      => 11
      
DH:  QUynh, luyen, phuong, thuy, hang, Oanh => 6

CTy Cu: Dat, Tuyen, Ha, Phong => 4
public function test(){
  var n;
  for(int i; i<= n; i++){

  }
  return test;
}
select s = self select(123);
define([
  'require',
  ' ms_histories'
], function(require, factory) {
  'use strict';
  'customers';
}).AddName(require: nam);
}
select sl = new self(sl);
add sl.FileReader(file s); 

array.forEach(element => {
	private
});  testFunc()
  return testFunc();
  $n: 
  for($i==0;i<n;i++){
    CustomElementRegistry ++;
    return n;
}target("test")print.system.slound







