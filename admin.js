// Admin credentials
const ADMIN_USER = "hama";
const ADMIN_PASS = "12345";

// Translations
const T = {
  en: {
    loginTitle: "Saman Dashboard",
    loginSubtitle: "Please enter your credentials to login",
    usernameLabel: "Username",
    passwordLabel: "Password",
    loginBtn: "Login",
    dashBrandTitle: "Saman Admin",
    logoutBtn: "Logout",
    tabAddCategory: "Add Category",
    tabManageItems: "Add & Manage Items",
    tabSettings: "Settings",
    createCategoryTitle: "Create New Category",
    catNameEnLabel: "Category Name (English)",
    catNameArLabel: "Category Name (Arabic)",
    catNameKuLabel: "Category Name (Kurdish Badini)",
    catImageLabel: "Category Image",
    uploadPlaceholder: "Tap here to upload from phone or file",
    addCategoryBtn: "Add Category",
    createItemTitle: "Create New Item",
    selectCategoryLabel: "Select Category",
    itemNameEnLabel: "Item Name (English)",
    priceLabel: "Price (IQD)",
    itemNameArLabel: "Item Name (Arabic)",
    itemNameKuLabel: "Item Name (Kurdish Badini)",
    itemImageLabel: "Item Image",
    addItemBtn: "Add Item",
    manageItemsTitle: "Manage Items",
    editItemTitle: "Edit Menu Item",
    changeImageLabel: "Change Image",
    saveChangesBtn: "Save Changes",
    sliderTitle: "Header Slider Images (Changes every 1.5s)",
    slideLabel: "Slide",
    logoTitle: "Brand Circular Logo",
    uploadLogoLabel: "Upload new brand logo",
    locationTitle: "Cafeteria Location",
    locationEnLabel: "Location (English)",
    locationArLabel: "Location (Arabic)",
    locationKuLabel: "Location (Kurdish Badini)",
    mapsLinkLabel: "Google Maps Link (Optional)",
    mapsHelpText: "Paste a Google Maps share link so customers can tap to navigate to your cafeteria",
    saveLocationBtn: "Save Location",
    editCategoryLabel: "Category",
    confirmDelete: "Are you sure you want to delete the item \"{name}\"?",
    restaurantNameTitle: "Restaurant Name",
    restaurantNameEnLabel: "Name (English)",
    restaurantNameArLabel: "Name (Arabic)",
    restaurantNameKuLabel: "Name (Kurdish Badini)",
    saveNameBtn: "Save Name",
    successName: "Name Updated Successfully!",
    manageCategoriesTitle: "Manage Categories",
    editCategoryTitle: "Edit Category",
    confirmDeleteCategory: "Are you sure you want to delete the category \"{name}\"?",
    successEditCat: "Category Saved Successfully!",
    successDeleteCat: "Category deleted successfully",
    successAddCat: "Category Added Successfully!",
    successAddItem: "Item Added Successfully!",
    successEditItem: "Item Saved Successfully!",
    successLocation: "Location Updated Successfully!",
    successLogo: "Circular Brand Logo Updated!",
    successSlide: "Slide {num} Background Updated!",
    successLogout: "Logged out successfully",
    successLogin: "Login Successful!",
    errorLogin: "Invalid username or password.",
    errorCompress: "Error compressing image",
    successDelete: "Item deleted successfully",
    catNameEnPlaceholder: "e.g. Hot Drinks",
    catNameArPlaceholder: "e.g. Hot Drinks (Arabic)",
    catNameKuPlaceholder: "e.g. Hot Drinks (Kurdish)",
    itemNameEnPlaceholder: "e.g. Cappuccino",
    pricePlaceholder: "e.g. 4500",
    itemNameArPlaceholder: "e.g. Cappuccino (Arabic)",
    itemNameKuPlaceholder: "e.g. Cappuccino (Kurdish)",
    locationEnPlaceholder: "e.g. Duhok, Kurdistan Region, Iraq",
    locationArPlaceholder: "e.g. Duhok, Kurdistan Region, Iraq (Arabic)",
    locationKuPlaceholder: "e.g. Duhok, Kurdistan Region, Iraq (Kurdish)",
    mapUrlPlaceholder: "https://maps.google.com/..."
  },
  ar: {
    loginTitle: "لوحة تحكم سامان",
    loginSubtitle: "يرجى إدخال بيانات الاعتماد لتسجيل الدخول",
    usernameLabel: "اسم المستخدم",
    passwordLabel: "كلمة المرور",
    loginBtn: "تسجيل الدخول",
    dashBrandTitle: "إدارة سامان",
    logoutBtn: "تسجيل الخروج",
    tabAddCategory: "إضافة قسم",
    tabManageItems: "إضافة وإدارة العناصر",
    tabSettings: "الإعدادات",
    createCategoryTitle: "إنشاء قسم جديد",
    catNameEnLabel: "اسم القسم (بالإنجليزية)",
    catNameArLabel: "اسم القسم (بالعربية)",
    catNameKuLabel: "اسم القسم (بالكردية بادينية)",
    catImageLabel: "صورة القسم",
    uploadPlaceholder: "انقر هنا للتحميل من الهاتف أو الملف",
    addCategoryBtn: "إضافة قسم",
    createItemTitle: "إنشاء عنصر جديد",
    selectCategoryLabel: "اختر القسم",
    itemNameEnLabel: "اسم العنصر (بالإنجليزية)",
    priceLabel: "السعر (د.ع)",
    itemNameArLabel: "اسم العنصر (بالعربية)",
    itemNameKuLabel: "اسم العنصر (بالكردية بادينية)",
    itemImageLabel: "صورة العنصر",
    addItemBtn: "إضافة العنصر",
    manageItemsTitle: "إدارة العناصر",
    editItemTitle: "تعديل العنصر",
    changeImageLabel: "تغيير الصورة",
    saveChangesBtn: "حفظ التغييرات",
    sliderTitle: "صور سلايدر الهيدر (تتغير كل 1.5 ثانية)",
    slideLabel: "شريحة",
    logoTitle: "شعار البراند الدائري",
    uploadLogoLabel: "تحميل شعار جديد",
    locationTitle: "موقع الكافتيريا",
    locationEnLabel: "الموقع (بالإنجليزية)",
    locationArLabel: "الموقع (بالعربية)",
    locationKuLabel: "الموقع (بالكردية بادينية)",
    mapsLinkLabel: "رابط خرائط جوجل (اختياري)",
    mapsHelpText: "الصق رابط مشاركة خرائط جوجل لتسهيل وصول الزبائن لكافتيريا الخاصة بك",
    saveLocationBtn: "حفظ الموقع",
    editCategoryLabel: "القسم",
    confirmDelete: "هل أنت متأكد من حذف العنصر \"{name}\"؟",
    restaurantNameTitle: "اسم المطعم",
    restaurantNameEnLabel: "الاسم (بالإنجليزية)",
    restaurantNameArLabel: "الاسم (بالعربية)",
    restaurantNameKuLabel: "الاسم (بالكردية بادينية)",
    saveNameBtn: "حفظ الاسم",
    successName: "تم تحديث الاسم بنجاح!",
    manageCategoriesTitle: "إدارة الأقسام",
    editCategoryTitle: "تعديل القسم",
    confirmDeleteCategory: "هل أنت متأكد من حذف القسم \"{name}\"؟",
    successEditCat: "تم حفظ القسم بنجاح!",
    successDeleteCat: "تم حذف القسم بنجاح",
    successAddCat: "تم إضافة القسم بنجاح!",
    successAddItem: "تم إضافة العنصر بنجاح!",
    successEditItem: "تم حفظ العنصر بنجاح!",
    successLocation: "تم تحديث الموقع بنجاح!",
    successLogo: "تم تحديث شعار البراند بنجاح!",
    successSlide: "تم تحديث خلفية الشريحة {num} بنجاح!",
    successLogout: "تم تسجيل الخروج بنجاح",
    successLogin: "تم تسجيل الدخول بنجاح!",
    errorLogin: "اسم المستخدم أو كلمة المرور غير صالحة.",
    errorCompress: "حدث خطأ أثناء ضغط الصورة",
    successDelete: "تم حذف العنصر بنجاح",
    catNameEnPlaceholder: "مثال: Hot Drinks",
    catNameArPlaceholder: "مثال: مشروبات ساخنة",
    catNameKuPlaceholder: "مثال: ڤەخوارنێن گەرم",
    itemNameEnPlaceholder: "مثال: Cappuccino",
    pricePlaceholder: "مثال: 4500",
    itemNameArPlaceholder: "مثال: كابتشينو",
    itemNameKuPlaceholder: "مثال: كاپوچينۆ",
    locationEnPlaceholder: "مثال: Duhok, Kurdistan Region, Iraq",
    locationArPlaceholder: "مثال: دهوك، إقليم كردستان، العراق",
    locationKuPlaceholder: "مثال: دهۆک، هەرێمی کوردستان، عێراق",
    mapUrlPlaceholder: "https://maps.google.com/..."
  },
  ku: {
    loginTitle: "داشبۆردا سامان",
    loginSubtitle: "ژ بو چوونە ژوورێ پێزانینێن خۆ بنڤیسە",
    usernameLabel: "ناڤێ بەکارهێنەری",
    passwordLabel: "ووشەیا نهێنی",
    loginBtn: "چوونە ژوورێ",
    dashBrandTitle: "رێڤەبەریا سامان",
    logoutBtn: "دەرکەفتن",
    tabAddCategory: "زێدەکرنا پشکی",
    tabManageItems: "بابەتان",
    tabSettings: "رێکخستن",
    createCategoryTitle: "دروستکرنا پشکەکا نوو",
    catNameEnLabel: "ناڤێ پشکی ب ئینگلیزي",
    catNameArLabel: "ناڤێ پشکی ب عەرەبي",
    catNameKuLabel: "ناڤێ پشکی ب کوردی بادیني",
    catImageLabel: "وێنێ پشکی",
    uploadPlaceholder: "لێرە داگرە بۆ بارکرنا وێنەی",
    addCategoryBtn: "زێدەکرنا پشکی",
    createItemTitle: "دروستکرنا بابەتەکێ نوو",
    selectCategoryLabel: "دەستنیشانکرنا پشکی",
    itemNameEnLabel: "ناڤێ بابەتی ب ئینگلیزي",
    priceLabel: "بها (د.ع)",
    itemNameArLabel: "ناڤێ بابەتی ب عەرەبي",
    itemNameKuLabel: "ناڤێ بابەتی ب کوردی بادیني",
    itemImageLabel: "وێنێ بابەتی",
    addItemBtn: "زێدەکرنا بابەتی",
    manageItemsTitle: "رێڤەبەریا بابەتان",
    editItemTitle: "دەستکاریکرنا بابەتی",
    changeImageLabel: "گۆڕینا وێنەی",
    saveChangesBtn: "پاراستنا گۆڕانکاریان",
    sliderTitle: "وێنێن سلايدەری (هەر ١.٥ چرکە دهێتە گۆڕین)",
    slideLabel: "سلاید",
    logoTitle: "لۆگۆیێ بازنەیی یێ براندی",
    uploadLogoLabel: "بارکرنا لۆگۆیێ نوو یێ براندی",
    locationTitle: "جهێ کافتێریایێ",
    locationEnLabel: "جه ب ئینگلیزي",
    locationArLabel: "جه ب عەرەبي",
    locationKuLabel: "جه ب کوردی بادیني",
    mapsLinkLabel: "لینکێ گۆگل ماپ (ئارەزوومەندانە)",
    mapsHelpText: "لینکێ گۆگل ماپ کۆپی بکە دا کۆ کڕیار ب ساناهی بگەهنە جهێ تە",
    saveLocationBtn: "پاراستنا جهی",
    editCategoryLabel: "پشک",
    confirmDelete: "تە دڤێت بابەتێ \"{name}\" رەشبکەی؟",
    restaurantNameTitle: "ناڤێ خارنگەهێ",
    restaurantNameEnLabel: "ناڤ ب ئینگلیزي",
    restaurantNameArLabel: "ناڤ ب عەرەبي",
    restaurantNameKuLabel: "ناڤ ب کوردی بادیني",
    saveNameBtn: "پاراستنا ناڤی",
    successName: "ناڤ ب سەرکەفتن هاتە نووکرن!",
    manageCategoriesTitle: "رێڤەبەریا پشکان",
    editCategoryTitle: "دەستکاریکرنا پشکی",
    confirmDeleteCategory: "تە دڤێت پشکا \"{name}\" رەشبکەی؟",
    successEditCat: "پشک ب سەرکەفتن هاتە پاراستن!",
    successDeleteCat: "پشک ب سەرکەفتن هاتە رەشکرن",
    successAddCat: "پشک ب سەرکەفتن هاتە زێدەکرن!",
    successAddItem: "بابەت ب سەرکەفتن هاتە زێدەکرن!",
    successEditItem: "بابەت ب سەرکەفتن هاتە پاراستن!",
    successLocation: "جه ب سەرکەفتن هاتە نووکرن!",
    successLogo: "لۆگۆیێ براندی هاتە نووکرن!",
    successSlide: "پاشبنەمايا سلايدێ {num} هاتە نووکرن!",
    successLogout: "دەرکەفتن ب سەرکەفتن ئەنجامدرا",
    successLogin: "چوونەژوور ب سەرکەفتن بوو!",
    errorLogin: "ناڤێ بەکارهێنەری یان ووشەیا نهێنی خەلەتە.",
    errorCompress: "خەلەتیەک لە پەستاندنی وێنەکەدا روویدا",
    successDelete: "بابەت ب سەرکەفتن هاتە رەشکرن",
    catNameEnPlaceholder: "مثال: Hot Drinks",
    catNameArPlaceholder: "مثال: مشروبات ساخنة",
    catNameKuPlaceholder: "مثال: ڤەخوارنێن گەرم",
    itemNameEnPlaceholder: "مثال: Cappuccino",
    pricePlaceholder: "مثال: 4500",
    itemNameArPlaceholder: "مثال: كابتشينو",
    itemNameKuPlaceholder: "مثال: كاپوچينۆ",
    locationEnPlaceholder: "مثال: Duhok, Kurdistan Region, Iraq",
    locationArPlaceholder: "مثال: دهوك، إقليم كردستان، العراق",
    locationKuPlaceholder: "مثال: دهۆک، هەرێمي کوردستان، عێراق",
    mapUrlPlaceholder: "https://maps.google.com/..."
  }
};

