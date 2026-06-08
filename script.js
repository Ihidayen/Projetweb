// ===========================
// DONNÉES DU MENU - NOCTURNE
// ===========================

const menuData = {
  mains: [
    { name: "Wagyu A5 Japonais Grillé au Charbon Binchotan", description: "Un steak de Wagyu A5, grillé à la perfection sur charbon binchotan, offrant une tendreté exceptionnelle et des saveurs intenses.", price: "180€" },
    { name: "Ravioles Fines Farcies au Crabe Royal", description: "Des ravioles délicates farcies au crabe royal, nappées d'une émulsion de sauce d'oursin et de caviar Osciètre sur beurre blanc citronné.", price: "160€" },
    { name: "Médaillon de Volaille au Velouté Rouge", description: "Médaillon de volaille fermière nappé d'un coulis de tomate confite aux câpres, servi avec écrasé de pommes de terre à la truffe blanche et légumes grillés.", price: "68€" },
    { name: "Crevettes Bleues Impériales en Glaçon de Mer", description: "Langoustines géantes d'eau douce présentées sur glace fumée, accompagnées de persil frais et réduction de jus de crustacé infusé à la bière artisanale.", price: "135€" },
    { name: "Entrecôte Wagyu A5, Sauce Bordelaise", description: "Tranche fondante d'entrecôte Wagyu A5, saisie à feu vif, accompagnée d'une sauce bordelaise au vin vieux.", price: "180€" },
    { name: "Côte de Bœuf Black Angus Maturée 45 Jours", description: "Côte de bœuf grillée sur braises de chêne, servie avec maïs rôti au beurre fumé et tranches d'ananas grillées.", price: "110€" },
    { name: "Carré d'Agneau Grillé aux Herbes Sauvages", description: "Pièce tendre de steak d'agneau grillée, infusée aux herbes sauvages, accompagnée d'un jus corsé réduit aux échalotes confites.", price: "275€" },
    { name: "Tartare de Thon Asiatique", description: "Tartare de thon frais accompagné d'endives belges croquantes, parfaitement assaisonné pour un équilibre subtil.", price: "180€" },
    { name: "Tartare de King Fish", description: "Tartare de King Fish accompagné de caviar exquis, sublimé par une sauce gribiche maison pour une expérience gustative mémorable.", price: "145€" },
    { name: "Le Bayaldi", description: "Assortiment de légumes méditerranéens cuits lentement, avec tomates, aubergines et courgettes, rehaussés d'oignons caramélisés et d'herbes aromatiques.", price: "95€" },
    { name: "Steak de Wagyu Grillé à la Perfection", description: "Morceau d'exception de Wagyu A5, saisi à feu vif et cuit lentement, accompagné d'une purée de pommes de terre truffée et de légumes rôtis.", price: "250€" },
    { name: "Assiette Dégustation de Grands Crus de Caviar", description: "Sélection de caviars d'exception : Beluga, Osciètre et Baeri, pour une expérience gastronomique inégalée.", price: "300€" },
    { name: "Caviar Beluga avec Blinis Maison", description: "Caviar Beluga servi avec blinis maison et crème fraîche d'Isigny, pour une entrée raffinée et luxueuse.", price: "250€" },
  ],

  burgers: [
    { name: "Burger Nocturne", description: "Bœuf charolais, cheddar affiné, oignons confits, sauce maison, pain brioché", price: "22€" },
    { name: "Burger Poulet croustillant", description: "Filet de poulet pané, salade croquante, sauce tartare, pain sésame", price: "20€" },
    { name: "Burger Raclette", description: "Fromage à raclette fondant, pain moelleux, steak fondant", price: "21€" },
    { name: "Burger Sans Gluten", description: "Pain sans gluten, salade, steak, tomate et sauce", price: "19€" },
    { name: "Fish Burger au Citron", description: "Filet de poisson pané, sauce tartare, salade, pain brioché", price: "18€" },
    { name: "Burger Végétarien aux Pois Chiches", description: "Galette de pois chiches, sauce au yaourt, pain moelleux", price: "17€" },
    { name: "Burger à l'œuf Poché, Poulet et Légumes de Printemps", description: "Poulet, œuf poché, légumes frais, sauce légère", price: "20€" },
    { name: "Burger Rustique au Mont d'Or", description: "Fromage Mont d'Or fondant, viande de bœuf, pain rustique", price: "23€" },
    { name: "Burger au Magret de Canard Fumé", description: "Magret de canard, sauce aux fruits rouges, pain brioché", price: "24€" },
    { name: "Burger Saumon-Fromage Cottage-Tomates Confites et Salade", description: "Saumon, fromage cottage, tomates confites, pain moelleux", price: "19€" },
    { name: "Burger Noir à l'Effiloché de Bœuf Bourguignon", description: "Effiloché de bœuf bourguignon, pain noir, oignons caramélisés", price: "22€" },
    { name: "Burger au Saumon aux Galettes de Pommes de Terre", description: "Saumon, galette de pommes de terre, sauce tartare", price: "21€" },
    { name: "Burger Maison au Bleu d'Auvergne", description: "Steak, fromage bleu, oignons confits, pain brioché", price: "22€" },
    { name: "Burger au Steak de Quinoa à la Betterave", description: "Galette de quinoa et betterave, sauce au yaourt, pain moelleux", price: "18€" },
    { name: "Burger au Canard", description: "Viande de canard, sauce aux cerises, pain brioché", price: "23€" },
    { name: "Sandwich Burger à l'Ananas", description: "Viande, ananas grillé, sauce sucrée, pain moelleux", price: "19€" },
    { name: "Mini Burgers au Coleslaw", description: "Mini burgers avec coleslaw, parfaits pour l'apéritif", price: "16€" },
  ],

  pizzas: [
    { name: "Pizza Margherita", description: "Tomate, mozzarella di bufala, basilic frais", price: "16€" },
    { name: "Pizza Truffe & Champignons", description: "Crème de truffe, champignons frais, mozzarella, roquette", price: "21€" },
    { name: "Pizza Hawaïenne", description: "Tomate, mozzarella, jambon, ananas", price: "18€" },
    { name: "Pizza Pesto Artichaut et Burrata", description: "Pesto, artichauts marinés, burrata crémeuse", price: "22€" },
    { name: "Pizza Tomate Fromage", description: "Sauce tomate, mozzarella, herbes de Provence", price: "14€" },
    { name: "Pizza Calzone", description: "Pâte pliée, mozzarella, jambon, champignons", price: "19€" },
    { name: "Pizza Bianca", description: "Crème, mozzarella, ail, herbes fraîches", price: "17€" },
    { name: "Pizza Quatre Fromages", description: "Mozzarella, gorgonzola, parmesan, chèvre", price: "20€" },
    { name: "Pizza Pesto Poulet", description: "Pesto, poulet grillé, mozzarella, tomates cerises", price: "19€" },
    { name: "Pizza Diavola", description: "Sauce tomate, mozzarella, salami épicé", price: "18€" },
    { name: "Pizza Vegan au Fauxmage de Cajou", description: "Sauce tomate, fauxmage de cajou, légumes grillés", price: "19€" },
    { name: "Pizza Quatre Saisons", description: "Artichauts, jambon, olives, champignons", price: "21€" },
    { name: "Pizza Prosciutto Mozzarella", description: "Mozzarella, prosciutto, roquette, parmesan", price: "22€" },
    { name: "Pizza Artichaut Coppa", description: "Artichauts, coppa, mozzarella, roquette", price: "20€" },
    { name: "Pizza Sans Gluten", description: "Base sans gluten, tomates, mozzarella, basilic", price: "19€" },
    { name: "Pizza Pesto Kale", description: "Pesto, kale, mozzarella, pignons de pin", price: "18€" },
    { name: "Pizza Champignons Épinards", description: "Champignons frais, épinards, mozzarella, crème", price: "19€" },
    { name: "Pizza Pesto et Fromage de Chèvre", description: "Pesto, fromage de chèvre, tomates séchées", price: "20€" },
    { name: "Pizza Kale Avocat Oignons Rouges", description: "Kale, avocat, oignons rouges, mozzarella", price: "21€" },
    { name: "Pizza au Pesto de Kale et Tomates Séchées", description: "Pesto de kale, tomates séchées, mozzarella", price: "19€" },
    { name: "Pizza Blanche Burrata Pistache", description: "Burrata, pistaches, huile d'olive, roquette", price: "22€" },
  ],

  seafood: [
    { name: "Plateau Royal", description: "Homard, langoustines, huîtres, crevettes, bulots, bigorneaux", price: "89€" },
    { name: "Huîtres fines de claire (6 pièces)", description: "Servies avec vinaigre d'échalote et citron", price: "18€" },
    { name: "Saumon Cuit Lentement", description: "Un filet de saumon d'exception, délicatement cuit à basse température, surmonté de caviar Osetra royal et d'une émulsion de raifort.", price: "125€" },
  ],

  cocktails: [
    { name: "SPICE ROAD", description: "Un cocktail rafraîchissant qui associe les saveurs fruitées du rhum, les notes épicées du gingembre et du citron vert, avec la douceur du miel d'Acacia et de la fleur d'oranger. Allongé d'eau pétillante.", price: "19€" },
    { name: "BORÉALIS", description: "La pureté de la Vodka associée à la fraîcheur du concombre, du citron vert et de la menthe, relevée par une piquante de poivre du Penja. Allongé d'eau pétillante.", price: "19€" },
    { name: "CALICO JACK", description: "Mélange exotique d'ananas, de jus d'une grenade sanguine et de quelques baies de passion vibrantes.", price: "15€" },
    { name: "G.A.O", description: "Un mélange exotique alliant la fraîcheur du gin avec les notes sucrées de l'ananas et de la grenade et une touche d'acidité avec la baie de passion et les agrumes orange-citron vert.", price: "19€" },
    { name: "BOHEMIAN RASPBERRY", description: "Un mélange rafraîchissant alliant les notes fruitées du rhum, sucrées de la framboise et acides du pamplemousse rose, avec les fleurs de Sakura et de Sureau.", price: "19€" },
    { name: "VEGETAL STREAM", description: "Association délicate du rhum avec la fraîcheur de la menthe, du citron vert et du concombre, une note finale de poivre blanc du Penja vient parfaire l'ensemble. Allongé d'eau pétillante.", price: "19€" },
    { name: "MARILYN KISS", description: "Véritable réinterprétation du légendaire Cosmopolitan, ce cocktail associe la fraîcheur de la Vodka à l'acidité du pamplemousse et aux notes subtiles sucrées de la framboise et des fleurs de Sakura et de Sureau.", price: "19€" },
    { name: "READY TO BRUMBLE?", description: "Le caractère du gin associé à la délicatesse des fleurs de Sakura et de Sureau, l'onctuosité de la framboise, le tout relevé par l'acidité du pamplemousse.", price: "19€" },
    { name: "GINGER SNATCH", description: "L'heureux mélange épicé du Gin avec le gingembre et le citron vert, adouci par la délicatesse de la fleur d'oranger et du miel d'Acacia. Allongé d'eau pétillante.", price: "19€" },
    { name: "DR.PINEAPPLE", description: "Un concentré de saveurs tropicales dans un Punch revisité associant l'onctuosité du rhum avec les notes exotiques de l'ananas, de la grenade, des baies de passion et l'acidité de l'orange et du citron vert.", price: "19€" },
    { name: "HERBORIUM", description: "Une création herbacée rafraîchissante qui associe concombre et menthe avec le gin, le tout relevé par l'acidité du citron vert et le poivre blanc du Penja. Allongé d'eau pétillante.", price: "19€" },
    { name: "VOD'KALYPSO", description: "Onctuosité de la vodka et du jus d'ananas associée à la douceur de l'amande et l'exotisme du citron vert et des baies de passion pour un cocktail ensoleillé.", price: "19€" },
    { name: "MOSCOW MOON", description: "Ce cocktail couleur de lune mêle la naturalité de la Vodka au caractère épicé du gingembre avec un rayon de miel pour la douceur et les notes délicates de la fleur d'oranger. Allongé d'eau pétillante.", price: "19€" },
    { name: "CREPUSCULE", description: "Le mariage d'un nectar de mangue, nectar d'ananas, jus d'orange et une note de sirop de grenadine.", price: "19€" },
    { name: "GEISHA SAYS NO!", description: "La délicatesse de la fleur de sakura associée au raffinement de la fleur de sureau, l'onctuosité de la framboise et l'éclat du jus de pamplemousse.", price: "15€" },
    { name: "ASTRAL", description: "L'énergique gingembre associé à la douceur de la fleur d'oranger est réhaussée d'une touche de miel. Notes de citron vert et allongé d'eau pétillante.", price: "15€" },
    { name: "COSMIC GARDEN", description: "Mariage de feuilles de menthe verte, eau pétillante et notes de concombre, cueillette de poivre blanc du Penja et jus de citron vert.", price: "15€" },
  ],

  brunch: [
    { name: "Œufs Bénédicte au Caviar", description: "Œufs pochés servis sur un muffin anglais grillé, nappés de sauce hollandaise et garnis de caviar.", price: "45€" },
    { name: "Pancakes aux Fruits Rouges et Sirop d'Érable", description: "Pancakes moelleux garnis de fruits rouges frais, accompagnés de sirop d'érable pur et de crème fouettée.", price: "25€" },
    { name: "Tartines d'Avocat au Fromage de Chèvre aux Herbes et Burrata à la Truffe", description: "Tartines d'avocat garnies de fromage de chèvre frais aux herbes, burrata à la truffe, œufs de saumon, oignons verts, furikake japonais, jeunes pousses de pois et fleurs de ciboulette.", price: "38€" },
    { name: "Smoothie Bowl Exotique", description: "Base de smoothie aux fruits tropicaux, garnie de granola, noix de coco râpée, graines de chia et fruits frais.", price: "28€" },
    { name: "Tartine à la Burrata et Tomates Cerises Confites", description: "Pain de campagne grillé, burrata crémeuse, tomates confites au basilic, filet d'huile d'olive.", price: "22€" },
    { name: "Œufs Brouillés à la Truffe Noire", description: "Œufs fermiers brouillés lentement au beurre, servis avec copeaux de truffe et pain brioché.", price: "40€" },
    { name: "Crêpes Suzette", description: "Crêpes fines flambées au Grand Marnier, sauce orange caramélisée, zestes confits.", price: "30€" },
    { name: "Soufflé au Fromage et Herbes Fraîches", description: "Soufflé aérien au fromage comté affiné, servi avec salade d'herbes.", price: "35€" },
    { name: "Macaron Généreux Fourré à la Crème et Fruits Rouges", description: "Grand macaron aux amandes, garni de crème mascarpone et framboises fraîches.", price: "38€" },
    { name: "Toast de Pain Noir au Fromage de Chèvre et Miel Truffé", description: "Tranche de pain noir grillé, chèvre chaud, miel infusé à la truffe et noix grillées.", price: "25€" },
  ],

  desserts: [
    { name: "Passion Fruit & Chocolat Blanc", description: "Purée de fruits de la passion frais (6-8 fruits ou 150ml), chocolat blanc de qualité (200g), crème épaisse (100ml).", price: "25€" },
    { name: "Tarte Citron Élégante", description: "Pâte sucrée aux amandes, biscuit Joconde citronné, confit de citron, crèmeux citron et zestes de citron confits.", price: "36€" },
    { name: "Glamour Milk Tart", description: "Croûte sablée bretonne, crème pâtissière vanille, vagues de dulce de leche, feuille d'or 24 carats.", price: "45€" },
    { name: "Vacherin Maracujá", description: "Meringue citronnée, crème fruit de la passion, mousse coco, gelée de mangue, éclats de noix de coco toastée.", price: "30€" },
    { name: "Cheesecake Pistache", description: "Base sablée, crème au fromage à la pistache, ganache chocolat blanc, croustillant praliné pistache.", price: "12€" },
    { name: "Fraises, Noix de Coco & Citron Vert", description: "Cannoli à la noix de coco, crème légère au citron vert, gelée de fraises fraîches, émulsion coco-lime.", price: "44€" },
    { name: "Rhubarbe & Crème Anglaise", description: "Crème anglaise au poivre long, gelée de rhubarbe, sorbet rhubarbe, glace orange & poivre long.", price: "22€" },
    { name: "Dessert Yuzu", description: "Mousse Yuzu, dacquoise amande-coco, ganache chocolat au lait, gelée de Yuzu.", price: "18€" },
    { name: "Crème Brûlée Classique", description: "Crème à la vanille Bourbon, caramel torréfié à la minute, option luxe avec poudre d'or comestible.", price: "18€" },
    { name: "La Dolce Vita", description: "Ganache café-noisette, feuilletin praliné, sphère de chocolat blanc, \"soupe\" de cacao en aérosol.", price: "30€" },
    { name: "Coconut & Watermelon", description: "Mousse de noix de coco, panna cotta de noix de coco, crumble de lime, gelée d'eau de coco, sorbet pastèque.", price: "41€" },
    { name: "Cups de Cheesecake aux Fraises", description: "Base de crumble de biscuits, crème cheesecake, coulis de fraises, garniture de quartiers de fraises.", price: "18€" },
    { name: "Noisettes, Café & Chocolat Noir", description: "Noisettes torréfiées, café moulu, chocolat noir (70% cacao minimum).", price: "28€" },
    { name: "Rhubarbe, Miel & Framboise", description: "Rhubarbe, framboises, miel, jus de citron.", price: "40€" },
  ],
};

