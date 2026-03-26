// VARIABLES
const hero = createElement("div", {
    parent: document.body,
    class: "hero",
});
const title = createElement("div", {
    parent: hero,
    innerHTML: "CALL TO ACTION"
});

// MAIN

// FUNCTIONS
function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (options.parent instanceof HTMLElement) {
        options.parent.appendChild(element);
    }
    if (typeof options.class === "string") {
        element.classList.add(options.class);
    }
    if (typeof options.id === "string") {
        element.id = options.id;
    }
    if (typeof options.innerHTML === "string") {
        element.innerHTML = options.innerHTML;
    }
    return element;
}