// State
let activeTab = 0;
let isLoggedIn = safeStorage.getItem("saman_admin_logged") === "true";
let currentAdminLang = safeStorage.getItem("saman_admin_lang") || "en";

// Elements (Lazy evaluated to prevent null references during initialization)
const el = {
  get loader() { return document.getElementById("admin-loader"); },
  get loginContainer() { return document.getElementById("login-container"); },
  get dashboardContainer() { return document.getElementById("dashboard-container"); },
  get loginForm() { return document.getElementById("login-form"); },
  get loginError() { return document.getElementById("login-error"); },

  // Forms
  get addCategoryForm() { return document.getElementById("add-category-form"); },
  get editCategoryForm() { return document.getElementById("edit-category-form"); },
  get addItemForm() { return document.getElementById("add-item-form"); },
  get editItemForm() { return document.getElementById("edit-item-form"); },

  // Inputs Category
  get catNameEn() { return document.getElementById("cat-name-en"); },
  get catNameAr() { return document.getElementById("cat-name-ar"); },
  get catNameKu() { return document.getElementById("cat-name-ku"); },
  get catImageFile() { return document.getElementById("cat-image-file"); },
  get catImgPreview() { return document.getElementById("cat-img-preview"); },

  // Inputs Edit Category Modal
  get editCategoryId() { return document.getElementById("edit-category-id"); },
  get editCatNameEn() { return document.getElementById("edit-cat-name-en"); },
  get editCatNameAr() { return document.getElementById("edit-cat-name-ar"); },
  get editCatNameKu() { return document.getElementById("edit-cat-name-ku"); },
  get editCatImageFile() { return document.getElementById("edit-cat-image-file"); },
  get editCatImgPreview() { return document.getElementById("edit-cat-img-preview"); },
  get editCategoryModal() { return document.getElementById("edit-category-modal"); },

  // Inputs Item
  get itemCategorySelect() { return document.getElementById("item-category-select"); },
  get itemNameEn() { return document.getElementById("item-name-en"); },
  get itemNameAr() { return document.getElementById("item-name-ar"); },
  get itemNameKu() { return document.getElementById("item-name-ku"); },
  get itemPrice() { return document.getElementById("item-price"); },
  get itemImageFile() { return document.getElementById("item-image-file"); },
  get itemImgPreview() { return document.getElementById("item-img-preview"); },

  // Inputs Edit Modal
  get editItemId() { return document.getElementById("edit-item-id"); },
  get editItemCategory() { return document.getElementById("edit-item-category"); },
  get editItemNameEn() { return document.getElementById("edit-item-name-en"); },
  get editItemNameAr() { return document.getElementById("edit-item-name-ar"); },
  get editItemNameKu() { return document.getElementById("edit-item-name-ku"); },
  get editItemPrice() { return document.getElementById("edit-item-price"); },
  get editItemImageFile() { return document.getElementById("edit-item-image-file"); },
  get editItemImgPreview() { return document.getElementById("edit-item-img-preview"); },
  get editItemModal() { return document.getElementById("edit-item-modal"); },

  // Settings
  get settingBg1() { return document.getElementById("setting-bg-1"); },
  get settingBg2() { return document.getElementById("setting-bg-2"); },
  get settingBg3() { return document.getElementById("setting-bg-3"); },
  get settingLogoPreview() { return document.getElementById("setting-logo-preview"); },
  get settingNameEn() { return document.getElementById("setting-name-en"); },
  get settingNameAr() { return document.getElementById("setting-name-ar"); },
  get settingNameKu() { return document.getElementById("setting-name-ku"); },
  get settingLocationEn() { return document.getElementById("setting-location-en"); },
  get settingLocationAr() { return document.getElementById("setting-location-ar"); },
  get settingLocationKu() { return document.getElementById("setting-location-ku"); },
  get settingLocationMapUrl() { return document.getElementById("setting-location-map-url"); },

  // Lists
  get adminCategoriesList() { return document.getElementById("admin-categories-list"); },
  get adminItemsList() { return document.getElementById("admin-items-list"); },

  // Header Logo & Name
  get dashLogoImg() { return document.getElementById("dash-logo-img"); },
  get dashBrandTitle() { return document.getElementById("dash-brand-title"); },
  get loginLogoImg() { return document.getElementById("login-logo-img"); },
  get loaderLogoImg() { return document.getElementById("loader-logo-img"); },

  // Toast container
  get toastBox() { return document.getElementById("toast-box"); }
};

