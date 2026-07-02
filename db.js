// Helper to safely convert Firebase and localStorage objects/arrays to clean JS arrays
function ensureArray(data) {
  if (!data) return [];
  if (Array.isArray(data)) {
    return data.filter(item => item !== null && item !== undefined);
  }
  if (typeof data === "object") {
    return Object.values(data).filter(item => item !== null && item !== undefined);
  }
  return [];
}

// Safe Storage wrapper to handle file:// protocols where localStorage is blocked
const safeStorage = {
  fallbackStore: {},
  getItem(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn("LocalStorage access denied (likely file:// protocol). Using in-memory fallback.");
      return this.fallbackStore[key] || null;
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) {
      console.warn("LocalStorage access denied (likely file:// protocol). Using in-memory fallback.");
      this.fallbackStore[key] = String(value);
    }
  }
};

// Default static menu data
const DEFAULT_SETTINGS = {
  restaurantName: {
    en: "Saman Cafeteria",
    ar: "كافتيريا سامان",
    ku: "کافتێريا سامان"
  },
  location: {
    en: "Duhok, Kurdistan Region, Iraq",
    ar: "دهوك، إقليم كردستان، العراق",
    ku: "دهۆک، هەرێمی کوردستان، عێراق"
  },
  locationMapUrl: "",
  logo: "assets/logo.png",
  topImages: [
    "assets/bg1.png",
    "assets/bg2.png",
    "assets/bg3.png"
  ]
};

const DEFAULT_CATEGORIES = [
  {
    id: "cat_1",
    name: {
      en: "Hot Drinks",
      ar: "مشروبات ساخنة",
      ku: "ڤەخوارنێن گەرم"
    },
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80"
  },
  {
    id: "cat_2",
    name: {
      en: "Cold Drinks",
      ar: "مشروبات باردة",
      ku: "ڤەخوارنێن سارد"
    },
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80"
  },
  {
    id: "cat_3",
    name: {
      en: "Desserts",
      ar: "حلويات",
      ku: "شریناهی"
    },
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80"
  }
];

const DEFAULT_ITEMS = [
  {
    id: "item_1",
    categoryId: "cat_1",
    name: {
      en: "Espresso",
      ar: "إسبريسو",
      ku: "ئێسپریسۆ"
    },
    price: 3000,
    image: "https://images.unsplash.com/photo-1510707577719-fa7c18305222?w=400&q=80"
  },
  {
    id: "item_2",
    categoryId: "cat_1",
    name: {
      en: "Cappuccino",
      ar: "كابتشينو",
      ku: "كاپوچينۆ"
    },
    price: 4500,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80"
  },
  {
    id: "item_3",
    categoryId: "cat_1",
    name: {
      en: "Spanish Latte",
      ar: "سبانيش لاتيه",
      ku: "سپانیش لاتی"
    },
    price: 5000,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80"
  },
  {
    id: "item_4",
    categoryId: "cat_2",
    name: {
      en: "Iced Latte",
      ar: "لاتيه بارد",
      ku: "لاتی یێ سارد"
    },
    price: 4500,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80"
  },
  {
    id: "item_5",
    categoryId: "cat_2",
    name: {
      en: "Strawberry Mojito",
      ar: "موهيتو فراولة",
      ku: "مۆهیتۆ فەراولە"
    },
    price: 5000,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80"
  },
  {
    id: "item_6",
    categoryId: "cat_2",
    name: {
      en: "Chocolate Shake",
      ar: "ميلك شيك شوكولاتة",
      ku: "میلک شێک شوکولاتە"
    },
    price: 5500,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80"
  },
  {
    id: "item_7",
    categoryId: "cat_3",
    name: {
      en: "Waffle Chocolate",
      ar: "وافل شوكولاتة",
      ku: "وافل شوکولاتە"
    },
    price: 6000,
    image: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=400&q=80"
  },
  {
    id: "item_8",
    categoryId: "cat_3",
    name: {
      en: "Crepe Nutella",
      ar: "كريب نوتيلا",
      ku: "كريب نۆتێلا"
    },
    price: 6500,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80"
  },
  {
    id: "item_9",
    categoryId: "cat_3",
    name: {
      en: "San Sebastian",
      ar: "سان سيباستيان",
      ku: "سان سيباستيان"
    },
    price: 7000,
    image: "https://images.unsplash.com/photo-1524351199679-46cddf530c04?w=400&q=80"
  }
];

