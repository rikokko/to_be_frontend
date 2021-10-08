const ul = document.getElementById('js-list');
const fragment = document.createDocumentFragment();
const info = [
  { to: "bookmark.html", img: "bookmark-icon.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "mail-icon.png", alt: "画像2", text: "メッセージ" }
];

function makeLoadingImg() {
  const loadingImg = document.createElement('img');
  loadingImg.src = "loading-circle.gif";
  loadingImg.id = 'loading-img'
  ul.appendChild(loadingImg);
}

function deleteLoadingImg() {
  const loading = document.getElementById('loading-img');
  loading.remove();
}

function LoadingForMakeList() {
  makeLoadingImg();
  return new Promise((resolve) => {
    setTimeout(() => resolve(info), 3000)
  });
}

LoadingForMakeList().then((item) => {
  deleteLoadingImg();
  const fragment = document.createDocumentFragment();
  for (let i = 0; i <= item.length - 1; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.textContent = item[i].text;
    a.href = item[i].to;
    img.src = item[i].img;
    img.alt = item[i].alt;
    fragment.appendChild(li).appendChild(a).appendChild(img);
  }
  ul.appendChild(fragment)
});