// Initialize Admin Page
window.addEventListener("DOMContentLoaded", () => {
  // Hook Firebase/database updates to refresh admin lists and previews live
  DB.onDataUpdate = () => {
    updateBrandingPreload();
    if (isLoggedIn) {
      refreshCategoriesDropdowns();
      renderManageItems();
    }
  };

  // Hide loader after a brief, beautiful delay (1000ms)
  setTimeout(() => {
    el.loader.style.opacity = "0";
    setTimeout(() => {
      el.loader.style.display = "none";
    }, 500);
  }, 1000);

  // Load current branding details into page
  updateBrandingPreload();

  // Apply saved admin language
  setAdminLanguage(currentAdminLang);

  // Route depending on login state
  if (isLoggedIn) {
    showDashboard();
  } else {
    showLogin();
  }
});

// Toast notification helper
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  el.toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// 0. Set Admin Language
function setAdminLanguage(lang) {
  if (!T[lang]) lang = "en";
  currentAdminLang = lang;
  safeStorage.setItem("saman_admin_lang", lang);

  // Set body class and direction
  document.body.className = `admin-body lang-${lang}`;

  // Update language buttons active class in dashboard
  document.querySelectorAll(".dashboard-header .lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtnDashboard = document.getElementById(`btn-lang-${lang}`);
  if (activeBtnDashboard) activeBtnDashboard.classList.add("active");

  // Update language buttons active class in login wrapper
  document.querySelectorAll(".login-card .lang-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  const activeBtnLogin = document.getElementById(`btn-login-lang-${lang}`);
  if (activeBtnLogin) activeBtnLogin.classList.add("active");

  // Translate all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (T[lang][key]) {
      // If it contains children (like SVG), find text node or append it
      if (element.children.length > 0) {
        // Find if there is a span or text node, or just update the last child if it's text
        let textNode = Array.from(element.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.textContent = T[lang][key];
        } else {
          // If no direct text node but has children, look for specific class or just replace innerText
          // Let's check if it's a button with SVG icon (like save location)
          const textSpan = element.querySelector("span[data-i18n]");
          if (textSpan) {
            textSpan.textContent = T[lang][key];
          } else {
            // Safe fallback
            const span = document.createElement("span");
            span.textContent = T[lang][key];
            element.appendChild(span);
          }
        }
      } else {
        element.textContent = T[lang][key];
      }
    }
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (T[lang][key]) {
      element.placeholder = T[lang][key];
    }
  });

  // Re-run branding updates to reflect headers and map options
  updateBrandingPreload();
  if (isLoggedIn) {
    refreshCategoriesDropdowns();
    renderManageItems();
  }
}

