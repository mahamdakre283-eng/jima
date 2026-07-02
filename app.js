// State variables
let currentLang = safeStorage.getItem("saman_lang") || "ku"; // Default is Kurdish (Badini)
let activeCategoryId = null;
let cart = [];
try {
  const storedCart = safeStorage.getItem("saman_cart");
  cart = storedCart ? JSON.parse(storedCart) : [];
} catch (e) {
  console.warn("Saman App: Failed to parse cart, resetting.", e);
  cart = [];
}
let sliderInterval = null;
let currentSlideIndex = 0;

// Translations
const T = {
  ku: {
    brandName: "کافتێريا سامان",
    basketTitle: "سەبەتکا من",
    emptyBasket: "سەبەتکا تە یا بەتالە",
    total: "کۆم:",
    confirmOrder: "تەئکیدکرنا داواکاریێ",
    clearBasket: "بەتاڵکرنا سەبەتێ",
    addedToBasket: "بابەت بۆ سەبەتێ هاتە زێدەکرن",
    clearedBasket: "سەبەتە هاتە بەتاڵکرن",
    orderConfirmed: "داواکاریا تە ب سەرکەفتن هاتە ناردن!",
    currency: "د.ع",
    allCategories: "هەمی بابەت",
    categoriesHeader: "پشکێن خوارن و ڤەخوارنێ",
    qtyUpdated: "ژمارە هاتە گۆڕین",
    searchPlaceholder: "گەڕان بۆ خواردن...",
    noResults: "هیچ ئەنجامێک نەهاتە دیتن",
    receiptTitle: "پەسلا داواکاریێ",
    receiptTotal: "کۆمبەر:",
    sendWhatsApp: "ناردن ب ڕێکا وەتس ئەپی",
    callNumber: "تەلەفۆن بۆ 07508244332",
    done: "تەمام"
  },
  ar: {
    brandName: "كافتيريا سامان",
    basketTitle: "سلتي",
    emptyBasket: "سلتك فارغة",
    total: "المجموع:",
    confirmOrder: "تأكيد الطلب",
    clearBasket: "تفريغ السلة",
    addedToBasket: "تم إضافة العنصر إلى السلة",
    clearedBasket: "تم تفريغ السلة بنجاح",
    orderConfirmed: "تم تأكيد طلبك بنجاح!",
    currency: "د.ع",
    allCategories: "جميع الأطباق",
    categoriesHeader: "الأقسام",
    qtyUpdated: "تم تحديث الكمية",
    searchPlaceholder: "البحث عن وجبات...",
    noResults: "لم يتم العثور على نتائج",
    receiptTitle: "فاتورة الطلب",
    receiptTotal: "المجموع الكلي:",
    sendWhatsApp: "إرسال عبر واتساب",
    callNumber: "اتصال بالرقم 07508244332",
    done: "تم"
  },
  en: {
    brandName: "Saman Cafeteria",
    basketTitle: "My Basket",
    emptyBasket: "Your basket is empty",
    total: "Total:",
    confirmOrder: "Confirm Order",
    clearBasket: "Clear Basket",
    addedToBasket: "Item added to basket",
    clearedBasket: "Basket cleared successfully",
    orderConfirmed: "Your order has been confirmed!",
    currency: "IQD",
    allCategories: "All Items",
    categoriesHeader: "Categories",
    qtyUpdated: "Quantity updated",
    searchPlaceholder: "Search for meals...",
    noResults: "No results found",
    receiptTitle: "ORDER RECEIPT",
    receiptTotal: "Grand Total:",
    sendWhatsApp: "Send on WhatsApp",
    callNumber: "Call 07508244332",
    done: "Done"
  }
};

