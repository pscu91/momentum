const backgrounds = ['01.jpeg', '02.jpeg', '03.jpeg'];
const bodyStyle = document.body.style;
const chosenBackground =
  backgrounds[Math.floor(Math.random() * backgrounds.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${chosenBackground}`;

bodyStyle.backgroundImage = "url('" + bgImage.src + "')";
bodyStyle.backgroundSize = 'cover';
bodyStyle.backgroundRepeat = 'no-repeat';
bodyStyle.backgroundPosition = 'center';
bodyStyle.minHeight = '100vh';
bodyStyle.overflowY = 'hidden';
