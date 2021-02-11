const graphic = document.getElementById("graphic");
const allGraphic = [
  "vinito.jpg",
  "ex-libris-color.jpg",
  "extr5.jpg",
  'great.png',
  "gems3.jpg",
  "vet-method.jpg",
  "girl.jpg",
  "gr2.jpg",
  "habbenwill.jpg",
  "ikbi3.jpg",
  "interface-postcard.jpg",
  "kings.jpg",
  "lp1.jpg",
  "mns.jpg",
  "package.png",
  "pitaya.jpg",
  "pp1.jpg",
  "strawberry.jpg",
  "sweet.jpg",
  "8Point.jpg",
  "Another.jpg",
  "bloom.jpg",
  "eden.jpg",
  "doulahood-4.jpg",
];

for (let oneGraphic of allGraphic) {
  graphic.innerHTML += `<div style="background-image:url(static/images/portfolio-photos/${oneGraphic})"></div>`;
}