// 1. Branding Update (Logo, Titles)
function updateBrandingPreload() {
  const settings = DB.getSettings();
  const logo = settings.logo || "assets/logo.png";

  el.loaderLogoImg.src = logo;
  el.loginLogoImg.src = logo;
  el.dashLogoImg.src = logo;

  // Update Rest Name localized
  const restName = settings.restaurantName[currentAdminLang] || settings.restaurantName["en"] || "Saman";
  const adminSuffix = currentAdminLang === "ku" ? " رێڤەبەریا" : (currentAdminLang === "ar" ? " إدارة" : " Admin");
  el.dashBrandTitle.textContent = restName + adminSuffix;

  // Pre-load setting images
  if (settings.topImages && settings.topImages.length >= 3) {
    el.settingBg1.src = settings.topImages[0];
    el.settingBg2.src = settings.topImages[1];
    el.settingBg3.src = settings.topImages[2];
  }
  el.settingLogoPreview.src = logo;

  // Pre-load restaurant name settings
  if (!settings.restaurantName) settings.restaurantName = { en: "", ar: "", ku: "" };
  if (el.settingNameEn) el.settingNameEn.value = settings.restaurantName.en || "";
  if (el.settingNameAr) el.settingNameAr.value = settings.restaurantName.ar || "";
  if (el.settingNameKu) el.settingNameKu.value = settings.restaurantName.ku || "";

  // Pre-load location settings
  const location = settings.location || {};
  if (el.settingLocationEn) el.settingLocationEn.value = location.en || "";
  if (el.settingLocationAr) el.settingLocationAr.value = location.ar || "";
  if (el.settingLocationKu) el.settingLocationKu.value = location.ku || "";
  if (el.settingLocationMapUrl) el.settingLocationMapUrl.value = settings.locationMapUrl || "";
}

