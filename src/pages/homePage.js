import veganFoodJpg from "../assets/vegan-food.jpg"

export class HomePage {
    
    constructor() { 

    }

    renderContent() {
        const content = document.createElement("div");
        const titlePara = document.createElement("p");
        titlePara.textContent = "the green fork";
        titlePara.classList.add("title");

        const headerPara = document.createElement('p');
        headerPara.textContent = "a fully vegan restaurant proving that meat is not worth the murder";
        headerPara.classList.add("sub-header");

        const bodyPara = document.createElement('p');
        bodyPara.textContent = "we are on a mission to prove that vegan food can be better and healthier than meat based products, and should not be a luxury. since our founding in 2021, we have been making veganism more accessible and desireable, one dish at a time."
        bodyPara.classList.add("body-text");

        const fruitVegImage = document.createElement("img");
        fruitVegImage.src = veganFoodJpg;
        fruitVegImage.alt = "A picture of fruits and vegetables";

        content.appendChild(titlePara);
        content.appendChild(headerPara);
        content.appendChild(bodyPara);
        content.appendChild(fruitVegImage);

        return content;
    }
}
