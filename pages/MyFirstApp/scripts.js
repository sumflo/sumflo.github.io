let photos = [ // létrehozom a tömböt, amit objektumokkal töltök fel
  {
    source: 'images/lotus.jpg',
    title: 'Lotus',
    description: 'Because lotuses rise from the mud without stains, they are often viewed as a symbol of purity. Since they return to the murky water each evening and open their blooms at the break of day, lotus flowers are also symbols of strength, resilience, and rebirth'  
  },
  {
    source: 'images/tulips.jpg',
    title: 'Tulips',
    description: 'The most known meaning of tulips is perfect and deep love. As tulips are a classic flower that has been loved by many for centuries they have been attached with the meaning of love. They’re ideal to give to someone who you have a deep, unconditional love for, whether it’s your partner, children, parents or siblings.'  
  },
  {
    source: 'images/rose.jpg',
    title: 'Rose',
    description: 'A rose’s symbolism varies by the color of the rose and how many roses are given. Red roses symbolize love and romance and are the perfect Valentine’s Day rose. Pink roses symbolize gratitude, grace, admiration, and joy. Orange roses symbolize enthusiasm and passion.'  
  },
  {
    source: 'images/pipacs.jpg',
    title: 'Poppies',
    description: 'Our red poppy is a symbol of both Remembrance and hope for a peaceful future. Poppies are worn as a show of support for the Armed Forces community. The poppy is a well-known and well-established symbol, one that carries a wealth of history and meaning with it.'  
  },
  {
    source: 'images/cherry-blossoms.jpg',
    title: 'Cherry Blossoms',
    description: 'The national flower of Japan, the cherry blossom – or Sakura, represents a time of renewal and optimism. The pops of pink mark the ending of winter and signify the beginning of spring. Due to their quick blooming season, cherry blossoms also symbolize the transience of life, a major theme in Buddhism.'  
  },
  {
    source: 'images/sunflower.jpg',
    title: 'Sunflower',
    description: 'Sunflowers symbolise loyalty, adoration thanks to the myth of Clytie and Apollo. And, because of their association with the sun, sunflowers are well-known for being a happy flower and the perfect bloom for a summer flower delivery to brighten someone’s mood!'  
  },
  {
    source: 'images/pitypang.jpg',
    title: 'Blow ball of Dandelion',
    description: 'Kids and adults alike pick the seed head – known as a clock in America and Europe for its shape – and blow the Dandelion seeds away while making a wish. This has given the flower a strong association with hope, optimism, and wishes.'  
  },
  {
    source: 'images/water-lily.jpg',
    title: 'Water Lily',
    description: 'The Nymphaea waterlilies perfectly symbolise innocence, purity, fertility, pleasure, celebration, hope, rebirth, wellness, and peace. All ancient cultures around the world have associated the white lilies with gods and spirituality.'  
  },
  {
    source: 'images/margareta.jpg',
    title: 'Daisy',
    description: 'Daisies symbolize innocence and purity. This stems from an old Celtic legend. According to the legend, whenever an infant died, God sprinkled daisies over the earth to cheer the parents up. In Norse mythology, the daisy is Freya’s sacred flower.'  
  },
  {
    source: 'images/kokorcsin.jpg',
    title: 'Pasque Flower',
    description: 'In Christian symbology, the pasque flower is associated with ideas of rebirth, dignity, nobility, and grace. It relates to the Easter holiday, and its purple pigmentation was used in olden times to color and stain Easter eggs.'  
  }
];

function thumbNailer(photo, index){ //létrehozok egy funkciót, ami létrehoz, és feltölt egy thumblanilt - felveszek két függvényen belüli változót
  $('.nail').append('<div class="thumbTitleHolder"><p class="thumbTitle"></p><img class="thumbNail"></img></div>'); // itt magát a html szerkezetet hozom létre
  $('.nail .thumbTitleHolder:last .thumbTitle').append(photo.title); // az utolsóként megjelent thumbTitleHolder classban lévő thumbTitle classba beteszem a 'photo'adik elemét az objektum title kulcsának értékét
  $('.nail .thumbTitleHolder:last img').attr('src', photo.source); // az utolsóként megjelent thumbTitleHolder classban lévő img-nek megadom a source attribútumát a fent leírt módon
  $('.nail .thumbTitleHolder:last img').attr('data-number', index); // az utolsóként megjelent thumbTitleHolder classban lévő img-nek adok egy data-number attribútumot, aminek az index értéket adom
}                                                                   // ez az index mindig a függvénymeghívás után a tömb elemeinek az inexedik elemét fogja megadni értékül
                                                                    // azaz 0-tól kezdve mondhatni beszámozza a képeket, így később lehet ezzel az értékkel dolgozni, de a data-number értéke string lesz
photos.forEach(thumbNailer); // meghívom a thumbNailer függvényt, ami a photos tömbön hajtódik végre minden elemen, így jönnek létre a thumbnailek
                             // fontos, hogy először a thumbnaileket kell létrehozni, hogy az épp "aktív" elem "láthatóságát" meg lehessen oldani
