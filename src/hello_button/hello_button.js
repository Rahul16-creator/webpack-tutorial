import "./hello_button.css"

function helloButton() {
    const button = document.createElement('button');
    button.innerHTML="Hello world";
    button.classList.add('btn')
    button.onclick=function() {
       let para= document.createElement("p");
       para.innerHTML="Hello world by para";
       para.classList.add("text")
       document.querySelector("body").appendChild(para)
    }
    document.querySelector("body").appendChild(button);
}

export default helloButton;
