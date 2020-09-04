let MessageStore = require("./message_store");

module.exports = {

    render() {
        let $ul = document.createElement("ul");
        $ul.className = "messages";
        let messages = MessageStore.getInboxMessages();
        messages.forEach(message => {
            $ul.appendChild(this.renderMessage(message));
        });
        return $ul;
    },

    renderMessage(message) {
        let $li = document.createElement("li");
        $li.className = "messages";
        $li.innerHTML = `
        <span class="from">${message.from}</span>
        <span class="subject">${message.subject}</span>
        <span class="body">${message.body}</span>`
        return $li;
    }  
}