// Document elements (Lazy evaluated to prevent null references during initialization)
const el = {
  get body() { return document.body; },
  get brandTitle() { return document.getElementById("nav-brand-title"); },
  get sliderContainer() { return document.getElementById("hero-slider"); },
  get logoImg() { return document.getElementById("main-logo"); },
  get categoriesList() { return document.getElementById("categories-list"); },
  get currentCategoryTitle() { return document.getElementById("current-category-title"); },
  get menuItemsGrid() { return document.getElementById("menu-items-grid"); },
  get cartCount() { return document.getElementById("cart-count"); },
  get cartDrawerPanel() { return document.getElementById("cart-drawer-panel"); },
  get cartOverlay() { return document.getElementById("cart-overlay"); },
  get cartDrawerTitle() { return document.getElementById("cart-drawer-title"); },
  get cartItemsContainer() { return document.getElementById("cart-items-container"); },
  get cartTotalLabel() { return document.getElementById("cart-total-label"); },
  get cartTotalValue() { return document.getElementById("cart-total-value"); },
  get checkoutActionBtn() { return document.getElementById("checkout-action-btn"); },
  get clearCartBtn() { return document.getElementById("clear-cart-btn"); },
  get toastBox() { return document.getElementById("toast-box"); },
  get locationText() { return document.getElementById("location-text"); },
  get locationLink() { return document.getElementById("location-link"); },
  get heroBrandName() { return document.getElementById("hero-brand-name"); },
  get searchInput() { return document.getElementById("search-input"); },
  get searchClearBtn() { return document.getElementById("search-clear-btn"); }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Register Firebase real-time data change hook
  DB.onDataUpdate = () => {
    initLanguage();
    initSlider();
  };

  initLanguage();
  initSlider();
  updateCartUI();
  initSearch();
});

// Toast notification helper
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
  `;
  el.toastBox.appendChild(toast);
  
  // Auto remove after 3s
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 1. Language Setup
function initLanguage() {
  // Fallback to "ku" if stored language code is invalid or missing in T
  if (!T[currentLang]) {
    currentLang = "ku";
  }
  setLanguage(currentLang);
}

function setLanguage(lang) {
  if (!T[lang]) lang = "ku";
  currentLang = lang;
  safeStorage.setItem("saman_lang", lang);

  // Toggle active language button
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtn = document.getElementById(`btn-lang-${lang}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Adjust direction and language class on body
  el.body.className = `lang-${lang}`;
  
  // Update static layout texts
  const settings = DB.getSettings();
  const brandName = settings.restaurantName[lang] || settings.restaurantName["en"] || "Saman";
  if (el.brandTitle) el.brandTitle.textContent = brandName;
  if (el.heroBrandName) el.heroBrandName.textContent = brandName;
  el.cartDrawerTitle.textContent = T[lang].basketTitle;
  el.cartTotalLabel.textContent = T[lang].total;
  el.checkoutActionBtn.textContent = T[lang].confirmOrder;
  el.clearCartBtn.textContent = T[lang].clearBasket;
  
  const floatingCartText = document.getElementById("cart-floating-text");
  if (floatingCartText) {
    floatingCartText.textContent = T[lang].basketTitle;
  }
  
  // Re-render components for translation changes
  renderCategories();
  renderItems();
  updateCartUI();
  updateLocation();
  updateSearchPlaceholder();
}

// 2. Image Slider Logic (changes every 1.5s)
function initSlider() {
  if (sliderInterval) clearInterval(sliderInterval);
  
  const settings = DB.getSettings();
  const images = settings.topImages || [];
  
  // Set logo
  el.logoImg.src = settings.logo || "assets/logo.png";
  
  // Empty old slides
  // Keep the logo wrapper but remove previous slides
  const logoWrapper = document.getElementById("logo-wrapper");
  el.sliderContainer.innerHTML = "";
  el.sliderContainer.appendChild(logoWrapper);
  
  if (images.length === 0) {
    // Fail-safe fallbacks
    images.push("assets/bg1.png", "assets/bg2.png", "assets/bg3.png");
  }

  // Create slide elements
  images.forEach((imgSrc, idx) => {
    const slide = document.createElement("div");
    slide.className = `slide ${idx === 0 ? "active" : ""}`;
    slide.style.backgroundImage = `url('${imgSrc}')`;
    slide.id = `slide-${idx}`;
    el.sliderContainer.insertBefore(slide, logoWrapper);
  });

  currentSlideIndex = 0;
  
  // Set interval of 1.5s (1500 milliseconds)
  sliderInterval = setInterval(() => {
    const slides = el.sliderContainer.querySelectorAll(".slide");
    if (slides.length <= 1) return;
    
    slides[currentSlideIndex].classList.remove("active");
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slides[currentSlideIndex].classList.add("active");
  }, 1500);
}

