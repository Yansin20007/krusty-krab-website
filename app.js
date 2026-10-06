const products = [
    {
        id: 1,
        name: "Krabby Patty Truyền Thống",
        category: "patty",
        categoryName: "Krabby Patty",
        description: "Burger bò biển, rau xanh, cà chua, phô mai và sốt Krabby đặc biệt.",
        price: 69000,
        rating: 4.9,
        reviews: 328,
        popular: 100,
        newest: 15,
        vegetarian: false,
        badge: "BEST SELLER",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 2,
        name: "Double Krabby Patty",
        category: "patty",
        categoryName: "Krabby Patty",
        description: "Hai lớp patty đậm vị cùng phô mai tan chảy và sốt đặc biệt.",
        price: 99000,
        rating: 4.9,
        reviews: 246,
        popular: 98,
        newest: 14,
        vegetarian: false,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 3,
        name: "Cheese Krabby",
        category: "patty",
        categoryName: "Krabby Patty",
        description: "Patty mềm mọng phủ lớp phô mai vàng béo ngậy.",
        price: 79000,
        rating: 4.8,
        reviews: 191,
        popular: 92,
        newest: 13,
        vegetarian: false,
        badge: "YUMMY",
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 4,
        name: "Seafood Krabby",
        category: "patty",
        categoryName: "Krabby Patty",
        description: "Burger hải sản với tôm, rau biển và sốt chua ngọt.",
        price: 109000,
        rating: 4.7,
        reviews: 143,
        popular: 87,
        newest: 12,
        vegetarian: false,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 5,
        name: "Kelp Fries",
        category: "side",
        categoryName: "Món phụ",
        description: "Khoai tây chiên giòn rụm phủ muối rong biển Bikini Bottom.",
        price: 39000,
        rating: 4.8,
        reviews: 214,
        popular: 96,
        newest: 11,
        vegetarian: true,
        badge: "VEGGIE",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 6,
        name: "Coral Fritters",
        category: "side",
        categoryName: "Món phụ",
        description: "Bánh chiên giòn kiểu san hô ăn kèm sốt biển cay nhẹ.",
        price: 49000,
        rating: 4.6,
        reviews: 128,
        popular: 78,
        newest: 10,
        vegetarian: true,
        badge: "VEGGIE",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 7,
        name: "Seaweed Onion Rings",
        category: "side",
        categoryName: "Món phụ",
        description: "Vòng hành chiên giòn phủ rong biển và gia vị đặc biệt.",
        price: 45000,
        rating: 4.5,
        reviews: 104,
        popular: 72,
        newest: 9,
        vegetarian: true,
        badge: "",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 8,
        name: "Salty Sea Shake",
        category: "drink",
        categoryName: "Đồ uống",
        description: "Milkshake mát lạnh vị vanilla với lớp kem biển béo mịn.",
        price: 49000,
        rating: 4.8,
        reviews: 179,
        popular: 88,
        newest: 8,
        vegetarian: true,
        badge: "POPULAR",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 9,
        name: "Bikini Bottom Cola",
        category: "drink",
        categoryName: "Đồ uống",
        description: "Nước ngọt có gas lạnh sâu, giải nhiệt cực đã.",
        price: 29000,
        rating: 4.5,
        reviews: 94,
        popular: 70,
        newest: 7,
        vegetarian: true,
        badge: "",
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 10,
        name: "Blue Ocean Soda",
        category: "drink",
        categoryName: "Đồ uống",
        description: "Soda xanh đại dương, chanh tươi và thạch biển.",
        price: 39000,
        rating: 4.7,
        reviews: 117,
        popular: 77,
        newest: 6,
        vegetarian: true,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 11,
        name: "Jellyfish Jelly Cup",
        category: "dessert",
        categoryName: "Tráng miệng",
        description: "Thạch trái cây nhiều tầng, mát lạnh và vui mắt.",
        price: 35000,
        rating: 4.6,
        reviews: 86,
        popular: 65,
        newest: 5,
        vegetarian: true,
        badge: "SWEET",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 12,
        name: "Chocolate Sea Cake",
        category: "dessert",
        categoryName: "Tráng miệng",
        description: "Bánh chocolate mềm ẩm với kem vanilla và sốt chocolate.",
        price: 59000,
        rating: 4.9,
        reviews: 165,
        popular: 83,
        newest: 4,
        vegetarian: true,
        badge: "BEST",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 13,
        name: "Chum Bucket Combo",
        category: "combo",
        categoryName: "Combo",
        description: "Burger, khoai tây, nước ngọt và món phụ trong một combo.",
        price: 129000,
        rating: 4.7,
        reviews: 201,
        popular: 94,
        newest: 3,
        vegetarian: false,
        badge: "SAVE 20%",
        image: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 14,
        name: "Krabby Family Feast",
        category: "combo",
        categoryName: "Combo",
        description: "Combo gia đình gồm 3 burger, khoai lớn, 3 nước và món phụ.",
        price: 259000,
        rating: 4.9,
        reviews: 157,
        popular: 91,
        newest: 2,
        vegetarian: false,
        badge: "FAMILY",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=85"
    },
    {
        id: 15,
        name: "Mini Krabby Combo",
        category: "combo",
        categoryName: "Combo",
        description: "Một Krabby Patty mini, khoai nhỏ và nước ngọt.",
        price: 79000,
        rating: 4.6,
        reviews: 139,
        popular: 80,
        newest: 1,
        vegetarian: false,
        badge: "VALUE",
        image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=85"
    }
];


