import { getEmployees } from "./database.js"
import { getProducts } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const prodObject = getProducts()
const orderObject = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
  
            if (itemClicked.id.startsWith("employee")) {
                const [, employeePrimaryKey] = itemClicked.id.split("--")
  
                for (const employeeObject of employees) {
                    if (employeeObject.id === parseInt(employeePrimaryKey)) {
                            window.alert(`${employeeObject.name} has sold `)
                        }
                    }
                }
            }
        
    )

    html += "</ul>"

    return html
}