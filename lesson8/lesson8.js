const ul = document.getElementById('js-list');
const listItems = [
  { to: "bookmark.html", img: "bookmark-icon.png", alt: "画像1", text: "ブックマーク" },
  { to: "message.html", img: "mail-icon.png", alt: "画像2", text: "メッセージ" }
];

function showLoadingImg() {
  const loadingImg = document.createElement('img');
  loadingImg.src = "loading-circle.gif";
  loadingImg.id = 'loading-img'
  ul.appendChild(loadingImg);
}

function deleteLoadingImg() {
  const loading = document.getElementById('loading-img');
  loading.remove();
}

function createList(item){
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
}

function fetchListData() {
  showLoadingImg();
  return new Promise((resolve,reject) => {
  setTimeout(() => reject(Error("データを取得できませんでした")), 3000)
  });
}

fetchListData()
.then((listItems) => {
  deleteLoadingImg();
  createList(listItems)
})
.catch((error) => {
  console.error(error);
});