let currentCategory = "all";
let currentRating = 0;
let cart = [];
let quickProduct = null;
let quickQuantity = 1;


const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const sortSelect = document.getElementById("sortSelect");
const resultCount = document.getElementById("resultCount");
const sectionTitle = document.getElementById("sectionTitle");

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const vegetarianFilter = document.getElementById("vegetarianFilter");
const meatFilter = document.getElementById("meatFilter");

const emptyState = document.getElementById("emptyState");

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const cartDrawer = document.getElementById("cartDrawer");
const cartBody = document.getElementById("cartBody");

const cartBadge = document.getElementById("cartBadge");
const subtotalElement = document.getElementById("subtotal");
const deliveryFeeElement = document.getElementById("deliveryFee");
const cartTotalElement = document.getElementById("cartTotal");

const quickModal = document.getElementById("quickModal");
const checkoutModal = document.getElementById("checkoutModal");
const successModal = document.getElementById("successModal");
const loginModal = document.getElementById("loginModal");


document.addEventListener("DOMContentLoaded", () => {

    renderProducts();
    renderCart();

    setupEvents();

});


function setupEvents() {

    document.querySelectorAll(".category-btn").forEach(button => {

        button.addEventListener("click", () => {

            const category = button.dataset.category;

            selectCategory(category);

        });

    });


    searchInput.addEventListener("input", () => {

        clearSearch.style.display =
            searchInput.value.length > 0
                ? "block"
                : "none";

        renderProducts();

    });


    clearSearch.addEventListener("click", () => {

        searchInput.value = "";
        clearSearch.style.display = "none";

        renderProducts();

    });


    sortSelect.addEventListener("change", renderProducts);

    minPrice.addEventListener("input", renderProducts);
    maxPrice.addEventListener("input", renderProducts);

    vegetarianFilter.addEventListener("change", () => {

        if (vegetarianFilter.checked) {
            meatFilter.checked = false;
        }

        renderProducts();

    });


    meatFilter.addEventListener("change", () => {

        if (meatFilter.checked) {
            vegetarianFilter.checked = false;
        }

        renderProducts();

    });


    document.querySelectorAll(".rating-filter button").forEach(button => {

        button.addEventListener("click", () => {

            const rating = Number(button.dataset.rating);

            if (currentRating === rating) {
                currentRating = 0;
                button.classList.remove("active");
            } else {

                currentRating = rating;

                document
                    .querySelectorAll(".rating-filter button")
                    .forEach(item => item.classList.remove("active"));

                button.classList.add("active");
            }

            renderProducts();

        });

    });


    document.getElementById("clearFilters").addEventListener("click", resetEverything);


    document.getElementById("openSidebar").addEventListener("click", () => {

        sidebar.classList.add("active");
        overlay.classList.add("active");

    });


    document.getElementById("closeSidebar").addEventListener("click", closeSidebar);

    document.getElementById("cartButton").addEventListener("click", openCart);

    document.getElementById("closeCart").addEventListener("click", closeCart);

    overlay.addEventListener("click", () => {

        closeSidebar();
        closeCart();

    });


    document.getElementById("accountBtn").addEventListener("click", () => {

        openModal(loginModal);

    });


    document.querySelectorAll("[data-close]").forEach(button => {

        button.addEventListener("click", () => {

            const target = document.getElementById(button.dataset.close);

            closeModal(target);

        });

    });


    document.querySelectorAll(".size-btn").forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".size-btn")
                .forEach(item => item.classList.remove("active"));

            button.classList.add("active");

            updateQuickPrice();

        });

    });


    document.getElementById("toppingSelect").addEventListener("change", updateQuickPrice);


    document.getElementById("quickMinus").addEventListener("click", () => {

        if (quickQuantity > 1) {
            quickQuantity--;
            updateQuickQuantity();
        }

    });


    document.getElementById("quickPlus").addEventListener("click", () => {

        quickQuantity++;
        updateQuickQuantity();

    });


    document.getElementById("quickAddButton").addEventListener("click", () => {

        if (!quickProduct) {
            return;
        }

        const toppingPrice =
            Number(document.getElementById("toppingSelect").value);

        const sizeButton =
            document.querySelector(".size-btn.active");

        const size =
            sizeButton
                ? sizeButton.dataset.size
                : "M";

        const sizeMultiplier =
            size === "L"
                ? 1.12
                : size === "XL"
                    ? 1.25
                    : 1;

        const finalPrice =
            Math.round(
                (quickProduct.price * sizeMultiplier + toppingPrice)
                / 1000
            ) * 1000;

        addToCart(
            quickProduct.id,
            quickQuantity,
            size,
            toppingPrice,
            finalPrice
        );

        closeModal(quickModal);

    });


    document.getElementById("checkoutButton").addEventListener("click", openCheckout);


    document.getElementById("checkoutForm").addEventListener("submit", submitOrder);


    document.querySelectorAll(".payment-option input").forEach(input => {

        input.addEventListener("change", () => {

            document
                .querySelectorAll(".payment-option")
                .forEach(option => option.classList.remove("active"));

            input.closest(".payment-option").classList.add("active");

        });

    });


    document.querySelector(".login-submit").addEventListener("click", () => {

        closeModal(loginModal);

        showToast(
            "Đăng nhập demo",
            "Chức năng tài khoản đang ở chế độ demo."
        );

    });


    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            closeModal(quickModal);
            closeModal(checkoutModal);
            closeModal(loginModal);
            closeModal(successModal);

            closeCart();
            closeSidebar();

        }

    });

}


