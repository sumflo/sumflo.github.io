let naturPhotos = [
    {
        photoSRC: 'images/lone-tree.jpg',
        shortText : 'Oak tree in full leaf standing alone in a field in summer against a sunset sky.'
    },
    {
        photoSRC: 'images/flowers.jpg',
        shortText : 'The poppy grown in India is usually the white-flowered variety, but in the Himalayas a red-flowered poppy with dark seeds is cultivated.'
    },
    {
        photoSRC: 'images/drought.jpg',
        shortText : 'In seasons of drought they are hardly more than swamps and mud flats, which for a time may become a grassy plain, or desolate coast encrusted with salt.'
    },
    {
        photoSRC: 'images/galaxy.jpg',
        shortText : 'Our galaxy, the Milky Way, is made up of the sun, planets, asteroids, millions of stars, and other space junk.'
    },
    {
        photoSRC: 'images/godafoss.jpg',
        shortText : 'Godafoss, meaning the waterfall of the god!'
    },
    {
        photoSRC: 'images/nothen-light.jpg',
        shortText : 'Based in the heart of the aurora zone in the Norwegian Arctic, the city is widely regarded as one of the world\'s best places to see the Northern Lights.'
    },
    {
        photoSRC: 'images/rice-field.jpg',
        shortText : 'To ensure sufficient water, most rice farmers aim to maintain flooded conditions in their field.'
    },
    {
        photoSRC: 'images/satellite.jpg',
        shortText : 'A satellite is a moon, planet or machine that orbits a planet or star.'
    },
    {
        photoSRC: 'images/thunderstorm.jpg',
        shortText : 'Thunderstorm, a violent short-lived weather disturbance that is almost always associated with lightning, thunder, dense clouds, heavy rain or hail, and strong gusty winds. Thunderstorms arise when layers of warm, moist air rise in a large, swift updraft to cooler regions of the atmosphere.'
    },
    {
        photoSRC: 'images/touch.jpg',
        shortText : 'Using your sense of touch allows you to tell if something is hot or cold, dull or sharp, rough or smooth, wet or dry. Skin is packed with many sense receptors. A baby\'s first experience with the surrounding environment occurs through touch, developing prenatally as early as 16 weeks. This sense is essential to children\'s growth of physical abilities, language and cognitive skills, and social-emotional competency.'
    }
]

let showPhotos = (photo, index) => {

    $('.content').append('<div class="pictureHolder"><img class="picture" src="" alt=""> <div class="textHolder"><p class="text"></p></div></div>');
    $('.content .pictureHolder:last img').attr('src', photo.photoSRC);
    $('.content .pictureHolder:last .text').text(photo.shortText);
    $('.content .pictureHolder:last img').attr('data-number', index); 
}

naturPhotos.forEach(showPhotos);