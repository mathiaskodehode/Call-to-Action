// VARIABLES
const hero = createElement("div", {
    class: "hero",
    parent: document.body,
});

// MAIN

console.log(typeof document.body);

// FUNCTIONS
function createElement(tag, options = {}) {
    const element = document.createElement(tag);
    if (typeof options.class === "string") {
        element.classList.add(options.class);
    }
    if (options.parent instanceof HTMLElement) {
        options.parent.appendChild(element);
    }
    return element;
}