const DB = {
  isFirebaseActive: false,
  database: null,
  onDataUpdate: null,

  // Cache variables to prevent reading from localStorage repeatedly
  _settings: null,
  _categories: null,
  _items: null,

  getSettings() {
    if (this._settings && typeof this._settings === "object" && !Array.isArray(this._settings)) return this._settings;
    const data = safeStorage.getItem("saman_settings");
    try {
      this._settings = data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn("Saman DB: Failed to parse settings JSON.", e);
      this._settings = null;
    }
    
    // Deep structure validation and self-seeding
    let needsSave = false;
    if (!this._settings || typeof this._settings !== "object" || Array.isArray(this._settings)) {
      this._settings = { ...DEFAULT_SETTINGS };
      needsSave = true;
    }
    if (!this._settings.restaurantName || typeof this._settings.restaurantName !== "object") {
      this._settings.restaurantName = { ...DEFAULT_SETTINGS.restaurantName };
      needsSave = true;
    }
    if (!this._settings.location || typeof this._settings.location !== "object") {
      this._settings.location = { ...DEFAULT_SETTINGS.location };
      needsSave = true;
    }
    if (typeof this._settings.locationMapUrl !== "string") {
      this._settings.locationMapUrl = DEFAULT_SETTINGS.locationMapUrl || "";
      needsSave = true;
    }
    
    this._settings.topImages = ensureArray(this._settings.topImages);
    
    if (this._settings.topImages.length === 0) {
      this._settings.topImages = [ ...DEFAULT_SETTINGS.topImages ];
      needsSave = true;
    } else {
      // Ensure all 3 slots are filled, if not, fill them with defaults
      for (let i = 0; i < 3; i++) {
        if (!this._settings.topImages[i]) {
          this._settings.topImages[i] = DEFAULT_SETTINGS.topImages[i];
          needsSave = true;
        }
      }
      // Truncate length to 3 in case it gets larger
      if (this._settings.topImages.length > 3) {
        this._settings.topImages = this._settings.topImages.slice(0, 3);
        needsSave = true;
      }
    }
    if (!this._settings.logo) {
      this._settings.logo = DEFAULT_SETTINGS.logo;
      needsSave = true;
    }
    
    if (needsSave) {
      safeStorage.setItem("saman_settings", JSON.stringify(this._settings));
    }
    return this._settings;
  },

  saveSettings(settings) {
    this._settings = settings;
    safeStorage.setItem("saman_settings", JSON.stringify(settings));
    this.triggerUpdate(); // Always update UI locally immediately
    if (this.isFirebaseActive && this.database) {
      this.database.ref("settings").set(settings).catch(e => {
        console.warn("Firebase settings write failed. Switching to local-only mode.", e);
        this.disableFirebase();
        this.triggerUpdate();
      });
    }
  },

  getCategories() {
    if (this._categories && Array.isArray(this._categories)) return this._categories;
    const data = safeStorage.getItem("saman_categories");
    try {
      this._categories = data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn("Saman DB: Failed to parse categories JSON.", e);
      this._categories = null;
    }
    
    this._categories = ensureArray(this._categories);
    
    if (this._categories.length === 0) {
      this._categories = [ ...DEFAULT_CATEGORIES ];
      safeStorage.setItem("saman_categories", JSON.stringify(this._categories));
    }
    return this._categories;
  },

  saveCategories(categories) {
    this._categories = categories;
    safeStorage.setItem("saman_categories", JSON.stringify(categories));
    this.triggerUpdate(); // Always update UI locally immediately
    if (this.isFirebaseActive && this.database) {
      this.database.ref("categories").set(categories).catch(e => {
        console.warn("Firebase categories write failed. Switching to local-only mode.", e);
        this.disableFirebase();
        this.triggerUpdate();
      });
    }
  },

  getItems() {
    if (this._items && Array.isArray(this._items)) return this._items;
    const data = safeStorage.getItem("saman_items");
    try {
      this._items = data ? JSON.parse(data) : null;
    } catch (e) {
      console.warn("Saman DB: Failed to parse items JSON.", e);
      this._items = null;
    }
    
    this._items = ensureArray(this._items);
    
    const categories = this.getCategories();
    const isUsingDefaultCategories = (categories && categories.length > 0 && categories[0].id === "cat_1");
    
    if (this._items.length === 0 && isUsingDefaultCategories) {
      this._items = [ ...DEFAULT_ITEMS ];
      safeStorage.setItem("saman_items", JSON.stringify(this._items));
    }
    return this._items;
  },

  saveItems(items) {
    this._items = items;
    safeStorage.setItem("saman_items", JSON.stringify(items));
    this.triggerUpdate(); // Always update UI locally immediately
    if (this.isFirebaseActive && this.database) {
      this.database.ref("items").set(items).catch(e => {
        console.warn("Firebase items write failed. Switching to local-only mode.", e);
        this.disableFirebase();
        this.triggerUpdate();
      });
    }
  },

  disableFirebase() {
    if (this.isFirebaseActive && this.database) {
      try {
        this.database.ref("settings").off("value");
        this.database.ref("categories").off("value");
        this.database.ref("items").off("value");
      } catch (e) {
        console.warn("Saman DB: Failed to unsubscribe from Firebase listeners", e);
      }
      this.isFirebaseActive = false;
      console.log("Saman DB: Switched to secure local offline mode due to Firebase restrictions.");
    }
  },

  triggerUpdate() {
    if (typeof this.onDataUpdate === "function") {
      try {
        this.onDataUpdate();
      } catch (e) {
        console.error("Error triggering data update:", e);
      }
    }
  },

  // Initialize DB
  init() {
    // 1. Initial local load and self-seeding (handled dynamically inside getters)
    this._settings = this.getSettings();
    this._categories = this.getCategories();
    this._items = this.getItems();

    // 2. Real-time cross-tab synchronization listener
    window.addEventListener("storage", (e) => {
      if (e.key === "saman_settings") {
        this._settings = null;
        this.getSettings();
        this.triggerUpdate();
      } else if (e.key === "saman_categories") {
        this._categories = null;
        this.getCategories();
        this.triggerUpdate();
      } else if (e.key === "saman_items") {
        this._items = null;
        this.getItems();
        this.triggerUpdate();
      }
    });

    // 2. Try Firebase initialization
    const config = window.firebaseConfig;
    if (config && config.apiKey && config.apiKey !== "YOUR_API_KEY") {
      try {
        if (typeof firebase !== "undefined") {
          if (firebase.apps.length === 0) {
            firebase.initializeApp(config);
          }
          this.database = firebase.database();
          this.isFirebaseActive = true;
          console.log("Saman DB: Firebase successfully initialized.");

          // Sync data from cloud
          this.setupFirebaseListeners();
        } else {
          console.warn("Saman DB: Firebase library not loaded.");
        }
      } catch (err) {
        console.error("Saman DB: Failed to initialize Firebase:", err);
      }
    } else {
      console.log("Saman DB: Operating in secure local offline mode.");
    }
  },

  setupFirebaseListeners() {
    if (!this.isFirebaseActive || !this.database) return;

    // Check if cloud database is empty, seed if it is
    this.database.ref().once('value').then(snapshot => {
      if (!snapshot.exists()) {
        console.log("Saman DB: Cloud database is empty. Seeding local default datasets to Firebase...");
        this.database.ref("settings").set(this.getSettings()).catch(e => {
          console.warn("Saman DB: Seeding settings failed", e);
          this.disableFirebase();
        });
        this.database.ref("categories").set(this.getCategories()).catch(e => {
          console.warn("Saman DB: Seeding categories failed", e);
          this.disableFirebase();
        });
        this.database.ref("items").set(this.getItems()).catch(e => {
          console.warn("Saman DB: Seeding items failed", e);
          this.disableFirebase();
        });
      }
    }).catch(error => {
      console.warn("Saman DB: Firebase root read permission denied or connection failed. Operating locally.", error);
      this.disableFirebase();
    });

    // Listeners for real-time syncing with safety error callbacks
    this.database.ref("settings").on("value", 
      snapshot => {
        if (!this.isFirebaseActive) return;
        const data = snapshot.val();
        if (data) {
          if (data.topImages) {
            data.topImages = ensureArray(data.topImages);
          }
          this._settings = data;
          safeStorage.setItem("saman_settings", JSON.stringify(data));
          this.triggerUpdate();
        }
      },
      error => {
        console.warn("Saman DB: Settings sync read error (permission denied). Using local copy.", error);
        this.disableFirebase();
      }
    );

    this.database.ref("categories").on("value", 
      snapshot => {
        if (!this.isFirebaseActive) return;
        const data = snapshot.val();
        if (data) {
          const validated = ensureArray(data);
          this._categories = validated;
          safeStorage.setItem("saman_categories", JSON.stringify(validated));
          this.triggerUpdate();
        }
      },
      error => {
        console.warn("Saman DB: Categories sync read error (permission denied). Using local copy.", error);
        this.disableFirebase();
      }
    );

    this.database.ref("items").on("value", 
      snapshot => {
        if (!this.isFirebaseActive) return;
        const data = snapshot.val();
        if (data) {
          const validated = ensureArray(data);
          this._items = validated;
          safeStorage.setItem("saman_items", JSON.stringify(validated));
          this.triggerUpdate();
        }
      },
      error => {
        console.warn("Saman DB: Items sync read error (permission denied). Using local copy.", error);
        this.disableFirebase();
      }
    );
  },

  // Utility helper to convert files to base64 with compression/resizing
  // so they fit comfortably in LocalStorage or Realtime Database limits
  compressAndConvertImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 400; // Keep image width low for menu items/categories
          const MAX_HEIGHT = 400;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Convert to jpeg with 0.7 quality to keep size small
          const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = event.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
};

// Auto-init on script load
DB.init();