// 2. Login & Logout
function showLogin() {
  el.loginContainer.style.display = "flex";
  el.dashboardContainer.style.display = "none";
}

// 2b. Show Dashboard
function showDashboard() {
  el.loginContainer.style.display = "none";
  el.dashboardContainer.style.display = "flex";

  // Refresh Lists
  refreshCategoriesDropdowns();
  renderManageItems();
  renderManageCategories();
}

// 2c. Login Handler
function handleLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    isLoggedIn = true;
    safeStorage.setItem("saman_admin_logged", "true");
    el.loginError.textContent = "";
    showToast(T[currentAdminLang].successLogin, "success");
    showDashboard();
  } else {
    el.loginError.textContent = T[currentAdminLang].errorLogin;
    showToast(T[currentAdminLang].errorLogin, "error");
  }
}

// 2d. Logout Handler
function handleLogout() {
  isLoggedIn = false;
  safeStorage.setItem("saman_admin_logged", "false");
  showToast(T[currentAdminLang].successLogout, "success");
  showLogin();
}

// 3. Tab Navigation
function switchTab(idx) {
  activeTab = idx;

  // Update buttons
  document.querySelectorAll(".tab-btn").forEach((btn, i) => {
    if (i === idx) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  // Update panels
  document.querySelectorAll(".tab-panel").forEach((panel, i) => {
    if (i === idx) panel.classList.add("active");
    else panel.classList.remove("active");
  });

  if (idx === 0) {
    renderManageCategories();
  } else if (idx === 1) {
    // Manage items tab: refresh select list and item lists
    refreshCategoriesDropdowns();
    renderManageItems();
  }
}

// 4. File uploads image previews
function previewImage(input, previewId) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(previewId).src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// 5. Add Category Logic
async function addCategory(event) {
  event.preventDefault();

  const nameEn = el.catNameEn.value.trim();
  const nameAr = el.catNameAr.value.trim();
  const nameKu = el.catNameKu.value.trim();
  const file = el.catImageFile.files[0];

  let imageUrl = el.catImgPreview.src; // Default fallback Unsplash img

  if (file) {
    try {
      imageUrl = await DB.compressAndConvertImage(file);
    } catch (err) {
      showToast(T[currentAdminLang].errorCompress, "error");
      return;
    }
  }

  const newCategory = {
    id: "cat_" + Date.now(),
    name: {
      en: nameEn,
      ar: nameAr,
      ku: nameKu
    },
    image: imageUrl
  };

  const categories = DB.getCategories();
  categories.push(newCategory);
  DB.saveCategories(categories);

  showToast(T[currentAdminLang].successAddCat, "success");

  // Reset fields
  el.addCategoryForm.reset();
  el.catImgPreview.src = "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80";

  refreshCategoriesDropdowns();
  renderManageCategories();
}

// 5b. Refresh dropdowns
function refreshCategoriesDropdowns() {
  const categories = DB.getCategories();

  // Fill Add Item select
  el.itemCategorySelect.innerHTML = "";
  // Fill Edit Item select
  el.editItemCategory.innerHTML = "";

  if (categories.length === 0) {
    const opt = `<option value="">No categories available - add one first</option>`;
    el.itemCategorySelect.innerHTML = opt;
    el.editItemCategory.innerHTML = opt;
    return;
  }

  categories.forEach(cat => {
    const catName = cat.name[currentAdminLang] || cat.name.en || cat.name.ku || cat.name.ar;
    const option = `<option value="${cat.id}">${catName}</option>`;

    el.itemCategorySelect.innerHTML += option;
    el.editItemCategory.innerHTML += option;
  });
}

// 5c. Manage Categories: Render List
function renderManageCategories() {
  const categories = DB.getCategories();
  if (el.adminCategoriesList) {
    el.adminCategoriesList.innerHTML = "";

    if (categories.length === 0) {
      el.adminCategoriesList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 20px;">No categories found. Add some to populate the list!</div>`;
      return;
    }

    categories.forEach(cat => {
      const catImg = cat.image || "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80";
      const catName = cat.name[currentAdminLang] || cat.name.en || cat.name.ku || cat.name.ar;

      const row = document.createElement("div");
      row.className = "admin-item-card";
      row.innerHTML = `
        <img src="${catImg}" alt="${catName}" class="admin-item-img">
        <div class="admin-item-details">
          <h4 class="admin-item-name">${catName}</h4>
        </div>
        <div class="admin-item-actions">
          <button class="action-icon-btn edit-btn" onclick="openEditCategoryModal('${cat.id}')" aria-label="Edit Category">
            <svg viewBox="0 0 24 24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
            </svg>
          </button>
          <button class="action-icon-btn delete-btn" onclick="deleteCategory('${cat.id}')" aria-label="Delete Category">
            <svg viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
          </button>
        </div>
      `;
      el.adminCategoriesList.appendChild(row);
    });
  }
}

// 5d. Delete Category
function deleteCategory(catId) {
  const categories = DB.getCategories();
  const catIndex = categories.findIndex(c => c.id === catId);
  if (catIndex === -1) return;

  const catName = categories[catIndex].name[currentAdminLang] || categories[catIndex].name.en;

  if (confirm(T[currentAdminLang].confirmDeleteCategory.replace("{name}", catName))) {
    categories.splice(catIndex, 1);
    DB.saveCategories(categories);
    showToast(T[currentAdminLang].successDeleteCat, "success");
    refreshCategoriesDropdowns();
    renderManageCategories();
  }
}

// 5e. Edit Category Modal Handling
function openEditCategoryModal(catId) {
  const categories = DB.getCategories();
  const cat = categories.find(c => c.id === catId);
  if (!cat) return;

  el.editCategoryId.value = cat.id;
  el.editCatNameEn.value = cat.name.en || "";
  el.editCatNameAr.value = cat.name.ar || "";
  el.editCatNameKu.value = cat.name.ku || "";
  el.editCatImgPreview.src = cat.image || "";
  el.editCatImageFile.value = ""; // Reset file input

  el.editCategoryModal.classList.add("active");
}

function closeEditCategoryModal() {
  el.editCategoryModal.classList.remove("active");
}

async function saveEditedCategory(event) {
  event.preventDefault();

  const id = el.editCategoryId.value;
  const categories = DB.getCategories();
  const catIndex = categories.findIndex(c => c.id === id);

  if (catIndex === -1) {
    showToast("Category not found", "error");
    closeEditCategoryModal();
    return;
  }

  const nameEn = el.editCatNameEn.value.trim();
  const nameAr = el.editCatNameAr.value.trim();
  const nameKu = el.editCatNameKu.value.trim();
  const file = el.editCatImageFile.files[0];

  let imageUrl = el.editCatImgPreview.src;

  if (file) {
    try {
      imageUrl = await DB.compressAndConvertImage(file);
    } catch (err) {
      showToast(T[currentAdminLang].errorCompress, "error");
      return;
    }
  }

  // Update category
  categories[catIndex] = {
    ...categories[catIndex],
    name: { en: nameEn, ar: nameAr, ku: nameKu },
    image: imageUrl
  };

  DB.saveCategories(categories);
  showToast(T[currentAdminLang].successEditCat, "success");

  closeEditCategoryModal();
  refreshCategoriesDropdowns();
  renderManageCategories();
}

// 6. Add Item Logic
async function addItem(event) {
  event.preventDefault();

  const categoryId = el.itemCategorySelect.value;
  if (!categoryId) {
    showToast(T[currentAdminLang].selectCategoryLabel, "error");
    return;
  }

  const nameEn = el.itemNameEn.value.trim();
  const nameAr = el.itemNameAr.value.trim();
  const nameKu = el.itemNameKu.value.trim();
  const price = parseFloat(el.itemPrice.value);
  const file = el.itemImageFile.files[0];

  let imageUrl = el.itemImgPreview.src;

  if (file) {
    try {
      imageUrl = await DB.compressAndConvertImage(file);
    } catch (err) {
      showToast(T[currentAdminLang].errorCompress, "error");
      return;
    }
  }

  const newItem = {
    id: "item_" + Date.now(),
    categoryId: categoryId,
    name: {
      en: nameEn,
      ar: nameAr,
      ku: nameKu
    },
    price: price,
    image: imageUrl
  };

  const items = DB.getItems();
  items.push(newItem);
  DB.saveItems(items);

  showToast(T[currentAdminLang].successAddItem, "success");

  // Reset Form
  el.addItemForm.reset();
  el.itemImgPreview.src = "https://images.unsplash.com/photo-1510707577719-fa7c18305222?w=400&q=80";

  renderManageItems();
}

// 7. Manage Items: Render List (Edit & Delete options)
function renderManageItems() {
  const items = DB.getItems();
  const categories = DB.getCategories();
  el.adminItemsList.innerHTML = "";

  if (items.length === 0) {
    el.adminItemsList.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 20px;">No items found. Add some items to populate the list!</div>`;
    return;
  }

  items.forEach(item => {
    const parentCat = categories.find(c => c.id === item.categoryId);
    const catName = parentCat ? (parentCat.name[currentAdminLang] || parentCat.name.en || parentCat.name.ku || parentCat.name.ar) : "Unknown Category";
    const itemImg = item.image || "https://images.unsplash.com/photo-1510707577719-fa7c18305222?w=400&q=80";
    const itemName = item.name[currentAdminLang] || item.name.en || item.name.ku || item.name.ar;

    const row = document.createElement("div");
    row.className = "admin-item-card";
    row.innerHTML = `
      <img src="${itemImg}" alt="${itemName}" class="admin-item-img">
      <div class="admin-item-details">
        <h4 class="admin-item-name">${itemName}</h4>
        <div class="admin-item-meta">
          ${currentAdminLang === 'ku' ? 'پشک:' : (currentAdminLang === 'ar' ? 'القسم:' : 'Category:')} <span style="color:#fff;">${catName}</span> | 
          ${currentAdminLang === 'ku' ? 'بها:' : (currentAdminLang === 'ar' ? 'السعر:' : 'Price:')} <span class="admin-item-price">${new Intl.NumberFormat().format(item.price)} ${currentAdminLang === 'en' ? 'IQD' : 'د.ع'}</span>
        </div>
      </div>
      <div class="admin-item-actions">
        <button class="action-icon-btn edit-btn" onclick="openEditModal('${item.id}')" aria-label="Edit Item">
          <svg viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
          </svg>
        </button>
        <button class="action-icon-btn delete-btn" onclick="deleteItem('${item.id}')" aria-label="Delete Item">
          <svg viewBox="0 0 24 24">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
          </svg>
        </button>
      </div>
    `;
    el.adminItemsList.appendChild(row);
  });
}

// 7b. Delete Item
function deleteItem(itemId) {
  const items = DB.getItems();
  const itemIndex = items.findIndex(i => i.id === itemId);
  if (itemIndex === -1) return;

  const itemName = items[itemIndex].name[currentAdminLang] || items[itemIndex].name.en;

  if (confirm(T[currentAdminLang].confirmDelete.replace("{name}", itemName))) {
    items.splice(itemIndex, 1);
    DB.saveItems(items);
    showToast(T[currentAdminLang].successDelete, "success");
    renderManageItems();
  }
}

// 8. Edit Item Modal Handling
function openEditModal(itemId) {
  const items = DB.getItems();
  const item = items.find(i => i.id === itemId);
  if (!item) return;

  refreshCategoriesDropdowns();

  el.editItemId.value = item.id;
  el.editItemCategory.value = item.categoryId;
  el.editItemNameEn.value = item.name.en || "";
  el.editItemNameAr.value = item.name.ar || "";
  el.editItemNameKu.value = item.name.ku || "";
  el.editItemPrice.value = item.price;
  el.editItemImgPreview.src = item.image || "";
  el.editItemImageFile.value = ""; // Reset file input

  el.editItemModal.classList.add("active");
}

// 8b. Close Modal
function closeEditModal() {
  el.editItemModal.classList.remove("active");
}

// 8c. Save Edited Item
async function saveEditedItem(event) {
  event.preventDefault();

  const id = el.editItemId.value;
  const items = DB.getItems();
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    showToast("Item not found", "error");
    closeEditModal();
    return;
  }

  const categoryId = el.editItemCategory.value;
  const nameEn = el.editItemNameEn.value.trim();
  const nameAr = el.editItemNameAr.value.trim();
  const nameKu = el.editItemNameKu.value.trim();
  const price = parseFloat(el.editItemPrice.value);
  const file = el.editItemImageFile.files[0];

  let imageUrl = el.editItemImgPreview.src;

  if (file) {
    try {
      imageUrl = await DB.compressAndConvertImage(file);
    } catch (err) {
      showToast(T[currentAdminLang].errorCompress, "error");
      return;
    }
  }

  // Update item
  items[itemIndex] = {
    ...items[itemIndex],
    categoryId: categoryId,
    name: { en: nameEn, ar: nameAr, ku: nameKu },
    price: price,
    image: imageUrl
  };

  DB.saveItems(items);
  showToast(T[currentAdminLang].successEditItem, "success");

  closeEditModal();
  renderManageItems();
}

// 9. Settings Configuration: Slider background uploads & Logo uploads
function triggerBgUpload(slideNum) {
  document.getElementById(`bg-file-${slideNum}`).click();
}

async function updateSliderImage(slideNum, input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    try {
      const base64Url = await DB.compressAndConvertImage(file);
      const settings = DB.getSettings();

      // Update specific slide index
      settings.topImages[slideNum - 1] = base64Url;
      DB.saveSettings(settings);

      // Update preview
      document.getElementById(`setting-bg-${slideNum}`).src = base64Url;
      showToast(T[currentAdminLang].successSlide.replace("{num}", slideNum), "success");
    } catch (err) {
      showToast(T[currentAdminLang].errorCompress, "error");
    }
  }
}

