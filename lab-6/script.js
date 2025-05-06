document.addEventListener("DOMContentLoaded", () => {
    let products = [];
    let productId = 0;
    let currentEditId = null;
    const productList = document.getElementById("product-list");
    const emptyMsg = document.getElementById("empty-msg");
    const modal = document.getElementById("modal");
    const toastContainer = document.getElementById("toast-container");
    const totalPriceEl = document.getElementById("total-price");
    const filters = document.getElementById("filters");
    const sorters = document.getElementById("sorters");
    const categories = ["Електроніка", "Одяг", "Продукти"];
  
    function renderProducts(items = products) {
      productList.innerHTML = "";
      if (items.length === 0) {
        emptyMsg.style.display = "block";
      } else {
        emptyMsg.style.display = "none";
      }
  
      items.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card fade-in";
        card.innerHTML = `
          <div><strong>ID:</strong> ${product.id}</div>
          <div><strong>Назва:</strong> ${product.name}</div>
          <div><strong>Ціна:</strong> ${product.price} ₴</div>
          <div><strong>Категорія:</strong> ${product.category}</div>
          <img src="${product.image}" alt="${product.name}" />
          <button onclick="deleteProduct(${product.id})">Видалити</button>
          <button onclick="editProduct(${product.id})">Редагувати</button>
        `;
        productList.appendChild(card);
      });
      updateTotalPrice();
    }
  
    function updateTotalPrice() {
      const total = products.reduce((sum, p) => sum + +p.price, 0);
      totalPriceEl.textContent = `Загальна вартість: ${total} ₴`;
    }
  
    function showModal(product = {}) {
      modal.classList.remove("hidden");
      modal.innerHTML = `
        <div class="modal-content">
          <form id="product-form">
            <input type="text" name="name" placeholder="Назва товару" value="${product.name || ""}" required />
            <input type="number" name="price" placeholder="Ціна" value="${product.price || ""}" required min="1" />
            <select name="category" required>
              ${categories.map(c => `<option value="${c}" ${product.category === c ? "selected" : ""}>${c}</option>`).join("")}
            </select>
            <input type="url" name="image" placeholder="URL зображення" value="${product.image || ""}" required />
            <button type="submit">${product.id != null ? "Оновити" : "Додати"}</button>
            <button type="button" onclick="hideModal()">Скасувати</button>
          </form>
        </div>
      `;
  
      document.getElementById("product-form").onsubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newProduct = {
          id: product.id != null ? product.id : ++productId,
          name: form.name.value.trim(),
          price: +form.price.value,
          category: form.category.value,
          image: form.image.value,
          created: product.created || new Date(),
          updated: new Date(),
        };
  
        if (product.id != null) {
          products = products.map(p => p.id === product.id ? newProduct : p);
          showToast(`Оновлено товар ID ${newProduct.id}: ${newProduct.name}`);
        } else {
          products.push(newProduct);
          showToast(`Додано товар: ${newProduct.name}`);
        }
  
        renderProducts();
        hideModal();
      };
    }
  
    function hideModal() {
      modal.classList.add("hidden");
      modal.innerHTML = "";
    }
  
    window.deleteProduct = function(id) {
      products = products.filter(p => p.id !== id);
      renderProducts();
      showToast("Товар видалено");
    };
  
    window.editProduct = function(id) {
      const product = products.find(p => p.id === id);
      showModal(product);
    };
  
    function showToast(message) {
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      toastContainer.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    }
  
    document.getElementById("add-product-btn").onclick = () => showModal();
  
    // Фільтрація
    function renderFilters() {
      filters.innerHTML = categories.map(c => `<button onclick="filterByCategory('${c}')">${c}</button>`).join("") +
        '<button onclick="renderProducts()">Скинути фільтр</button>';
    }
  
    window.filterByCategory = function(cat) {
      renderProducts(products.filter(p => p.category === cat));
    };
  
    // Сортування
    sorters.querySelectorAll("button[data-sort]").forEach(btn => {
      btn.onclick = () => {
        const type = btn.dataset.sort;
        if (type === "price") products.sort((a, b) => a.price - b.price);
        if (type === "created") products.sort((a, b) => new Date(a.created) - new Date(b.created));
        if (type === "updated") products.sort((a, b) => new Date(a.updated) - new Date(b.updated));
        renderProducts();
      };
    });
  
    document.getElementById("reset-sorting").onclick = () => renderProducts();
  
    renderFilters();
    renderProducts();
  });
  