function renderProducts() {

    let filtered = [...products];

    const searchTerm =
        searchInput.value
            .trim()
            .toLowerCase();


    if (currentCategory !== "all") {

        filtered =
            filtered.filter(
                product => product.category === currentCategory
            );

    }


    if (searchTerm) {

        filtered =
            filtered.filter(product => {

                const text =
                    `${product.name}
                    ${product.description}
                    ${product.categoryName}`.toLowerCase();

                return text.includes(searchTerm);

            });

    }


    const min =
        Number(minPrice.value) || 0;

    const max =
        Number(maxPrice.value) || Infinity;


    filtered =
        filtered.filter(product => {

            return product.price >= min &&
                   product.price <= max;

        });


    if (currentRating > 0) {

        filtered =
            filtered.filter(
                product => product.rating >= currentRating
            );

    }


    if (vegetarianFilter.checked) {

        filtered =
            filtered.filter(product => product.vegetarian);

    }


    if (meatFilter.checked) {

        filtered =
            filtered.filter(product => !product.vegetarian);

    }


    switch (sortSelect.value) {

        case "priceAsc":

            filtered.sort(
                (a, b) => a.price - b.price
            );

            break;

        case "priceDesc":

            filtered.sort(
                (a, b) => b.price - a.price
            );

            break;

        case "rating":

            filtered.sort(
                (a, b) => b.rating - a.rating
            );

            break;

        case "newest":

            filtered.sort(
                (a, b) => b.newest - a.newest
            );

            break;

        default:

            filtered.sort(
                (a, b) => b.popular - a.popular
            );

    }


    productGrid.innerHTML = "";

    resultCount.textContent =
        `${filtered.length} món ăn`;


    updateSectionTitle();


    if (filtered.length === 0) {

        emptyState.style.display = "block";

        return;

    }


    emptyState.style.display = "none";


    filtered.forEach((product, index) => {

        const card =
            createProductCard(product, index);

        productGrid.appendChild(card);

    });

}


