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
const button = createElement("button", {
    parent: textContainer,
    innerText: "BUY NOW",
});
const productImage = createElement("img", {
    parent: hero,
    src: "./images/temp.png",
    alt: "placeholder",
});

// FUNCTIONS
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
