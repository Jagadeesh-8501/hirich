document.addEventListener("DOMContentLoaded", function () {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = urlParams.get("id");
            
            if (productId) {
                loadProductDetails(data.products, productId);
            } else {
                loadProductList(data.products);
            }
        })
        .catch(error => console.error("Error loading products:", error));
});

// Function to load the product list in `product.html`
function loadProductList(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `

                <div class="col-lg-6 mb-30">
                <div class="vs-product product-style7">
                  <div class="product-img">
                    <a href="product-details.html?id=${product.id} tabindex="0"
                      ><img
                        src="${product.images[0]}" alt="${product.name}"
                        alt="Image"
                        class="img"
                    /></a>
                  </div>
                  <div class="product-content">
                    <div
                      class="star-rating"
                      role="img"
                      aria-label="Rated 5 out of 5"
                    >
                      <span style="width: 100%"
                        >Rated <strong class="rating">5</strong> out of 5</span
                      >
                    </div>
                    <h3 class="product-title">
                      <a href="product-details.html?id=${product.id} tabindex="0">
                        ${product.name}
                      </a>
                    </h3>
                    <span class="product-weight">CBD 100MG</span>
                    <span class="product-price">${product.price.current_price}<del>$23.85</del></span>
                    <a href="cart.html" class="cart-btn"
                      ><i class="fas fa-shopping-basket"></i
                    ></a>
                  </div>
                </div>
              </div>


            
        `;

        productList.appendChild(productCard);
    });
}


function loadProductList(products) {
    const productList = document.getElementById("product-list1");
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `

                <div class="col-lg-6 mb-30">
                <div class="vs-product product-style7">
                  <div class="product-img">
                    <a href="product-details.html?id=${product.id} tabindex="0"
                      ><img
                        src="${product.images[0]}" alt="${product.name}"
                        alt="Image"
                        class="img"
                    /></a>
                  </div>
                  <div class="product-content">
                    <div
                      class="star-rating"
                      role="img"
                      aria-label="Rated 5 out of 5"
                    >
                      <span style="width: 100%"
                        >Rated <strong class="rating">5</strong> out of 5</span
                      >
                    </div>
                    <h3 class="product-title">
                      <a href="product-details.html?id=${product.id} tabindex="0">
                        ${product.name}
                      </a>
                    </h3>
                    <span class="product-weight">CBD 100MG</span>
                    <span class="product-price">${product.price.current_price}<del>$23.85</del></span>
                    <a href="cart.html" class="cart-btn"
                      ><i class="fas fa-shopping-basket"></i
                    ></a>
                  </div>
                </div>
              </div>


            
        `;

        productList.appendChild(productCard);
    });
}


// Function to load product details in `product-details.html`
function loadProductDetails(products, productId) {
    const product = products.find(p => p.id == productId);
    if (!product) {
        document.getElementById("product-details").innerHTML = "<p>Product not found!</p>";
        return;
    }

    document.getElementById("product-details").innerHTML = `
        <h1>${product.name}</h1>
        <img src="${product.images[0]}" alt="${product.name}">
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Price:</strong> $${product.price.current_price} <del>$${product.price.old_price}</del></p>
        <p><strong>Description:</strong> ${product.description}</p>
        <h3>Benefits</h3>
        <ul>${product.benefits.map(benefit => `<li>${benefit}</li>`).join("")}</ul>
        <h3>Side Effects</h3>
        <ul>${product.side_effects.map(effect => `<li>${effect}</li>`).join("")}</ul>
        <p><strong>Weight:</strong> ${product.additional_information.weight}</p>
        <p><strong>Dimensions:</strong> ${product.additional_information.dimensions}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}

// Function to add product to cart (demo functionality)
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
