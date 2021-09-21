const ul = document.getElementById('js-list');
const info = [
  {to: "bookmark.html", img: "1.png", alt:"画像1", text: "ブックマーク"},
  {to: "message.html", img: "2.png", alt:"画像2", text: "メッセージ"}
  ];

const fragment = document.createDocumentFragment();

function ListContents(add){
  for(let i=0; i<=add.length-1; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.textContent = add[i].text;
    a.href = add[i].to;
    img.src = add[i].img;
    img.alt = add[i].alt;
    fragment.appendChild(li).appendChild(a).insertBefore(img, a.firstChild);
}
    ul.appendChild(fragment)
};

function makeLinkList() {
  return new Promise((resolve) => {
    resolve(info);
  });
}

makeLinkList().then(() => { 
  ListContents(info)
});
