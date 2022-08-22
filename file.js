
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
  function dragstartHandler(ev) {
    log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  
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
  
  const reset = document.querySelector("#reset");
  reset.addEventListener("click", () => document.location.reload());
  function dragstartHandler(ev) {
    log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  
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
  
  thu 7 ra ve: 
  HN: 7,cn,2,3 toi thu 3 ve 
  lich trinh HN:
  - Thu 7 nghi ngoi 
  - CN: chao hoi ho hang , di an vat linh tinh. di mua vay 
  - Thu 2: di chup anh cuoi, di mua nhan cuoi , 
           toi di uong tra sua voi may dua ban(neu co thoi gian )
  - thu 3: di mua vay, giay, an uong linh tinh (hom CN k di dc)
  Lich trinh an uong o HN : 
  An nem nuong nha trang, nem lui, oc, cut lon xao me 
  Lich trinh NA:
  - Thu 4: chieu thu 4 ve toi noi, toi tam rua nghi ngoi
  - thu 5: chao hoi mn noi xa (Ve di dao an uong linh tinh)
  - Thu 6: o nha nghi ngoi, di choi tinh tinh, toi di cafe voi dam ban
  - thu 7: o nha nghi ngoi
  ->am thuc NA: an chao luon, Banh muot + long
  
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
  }


  qua chan/ sang nam thi lai JLPT 

  $i;
{
  var performance  = new  performance;
}

uong bo sung sat, cai thien noi tiet to 
8/22 - 11/22 
uong sua bo 
9/10-11/30
uong yen 
8/1 - 9/1 
uong colage refa 
10/1-11/22 (2 lo)
-> hi vong tang them 3kg -> 44kg 
3 thang nua tang them duoc 3 kg k hay lai giam 3kg 
hien tai duoc 41 kg -> giua thang 9 ->40kg 
dau thang 11 la di chupj anh cuoi
9-10: tawng can 
9 giam kgl;
thang 10 tang can de chup anh/ 
mac do kimono, beo hon , dep 
thang 9 - nieng, thang 10, thang 11 , thang 12 la moi duoc 3 thang
(11/3or5) di chup anh kimono, xong se di chup anh la vang 
dau thang 12 ve nuoc
thang 9-10 an uong cho map.  tien thue do 2man
chup anh 3-4 man ->6man tien chup anh va thue do

tien mua ve 20man -> 26man
tien mua do: 4man (tui xach + 1 bo do gap + 1ao uniqlo)
ao uni: 1man 
tui xach: 1 man 
1 bo do gap: 1 man 
ao quan cho a: 1man 
-> tong: 4man 
tien mua qua: 5man 
-> 10man 
26+ 10 = 36man 
48 man - 40man = 8 man 
gui ve nha 12man ; 20tr
-> con lai 4man 
thang nay con 10 man 
9: 12 man 
10: 12 man 
11: 12 man 
-> 46man 
tru 5man : 41man 

tru tien mua ve may bay: 30man 
tien mua do gui ve nha; 5 man ; 25 man 
tien thue chup anh cuoi: 20man 
con 25 man: 
- chuyen khoan 8man 
- tien an: 3man ; tien dien + nuoc: 2 man 
= 13man 
-> con 25-13= 12 man 
thang 9: 5man + 2man + 2 man + 3man =12man 
-> 48man .$i
mua do ve + do cho minh: 8man 
- con 40man 
ve may bay: 10man: 30man 
chup anh cuoi: 6man 
con 24 man 
gui ve 12man : con 12man: 20tr
vay chi gai: 50 tr
xe rap :25
thue vay: 4, make cho ng than 
mua do cho bme: 4tr
mua lt: 5tr
di cho: 2tr
-> 40 

12tr: mua do di lam + cuoi: 5tr 
2 vay: 1tr5. giay: 600K
vay di lam: 800K
ao khoac: 1M
do bo: 500K 
-> tong: 5tr , lam Toc: 2M 
-> 7M - con 5M 
di an uong, cac thu: 
2M cho chau, an uong 2M 
con 1M 
tien di lai-het 
vay c 40M 
xe+ rap: 5M 
make: 4M 
mua do chame: 4M 
tl: 5M
cho chau: 2m 
20M, tien doi vang:  
tien mua do di tung nha: 1M 


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

private testFunc(){
  return testFunc();
  $n: 
  for($i==0;i<n;i++){
    CustomElementRegistry ++;
    return n;
  }
}
