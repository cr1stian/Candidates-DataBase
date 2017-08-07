const customer = customers.results //pulling database and giving it a name here

console.log(customer)


let container = document.querySelector(".container") //pulling my tag from my HTML page to use in here

let header = document.createElement("header") //creating HTML Elements and placing them in HTML from within JavaScript file
let h1 = document.createElement("h1")
let h1Text = document.createTextNode("POSSIBLE CANDIDATES") //creating HTML text to show in Element
let main = document.createElement("main")



h1.append(h1Text) //adding Elements to one another in correct order
header.append(h1)
container.append(header)
container.append(main)

//CREATING USING LONG WAY (NON-ES6)

for(let i = 0; i < customer.length; i++){ //For Loop to show local database information
  let div = document.createElement("div")//creating div for each customer/object in database
  main.append(div)//adding the created DIV to the HTML from within JavaScript

  let img = document.createElement("img") //created img for each customer/object
  img.scr = customer[i].picture.large //using DOT Notation to map correct path to img scr
  img.width = "250" //using inline CSS to give image width
  div.append(img)//appending(add) new IMG to DIV Element

  let name = document.createElement("p")
  let nameText = document.createTextNode(customer[i].name.first + " " + customer[i].name.last)
  name.className = "name"
  name.append(nameText)
  div.append(name)

  let email = document.createElement("p")
  let emailText = document.createTextNode(customer[i].email)
  email.className = "email"
  email.append(emailText)
  div.append(email)

  let street = document.createElement("p")
  let streetText = document.createTextNode(customer[i].location.street)
  street.append(streetText)
  div.append(street)

  let location = document.createElement("p")
  let locationText = document.createTextNode(customer[i].location.city + ", " + customer[i].location.state + " " + customer[i].location.postcode)
  location.append(locationText)
  div.append(location)

  let phone = document.createElement("p")
  let phoneText = document.createTextNode(customer[i].phone)
  phone.append(phoneText)
  div.append(phone)

  let ssn = document.createElement("p")
  let ssnText = document.createTextNode(customer[i].id.value)
  ssn.className = "ssn"
  ssn.append(ssnText)
  div.append(ssn)
}

//LONG WAY (NON-ES6)
let eachCustomer = ""
for (let i = 0; i < customer.length; i++) {
  eachCustomer += `
    <div>
       <img src=${customer[i].picture.large} width="250">
       <p class="name">${customer[i].name.first} ${customer[i].name.last}</p>
       <p class="email">${customer[i].email}</p>
       <p>${customer[i].location.street}</p>
       <p>${customer[i].location.city} ${customer[i].location.state} ${customer[i].location.postcode}</p>
       <p>${customer[i].phone}</p>
       <p class="ssn">${customer[i].id.value}</p>
    </div>
  `
}
main.innerHTML = eachCustomer