let currentPhoto = 0; // létrehozok egy változót, amiben az "aktív" fotó "sorszámát" fogom eltárolni - kezdő értéke a 0 (0.elem)

let loadPhoto = (photoNumber) => { // létrehozok egy loadPhoto változót, és függvényt - felveszek egy függvényen belüli változót
  $('#photo').attr('src', photos[photoNumber].source); // megadom a #photo id forrás attribútumát -> a photos tömb photoNumber-edik elemének a source kulcs értéke
  $('#photoTitle').text(photos[photoNumber].title); // megadom a #photoTitle id szövegét -> a photos tömb photoNumber-edik elemének a title kulcs értéke
  $('#description').text(photos[photoNumber].description); // megadom a #description id szövegét -> a photos tömb photoNumber-edik elemének a description kulcs értéke
  $('.nail .thumbTitleHolder:eq(' + currentPhoto + ') img').css('box-shadow', '5px 5px 15px gray'); // beállítom a thumbnail fényképére a sötét "passzív" árnyékolást - a currentPhoto-adik elemre
  $('.nail .thumbTitleHolder:eq(' + photoNumber + ') img').css('box-shadow', '5px 5px 15px white'); // beállítom a thumbnail fényképére a világos "aktív" árnyékolást - a photoNumber-edik elemre
} // a photoNumber a függvényen belüli változónk mindig az aktuálisan megjelenített elem "sorszámát" fogja értékként kapni, a currentPhoto az ezt megelőző értéket fogja eltárolni (az alábbiakban létrehozott nextPhoto változó miatt), így, ahogy tovább lapozunk "visszasötétedik" a passzívvá vált fotó árnyékolása

loadPhoto(currentPhoto); //meghívom a loadPhoto fügvénnyt minek értéke a currentPhoto lesz, minek kezdőértékként a 0-t adtam meg, tehát elsőként a tömböm 0. eleme fog betölteni

$('#right').click(() => { //létrehozok egy funkciót a jobb kattintáshoz
  let nextPhoto = currentPhoto; //létrehozok egy új változót, ami a currentPhoto értékét veszi fel
  if(currentPhoto < (photos.length-1)){ // megadom a feltételt - ha a currentPhoto kisebb, mint 10 (a tömbben 11 elem van, de mivel 0-tól számozódik, ezért ebben az esetben itt a 10-et kell megadni)
    nextPhoto++; // megadom a "történést" - növeld a nextPhoto-t (eggyel fogja növelni nyilván)
  }else{ // különben, azaz más esetben
    nextPhoto=0; // a nextPhoto legyen egyenlő 0-val, azaz a tömb első elemével (ha már nincs következő elem), így lesz "körbelapozható" a képgaléria
  }
  loadPhoto(nextPhoto); // meghívom a loadPhoto-t és a nextPhoto értéket fogja kapni - így mindig az éppen aktuálisan "aktív" kép "sorszámát" fogja eltárolni a nextPhoto, és ekkor a currentPhoto még az előzőleg megjelenített fotó "értékét" fogja tárolni, így felhasználható a már "inaktívvá" vált thumbnail visszasötétítéséhez
  currentPhoto = nextPhoto; // a currentPhotonak visszaadom a nextPhoto értékét
})

$('#left').click(() => { //létrehozok egy funkciót bal kattintáshoz, ami ugyanúgy működik, mint a jobb kattintás, csak visszafelé
  let nextPhoto = currentPhoto;
  if(currentPhoto > 0){
    nextPhoto--;
  }else{
    nextPhoto= (photos.length-1); // a photos.length a tömb elemeinek a száma, ami 11, mert a photos.length 1-től számol, a tömb elemeinek indexe viszont 0-tól indul,
  }                               // ezért a photos.length-ből ki kell vonni egyet - így később nem kell átírni a függvényt, ha tovább bővítem, vagy csökkentem a képgalériám objektumait
  loadPhoto(nextPhoto);
  currentPhoto = nextPhoto;
})

$('.thumbNail').click(function(event){ // létrehozok egy funkciót, ami a thumbnailekre való kattintást kezeli
  let clickIndex = parseInt($(event.target).attr('data-number')); // létrehozok egy változót, aminek a thumbnailek data-number értékét számmá alakítva adom át
  loadPhoto(clickIndex); // a loadPhoto meghívásakor ezt a számot adom értékül, így a thumbnailre kattintva a tömbből a megfelelő fotó fog betölteni
  currentPhoto = clickIndex; // majd a currentPhotónak megadom a ClickIndex értéket, hogy lapozás esetén tudja az "inaktívvá" vált fotó "sorszámát" így a továbblapozás, és a sötétítés onnan fog folytatódni
})

/* A thumbnailek kivilágosodása, ha föléjük viszem az egeret, és a képek "aktivitásának" láthatósága azért nem üti egymást, és nem bugosodik be, 
mert egyrész ugyanazt az árnyékolást használom, mésrészt az aktivitást az img-en állítottam be a hover funkciót meg az img dobozán.
Ebben az esetben ez nem feltűnő, csak annak, aki nagyon figyel.*/