// =============================================
//  NOCTURNE — app.js
//  Menu interactif + panier + recherche
// =============================================

// ── Données du menu ──────────────────────────────────────────────
const menuData = [
  // Plats
  { id: 1, name: "Entrecôte grillée", category: "plats", price: 28.5, description: "Viande maturée 30 jours, sauce béarnaise, frites maison", emoji: "🥩", recommended: true },
  { id: 2, name: "Filet de saumon", category: "plats", price: 24.0, description: "Saumon fumé à froid, légumes de saison, citron confit", emoji: "🐟", recommended: true },
  { id: 3, name: "Risotto aux truffes", category: "plats", price: 22.0, description: "Riz Arborio, copeaux de truffe noire, parmesan 24 mois", emoji: "🍚", recommended: false },
  { id: 4, name: "Magret de canard", category: "plats", price: 26.5, description: "Magret rosé, sauce aux cerises, purée de céleri", emoji: "🍖", recommended: true },

  // Burgers
  { id: 5, name: "Black Angus Burger", category: "burger", price: 18.0, description: "Bœuf Black Angus, cheddar affiné, pickles, sauce maison", emoji: "🍔", recommended: true },
  { id: 6, name: "Smash Burger Double", category: "burger", price: 20.0, description: "Double steak smashé, oignons caramélisés, bacon croustillant", emoji: "🍔", recommended: false },
  { id: 7, name: "Veggie Burger", category: "burger", price: 15.5, description: "Galette de quinoa & lentilles, avocat, tomate séchée", emoji: "🥗", recommended: false },
  { id: 8, name: "Truffle Burger", category: "burger", price: 22.0, description: "Bœuf Wagyu, fromage de brebis, huile de truffe blanche", emoji: "🍔", recommended: true },

  // Pizzas
  { id: 9, name: "Pizza Margherita", category: "pizza", price: 14.0, description: "Tomate San Marzano, mozzarella di bufala, basilic frais", emoji: "🍕", recommended: false },
  { id: 10, name: "Pizza Prosciutto", category: "pizza", price: 17.5, description: "Jambon de Parme 24 mois, roquette, parmesan, miel de châtaigne", emoji: "🍕", recommended: true },
  { id: 11, name: "Pizza Quattro Formaggi", category: "pizza", price: 16.5, description: "Gorgonzola, mozzarella, taleggio, pecorino, noix de Grenoble", emoji: "🍕", recommended: false },
  { id: 12, name: "Pizza Nduja", category: "pizza", price: 18.0, description: "Saucisse calabraise épicée, stracciatella, poivrons rôtis", emoji: "🍕", recommended: true },

  // Fruits de mer
  { id: 13, name: "Plateau Prestige", category: "fruits de mer", price: 55.0, description: "Huîtres, homard, crevettes royales, tourteau, langoustines", emoji: "🦞", recommended: true },
  { id: 14, name: "Carpaccio de Saint-Jacques", category: "fruits de mer", price: 22.0, description: "Noix de Saint-Jacques crues, yuzu, caviar Osciètre", emoji: "🐚", recommended: true },
  { id: 15, name: "Moules Marinières", category: "fruits de mer", price: 17.0, description: "Moules de bouchot, bouillon thaï, coriandre, pain grillé", emoji: "🦪", recommended: false },

  // Cocktails
  { id: 16, name: "Negroni Nocturne", category: "cocktail", price: 13.0, description: "Gin Hendrick's, Campari, Vermouth rouge, orange flambée", emoji: "🍸", recommended: true },
  { id: 17, name: "Espresso Martini", category: "cocktail", price: 12.0, description: "Vodka premium, Kahlúa, espresso double, mousse de café", emoji: "🍹", recommended: true },
  { id: 18, name: "Midnight Sour", category: "cocktail", price: 12.5, description: "Whisky fumé, citron, blanc d'œuf, angostura", emoji: "🥃", recommended: false },
  { id: 19, name: "Passiflore", category: "cocktail", price: 11.0, description: "Rhum blanc, fruit de la passion, gingembre, lime, mousse de coco", emoji: "🌺", recommended: false },

  // Desserts
  { id: 20, name: "Fondant Noir 75%", category: "desserts", price: 10.0, description: "Coulant Valrhona, glace vanille Bourbon, éclats de pralin", emoji: "🍫", recommended: true },
  { id: 21, name: "Tarte Citron Meringuée", category: "desserts", price: 9.0, description: "Curd citron vert & yuzu, meringue italienne, sablé breton", emoji: "🍋", recommended: false },
  { id: 22, name: "Paris-Brest", category: "desserts", price: 9.5, description: "Pâte à choux maison, crème pralinée, noisettes torréfiées", emoji: "🥐", recommended: true },
  { id: 23, name: "Tiramisu Nocturne", category: "desserts", price: 8.5, description: "Mascarpone, Marsala, café fort, poudre de cacao de Madagascar", emoji: "☕", recommended: false },

  // Brunch
  { id: 24, name: "Eggs Benedict", category: "brunch", price: 16.0, description: "Œufs pochés, muffin anglais, jambon fumé, sauce hollandaise", emoji: "🍳", recommended: true },
  { id: 25, name: "Açaï Bowl", category: "brunch", price: 13.5, description: "Purée d'açaï, granola artisanal, fruits frais, miel de fleurs", emoji: "🫐", recommended: false },
  { id: 26, name: "Pancakes Signature", category: "brunch", price: 14.0, description: "Pancakes japonais fluffy, sirop d'érable fumé, fruits rouges", emoji: "🥞", recommended: true },
];

