// VARIABLES
const hero = createElement("div", {
    class: "hero",
});
const textContainer = createElement("div", {
    class: "textContainer",
    parent: hero,
});
const title = createElement("h1", {
    parent: textContainer,
    innerText: "CALL TO ACTION",
});
const text = createElement("p", {
    parent: textContainer,
    innerText: "You will never think about this the same again...",
});
const buttonTexts = ["BUY NOW", "DOT NOT MISS", "LAST CHANCE", "GONE SOON"];
let nextButtonTextsIndex = 0;
const button = createElement("button", {
    parent: textContainer,
    innerText: buttonTexts[nextButtonTextsIndex++],
});
const productImageContainer = createElement("div", {
    parent: hero,
    class: "productImageContainer",
});
const productImage = createElement("img", {
    parent: productImageContainer,
    src: "./images/temp.png",
    alt: "placeholder",
});

// MAIN
addButtonEffects();

// FUNCTIONS
function addButtonEffects() {
    setInterval(() => {
        button.classList.toggle("buttonColour");
    }, 200);
    setInterval(() => {
        button.innerText =
            buttonTexts[nextButtonTextsIndex++ % buttonTexts.length];
    }, 600);
}

function createElement(tag, options = {}) {
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
    return element;
}
