// TODO: find a better way to organize html elements
// split stuff into different scripts. and import/export
// use class/object per (sub)section
// more seperation of concerns
// less global variable soup
// more ways to fake strongly typed types
// OOP

// VARIABLES (WHAT A MESS!)
const hero = CreateElement("section", {
    class: "hero",
});
const textContainer = CreateElement("div", {
    class: "textContainer",
    parent: hero,
});
const title = CreateElement("h1", {
    parent: textContainer,
    innerText: "MOST GAMBLERS QUIT JUST BEFORE THEY HIT IT BIG",
});
const text = CreateElement("p", {
    parent: textContainer,
    innerHTML:
        'Transform the way you gamble with one service where you can <span class="linethrough">waste</span> ' +
        "<strong>invest</strong> your money and become giga rich!",
});
const buttonContainer = CreateElement("div", {
    class: "buttonContainer",
    parent: textContainer,
});
const buttonTexts = ["GAMBLE NOW", "DON'T MISS OUT", "GET RICH", "WIN BIG"];
let nextButtonTextsIndex = 0;
const buyButton = CreateElement("button", {
    parent: buttonContainer,
    innerText: buttonTexts[nextButtonTextsIndex++],
    id: "buyButton",
    onclick: () => {
        alert("CONGRATULATIONS YOU JUST GOT SCAMMED!");
    },
});
const signUpButton = CreateElement("button", {
    parent: buttonContainer,
    id: "signUpButton",
});
const signUpButtonText = CreateElement("div", {
    parent: signUpButton,
    innerText: "SIGN UP WITH GOOGLE",
});
const signUpButtonIcon = CreateElement("img", {
    parent: signUpButton,
    src: "./images/googleLogo.png",
    alt: "google logo",
    id: "signUpButtonIcon",
});
const productImage = CreateElement("div", {
    parent: hero,
    class: "productImage",
});
const productImageTitle = CreateElement("h2", {
    parent: productImage,
    innerText: "GIGA GAMBLERS",
});
const productImageText = CreateElement("p", {
    parent: productImage,
    innerText: "HIGH STAKES ONLY",
});
const colours = ["red", "yellow", "pink", "green", "purple", "orange", "blue"];
let nextColourIndex = 0;

// MAIN
AddBuyButtonEffect();
AddProductImageTextColourEffect();

// FUNCTIONS
function AddBuyButtonEffect() {
    setInterval(() => {
        buyButton.classList.toggle("buttonColourOverride");
    }, 200);
    setInterval(() => {
        buyButton.innerText = buttonTexts[nextButtonTextsIndex++ % buttonTexts.length];
    }, 600);
}

function AddProductImageTextColourEffect() {
    setInterval(() => {
        productImageText.style.color = colours[nextColourIndex % colours.length];
        productImageTitle.style.color = colours[++nextColourIndex % colours.length];
    }, 400);
}

function CreateElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.parent instanceof HTMLElement) {
        options.parent.appendChild(element);
    } else {
        document.body.appendChild(element);
    }
    if (typeof options.class === "string") {
        element.classList.add(options.class);
    }
    if (typeof options.id === "string") {
        element.id = options.id;
    }
    if (typeof options.innerText === "string") {
        element.innerText = options.innerText;
    }
    if (typeof options.innerHTML === "string") {
        element.innerHTML = options.innerHTML;
    }
    if (typeof options.src === "string") {
        element.src = options.src;
    }
    if (typeof options.alt === "string") {
        element.alt = options.alt;
    }
    if (typeof options.onclick === "function") {
        element.onclick = options.onclick;
    }
    return element;
}
