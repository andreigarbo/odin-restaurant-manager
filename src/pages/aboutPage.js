
export class AboutPage {
    constructor() { 

    }

    renderContent() {
        const content = document.createElement("div");
        const title = document.createElement("p");
        title.textContent = "About us";
        content.appendChild(title);
        return content;
    }
}