// 2b. Location Display
function updateLocation() {
  const settings = DB.getSettings();
  const location = settings.location || {};
  const locationText = location[currentLang] || location["en"] || "";
  const mapUrl = settings.locationMapUrl || "";
  
  if (el.locationText) {
    el.locationText.textContent = locationText || "Location not set";
  }
  
  if (el.locationLink) {
    if (mapUrl) {
      el.locationLink.href = mapUrl;
      el.locationLink.style.cursor = "pointer";
    } else {
      el.locationLink.href = "#";
      el.locationLink.onclick = function(e) { e.preventDefault(); };
      el.locationLink.style.cursor = "default";
    }
  }
}

// 3. Render Circular Categories
function renderCategories() {
  const categories = DB.getCategories();
  el.categoriesList.innerHTML = "";
  
  // Add "All" Category — Premium icon design (no photo)
  const allCard = document.createElement("button");
  allCard.className = `category-card all-items-card ${activeCategoryId === null ? "active" : ""}`;
  allCard.onclick = () => selectCategory(null);
  allCard.innerHTML = `
    <div class="category-circle all-items-circle">
      <div class="all-items-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor"/>
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" fill="currentColor"/>
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor"/>
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor"/>
        </svg>
      </div>
    </div>
    <span class="category-name">${T[currentLang].allCategories}</span>
  `;
  el.categoriesList.appendChild(allCard);

  categories.forEach(cat => {
    const catCard = document.createElement("button");
    catCard.className = `category-card ${activeCategoryId === cat.id ? "active" : ""}`;
    catCard.onclick = () => selectCategory(cat.id);
    
    const catName = cat.name[currentLang] || cat.name["en"] || "";
    const catImg = cat.image || "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80";

    catCard.innerHTML = `
      <div class="category-circle">
        <img src="${catImg}" alt="${catName}">
      </div>
      <span class="category-name">${catName}</span>
    `;
    el.categoriesList.appendChild(catCard);
  });
}

function selectCategory(catId) {
  activeCategoryId = catId;
  
  // Highlight chosen category
  const cards = el.categoriesList.querySelectorAll(".category-card");
  const categories = DB.getCategories();
  
  // Default title
  if (catId === null) {
    el.currentCategoryTitle.textContent = T[currentLang].allCategories;
  } else {
    const foundCat = categories.find(c => c.id === catId);
    el.currentCategoryTitle.textContent = foundCat ? (foundCat.name[currentLang] || foundCat.name["en"]) : "";
  }
  
  renderCategories();
  renderItems();
}

