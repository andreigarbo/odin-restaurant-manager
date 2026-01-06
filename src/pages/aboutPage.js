
export class AboutPage {
    constructor() { 

    }

    renderContent() {
        const content = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = "about us";

        const aboutUsPara = document.createElement("p");
        aboutUsPara.textContent = "we are a vegan restaurant from city, founded in 2021 in vegan city. since our founding, we have been delivering excellence in the culinary arts at affordable prices and without any murder or torture involved.";

        const contactUs = document.createElement("p");
        contactUs.textContent = "contact us:";

        const contactList = document.createElement("ul");
        contactList.classList.add("contact-list");

        const contactPhone = document.createElement("li");
        contactPhone.textContent = "+3828285312";

        const contactEmail = document.createElement("li");
        contactEmail.textContent = "contact@thegreenfork.com";

        const contactAddress = document.createElement("li");
        contactAddress.textContent = "22 greene street, vegan city";

        contactList.appendChild(contactPhone);
        contactList.appendChild(contactEmail);
        contactList.appendChild(contactAddress);

        content.appendChild(title);
        content.appendChild(aboutUsPara);
        content.appendChild(contactUs);
        content.appendChild(contactList);

        return content;
    }
}
