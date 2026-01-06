
export class MenuPage {
    constructor() { 

    }

    renderContent() {
        const content = document.createElement("div");

        const title = document.createElement("p");
        title.textContent = "our menu";

        const menuList = document.createElement("ul");
        menuList.classList.add("menu-list");
        
        const menuElementList = ["pizza", "pasta", "burger", "salad", "soup of the day"];

        for (const menuItem of menuElementList) {
            const menuItemElement = document.createElement("li");
            menuItemElement.textContent = menuItem;
            menuList.appendChild(menuItemElement);
        }

        const pricePara = document.createElement("p");
        pricePara.textContent = "every item is priced at: affordable price";
        pricePara.classList.add("price-para");

        content.appendChild(title);
        content.appendChild(menuList);
        content.appendChild(pricePara);

        return content;
    }
}