// 4. Render Menu Items (2 columns on mobile)
function renderItems() {
  const items = DB.getItems();
  el.menuItemsGrid.innerHTML = "";
  
  // Filter items by category if one is active
  let filteredItems = activeCategoryId 
    ? items.filter(item => item.categoryId === activeCategoryId)
    : items;

  // Filter by search query
  const searchQuery = (el.searchInput ? el.searchInput.value : "").trim().toLowerCase();
  if (searchQuery) {
    filteredItems = filteredItems.filter(item => {
      const nameKu = (item.name.ku || "").toLowerCase();
      const nameAr = (item.name.ar || "").toLowerCase();
      const nameEn = (item.name.en || "").toLowerCase();
      return nameKu.includes(searchQuery) || nameAr.includes(searchQuery) || nameEn.includes(searchQuery);
    });
  }

  if (filteredItems.length === 0) {
    el.menuItemsGrid.innerHTML = `
      <div style="grid-column: span 2; text-align: center; padding: 40px 20px; color: var(--text-secondary);">
        ${T[currentLang].noResults}
      </div>
    `;
    return;
  }

  filteredItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "menu-item-card";
    
    // Add to cart directly when clicked on the whole card
    card.onclick = (e) => {
      // Prevent double trigger if clicked specifically on the add button
      if (e.target.closest(".add-btn")) return;
      addToCart(item.id);
    };

    const itemName = item.name[currentLang] || item.name["en"] || "";
    const itemPrice = formatCurrency(item.price);
    const itemImg = item.image || "https://images.unsplash.com/photo-1510707577719-fa7c18305222?w=400&q=80";

    card.innerHTML = `
      <div class="item-img-container">
        <img class="item-img" src="${itemImg}" alt="${itemName}" loading="lazy">
      </div>
      <div class="item-info">
        <h3 class="item-name">${itemName}</h3>
        <div class="item-footer">
          <span class="item-price">${itemPrice}</span>
          <button class="add-btn" onclick="addToCart('${item.id}'); event.stopPropagation();" aria-label="Add to Basket">
            <svg viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    el.menuItemsGrid.appendChild(card);
  });
}

// Format prices nicely
function formatCurrency(amount) {
  const formatted = new Intl.NumberFormat().format(amount);
  return `${formatted} ${T[currentLang].currency}`;
}

// 5. Shopping Cart Operations
function toggleCartDrawer(open) {
  if (open) {
    el.cartDrawerPanel.classList.add("active");
    el.cartOverlay.classList.add("active");
  } else {
    el.cartDrawerPanel.classList.remove("active");
    el.cartOverlay.classList.remove("active");
  }
}

function addToCart(itemId) {
  const items = DB.getItems();
  const targetItem = items.find(i => i.id === itemId);
  if (!targetItem) return;

  const existingCartIndex = cart.findIndex(c => c.id === itemId);
  if (existingCartIndex > -1) {
    cart[existingCartIndex].qty += 1;
  } else {
    cart.push({
      id: targetItem.id,
      name: targetItem.name,
      price: targetItem.price,
      image: targetItem.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  
  // Show toast notification
  const itemName = targetItem.name[currentLang] || targetItem.name["en"];
  showToast(`${itemName} - ${T[currentLang].addedToBasket}`);
}

function updateQty(itemId, change) {
  const index = cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(itemId) {
  cart = cart.filter(c => c.id !== itemId);
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  showToast(T[currentLang].clearedBasket, "success");
}

function saveCart() {
  safeStorage.setItem("saman_cart", JSON.stringify(cart));
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function getCartTotal() {
  return cart.reduce((total, item) => total + (item.price * item.qty), 0);
}

function updateCartUI() {
  const count = getCartCount();
  el.cartCount.textContent = count;
  el.cartCount.style.display = "flex";

  el.cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    el.cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg style="width: 48px; height: 48px; fill: var(--text-muted); margin-bottom: 12px;" viewBox="0 0 24 24">
          <path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm7 17H5V8h14v12zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3z"/>
        </svg>
        <p>${T[currentLang].emptyBasket}</p>
      </div>
    `;
    el.cartTotalValue.textContent = formatCurrency(0);
    return;
  }

  cart.forEach(item => {
    const itemCard = document.createElement("div");
    itemCard.className = "cart-item";
    const itemName = item.name[currentLang] || item.name["en"];
    const itemImg = item.image || "https://images.unsplash.com/photo-1510707577719-fa7c18305222?w=400&q=80";

    itemCard.innerHTML = `
      <img src="${itemImg}" alt="${itemName}" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-name">${itemName}</h4>
        <div class="cart-item-price">${formatCurrency(item.price * item.qty)}</div>
      </div>
      <div class="cart-item-qty-controls">
        <button class="qty-btn" onclick="updateQty('${item.id}', -1)" aria-label="Decrease quantity">-</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateQty('${item.id}', 1)" aria-label="Increase quantity">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Delete item">
        <svg viewBox="0 0 24 24">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
        </svg>
      </button>
    `;
    el.cartItemsContainer.appendChild(itemCard);
  });

  el.cartTotalValue.textContent = formatCurrency(getCartTotal());
}