async function updateLogoImage(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    try {
      const base64Url = await DB.compressAndConvertImage(file);
      const settings = DB.getSettings();

      settings.logo = base64Url;
      DB.saveSettings(settings);

      // Update preview and headers
      el.settingLogoPreview.src = base64Url;
      el.dashLogoImg.src = base64Url;
      showToast(T[currentAdminLang].successLogo, "success");
    } catch (err) {
      showToast(T[currentAdminLang].errorCompress, "error");
    }
  }
}

// 10. Save Location Settings
function saveLocationSettings(event) {
  event.preventDefault();

  const settings = DB.getSettings();

  settings.location = {
    en: (el.settingLocationEn.value || "").trim(),
    ar: (el.settingLocationAr.value || "").trim(),
    ku: (el.settingLocationKu.value || "").trim()
  };

  settings.locationMapUrl = (el.settingLocationMapUrl.value || "").trim();

  DB.saveSettings(settings);
  showToast(T[currentAdminLang].successLocation, "success");
}

// 11. Save Name Settings
function saveNameSettings(event) {
  event.preventDefault();

  const settings = DB.getSettings();

  settings.restaurantName = {
    en: (el.settingNameEn.value || "").trim(),
    ar: (el.settingNameAr.value || "").trim(),
    ku: (el.settingNameKu.value || "").trim()
  };

  DB.saveSettings(settings);
  showToast(T[currentAdminLang].successName, "success");
  
  // Re-update the UI so it reflects immediately
  updateBrandingPreload();
}
