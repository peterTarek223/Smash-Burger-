const imageSrc = './imges/french(2).png'; // مسار الصورة

const numberOfImages = (window.innerWidth + window.innerHeight) / 20;
console.log(numberOfImages);

for (let i = 0; i < numberOfImages; i++) {
  const img = document.createElement('img');
  img.src = imageSrc;
  img.className = 'back-french';

  // خلي الحجم عشوائي بين 10 و 50 بكسل
  const randomSize = Math.floor(Math.random() * 35) + 25; // من 10 إلى 50
  img.style.width = randomSize + 'px';
  img.style.position = 'absolute';

  // زاوية دوران عشوائية بين -45 و 45 درجة
  const randomRotate = Math.floor(Math.random() * 91) - 45; 
  img.style.transform = `rotate(${randomRotate}deg)`;

  img.onload = () => {
    const maxX = window.innerWidth - 80;
    const maxY = window.innerHeight - 80;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    img.style.left = randomX + 'px';
    img.style.top = randomY + 'px';
  };

  document.body.appendChild(img);
}
