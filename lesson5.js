const ul = document.getElementById('js-list');
const info = [
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
  ];
const fragment = document.createDocumentFragment();

function ListContents(hoge){
  for(let i=0; i<=hoge.length-1; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.textContent = hoge[i].text;
    a.href = hoge[i].to;
    img.src = hoge[i].img;
    img.alt = hoge[i].alt;
    fragment.appendChild(li).appendChild(a).insertBefore(img, a.firstChild);
}
    ul.appendChild(fragment)
};

function makeLinkList() {
  return new Promise((resolve) => {
    resolve(info);
  });
}

makeLinkList().then((info) => { 
  ListContents(info)
});
