import Img from "./img1.jpeg"

function addImage() {
    const img = document.createElement('img');
    img.alt = 'Kiwi';
    img.width = 300;
    img.src = Img;
    const body = document.querySelector('body');
    console.log(body);
    body.appendChild(img);
}

export default addImage;