// ===========================
// RENDU DYNAMIQUE DU MENU
// ===========================

function renderMenuItems(section, items) {
  const container = document.querySelector(`.menu-section.${section}`);
  if (!container) return;

  // Vider le contenu existant sauf le titre h2
  const title = container.querySelector("h2");
  container.innerHTML = "";
  if (title) container.appendChild(title);

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <div>
        <div class="item-name">${item.name}</div>
        <div class="item-description">${item.description}</div>
      </div>
      <div class="item-price">${item.price}</div>
    `;
    container.appendChild(div);
  });
}

function renderAllMenus() {
  Object.entries(menuData).forEach(([section, items]) => {
    renderMenuItems(section, items);
  });
}

// ===========================
// NAVIGATION PAR ONGLETS
// ===========================

function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".menu-section");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("show"));

      tab.classList.add("active");
      const target = tab.getAttribute("data-tab");
      const targetSection = document.querySelector(`.menu-section.${target}`);
      if (targetSection) targetSection.classList.add("show");
    });
  });
}

// ===========================
// ÉCRAN DE CHARGEMENT
// ===========================

function initLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
  const menuContainer = document.querySelector(".menu-container");

  setTimeout(() => {
    if (loadingScreen) loadingScreen.style.opacity = "0";
    setTimeout(() => {
      if (loadingScreen) loadingScreen.style.display = "none";
      if (menuContainer) menuContainer.classList.remove("hidden");
    }, 500);
  }, 1500);
}

// ===========================
// INITIALISATION
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  renderAllMenus();
  initTabs();
  initLoadingScreen();
});
