import { HomePage } from "./pages/homePage.js";
import { MenuPage } from "./pages/menuPage.js";
import { AboutPage } from "./pages/aboutPage.js";

class Button {
    constructor(button, associatedPage) {
        this._contentDiv = document.getElementById("content");
        this._button = button;
        this._associatedPage = associatedPage;
        this._button.addEventListener("click", () => {
            const renderedContent = associatedPage.renderContent();
            this._contentDiv.innerHTML = '';
            this._contentDiv.append(renderedContent);
        });
    }
}

class ContentSwitcher {

    constructor() {
        const homeButtonSelect = document.getElementById("home-button");
        const menuButtonSelect = document.getElementById("menu-button");
        const aboutButtonSelect = document.getElementById("about-button");

        const contentDiv = document.getElementById("content");
        const header = document.getElementById("header");

        const homePageInstance = new HomePage(); 
        const menuPageInstance = new MenuPage();
        const aboutPageInstance = new AboutPage();
        
        const homeButton = new Button(homeButtonSelect, homePageInstance);
        const menuButton = new Button(menuButtonSelect, menuPageInstance);
        const aboutButton = new Button(aboutButtonSelect, aboutPageInstance);

        contentDiv.innerHTML = '';

        const initialContent = homePageInstance.renderContent();
        
        contentDiv.append(initialContent);
    }
};

const contentSwitcher = new ContentSwitcher();