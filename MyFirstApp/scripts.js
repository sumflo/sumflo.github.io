let photos = [
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

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
$('#photo').attr('src', photos[photoNumber].source);
$('#photoTitle').text(photos[photoNumber].title);
$('#description').text(photos[photoNumber].description);
}

loadPhoto(currentPhoto);

$('#right').click(() => {
  if(currentPhoto < 10){
    currentPhoto++;
  }else{
    currentPhoto=0;
  }
  loadPhoto(currentPhoto);
})

/* if(currentPhoto == 10){
  $('#right').click(loadPhoto(currentPhoto),0);
} */

$('#left').click(() => {
  if(currentPhoto > 0){
    currentPhoto--;
  }else{
    currentPhoto=10;
  }
  loadPhoto(currentPhoto);
})

function thumbNailer(photo, index){
  $('.nail').append('<div class="thumbTitleHolder"><p class="thumbTitle"></p><img class="thumbNail"></img></div>');
  $('.nail .thumbTitleHolder:last .thumbTitle').append(photo.title);
  $('.nail .thumbTitleHolder:last img').attr('src', photo.source);
  $('.nail .thumbTitleHolder:last img').attr('data-number', index);
} 

photos.forEach(thumbNailer); 

$('.thumbNail').click(function(event){
  let clickIndex = $(event.target).attr('data-number');
  let numberIndex = parseInt(clickIndex);
  loadPhoto(numberIndex);
})

let dataNumber = $('.thumbNail').attr('data-number');
let numberIndex = parseInt(dataNumber);

/*
  if(currentPhoto==numberIndex){
    $('.thumbNail').css('box-shadow', '5px 5px 15px white');
  }
*/

/*
  if(currentPhoto==numberIndex){
    $('.thumbNail:data-number').css('box-shadow', '5px 5px 15px white');
  }
*/