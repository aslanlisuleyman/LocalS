
const productBtn=document.getElementById("product")
const productForm=document.getElementById("productForm")
const modalBody=document.getElementById("modalBody")
const addProduct=document.getElementById("addProduct")
const wishlist=document.getElementById("wishlist")
const overlay=document.getElementById("overlay")
const close=document.getElementById("close")


const save = JSON.parse(localStorage.getItem('saves')) || [];

productBtn.addEventListener("click",(e)=>{
    productForm.style.display="block"
})

addProduct.addEventListener("click",(e)=>{
    var productName = document.getElementById("productName").value;
    var productID = document.getElementById("productID").value;
    var productPrice = document.getElementById("productPrice").value;
    var productCategory = document.getElementById("productCategory").value;
    var productBrand = document.getElementById("productBrand").value;

    if (!productName || !productID || !productPrice || !productCategory || !productBrand) {
        alert("Yazı daxil edin.");
        return; 
    }

    var  data= {
        name: productName,
        id: productID,
        price: productPrice,
        category: productCategory,
        brand: productBrand,
    };

    save.push(data);

    localStorage.setItem('saves', JSON.stringify(save));

    var productDiv = document.createElement("div");
    productDiv.innerHTML = `
                <p><strong>Name:</strong> ${productName}</p>
                <p><strong>ID:</strong> ${productID}</p>
                <p><strong>Price:</strong> ${productPrice}</p>
                <p><strong>Category:</strong> ${productCategory}</p>
                <p><strong>Brand:</strong> ${productBrand}</p>
            `;

    const wishlistButton=document.createElement("button")
        wishlistButton.style.backgroundColor="blue"
        wishlistButton.style.color="white"
        wishlistButton.style.width="130px"
        wishlistButton.style.height="40px"
        wishlistButton.style.borderRadius="10px"
        wishlistButton.style.border="none"
        wishlistButton.textContent="Add to Wishlist"
        wishlistButton.addEventListener("click",(e)=>{
        wishlist.style.display="block"
        overlay.classList.add("active")
        wishlist.appendChild(productDiv)
        
    })
    productDiv.appendChild(wishlistButton)
    document.getElementById("modalBody").appendChild(productDiv);
    productForm.reset()
    productForm.style.display="none"
})
close.addEventListener("click",(e)=>{
    wishlist.style.display="none"
    overlay.classList.remove("active")
})