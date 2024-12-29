function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('show');
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

/*shoppingCart*/
document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-container");
    const customConfirm = document.getElementById("custom-confirm");
    const confirmYes = document.getElementById("confirm-yes");
    const confirmNo = document.getElementById("confirm-no");

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let itemToDelete = null;

    // 渲染購物車商品
    const renderCart = () => {
        if (cartItems.length === 0) {
            cartContainer.innerHTML = `<p>您的購物車是空的。</p>`;
            return;
        }

        cartContainer.innerHTML = cartItems
            .map((item) => {
                const itemTotal = item.price * item.quantity;
                return `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="item-details">
                            <h3>${item.name}</h3>
                            <p>單價：NT$${item.price}</p>
                        </div>
                        <div class="item-quantity">
                            <input type="number" value="${item.quantity}" min="1" disabled>
                        </div>
                        <div class="item-price">NT$${itemTotal}</div>
                        <button class="remove-item" data-id="${item.id}">刪除</button>
                    </div>
                `;
            })
            .join("");
    };

    // 刪除按鈕點擊事件
    cartContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-item")) {
            // 設置要刪除的商品ID
            itemToDelete = parseInt(event.target.dataset.id);
            customConfirm.style.display = "flex"; // 顯示確認刪除彈窗
        }
    });

    // 確認刪除商品
    confirmYes.addEventListener("click", () => {
        if (itemToDelete !== null) {
            // 根據 itemToDelete 刪除對應商品
            cartItems = cartItems.filter((item) => item.id !== itemToDelete);
            // 更新 LocalStorage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            customConfirm.style.display = "none"; // 隱藏確認彈窗
            renderCart(); // 重新渲染購物車
        }
    });

    // 取消刪除
    confirmNo.addEventListener("click", () => {
        customConfirm.style.display = "none"; // 隱藏確認彈窗
    });

    // 初始渲染購物車
    renderCart();
});

