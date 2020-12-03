// Homepage & header animations
// TODO: REFACTOR
const title = document.body.querySelector('.bio__title').style;
const titleFade = document.body.querySelector('.bio__title-fade').style;
const iconResume = document.body.querySelector('.bio__tagline-icons').childNodes[1].style;
const iconGit = document.body.querySelector('.bio__tagline-icons').childNodes[3].style;
const iconDev = document.body.querySelector('.bio__tagline-icons').childNodes[5].style;
const iconLinked = document.body.querySelector('.bio__tagline-icons').childNodes[7].style;
const iconMusic = document.body.querySelector('.bio__tagline-icons').childNodes[9].style;
const iconTwit = document.body.querySelector('.bio__tagline-icons').childNodes[11].style;
const linkDev = document.body.querySelector('.bio__tagline').childNodes[1].style;
const linkWrite = document.body.querySelector('.bio__tagline').childNodes[3].style;
const linkMusic = document.body.querySelector('.bio__tagline').childNodes[5].style;

const fade = () => {
  title.visibility = 'hidden';
  setTimeout(() => {
    title.visibility = 'visible';
  }, 200);
  setTimeout(() => {
    linkDev.display = 'inline';
    linkWrite.display = 'inline';
    linkMusic.display = 'inline';
  }, 900);
  setTimeout(() => {
    title.display = 'none';
    titleFade.display = 'block';
    iconResume.visibility = 'visible';
    iconGit.visibility = 'visible';
    iconDev.visibility = 'visible';
    iconLinked.visibility = 'visible';
    iconMusic.visibility = 'visible';
    iconTwit.visibility = 'visible';
  }, 1800);
};

fade();
