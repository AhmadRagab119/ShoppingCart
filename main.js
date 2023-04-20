let bagBtn = document.querySelector("header .bag")
let closebag = document.querySelector(".close-page")
let shoppingCart = document.querySelector(".shoping-cart")
let addOrder = document.querySelectorAll(".product .btn ")
let totalPrice = document.querySelector(".total")
let orders = document.querySelector(".orders")
let productsImg = document.querySelectorAll(".products .product .image img");
console.log(productsImg)
// Toggle Show shopping cart

bagBtn.addEventListener("click",()=>{
shoppingCart.classList.add("show-bag")
})
closebag.addEventListener("click",()=>{
    shoppingCart.classList.remove("show-bag")
})

// add And remove order

addOrder.forEach((el)=>{
    el.addEventListener("click",()=>{
        el.setAttribute("disabled","")
       let priceOrder =  el.previousElementSibling.textContent
       let titleOrder =  el.parentElement.parentElement.firstElementChild.textContent
       let  srcImageOrder =  el.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.src
       orders.innerHTML +=
        `
        <div class="order">
        <img src="${srcImageOrder}" alt="">
        <div class="info">
            <div class="title-order">${titleOrder}</div>
            <div class="price-order">${priceOrder}</div>
            <input value="1" class="count" type="number">
        </div>
        <div class="delete"><i class="fa-solid fa-trash-can"></i></div>
    </div>
        `;
           
        let deleteOrders = document.querySelectorAll(".delete");
        deleteOrders.forEach((deleteOrder) => {
          deleteOrder.addEventListener("click", () => {
            deleteOrder.parentElement.remove();
            productsImg.forEach((element)=>{
                if(element.src === deleteOrder.parentElement.firstElementChild.src){
                   element.parentElement.nextElementSibling.lastElementChild.lastElementChild.removeAttribute("disabled")
                }
            })
          });
        });

    setInterval(() => {
        let order = document.querySelectorAll(".order")
        let val = 0;
        order.forEach((ele)=>{
               let priceOrder = ele.firstElementChild.nextElementSibling.lastElementChild.value ;  
              let countOrder =  ele.firstElementChild.nextElementSibling.lastElementChild.previousElementSibling.textContent.slice(1);
               val +=parseInt(priceOrder) * parseInt(countOrder);
        })  
        totalPrice.textContent = `$${val}`
    });

    })
})




