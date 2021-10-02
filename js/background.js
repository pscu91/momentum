const backgrounds = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const bodyStyle = document.body.style;
const chosenBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenBackground}`;

bodyStyle.backgroundImage = "url('" + bgImage.src + "')";