function checkoutOrder() {
  if (cart.length === 0) return;
  
  const receiptModal = document.getElementById("receipt-modal");
  const receiptTitle = document.getElementById("receipt-title");
  const receiptDate = document.getElementById("receipt-date");
  const receiptItemsContainer = document.getElementById("receipt-items-container");
  const receiptTotalLabel = document.getElementById("receipt-total-label");
  const receiptTotalValue = document.getElementById("receipt-total-value");
  const receiptWhatsAppBtn = document.getElementById("receipt-whatsapp-btn");
  const receiptCallBtn = document.getElementById("receipt-call-btn");
  const receiptDoneBtn = document.getElementById("receipt-done-btn");
  const receiptWaText = document.getElementById("receipt-wa-text");
  const receiptCallText = document.getElementById("receipt-call-text");

  // Localize Static Labels
  receiptTitle.textContent = T[currentLang].receiptTitle;
  receiptTotalLabel.textContent = T[currentLang].receiptTotal;
  receiptWaText.textContent = T[currentLang].sendWhatsApp;
  receiptCallText.textContent = T[currentLang].callNumber;
  receiptDoneBtn.textContent = T[currentLang].done;

  // Set date
  const now = new Date();
  receiptDate.textContent = now.toLocaleString(currentLang === 'en' ? 'en-US' : 'ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Render Items List in Receipt
  receiptItemsContainer.innerHTML = "";
  let messageItems = "";
  
  cart.forEach(item => {
    const itemName = item.name[currentLang] || item.name["en"];
    const itemTotal = item.price * item.qty;
    
    // Receipt UI row
    const row = document.createElement("div");
    row.className = "receipt-item";
    row.innerHTML = `
      <span class="receipt-item-name">${itemName} x${item.qty}</span>
      <span class="receipt-item-qty-price">${formatCurrency(itemTotal)}</span>
    `;
    receiptItemsContainer.appendChild(row);

    // WhatsApp text row
    messageItems += `- ${itemName} [x${item.qty}] : ${formatCurrency(itemTotal)}\n`;
  });

  // Set total
  const grandTotal = getCartTotal();
  receiptTotalValue.textContent = formatCurrency(grandTotal);

  // Construct WhatsApp Message
  const headerSymbol = "☕ *SAMAN CAFETERIA* ☕\n";
  const dateStr = `📅 *${receiptDate.textContent}*\n`;
  const separator = "---------------------------\n";
  const totalStr = `*${T[currentLang].receiptTotal} ${formatCurrency(grandTotal)}*\n`;
  const footerSymbol = "\n🙏 *Thank you for your order!*";
  
  const fullMessage = `${headerSymbol}${dateStr}${separator}${messageItems}${separator}${totalStr}${footerSymbol}`;
  
  // WhatsApp URL (wa.me)
  const phone = "9647508244332";
  receiptWhatsAppBtn.href = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;

  // Show Modal
  receiptModal.classList.add("active");
}

function closeReceiptModal() {
  const receiptModal = document.getElementById("receipt-modal");
  receiptModal.classList.remove("active");

  // Show success toast
  showToast(T[currentLang].orderConfirmed, "success");

  // Clear cart and close drawer
  cart = [];
  saveCart();
  updateCartUI();
  toggleCartDrawer(false);
}

// 7. Search Functionality
function initSearch() {
  if (!el.searchInput) return;
  
  el.searchInput.addEventListener("input", function() {
    const val = this.value.trim();
    // Show/hide clear button
    if (el.searchClearBtn) {
      el.searchClearBtn.style.display = val.length > 0 ? "block" : "none";
    }
    renderItems();
  });

  updateSearchPlaceholder();
}

function updateSearchPlaceholder() {
  if (el.searchInput) {
    el.searchInput.placeholder = T[currentLang].searchPlaceholder;
  }
}

function clearSearch() {
  if (el.searchInput) {
    el.searchInput.value = "";
    if (el.searchClearBtn) el.searchClearBtn.style.display = "none";
    renderItems();
    el.searchInput.focus();
  }
}
