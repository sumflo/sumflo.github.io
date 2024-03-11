const hobbyProjects = [
    {
        id: 1,
        title: 'Anakin',
        text: 'This was my first resume-like website that I made during the #MyFristApp Coding Camp.',
        image: 'images/anakin.PNG',
        ref: '/pages/anakin/anakin.html',
    },
    {
        id: 2,
        title: 'Baby',
        text: 'I created this website during the #MyFirstApp Coding Camp. My little boy inspired me. The site is about him. He motivated me to become a programmer, providing him with a better future and financial security.',
        image: 'images/baby.PNG',
        ref: '/pages/nimi/babyCv.html'
    },
    {
        id: 3,
        title: 'MyFirstApp',
        text: 'The first app I made a picture viwer. The final project of #MyFirstApp Coding Camp. This is how I understood the essence of programming. This was my main practice project.',
        image: 'images/myFirstApp.PNG',
        ref: '/pages/MyFirstApp/index.html',
    },
    {
        id: 4,
        title: 'Wonders of Nature',
        text: 'This project was a homework assignment that a dear classmate of mine and I did together.',
        image: 'images/wonders.PNG',
        ref: '/pages/TheWondersOfNature/index.html',
    },
    {
        id: 5,
        title: 'My Website',
        text: 'I made this project as a part of dr. Angels Yu - The Complete 2022 Web Development Bootcamp. It is not responsive.',
        image: 'images/myWebsite.PNG',
        ref: '/pages/MyWebsite/index.html',
    },
    {
        id: 6,
        title: 'ToDo List',
        text: 'One of essential element among the work of most programming apprentices is the to-do list. So, I also made one for fun.',
        image: 'images/toDo.PNG',
        ref: '/pages/ToDoList/index.html',
    },
]

let displayHobbyProjects = (element) => {

    if(element.id % 2 !== 0){
        $('.websiteDescriptions')
            .append('<div class="sectionContainer"><a href=""><img src="" alt="Webpage representation." class="hobbyProject"><div class="article"></a><h3 class="websiteTitle"></h3><p class="websiteText"></p></div></div>');

        $('.websiteDescriptions .sectionContainer:last a').attr('href', element.ref);
        $('.websiteDescriptions .sectionContainer:last a img').attr('src', element.image);
        $('.websiteDescriptions .sectionContainer:last div .websiteTitle').text(element.title);
        $('.websiteDescriptions .sectionContainer:last div .websiteText').text(element.text);
    }else{
        $('.websiteDescriptions')
            .append('<div class="sectionContainer"><div class="article"><h3 class="websiteTitle"></h3><p class="websiteText"></p></div><a href=""><img src="" alt="Webpage representation." class="hobbyProject"></a></div>');

        $('.websiteDescriptions .sectionContainer:last a').attr('href', element.ref);
        $('.websiteDescriptions .sectionContainer:last img').attr('src', element.image);
        $('.websiteDescriptions .sectionContainer:last div .websiteTitle').text(element.title);
        $('.websiteDescriptions .sectionContainer:last div .websiteText').text(element.text);
    }


}

hobbyProjects.forEach(displayHobbyProjects)