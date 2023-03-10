import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
      html += `<li id="product--${product.id}">${product.name}</li>`
    }
    
    document.addEventListener(
      "click",
      (clickEvent) => {
          const itemClicked = clickEvent.target

          if (itemClicked.id.startsWith("product")) {
              const [, productPrimaryKey] = itemClicked.id.split("--")

              for (const productObject of products) {
                  if (productObject.id === parseInt(productPrimaryKey)) {
                      window.alert(`${productObject.name} \$${productObject.price}`)
                  }
              }
          }
      }
  )


    html += "</ul>"

    return html
}