// ── État global ───────────────────────────────────────────────────
let cart = {};
let currentCategory = "all";
let currentPage = 1;
const ITEMS_PER_PAGE = 6;
let currentSearchQuery = "";

// ── Helpers ───────────────────────────────────────────────────────
function getFilteredItems() {
  let items = menuData;
  if (currentCategory !== "all") {
    items = items.filter((i) => i.category === currentCategory);
  }
  if (currentSearchQuery.trim() !== "") {
    const q = currentSearchQuery.trim().toLowerCase();
    items = items.filter(
      (i) =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
    );
  }
  return items;
}

function cartTotal() {
  return Object.values(cart).reduce((sum, { item, qty }) => sum + item.price * qty, 0);
}

function cartCount() {
  return Object.values(cart).reduce((sum, { qty }) => sum + qty, 0);
}

// ── Rendu : Recommandations ───────────────────────────────────────
function renderHighlights() {
  const wrapper = document.getElementById("highlight-wrapper");
  const highlights = menuData.filter((i) => i.recommended);
  wrapper.innerHTML = highlights
    .map(
      (item) => `
    <div class="highlight-card" data-id="${item.id}">
      <div class="highlight-emoji">${item.emoji}</div>
      <div class="highlight-info">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="highlight-footer">
          <span class="highlight-price">${item.price.toFixed(2)} €</span>
          <button class="btn-add-highlight" data-id="${item.id}">
            <ion-icon name="add-circle-outline"></ion-icon> Ajouter
          </button>
        </div>
      </div>
      <span class="badge-recommend">★ Recommandé</span>
    </div>`
    )
    .join("");

  wrapper.querySelectorAll(".btn-add-highlight").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });

  // Scroll horizontal highlights
  setupArrows(".back", ".next", wrapper);
}

// ── Rendu : Cartes menu ───────────────────────────────────────────
function renderMenu() {
  const detailWrapper = document.getElementById("detail-wrapper");
  const filtered = getFilteredItems();
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  if (currentPage > totalPages) currentPage = 1;

  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (paginated.length === 0) {
    detailWrapper.innerHTML = `<div class="no-results">
      <ion-icon name="search-outline"></ion-icon>
      <p>Aucun résultat pour « ${currentSearchQuery || currentCategory} »</p>
    </div>`;
  } else {
    detailWrapper.innerHTML = paginated
      .map((item) => {
        const qty = cart[item.id]?.qty || 0;
        return `
        <div class="detail-card" data-id="${item.id}">
          <div class="detail-emoji">${item.emoji}</div>
          <div class="detail-body">
            <h3 class="detail-name">${item.name}</h3>
            <p class="detail-desc">${item.description}</p>
            <div class="detail-footer">
              <span class="detail-price">${item.price.toFixed(2)} €</span>
              <div class="detail-controls">
                ${
                  qty > 0
                    ? `<button class="btn-qty btn-minus" data-id="${item.id}"><ion-icon name="remove-outline"></ion-icon></button>
                       <span class="qty-badge">${qty}</span>`
                    : ""
                }
                <button class="btn-qty btn-plus" data-id="${item.id}"><ion-icon name="add-outline"></ion-icon></button>
              </div>
            </div>
          </div>
          ${item.recommended ? '<span class="badge-recommend">★</span>' : ""}
        </div>`;
      })
      .join("");
  }

  detailWrapper.querySelectorAll(".btn-plus").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.id)));
  });
  detailWrapper.querySelectorAll(".btn-minus").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.id)));
  });

  renderPagination(totalPages);
}

