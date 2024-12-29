
// 商品數據
const products = {
    food1: {
        name: "飛機餅乾",
        price: "NT$50",
        originalPrice: "NT$100",
        description: "1",
        image: "image\\food\\AirplaneBiscuits.png"
    },
    food2: {
        name: "口紅糖",
        price: "NT$35",
        originalPrice: "NT$70",
        description: "搭配優雅香氛",
        image: "image\\food\\lipstick.png"
    },
    
    food3: {
        name: "巧克力風味醬",
        price: "NT$20",
        originalPrice: "NT$40",
        description: "搭配優雅香氛",
        image: "image\\food\\chocolate.png"
    },
    food4: {
        name: "陳年仙楂丸",
        price: "NT$10",
        originalPrice: "NT$20",
        description: "搭配優雅香氛",
        image: "image\\food\\HawthornGrain.png"
    },
    food5: {
        name: "豬耳朵",
        price: "NT$55",
        originalPrice: "NT$110",
        description: "搭配優雅香氛",
        image: "image\\food\\SpiralCookies.png"
    },
    food6: {
        name: "可樂橡皮糖",
        price: "NT$10",
        originalPrice: "NT$20",
        description: "搭配優雅香氛",
        image: "image\\food\\GummyCandy.png"
    },
    drinks1: {
        name: "蜜豆奶",
        price: "NT$13",
        originalPrice: "NT$26",
        description: "搭配優雅香氛",
        image: "image\\drinks\\soymilk.png"
    },
    drinks2: {
        name: "冬瓜茶",
        price: "NT$25",
        originalPrice: "NT$50",
        description: "搭配優雅香氛",
        image: "image\\drinks\\WhiteGourdTea.png"
    },
    drinks3: {
        name: "QOO果凍飲料",
        price: "NT$30",
        originalPrice: "NT$60",
        description: "搭配優雅香氛",
        image: "image\\drinks\\QOO.png"
    },
    drinks4: {
        name: "彈珠汽水",
        price: "NT$35",
        originalPrice: "NT$70",
        description: "搭配優雅香氛",
        image: "image\\drinks\\MarbleSoda.PNG"
    },
    drinks5: {
        name: "津津蘆筍汁",
        price: "NT$30",
        originalPrice: "NT$60",
        description: "搭配優雅香氛",
        image: "image\\drinks\\AsparagusJuice.png"
    },
    drinks6: {
        name: "冰淇淋汽水",
        price: "NT$39",
        originalPrice: "NT$78",
        description: "搭配優雅香氛",
        image: "image\\drinks\\IceCreamSoda.png"
    },
    toys1: {
        name: "太空氣球",
        price: "NT$40",
        originalPrice: "NT$80",
        description: "搭配優雅香氛",
        image: "image\\toys\\SpaceBalloon.PNG"
    },
    toys2: {
        name: "竹蜻蜓",
        price: "NT$5",
        originalPrice: "NT$10",
        description: "搭配優雅香氛",
        image: "image\\toys\\hopter.PNG"
    },
    toys3: {
        name: "釣魚遊戲",
        price: "NT$80",
        originalPrice: "NT$160",
        description: "搭配優雅香氛",
        image: "image\\toys\\FishingGame.PNG"
    },
    toys4: {
        name: "紅包抽抽樂",
        price: "NT$60",
        originalPrice: "NT$120",
        description: "搭配優雅香氛",
        image: "image\\toys\\draw.PNG"
    },
    toys5: {
        name: "劍玉",
        price: "NT$99",
        originalPrice: "NT$198",
        description: "搭配優雅香氛",
        image: "image\\toys\\kendama.PNG"
    },
    toys6: {
        name: "戳戳樂",
        price: "NT$120",
        originalPrice: "NT$240",
        description: "搭配優雅香氛",
        image: "image\\toys\\PokingLottery.PNG"
    },
    supplies1: {
        name: "一條根",
        price: "NT$65",
        originalPrice: "NT$130",
        description: "搭配優雅香氛",
        image: "image\\supplies\\RootOfMoghania.PNG"
    },
    supplies2: {
        name: "不求人",
        price: "NT$30",
        originalPrice: "NT$60",
        description: "搭配優雅香氛",
        image: "image\\supplies\\scratch.PNG"
    },
    supplies3: {
        name: "刮痧板",
        price: "NT$37",
        originalPrice: "NT$74",
        description: "搭配優雅香氛",
        image: "image\\supplies\\SxrapingBoard.PNG"
    },
    supplies4: {
        name: "花露水",
        price: "NT$55",
        originalPrice: "NT$110",
        description: "搭配優雅香氛",
        image: "image\\supplies\\FloridaWater.PNG"
    },
    supplies5: {
        name: "腳底按摩器",
        price: "NT$150",
        originalPrice: "NT$300",
        description: "搭配優雅香氛",
        image: "image\\supplies\\FootMassager.PNG"
    },
    supplies6: {
        name: "雞毛撢子",
        price: "NT$89",
        originalPrice: "NT$178",
        description: "搭配優雅香氛",
        image: "image\\supplies\\FeatherDust.PNG"
    },

    
};

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.classList.toggle("show"); // 切換顯示或隱藏
    }
    
    // 點擊其他地方時關閉下拉選單
    window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }

