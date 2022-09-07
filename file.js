
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
    vay c 50 cu: 
    mua do cho bme: 2tr
    mua do lt trang tri trong nha: 5tr
    trang diem+ thue vay: 5tr
    thue xe: 12tr 
    tong: 25
    mua lt, di lt: 2tr
    ve cho chau tl: 2tr
    12tr
    ve mua vay ao quan di lam , do bo pijama:, giay:  dep: 5tr 
    giay: 1tr 
    quan ao pijama: 600k
    quan ao di lam: 3tr
    1 cai ao dai 
    ngay 12/11 ve ngay 11/12 ddi 
    thu 7 ve toi nha. nghi ngoi, 
    ngay cn di mua nhan cuoi, vay voc mac cuoi
    thu 2 di chup anh cuoi. 
    toi thu 2 ve. lviec tu thu 3-thu6
    lvie thu 2,4-6. cuoi ngay 27 (28 nghi)
    lvie tu 29-2

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

ngay nghi (14-25-28-5-7-9)
ve mua giay+ 2 bo quan ao ngu: de ngoai nha a Luon: 1tr
mang do ve: 1 bp puma+ 1 bo gap + 1 bo do mac o nha +vay 
mua do ve: 2 may do huyet ap, 2 hop phan, 4 hop sua rua mat, 8 lo omega3
3 goi vitamin C, chuc goi keo socola (5man) 
chup anh cuoi: 6man 
mua 1 bo gap: 7sen + tui xach: 1man -> 2man 
chi phi mat: 15man
2 thang luong: 22+16+7 = 45man 
con 30 - 12 = 18man trong tai khoan 
doi 8man sang tien viet . con 10 man -> 12 sang lai: 30man. 


select s = self select(123);
define([
  'require',
  ' ms_histories'
], function(require, factory) {
  'use strict';
  'customers';
}).AddName(require: nam);
}
array.forEach(element => {
	private
});  testFunc()
  return testFunc();
  $n: 
  for($i==0;i<n;i++){
    CustomElementRegistry ++;
    return n;
}
22man - 7 -3 = 12man 
thang 9: 12 man 
thang 10: 12 man
thang 11: 12 man 
->36man :40man -> 68tr
vay chi: 50tr 
tien trang tri + lt: 10tr
vay cuoi+ trang diem : 5tr
tien xe di lai: 10tr
tien di doi chi cuoi: 5tr 
tien mua vay ao:5tr
tien cho chau: 3tr
mua do cho cha me: 3tr
tien mua qua di tung nha: 2M 
tien rap: 12tr
tong phai co tam 60M 
thang 8,9,10/ 36man +6man: 42man 
co 42man: 
phai co 70tr ve cuoi 
36+7man =43man 86tr
73tr 13tr
12M + 60M 
ve nha 60M : 
tien thue xe: 15 
tien vay trang diem: 5
tien mua do cho cha me: 3tr
tien thiep + Lt: 10Tr
Tien Rap: 12
tien cho chau+ qua: 3M 


Mua qua ve: 2 hop may do huyet ap, 6 lo vi ca map , 1 hop to thuoc nho mat 
socola: 10goi, 3 chum nho mau don , 
may do huyet ap 1mn5 , vi ca map: 1man,
nho + socola: 1man 
mua sua rua mat: 5 hop: may goi vitamin C: 
mua them ichiba cua DHC : 1man 
5man mua qua ve. 7man tien di ve 