// ── Pagination ────────────────────────────────────────────────────
function renderPagination(totalPages) {
  const pg = document.getElementById("pagination");
  if (totalPages <= 1) { pg.innerHTML = ""; return; }

  let html = "";
  if (currentPage > 1)
    html += `<button class="page-btn" data-page="${currentPage - 1}"><ion-icon name="chevron-back-outline"></ion-icon></button>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }

  if (currentPage < totalPages)
    html += `<button class="page-btn" data-page="${currentPage + 1}"><ion-icon name="chevron-forward-outline"></ion-icon></button>`;

  pg.innerHTML = html;
  pg.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentPage = Number(btn.dataset.page);
      renderMenu();
      document.querySelector(".main-detail").scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ── Panier ────────────────────────────────────────────────────────
function addToCart(id) {
  const item = menuData.find((i) => i.id === id);
  if (!item) return;
  if (cart[id]) cart[id].qty++;
  else cart[id] = { item, qty: 1 };
  updateCartUI();
  renderMenu();
  flashCartIcon();
}

function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id].qty--;
  if (cart[id].qty <= 0) delete cart[id];
  updateCartUI();
  renderMenu();
}

function deleteFromCart(id) {
  delete cart[id];
  updateCartUI();
  renderMenu();
}

function updateCartUI() {
  document.getElementById("cart-count").textContent = cartCount();
  document.getElementById("cart-total").textContent = cartTotal().toFixed(2);

  const tbody = document.querySelector("#cart-items tbody");
  tbody.innerHTML = Object.values(cart)
    .map(
      ({ item, qty }) => `
    <tr>
      <td>${item.emoji} ${item.name}</td>
      <td>${qty}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${(item.price * qty).toFixed(2)}</td>
      <td><button class="cart-btn cart-add" data-id="${item.id}"><ion-icon name="add-outline"></ion-icon></button></td>
      <td><button class="cart-btn cart-rm" data-id="${item.id}"><ion-icon name="remove-outline"></ion-icon></button></td>
      <td><button class="cart-btn cart-del" data-id="${item.id}"><ion-icon name="trash-outline"></ion-icon></button></td>
    </tr>`
    )
    .join("");

  tbody.querySelectorAll(".cart-add").forEach((b) => b.addEventListener("click", () => { addToCart(Number(b.dataset.id)); }));
  tbody.querySelectorAll(".cart-rm").forEach((b) => b.addEventListener("click", () => { removeFromCart(Number(b.dataset.id)); }));
  tbody.querySelectorAll(".cart-del").forEach((b) => b.addEventListener("click", () => { deleteFromCart(Number(b.dataset.id)); }));
}

function flashCartIcon() {
  const icon = document.getElementById("cart");
  icon.classList.add("cart-flash");
  setTimeout(() => icon.classList.remove("cart-flash"), 400);
}

// ── Filtres catégorie ─────────────────────────────────────────────
function setupFilters() {
  document.querySelectorAll(".filter-card").forEach((card) => {
    card.addEventListener("click", () => {
      document.querySelectorAll(".filter-card").forEach((c) => c.removeAttribute("data-active"));
      card.setAttribute("data-active", "true");
      currentCategory = card.dataset.category;
      currentPage = 1;
      currentSearchQuery = "";
      document.getElementById("search-query").value = "";
      renderMenu();
    });
  });
}

// ── Recherche ─────────────────────────────────────────────────────
function setupSearch() {
  const input = document.getElementById("search-query");
  const btn = document.getElementById("search-btn");

  function doSearch() {
    currentSearchQuery = input.value;
    currentCategory = "all";
    currentPage = 1;
    document.querySelectorAll(".filter-card").forEach((c) => c.removeAttribute("data-active"));
    document.querySelector('.filter-card[data-category="all"]').setAttribute("data-active", "true");
    renderMenu();
    document.querySelector(".main-detail").scrollIntoView({ behavior: "smooth" });
  }

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") doSearch(); });

  // Recherche live (debounce 300 ms)
  let debounceTimer;
  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(doSearch, 300);
  });
}

// ── Flèches de scroll horizontal ─────────────────────────────────
function setupArrows(backSel, nextSel, wrapper) {
  const back = document.querySelector(backSel);
  const next = document.querySelector(nextSel);
  if (!back || !next || !wrapper) return;
  back.addEventListener("click", () => wrapper.scrollBy({ left: -280, behavior: "smooth" }));
  next.addEventListener("click", () => wrapper.scrollBy({ left: 280, behavior: "smooth" }));
}

// ── Popup panier ──────────────────────────────────────────────────
function setupCartPopup() {
  const cartBtn = document.getElementById("cart");
  const popup = document.getElementById("cart-popup");
  const closeBtn = document.getElementById("cart-close");

  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.toggle("visible");
  });
  closeBtn.addEventListener("click", () => popup.classList.remove("visible"));
  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== cartBtn && !cartBtn.contains(e.target)) {
      popup.classList.remove("visible");
    }
  });
}

// ── Popup utilisateur ─────────────────────────────────────────────
function setupUserPopup() {
  const userBtn = document.getElementById("user");
  const popup = document.getElementById("user-popup");

  userBtn.addEventListener("click", (e) => {
    e.preventDefault();
    popup.classList.toggle("visible");
  });
  document.addEventListener("click", (e) => {
    if (!popup.contains(e.target) && e.target !== userBtn && !userBtn.contains(e.target)) {
      popup.classList.remove("visible");
    }
  });
}

// ── Menu latéral mobile ───────────────────────────────────────────
function setupSidebarToggle() {
  const toggle = document.querySelector(".menu-toggle");
  const sidebar = document.querySelector(".sidebar");
  toggle?.addEventListener("click", () => sidebar.classList.toggle("open"));
}

// ── Flèches catégories ────────────────────────────────────────────
function setupFilterArrows() {
  setupArrows(".back-menus", ".next-menus", document.querySelector(".filter-wrapper"));
}

// ── Init ──────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderHighlights();
  renderMenu();
  setupFilters();
  setupSearch();
  setupCartPopup();
  setupUserPopup();
  setupSidebarToggle();
  setupFilterArrows();
  updateCartUI();
});
