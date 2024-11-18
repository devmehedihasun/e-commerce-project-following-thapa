const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");




export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

      products.forEach((curProd) =>{
        const {brand, description, image, stock, price, category, name} =
        curProd;

        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector(".productName").textContent = name;

        productContainer.append(productClone);
      });

};