function createProductCard(product, index) {

    const article =
        document.createElement("article");

    article.className = "product-card";

    article.style.animationDelay =
        `${index * 0.035}s`;


    const badgeClass =
        product.vegetarian
            ? "product-badge vegetarian"
            : "product-badge";


    article.innerHTML = `

        <div class="product-image" data-product-id="${product.id}">

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            ${
                product.badge
                    ? `<span class="${badgeClass}">
                        ${product.badge}
                       </span>`
                    : ""
            }

            <button
                class="quick-view"
                data-product-id="${product.id}"
                aria-label="Xem nhanh"
            >
                👁
            </button>

        </div>

        <div class="product-body">

            <div class="product-category">
                ${product.categoryName}
            </div>

            <h3 class="product-name">
                ${product.name}
            </h3>

            <p class="product-description">
                ${product.description}
            </p>

            <div class="product-rating">

                <span>
                    ★★★★★
                </span>

                <strong>
                    ${product.rating}
                </strong>

                <small>
                    (${product.reviews})
                </small>

            </div>

            <div class="product-bottom">

                <div class="product-price">
                    ${formatPrice(product.price)}
                </div>

                <button
                    class="add-button"
                    data-add-id="${product.id}"
                    aria-label="Thêm vào giỏ"
                >
                    +
                </button>

            </div>

        </div>
    `;


    article
        .querySelector(".product-image")
        .addEventListener("click", () => {

            openQuickView(product.id);

        });


    article
        .querySelector(".quick-view")
        .addEventListener("click", event => {

            event.stopPropagation();

            openQuickView(product.id);

        });


    article
        .querySelector(".add-button")
        .addEventListener("click", event => {

            event.stopPropagation();

            addToCart(product.id);

        });


    return article;

}


function selectCategory(category) {

    currentCategory = category;


    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === category
            );

        });


    updateSectionTitle();

    renderProducts();

    closeSidebar();

}


function updateSectionTitle() {

    const names = {

        all: "Món ngon Bikini Bottom",

        patty: "Krabby Patties",

        side: "Món phụ",

        drink: "Đồ uống Bikini Bottom",

        dessert: "Tráng miệng",

        combo: "Combo tiết kiệm"

    };


    sectionTitle.textContent =
        names[currentCategory] || names.all;

}


function openQuickView(id) {

    const product =
        products.find(item => item.id === id);

    if (!product) {
        return;
    }


    quickProduct = product;
    quickQuantity = 1;


    document.getElementById("quickImage").src =
        product.image;

    document.getElementById("quickImage").alt =
        product.name;

    document.getElementById("quickBadge").textContent =
        product.badge || "KRUSTY FAVORITE";

    document.getElementById("quickCategory").textContent =
        product.categoryName.toUpperCase();

    document.getElementById("quickName").textContent =
        product.name;

    document.getElementById("quickRating").textContent =
        product.rating;

    document.getElementById("quickDescription").textContent =
        product.description;

    document.getElementById("quickQuantity").textContent =
        "1";


    document
        .querySelectorAll(".size-btn")
        .forEach(button => button.classList.remove("active"));

    document
        .querySelector('.size-btn[data-size="M"]')
        .classList.add("active");


    document.getElementById("toppingSelect").value = "0";


    updateQuickPrice();

    openModal(quickModal);

}


