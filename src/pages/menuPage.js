
export class MenuPage {
    constructor() { 

    }

    renderContent() {
        const content = document.createElement("div");
        const title = document.createElement("p");
        title.textContent = "Our Menu";
        content.appendChild(title);
        return content;
    }
}
