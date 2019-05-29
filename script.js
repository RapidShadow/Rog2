$(document).ready(function() {
  let products = {
    vanilla: {
      product: "vanilla",
      image: "images/original.png",
      price: "$8.00",
      status: "sold out",
      text: "A trusable flavor. The first original flavor of RØG, classic and simple"
    },
    blueberry: {
      product: "blueberry",
      image: "images/blueberry.png",
      price: "$8.00",
      status: "sold out",
      text: " Blueberry RØG tastes like sweet ripe blueberries popping in your mouth similar to your favorite blue candy! "
    },
    strawberry: {
      product: "strawberry",
      image: "images/strawberry.png",
      price: "$8.00",
      status: "sold out",
      text: "Capturing the essence of one of the most popular fruit flavors on the market, this RØG features sweetened Strawberries."
    },
    orange: {
      product: "orange",
      image: "images/orange.png",
      price: "$8.00",
      status: "sold out",
      text: "Blast into an ocean of citrusy goodness this summer with the all-new Orange RØG."
    },
    grape: {
      product: "grape",
      image: "images/grape.png",
      price: "$8.00",
      status: "sold out",
      text: " Grape RØG has arrived with a deliciously fresh purple treat that’ll leave your tastebuds wanting more!"
    },
    fruit: {
      product: "fruit punch",
      image: "images/punch.png",
      price: "$8.00",
      status: "sold out",
      text: "Fruit Punch contains an unstoppable rush of Fruit flavors that will send your taste buds into a frenzy of satisfaction."
    },
    lemonade: {
      product: "lemonade",
      image: "images/lemonade.png",
      price: "$8.00",
      status: "sold out",
      text: "Lemonade by RØG delivers a strong summertime favorite that’s both tasty and refreshing."
    },
    welches: {
      product: "welches",
      image: "images/welches.png",
      price: "$8.00",
      status: "sold out",
      text: "Welches RØG tastes like a familiar childhood memory, bursting with flavor this medley of candy."
    },
    cotton: {
      product: "cotton candy",
      image: "images/candy.png",
      price: "$8.00",
      status: "sold out",
      text: "Providing flavor unlike any RØG you’ve ever had before is the all-new Cotton Candy RØG."
    },
    sweet: {
      product: "sweet mint",
      image: "images/mint.png",
      price: "$8.00",
      status: "sold out",
      text: "Sweet Mint RØG gives a crisp sensation that will remind you of stepping out on a cold winter morning."
    },
    mucho: {
      product: "mucho mango",
      image: "images/mango.png",
      price: "$8.00",
      status: "sold out",
      text: "Sweet, tangy and tropical is the best way to describe this mango flavored RØG."
    },
    krispies: {
      product: "krispies tendies",
      image: "images/chicken.png",
      price: "$8.00",
      status: "coming soon",
      text: " An old American favorite, Fried Chicken RØG will surely satisfy anyone’s craving for rich, tasty food."
    }
  }
  //loopping the JSon object in the website to load content
  for (let key in products) {
    let mContent = `
    <div class="card" id="${key}">
  <p class="stuff">${products[key]["product"]}</p>
  <img src=${products[key]["image"]} class="poster" >
  <p class="stuff">${products[key]["price"]}<p>
  <p class="stuff">${products[key]["status"]}<p>
</div>`
    $("#display-area").append(mContent);
  }

  $(".card").click(function() {
    let cardId = $(this).attr("id");
    $("body").empty();
    let newNav = `
     <nav>
      <ul class="left">
        <li><a href="home.html">home</a></li>
        <li> <a href="index.html">about</a></li>
        <li> <a href="shop.html">shop</a></li>
        <li> <a href="contact.html">contact</a></li>
      </ul>
      <img src="images/logo.png" id="logo">
      <a href="shop.html"><img src="images/cart.png" id="cart" class="right"> </a>
    </nav>
    `
    $("body").append(newNav);

    let newElement = `
    <div id="backdiv">
    <a href="shop.html" id="back">back</a>
    <div>
    <div class="text">
    <img src="${products[cardId]["image"]}" class="pImage">
    <p class="pName">${products[cardId]["product"]}</p>
    <p class="desc">${products[cardId]["text"]}  </p>
    <p class="buy">${products[cardId]["status"]}</p>
    <div>
    <hr>
    <p id="copyright">Copyright © 2019 All Rights Reserved. Trademarked 2019 by RØG.INC ®</p>

  `
    $("body").append(newElement);
  })
})