function updateQuickPrice() {

    if (!quickProduct) {
        return;
    }


    const sizeButton =
        document.querySelector(".size-btn.active");

    const size =
        sizeButton
            ? sizeButton.dataset.size
            : "M";


    const toppingPrice =
        Number(document.getElementById("toppingSelect").value);


    const sizeMultiplier =
        size === "L"
            ? 1.12
            : size === "XL"
                ? 1.25
                : 1;


    const finalPrice =
        Math.round(
            (
                quickProduct.price *
                sizeMultiplier +
                toppingPrice
            ) / 1000
        ) * 1000;


    document.getElementById("quickPrice").textContent =
        formatPrice(finalPrice);

}


function updateQuickQuantity() {

    document.getElementById("quickQuantity").textContent =
        quickQuantity;

}


function quickHeroProduct() {

    openQuickView(1);

}


function addToCart(
    productId,
    quantity = 1,
    size = "M",
    toppingPrice = 0,
    customPrice = null
) {

    const product =
        products.find(item => item.id === productId);

    if (!product) {
        return;
    }


    const price =
        customPrice || product.price;


    const existing =
        cart.find(item =>
            item.productId === productId &&
            item.size === size &&
            item.toppingPrice === toppingPrice
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            cartId:
                `${productId}-${size}-${toppingPrice}-${Date.now()}`,

            productId,

            name: product.name,

            image: product.image,

            price,

            basePrice: product.price,

            quantity,

            size,

            toppingPrice

        });

    }


    saveCart();

    renderCart();


    showToast(
        "Đã thêm vào giỏ",
        `${product.name} × ${quantity}`
    );

}


