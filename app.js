// VARIABLES
const hero = createElement("div", {
    class: "hero",
});

// MAIN
document.body.appendChild(hero);

// FUNCTIONS
function createElement(tag, attributes = null) {
    const element = document.createElement(tag);
    if (attributes.class?.toString()) {
        element.classList.add(attributes.class);
    }
    return element;
}
