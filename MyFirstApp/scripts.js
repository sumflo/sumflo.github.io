let photos = [ // létrehozom a tömböt, amit objektumokkal töltök fel
  {
    source: 'images/0.firstDayAtHome.jpg',
    title: 'First day at home',
    description: 'When I was born, I was very small. My weight barely exceeded 2.5 pounds and I was only 48 inches tall.'  
  },
  {
    source: 'images/1.myFirstFriend.jpg',
    title: 'My first friend',
    description: 'I was finally able to meet my first friend, whom I met in my mother’s tummy.'  
  },
  {
    source: 'images/2.inMyBad.jpg',
    title: 'The two toothless in the crib',
    description: 'Mom and Dad had a very tiny apartment at first, so I slept in my stroller for the first few weeks. But eventually I had my own crib.'  
  },
  {
    source: 'images/3.sleepingOnMom.jpg',
    title: 'Snooze on moms tummy',
    description: 'No one should think I slept all day. But only then could mother take a picture of me. I am forever-moving!'  
  },
  {
    source: 'images/4.sleepingWhilePlaying.jpg',
    title: 'Falling asleep while playing',
    description: 'Sometimes it happens to me that I fall asleep. Of course I do not want to sleep. But in the end, the dream elves wins.'  
  },
  {
    source: 'images/5.ChristmasGift.jpg',
    title: 'Super Christmas gift',
    description: 'For Christmas, I got a super Mickey mouse with pants as blue as my eyes.'  
  },
  {
    source: 'images/6.SmileForEver.jpg',
    title: 'My smile',
    description: 'I’m a very happy baby, so I smile a lot. Mom always says my smile is the most beautiful thing she has ever seen.'  
  },
  {
    source: 'images/7.LearnToClimb.jpg',
    title: 'Learning to climb',
    description: 'It was a huge pleasure when I finally managed to learn to climb. I roared for two weeks before that, almost chasing my parents crazy.'  
  },
  {
    source: 'images/8.cuteFace.JPG',
    title: 'This is my cute face',
    description: 'This is Mom and Dads favorite picture of me. They can never resist my cute-face. They just love me for ever.'  
  },
  {
    source: 'images/9.handsomeFace.JPG',
    title: 'The handsome guy',
    description: 'Well, that is what this is about. They force me into an uncomfortable outfit, they put me in a wheelbarrow, but I’m still handsome. - Hi kitty! Do you have a master?'  
  },
  {
    source: 'images/10.coolBaby.JPG',
    title: 'Cool driver',
    description: 'I am a cool driver. But really. I learn to drive rather than walk without help. A license at the age of half a year? Done!'  
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