function renderCart() {

    const totalItems =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );


    cartBadge.textContent =
        totalItems;


    if (cart.length === 0) {

        cartBody.innerHTML = `

            <div class="cart-empty">

                <div>
                    🛒
                </div>

                <h3>
                    Giỏ hàng đang trống
                </h3>

                <p>
                    Hãy chọn món ngon từ Bikini Bottom!
                </p>

            </div>

        `;

    } else {

        cartBody.innerHTML = "";

        cart.forEach(item => {

            const element =
                document.createElement("div");

            element.className = "cart-item";

            element.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                </div>

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <p>
                        Size ${item.size}
                        ${
                            item.toppingPrice > 0
                                ? " • Có topping"
                                : ""
                        }
                    </p>

                    <div class="cart-item-price">
                        ${formatPrice(item.price * item.quantity)}
                    </div>

                    <div class="cart-item-actions">

                        <button
                            data-cart-minus="${item.cartId}"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            data-cart-plus="${item.cartId}"
                        >
                            +
                        </button>

                        <button
                            class="remove-item"
                            data-cart-remove="${item.cartId}"
                        >
                            🗑
                        </button>

                    </div>

                </div>
            `;


            cartBody.appendChild(element);

        });


        cartBody
            .querySelectorAll("[data-cart-minus]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    changeCartQuantity(
                        button.dataset.cartMinus,
                        -1
                    );

                });

            });


        cartBody
            .querySelectorAll("[data-cart-plus]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    changeCartQuantity(
                        button.dataset.cartPlus,
                        1
                    );

                });

            });


        cartBody
            .querySelectorAll("[data-cart-remove]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    removeCartItem(
                        button.dataset.cartRemove
                    );

                });

            });

    }


    updateCartTotals();

}


function changeCartQuantity(cartId, amount) {

    const item =
        cart.find(item => item.cartId === cartId);

    if (!item) {
        return;
    }


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.cartId !== cartId
            );

    }


    saveCart();

    renderCart();

}


function removeCartItem(cartId) {

    cart =
        cart.filter(
            item => item.cartId !== cartId
        );


    saveCart();

    renderCart();

    showToast(
        "Đã xóa món",
        "Món ăn đã được xóa khỏi giỏ hàng."
    );

}


function updateCartTotals() {

    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    const delivery =
        subtotal === 0
            ? 0
            : subtotal >= 300000
                ? 0
                : 25000;


    const total =
        subtotal + delivery;


    subtotalElement.textContent =
        formatPrice(subtotal);


    deliveryFeeElement.textContent =
        delivery === 0
            ? "Miễn phí"
            : formatPrice(delivery);


    cartTotalElement.textContent =
        formatPrice(total);


    const checkoutButton =
        document.getElementById("checkoutButton");


    checkoutButton.disabled =
        cart.length === 0;

}


function openCart() {

    cartDrawer.classList.add("active");
    overlay.classList.add("active");

}


function closeCart() {

    cartDrawer.classList.remove("active");

    if (!sidebar.classList.contains("active")) {
        overlay.classList.remove("active");
    }

}


function closeSidebar() {

    sidebar.classList.remove("active");

    if (!cartDrawer.classList.contains("active")) {
        overlay.classList.remove("active");
    }

}


function openCheckout() {

    if (cart.length === 0) {

        showToast(
            "Giỏ hàng trống",
            "Hãy thêm món trước khi thanh toán."
        );

        return;

    }


    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        );


    const delivery =
        subtotal >= 300000
            ? 0
            : 25000;


    document.getElementById("checkoutTotal").textContent =
        formatPrice(subtotal + delivery);


    closeCart();

    openModal(checkoutModal);

}


function submitOrder(event) {

    event.preventDefault();


    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    const address =
        document.getElementById("customerAddress").value.trim();


    if (!name || !phone || !address) {

        showToast(
            "Thiếu thông tin",
            "Vui lòng điền đầy đủ thông tin giao hàng."
        );

        return;

    }


    const orderNumber =
        `KK-${Math.floor(
            100000 + Math.random() * 900000
        )}`;


    document.getElementById("orderNumber").textContent =
        orderNumber;


    closeModal(checkoutModal);

    cart = [];

    saveCart();

    renderCart();


    document.getElementById("checkoutForm").reset();


    document
        .querySelectorAll(".payment-option")
        .forEach(option => option.classList.remove("active"));

    document
        .querySelector('.payment-option input[value="cod"]')
        .closest(".payment-option")
        .classList.add("active");


    openModal(successModal);

}


function openModal(modal) {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.remove("active");

    if (
        !quickModal.classList.contains("active") &&
        !checkoutModal.classList.contains("active") &&
        !successModal.classList.contains("active") &&
        !loginModal.classList.contains("active")
    ) {

        document.body.style.overflow = "";

    }

}


function resetEverything() {

    currentCategory = "all";
    currentRating = 0;

    searchInput.value = "";

    clearSearch.style.display = "none";

    minPrice.value = "";
    maxPrice.value = "";

    vegetarianFilter.checked = false;
    meatFilter.checked = false;


    document
        .querySelectorAll(".rating-filter button")
        .forEach(button =>
            button.classList.remove("active")
        );


    sortSelect.value = "popular";


    document
        .querySelectorAll(".category-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.category === "all"
            );

        });


    renderProducts();

}


function showToast(title, message) {

    const toast =
        document.getElementById("toast");

    document.getElementById("toastTitle").textContent =
        title;

    document.getElementById("toastMessage").textContent =
        message;


    toast.classList.add("show");


    clearTimeout(window.toastTimer);


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3000);

}


function formatPrice(value) {

    return new Intl.NumberFormat(
        "vi-VN",
        {
            style: "currency",
            currency: "VND",
            maximumFractionDigits: 0
        }
    ).format(value);

}


function saveCart() {

    try {

        localStorage.setItem(
            "krustyKrabCart",
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Không thể lưu giỏ hàng:",
            error
        );

    }

}


function loadCart() {

    try {

        const saved =
            localStorage.getItem("krustyKrabCart");

        if (saved) {

            cart =
                JSON.parse(saved);

        }

    } catch (error) {

        cart = [];

    }

}


loadCart();