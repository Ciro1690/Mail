let Router = require("./router");
let Inbox = require("./inbox");
let MessageStore = require("./message_store");
let Sent = require("./sent");
let Compose = require("./compose");

let routes = {
    compose: Compose,
    inbox: Inbox,
    sent: Sent
};

document.addEventListener("DOMContentLoaded", () => {
    let content = document.querySelector(".content");
    router = new Router(content, routes);
    router.start();
    window.location.hash = "#inbox";
    let navItems = Array.from(document.querySelectorAll(".sidebar-nav li"));
    navItems.forEach(navItem => {
        navItem.addEventListener("click", () => {
            let inner = navItem.innerText.toLowerCase();
            location.hash = inner;
        });
    });
});