// 獲取 URL 中的商品 ID
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

// 顯示對應商品的詳細信息
if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById('detailImage').src = product.image;
    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailPrice').textContent = product.price;
    document.querySelector('.original-price').textContent = product.originalPrice;
    document.getElementById('detailVolume').textContent = product.volume;
    document.getElementById('detailDescription').textContent=product.description;
} else {
    document.querySelector('.product-detail').innerHTML = '<p>商品資訊不存在</p>';
}


// 初始化導覽列愛心數量
function updateWishlistCount() {
    let heartCount = parseInt(localStorage.getItem('heartCount') || 0);  // 读取现有的收藏数量，若没有则默认为 0
    document.getElementById('wishlist-count').textContent = heartCount;
}

// 當 DOM 加載完成後執行
document.addEventListener("DOMContentLoaded", () => {
    // 更新導覽列的愛心數量
    updateWishlistCount();  // 读取并更新页面中的收藏数量
    
    const wishlistButton = document.getElementById('product-wishlist-btn');
    const heartIcon = document.getElementById('product-heart-icon');
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    // 初始化收藏狀態
    let isFavorited = localStorage.getItem(`isFavorited_${productId}`) === 'true';
    heartIcon.innerHTML = isFavorited ? '&#10084;' : '&#9825;';
    heartIcon.style.color = isFavorited ? 'red' : '#ccc';

    // 點擊收藏按鈕
    wishlistButton.addEventListener('click', () => {
        isFavorited = !isFavorited;
        heartIcon.innerHTML = isFavorited ? '&#10084;' : '&#9825;';
        heartIcon.style.color = isFavorited ? 'red' : '#ccc';

        // 更新 localStorage
        localStorage.setItem(`isFavorited_${productId}`, isFavorited);

        // 更新導覽列的愛心數量
        let heartCount = parseInt(localStorage.getItem('heartCount') || 0);

        // 判斷此商品是否在收藏中，並更新數量
        if (isFavorited) {
            heartCount++;
        } else {
            heartCount = heartCount > 0 ? heartCount - 1 : 0;
        }

        localStorage.setItem('heartCount', heartCount);
        updateWishlistCount();  // 更新導覽列顯示

        if (isFavorited) {
            // 添加到收藏清單
            wishlist.push({
                id: parseInt(productId),
                name: products[productId].name,
                price: products[productId].price,
                image: products[productId].image,
            });
        } else {
            // 從收藏清單移除
            wishlist = wishlist.filter(item => item.id !== parseInt(productId));
        }

        // 更新 localStorage
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    });
});




// 當 DOM 加載完成後執行
document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart");
    const cartCount = document.getElementById("cart-count");
    const quantitySelect = document.getElementById("quantity");

    const customAlert = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    const closeAlert = document.getElementById("close-alert");
    const overlay = document.getElementById("overlay");
    const shareIcon = document.getElementById("share-icon");
    const shareOptions = document.getElementById("share-options");

    // 隱藏分享選項
    shareOptions.style.display = "none";
    // 初始化購物車數量
    const updateCartCount = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalQuantity;
    };

    // 更新購物車數量
    updateCartCount();

    // 點擊加入購物車
    addToCartButton.addEventListener("click", () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // 讀取選定數量
        const selectedQuantity = parseInt(quantitySelect.value, 10);

        // 檢查購物車中是否已存在該商品
        const existingItemIndex = cartItems.findIndex((item) => item.id === parseInt(productId));

        if (existingItemIndex !== -1) {
            // 商品已存在，更新數量
            cartItems[existingItemIndex].quantity += selectedQuantity;
        } else {
            // 商品不存在，新增商品
            const newItem = {
                id: parseInt(productId), // 使用商品 ID
                name: products[productId].name,
                price: parseInt(products[productId].price.replace("NT$", ""), 10),
                quantity: selectedQuantity,
                image: products[productId].image // 保存圖片路徑
            };
            cartItems.push(newItem);
        }

        // 儲存到 LocalStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // 更新購物車數量
        updateCartCount();

        // 顯示自定義模態窗口
        alertMessage.textContent = `商品已加入購物車！數量：${selectedQuantity}`;
        customAlert.style.display = "block";
        overlay.style.display = "block";
    });

    // 關閉模態窗口
    closeAlert.addEventListener("click", () => {
        customAlert.style.display = "none";
        overlay.style.display = "none";
    });

    // 點擊分享器圖標顯示/隱藏選項
    shareIcon.addEventListener("click", () => {
        if (shareOptions.style.display === "none" || !shareOptions.style.display) {
            shareOptions.style.display = "block";
        } else {
            shareOptions.style.display = "none";
        }
    });

    // 點擊其他區域時隱藏分享選項
    document.addEventListener("click", (event) => {
        if (!shareIcon.contains(event.target) && !shareOptions.contains(event.target)) {
            shareOptions.style.display = "none";
        }
    });



});
