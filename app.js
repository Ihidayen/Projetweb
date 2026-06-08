// =============================================
//  NOCTURNE — app.js
//  Menu interactif + panier + recherche
// =============================================

// ── Données du menu ──────────────────────────────────────────────
const menuData = [
  // ── Plats ──
  { id: 1,  name: "Entrecôte grillée",                             category: "plats", price: 28.50, description: "Viande maturée 30 jours, sauce béarnaise, frites maison",                                                                                   emoji: "🥩", recommended: true  },
  { id: 2,  name: "Filet de saumon",                               category: "plats", price: 24.00, description: "Saumon fumé à froid, légumes de saison, citron confit",                                                                                      emoji: "🐟", recommended: true  },
  { id: 3,  name: "Risotto aux truffes",                           category: "plats", price: 22.00, description: "Riz Arborio, copeaux de truffe noire, parmesan 24 mois",                                                                                     emoji: "🍚", recommended: false },
  { id: 4,  name: "Magret de canard",                              category: "plats", price: 26.50, description: "Magret rosé, sauce aux cerises, purée de céleri",                                                                                            emoji: "🍖", recommended: true  },
  { id: 101,name: "Wagyu A5 Japonais Grillé au Charbon Binchotan", category: "plats", price: 180.00,description: "Un steak de Wagyu A5, grillé à la perfection sur charbon binchotan, offrant une tendreté exceptionnelle et des saveurs intenses.",           emoji: "🥩", recommended: true  },
  { id: 102,name: "Ravioles Fines Farcies au Crabe Royal",         category: "plats", price: 160.00,description: "Ravioles délicates farcies au crabe royal, émulsion de sauce d'oursin et caviar Osciètre sur beurre blanc citronné.",                        emoji: "🦀", recommended: true  },
  { id: 103,name: "Médaillon de Volaille au Velouté Rouge",        category: "plats", price: 68.00, description: "Médaillon de volaille fermière, coulis de tomate confite aux câpres, écrasé de pommes de terre à la truffe blanche et légumes grillés.",     emoji: "🍗", recommended: false },
  { id: 104,name: "Crevettes Bleues Impériales en Glaçon de Mer",  category: "plats", price: 135.00,description: "Langoustines géantes d'eau douce sur glace fumée, persil frais et réduction de jus de crustacé infusé à la bière artisanale.",              emoji: "🦐", recommended: true  },
  { id: 105,name: "Entrecôte Wagyu A5, Sauce Bordelaise",          category: "plats", price: 180.00,description: "Tranche fondante d'entrecôte Wagyu A5, saisie à feu vif, accompagnée d'une sauce bordelaise au vin vieux.",                                  emoji: "🥩", recommended: false },
  { id: 106,name: "Côte de Bœuf Black Angus Maturée 45 Jours",    category: "plats", price: 110.00,description: "Côte de bœuf grillée sur braises de chêne, servie avec maïs rôti au beurre fumé et tranches d'ananas grillées.",                             emoji: "🥩", recommended: true  },
  { id: 107,name: "Carré d'Agneau Grillé aux Herbes Sauvages",     category: "plats", price: 275.00,description: "Pièce tendre de steak d'agneau grillée, infusée aux herbes sauvages, jus corsé réduit aux échalotes confites.",                              emoji: "🍖", recommended: true  },
  { id: 108,name: "Tartare de Thon Asiatique",                     category: "plats", price: 180.00,description: "Tartare de thon frais accompagné d'endives belges croquantes, parfaitement assaisonné pour un équilibre subtil.",                            emoji: "🐟", recommended: false },
  { id: 109,name: "Tartare de King Fish",                          category: "plats", price: 145.00,description: "Tartare de King Fish accompagné de caviar exquis, sublimé par une sauce gribiche maison.",                                                   emoji: "🐠", recommended: true  },
  { id: 110,name: "Le Bayaldi",                                    category: "plats", price: 95.00, description: "Légumes méditerranéens cuits lentement : tomates, aubergines, courgettes, oignons caramélisés et herbes aromatiques.",                       emoji: "🍆", recommended: false },
  { id: 111,name: "Steak de Wagyu Grillé à la Perfection",         category: "plats", price: 250.00,description: "Morceau d'exception de Wagyu A5, saisi à feu vif et cuit lentement, purée de pommes de terre truffée et légumes rôtis.",                    emoji: "🥩", recommended: true  },
  { id: 112,name: "Assiette Dégustation de Grands Crus de Caviar", category: "plats", price: 300.00,description: "Sélection de caviars d'exception : Beluga, Osciètre et Baeri, pour une expérience gastronomique inégalée.",                                  emoji: "🫧", recommended: true  },
  { id: 113,name: "Caviar Beluga avec Blinis Maison",              category: "plats", price: 250.00,description: "Caviar Beluga servi avec blinis maison et crème fraîche d'Isigny, pour une entrée raffinée et luxueuse.",                                    emoji: "🫧", recommended: false },

  // ── Burgers ──
  { id: 5,  name: "Black Angus Burger",                            category: "burger", price: 18.00, description: "Bœuf Black Angus, cheddar affiné, pickles, sauce maison",                                                        emoji: "🍔", recommended: true  },
  { id: 6,  name: "Smash Burger Double",                           category: "burger", price: 20.00, description: "Double steak smashé, oignons caramélisés, bacon croustillant",                                                   emoji: "🍔", recommended: false },
  { id: 7,  name: "Veggie Burger",                                 category: "burger", price: 15.50, description: "Galette de quinoa & lentilles, avocat, tomate séchée",                                                           emoji: "🥗", recommended: false },
  { id: 8,  name: "Truffle Burger",                                category: "burger", price: 22.00, description: "Bœuf Wagyu, fromage de brebis, huile de truffe blanche",                                                         emoji: "🍔", recommended: true  },
  { id: 201,name: "Burger Nocturne",                               category: "burger", price: 22.00, description: "Bœuf charolais, cheddar affiné, oignons confits, sauce maison, pain brioché",                                    emoji: "🍔", recommended: true  },
  { id: 202,name: "Burger Poulet Croustillant",                    category: "burger", price: 20.00, description: "Filet de poulet pané, salade croquante, sauce tartare, pain sésame",                                             emoji: "🍗", recommended: false },
  { id: 203,name: "Burger Raclette",                               category: "burger", price: 21.00, description: "Fromage à raclette fondant, pain moelleux, steak fondant",                                                       emoji: "🧀", recommended: false },
  { id: 204,name: "Burger Sans Gluten",                            category: "burger", price: 19.00, description: "Pain sans gluten, salade, steak, tomate et sauce",                                                               emoji: "🍔", recommended: false },
  { id: 205,name: "Fish Burger au Citron",                         category: "burger", price: 18.00, description: "Filet de poisson pané, sauce tartare, salade, pain brioché",                                                     emoji: "🐟", recommended: false },
  { id: 206,name: "Burger Végétarien aux Pois Chiches",            category: "burger", price: 17.00, description: "Galette de pois chiches, sauce au yaourt, pain moelleux",                                                        emoji: "🌿", recommended: false },
  { id: 207,name: "Burger à l'Œuf Poché, Poulet et Légumes",      category: "burger", price: 20.00, description: "Poulet, œuf poché, légumes frais de printemps, sauce légère",                                                    emoji: "🍳", recommended: false },
  { id: 208,name: "Burger Rustique au Mont d'Or",                  category: "burger", price: 23.00, description: "Fromage Mont d'Or fondant, viande de bœuf, pain rustique",                                                      emoji: "🧀", recommended: true  },
  { id: 209,name: "Burger au Magret de Canard Fumé",               category: "burger", price: 24.00, description: "Magret de canard, sauce aux fruits rouges, pain brioché",                                                        emoji: "🍖", recommended: true  },
  { id: 210,name: "Burger Saumon-Fromage Cottage-Tomates Confites",category: "burger", price: 19.00, description: "Saumon, fromage cottage, tomates confites, pain moelleux",                                                       emoji: "🐟", recommended: false },
  { id: 211,name: "Burger Noir à l'Effiloché de Bœuf Bourguignon",category: "burger", price: 22.00, description: "Effiloché de bœuf bourguignon, pain noir, oignons caramélisés",                                                  emoji: "🍔", recommended: false },
  { id: 212,name: "Burger au Saumon aux Galettes de Pommes de Terre",category:"burger",price: 21.00, description: "Saumon, galette de pommes de terre, sauce tartare",                                                              emoji: "🐟", recommended: false },
  { id: 213,name: "Burger Maison au Bleu d'Auvergne",              category: "burger", price: 22.00, description: "Steak, fromage bleu, oignons confits, pain brioché",                                                             emoji: "🧀", recommended: false },
  { id: 214,name: "Burger au Steak de Quinoa à la Betterave",      category: "burger", price: 18.00, description: "Galette de quinoa et betterave, sauce au yaourt, pain moelleux",                                                 emoji: "🌿", recommended: false },
  { id: 215,name: "Burger au Canard",                              category: "burger", price: 23.00, description: "Viande de canard, sauce aux cerises, pain brioché",                                                              emoji: "🍖", recommended: false },
  { id: 216,name: "Sandwich Burger à l'Ananas",                    category: "burger", price: 19.00, description: "Viande, ananas grillé, sauce sucrée, pain moelleux",                                                             emoji: "🍍", recommended: false },
  { id: 217,name: "Mini Burgers au Coleslaw",                      category: "burger", price: 16.00, description: "Mini burgers avec coleslaw, parfaits pour l'apéritif",                                                           emoji: "🍔", recommended: false },

  // ── Pizzas ──
  { id: 9,  name: "Pizza Margherita",                              category: "pizza", price: 14.00, description: "Tomate San Marzano, mozzarella di bufala, basilic frais",                            emoji: "🍕", recommended: false },
  { id: 10, name: "Pizza Prosciutto",                              category: "pizza", price: 17.50, description: "Jambon de Parme 24 mois, roquette, parmesan, miel de châtaigne",                     emoji: "🍕", recommended: true  },
  { id: 11, name: "Pizza Quattro Formaggi",                        category: "pizza", price: 16.50, description: "Gorgonzola, mozzarella, taleggio, pecorino, noix de Grenoble",                       emoji: "🍕", recommended: false },
  { id: 12, name: "Pizza Nduja",                                   category: "pizza", price: 18.00, description: "Saucisse calabraise épicée, stracciatella, poivrons rôtis",                          emoji: "🍕", recommended: true  },
  { id: 301,name: "Pizza Truffe & Champignons",                    category: "pizza", price: 21.00, description: "Crème de truffe, champignons frais, mozzarella, roquette",                           emoji: "🍄", recommended: true  },
  { id: 302,name: "Pizza Hawaïenne",                               category: "pizza", price: 18.00, description: "Tomate, mozzarella, jambon, ananas",                                                 emoji: "🍍", recommended: false },
  { id: 303,name: "Pizza Pesto Artichaut et Burrata",              category: "pizza", price: 22.00, description: "Pesto, artichauts marinés, burrata crémeuse",                                        emoji: "🍕", recommended: true  },
  { id: 304,name: "Pizza Tomate Fromage",                          category: "pizza", price: 14.00, description: "Sauce tomate, mozzarella, herbes de Provence",                                       emoji: "🍕", recommended: false },
  { id: 305,name: "Pizza Calzone",                                 category: "pizza", price: 19.00, description: "Pâte pliée, mozzarella, jambon, champignons",                                        emoji: "🍕", recommended: false },
  { id: 306,name: "Pizza Bianca",                                  category: "pizza", price: 17.00, description: "Crème, mozzarella, ail, herbes fraîches",                                            emoji: "🍕", recommended: false },
  { id: 307,name: "Pizza Quatre Fromages",                         category: "pizza", price: 20.00, description: "Mozzarella, gorgonzola, parmesan, chèvre",                                          emoji: "🧀", recommended: false },
  { id: 308,name: "Pizza Pesto Poulet",                            category: "pizza", price: 19.00, description: "Pesto, poulet grillé, mozzarella, tomates cerises",                                  emoji: "🍕", recommended: false },
  { id: 309,name: "Pizza Diavola",                                 category: "pizza", price: 18.00, description: "Sauce tomate, mozzarella, salami épicé",                                             emoji: "🌶️", recommended: false },
  { id: 310,name: "Pizza Vegan au Fauxmage de Cajou",              category: "pizza", price: 19.00, description: "Sauce tomate, fauxmage de cajou, légumes grillés",                                   emoji: "🌿", recommended: false },
  { id: 311,name: "Pizza Quatre Saisons",                          category: "pizza", price: 21.00, description: "Artichauts, jambon, olives, champignons",                                            emoji: "🍕", recommended: false },
  { id: 312,name: "Pizza Prosciutto Mozzarella",                   category: "pizza", price: 22.00, description: "Mozzarella, prosciutto, roquette, parmesan",                                         emoji: "🍕", recommended: false },
  { id: 313,name: "Pizza Artichaut Coppa",                         category: "pizza", price: 20.00, description: "Artichauts, coppa, mozzarella, roquette",                                            emoji: "🍕", recommended: false },
  { id: 314,name: "Pizza Sans Gluten",                             category: "pizza", price: 19.00, description: "Base sans gluten, tomates, mozzarella, basilic",                                     emoji: "🍕", recommended: false },
  { id: 315,name: "Pizza Pesto Kale",                              category: "pizza", price: 18.00, description: "Pesto, kale, mozzarella, pignons de pin",                                            emoji: "🌿", recommended: false },
  { id: 316,name: "Pizza Champignons Épinards",                    category: "pizza", price: 19.00, description: "Champignons frais, épinards, mozzarella, crème",                                     emoji: "🍄", recommended: false },
  { id: 317,name: "Pizza Pesto et Fromage de Chèvre",              category: "pizza", price: 20.00, description: "Pesto, fromage de chèvre, tomates séchées",                                          emoji: "🧀", recommended: false },
  { id: 318,name: "Pizza Kale Avocat Oignons Rouges",              category: "pizza", price: 21.00, description: "Kale, avocat, oignons rouges, mozzarella",                                           emoji: "🥑", recommended: false },
  { id: 319,name: "Pizza au Pesto de Kale et Tomates Séchées",     category: "pizza", price: 19.00, description: "Pesto de kale, tomates séchées, mozzarella",                                         emoji: "🌿", recommended: false },
  { id: 320,name: "Pizza Blanche Burrata Pistache",                category: "pizza", price: 22.00, description: "Burrata, pistaches, huile d'olive, roquette",                                        emoji: "🍕", recommended: true  },

  // ── Fruits de mer ──
  { id: 13, name: "Plateau Prestige",                              category: "fruits de mer", price: 55.00,  description: "Huîtres, homard, crevettes royales, tourteau, langoustines",                                                                                      emoji: "🦞", recommended: true  },
  { id: 14, name: "Carpaccio de Saint-Jacques",                    category: "fruits de mer", price: 22.00,  description: "Noix de Saint-Jacques crues, yuzu, caviar Osciètre",                                                                                               emoji: "🐚", recommended: true  },
  { id: 15, name: "Moules Marinières",                             category: "fruits de mer", price: 17.00,  description: "Moules de bouchot, bouillon thaï, coriandre, pain grillé",                                                                                         emoji: "🦪", recommended: false },
  { id: 401,name: "Plateau Royal",                                 category: "fruits de mer", price: 89.00,  description: "Homard, langoustines, huîtres, crevettes, bulots, bigorneaux",                                                                                      emoji: "🦞", recommended: true  },
  { id: 402,name: "Huîtres Fines de Claire (6 pièces)",           category: "fruits de mer", price: 18.00,  description: "Servies avec vinaigre d'échalote et citron",                                                                                                        emoji: "🦪", recommended: false },
  { id: 403,name: "Saumon Cuit Lentement",                        category: "fruits de mer", price: 125.00, description: "Filet de saumon d'exception cuit à basse température, surmonté de caviar Osetra royal et d'une émulsion de raifort.",                               emoji: "🐟", recommended: true  },

  // ── Cocktails ──
  { id: 16, name: "Negroni Nocturne",       category: "cocktail", price: 13.00, description: "Gin Hendrick's, Campari, Vermouth rouge, orange flambée",                                                                                                      emoji: "🍸", recommended: true  },
  { id: 17, name: "Espresso Martini",       category: "cocktail", price: 12.00, description: "Vodka premium, Kahlúa, espresso double, mousse de café",                                                                                                       emoji: "🍹", recommended: true  },
  { id: 18, name: "Midnight Sour",          category: "cocktail", price: 12.50, description: "Whisky fumé, citron, blanc d'œuf, angostura",                                                                                                                  emoji: "🥃", recommended: false },
  { id: 19, name: "Passiflore",             category: "cocktail", price: 11.00, description: "Rhum blanc, fruit de la passion, gingembre, lime, mousse de coco",                                                                                             emoji: "🌺", recommended: false },
  { id: 501,name: "SPICE ROAD",             category: "cocktail", price: 19.00, description: "Saveurs fruitées du rhum, notes épicées du gingembre et citron vert, douceur du miel d'Acacia et fleur d'oranger. Allongé d'eau pétillante.",                 emoji: "🍹", recommended: true  },
  { id: 502,name: "BORÉALIS",              category: "cocktail", price: 19.00, description: "Vodka, fraîcheur du concombre, citron vert et menthe, relevée par le poivre du Penja. Allongé d'eau pétillante.",                                              emoji: "🍸", recommended: false },
  { id: 503,name: "CALICO JACK",           category: "cocktail", price: 15.00, description: "Mélange exotique d'ananas, jus de grenade sanguine et baies de passion.",                                                                                      emoji: "🍹", recommended: false },
  { id: 504,name: "G.A.O",                 category: "cocktail", price: 19.00, description: "Gin, notes sucrées de l'ananas et de la grenade, acidité de la baie de passion et des agrumes orange-citron vert.",                                            emoji: "🍸", recommended: false },
  { id: 505,name: "BOHEMIAN RASPBERRY",    category: "cocktail", price: 19.00, description: "Rhum, framboise, pamplemousse rose, fleurs de Sakura et de Sureau.",                                                                                           emoji: "🍹", recommended: true  },
  { id: 506,name: "VEGETAL STREAM",        category: "cocktail", price: 19.00, description: "Rhum, menthe, citron vert, concombre, poivre blanc du Penja. Allongé d'eau pétillante.",                                                                       emoji: "🌿", recommended: false },
  { id: 507,name: "MARILYN KISS",          category: "cocktail", price: 19.00, description: "Réinterprétation du Cosmopolitan : Vodka, pamplemousse, framboise, fleurs de Sakura et de Sureau.",                                                            emoji: "🍸", recommended: true  },
  { id: 508,name: "READY TO BRUMBLE?",     category: "cocktail", price: 19.00, description: "Gin, fleurs de Sakura et de Sureau, onctuosité de la framboise, acidité du pamplemousse.",                                                                     emoji: "🍹", recommended: false },
  { id: 509,name: "GINGER SNATCH",         category: "cocktail", price: 19.00, description: "Gin épicé au gingembre et citron vert, adouci par la fleur d'oranger et le miel d'Acacia. Allongé d'eau pétillante.",                                          emoji: "🌶️", recommended: false },
  { id: 510,name: "DR.PINEAPPLE",          category: "cocktail", price: 19.00, description: "Rhum, ananas, grenade, baies de passion, orange et citron vert.",                                                                                              emoji: "🍍", recommended: false },
  { id: 511,name: "HERBORIUM",             category: "cocktail", price: 19.00, description: "Concombre et menthe avec le gin, citron vert et poivre blanc du Penja. Allongé d'eau pétillante.",                                                             emoji: "🌿", recommended: false },
  { id: 512,name: "VOD'KALYPSO",           category: "cocktail", price: 19.00, description: "Vodka, jus d'ananas, amande, citron vert et baies de passion.",                                                                                                emoji: "🍹", recommended: false },
  { id: 513,name: "MOSCOW MOON",           category: "cocktail", price: 19.00, description: "Vodka, gingembre épicé, miel et fleur d'oranger. Allongé d'eau pétillante.",                                                                                   emoji: "🌙", recommended: false },
  { id: 514,name: "CREPUSCULE",            category: "cocktail", price: 19.00, description: "Nectar de mangue, nectar d'ananas, jus d'orange et sirop de grenadine.",                                                                                       emoji: "🌅", recommended: false },
  { id: 515,name: "GEISHA SAYS NO!",       category: "cocktail", price: 15.00, description: "Fleur de sakura, fleur de sureau, framboise et jus de pamplemousse. Sans alcool.",                                                                             emoji: "🌸", recommended: false },
  { id: 516,name: "ASTRAL",               category: "cocktail", price: 15.00, description: "Gingembre, fleur d'oranger, miel, notes de citron vert. Allongé d'eau pétillante. Sans alcool.",                                                               emoji: "✨", recommended: false },
  { id: 517,name: "COSMIC GARDEN",        category: "cocktail", price: 15.00, description: "Menthe verte, eau pétillante, concombre, poivre blanc du Penja et jus de citron vert. Sans alcool.",                                                            emoji: "🌿", recommended: false },

  // ── Brunch ──
  { id: 24, name: "Eggs Benedict",                                          category: "brunch", price: 16.00, description: "Œufs pochés, muffin anglais, jambon fumé, sauce hollandaise",                                                                                                                        emoji: "🍳", recommended: true  },
  { id: 25, name: "Açaï Bowl",                                              category: "brunch", price: 13.50, description: "Purée d'açaï, granola artisanal, fruits frais, miel de fleurs",                                                                                                                      emoji: "🫐", recommended: false },
  { id: 26, name: "Pancakes Signature",                                     category: "brunch", price: 14.00, description: "Pancakes japonais fluffy, sirop d'érable fumé, fruits rouges",                                                                                                                       emoji: "🥞", recommended: true  },
  { id: 601,name: "Œufs Bénédicte au Caviar",                              category: "brunch", price: 45.00, description: "Œufs pochés sur muffin anglais grillé, sauce hollandaise et caviar.",                                                                                                                emoji: "🫧", recommended: true  },
  { id: 602,name: "Pancakes aux Fruits Rouges et Sirop d'Érable",          category: "brunch", price: 25.00, description: "Pancakes moelleux garnis de fruits rouges frais, sirop d'érable pur et crème fouettée.",                                                                                              emoji: "🥞", recommended: false },
  { id: 603,name: "Tartines d'Avocat, Chèvre et Burrata à la Truffe",      category: "brunch", price: 38.00, description: "Tartines d'avocat, fromage de chèvre aux herbes, burrata à la truffe, œufs de saumon, furikake japonais.",                                                                           emoji: "🥑", recommended: true  },
  { id: 604,name: "Smoothie Bowl Exotique",                                 category: "brunch", price: 28.00, description: "Base de smoothie aux fruits tropicaux, granola, noix de coco râpée, graines de chia et fruits frais.",                                                                               emoji: "🥥", recommended: false },
  { id: 605,name: "Tartine à la Burrata et Tomates Cerises Confites",       category: "brunch", price: 22.00, description: "Pain de campagne grillé, burrata crémeuse, tomates confites au basilic, filet d'huile d'olive.",                                                                                     emoji: "🍅", recommended: false },
  { id: 606,name: "Œufs Brouillés à la Truffe Noire",                      category: "brunch", price: 40.00, description: "Œufs fermiers brouillés lentement au beurre, copeaux de truffe et pain brioché.",                                                                                                    emoji: "🍳", recommended: true  },
  { id: 607,name: "Crêpes Suzette",                                         category: "brunch", price: 30.00, description: "Crêpes fines flambées au Grand Marnier, sauce orange caramélisée, zestes confits.",                                                                                                  emoji: "🫓", recommended: false },
  { id: 608,name: "Soufflé au Fromage et Herbes Fraîches",                  category: "brunch", price: 35.00, description: "Soufflé aérien au fromage comté affiné, servi avec salade d'herbes.",                                                                                                                emoji: "🧀", recommended: false },
  { id: 609,name: "Macaron Généreux Fourré à la Crème et Fruits Rouges",   category: "brunch", price: 38.00, description: "Grand macaron aux amandes, garni de crème mascarpone et framboises fraîches.",                                                                                                        emoji: "🫐", recommended: false },
  { id: 610,name: "Toast Pain Noir, Fromage de Chèvre et Miel Truffé",     category: "brunch", price: 25.00, description: "Pain noir grillé, chèvre chaud, miel infusé à la truffe et noix grillées.",                                                                                                          emoji: "🍯", recommended: false },

  // ── Desserts ──
  { id: 20, name: "Fondant Noir 75%",             category: "desserts", price: 10.00, description: "Coulant Valrhona, glace vanille Bourbon, éclats de pralin",                                                                emoji: "🍫", recommended: true  },
  { id: 21, name: "Tarte Citron Meringuée",        category: "desserts", price:  9.00, description: "Curd citron vert & yuzu, meringue italienne, sablé breton",                                                               emoji: "🍋", recommended: false },
  { id: 22, name: "Paris-Brest",                   category: "desserts", price:  9.50, description: "Pâte à choux maison, crème pralinée, noisettes torréfiées",                                                               emoji: "🥐", recommended: true  },
  { id: 23, name: "Tiramisu Nocturne",             category: "desserts", price:  8.50, description: "Mascarpone, Marsala, café fort, poudre de cacao de Madagascar",                                                           emoji: "☕", recommended: false },
  { id: 701,name: "Passion Fruit & Chocolat Blanc",category: "desserts", price: 25.00, description: "Purée de fruits de la passion frais, chocolat blanc de qualité, crème épaisse.",                                         emoji: "🍫", recommended: false },
  { id: 702,name: "Tarte Citron Élégante",         category: "desserts", price: 36.00, description: "Pâte sucrée aux amandes, biscuit Joconde citronné, confit de citron, crèmeux citron et zestes confits.",                 emoji: "🍋", recommended: true  },
  { id: 703,name: "Glamour Milk Tart",             category: "desserts", price: 45.00, description: "Croûte sablée bretonne, crème pâtissière vanille, vagues de dulce de leche, feuille d'or 24 carats.",                    emoji: "✨", recommended: true  },
  { id: 704,name: "Vacherin Maracujá",             category: "desserts", price: 30.00, description: "Meringue citronnée, crème fruit de la passion, mousse coco, gelée de mangue, éclats de noix de coco toastée.",           emoji: "🥥", recommended: false },
  { id: 705,name: "Cheesecake Pistache",           category: "desserts", price: 12.00, description: "Base sablée, crème au fromage à la pistache, ganache chocolat blanc, croustillant praliné pistache.",                    emoji: "🍰", recommended: false },
  { id: 706,name: "Fraises, Noix de Coco & Citron Vert", category:"desserts",price:44.00,description:"Cannoli à la noix de coco, crème légère au citron vert, gelée de fraises fraîches, émulsion coco-lime.",               emoji: "🍓", recommended: true  },
  { id: 707,name: "Rhubarbe & Crème Anglaise",     category: "desserts", price: 22.00, description: "Crème anglaise au poivre long, gelée de rhubarbe, sorbet rhubarbe, glace orange & poivre long.",                         emoji: "🍨", recommended: false },
  { id: 708,name: "Dessert Yuzu",                  category: "desserts", price: 18.00, description: "Mousse Yuzu, dacquoise amande-coco, ganache chocolat au lait, gelée de Yuzu.",                                           emoji: "🍋", recommended: false },
  { id: 709,name: "Crème Brûlée Classique",        category: "desserts", price: 18.00, description: "Crème à la vanille Bourbon, caramel torréfié à la minute, option luxe avec poudre d'or comestible.",                    emoji: "🍮", recommended: true  },
  { id: 710,name: "La Dolce Vita",                 category: "desserts", price: 30.00, description: "Ganache café-noisette, feuilletin praliné, sphère de chocolat blanc, soupe de cacao en aérosol.",                        emoji: "☕", recommended: false },
  { id: 711,name: "Coconut & Watermelon",          category: "desserts", price: 41.00, description: "Mousse de noix de coco, panna cotta coco, crumble de lime, gelée d'eau de coco, sorbet pastèque.",                      emoji: "🍉", recommended: false },
  { id: 712,name: "Cups de Cheesecake aux Fraises",category: "desserts", price: 18.00, description: "Base de crumble de biscuits, crème cheesecake, coulis de fraises, garniture de quartiers de fraises.",                  emoji: "🍰", recommended: false },
  { id: 713,name: "Noisettes, Café & Chocolat Noir",category:"desserts", price: 28.00, description: "Noisettes torréfiées, café moulu, chocolat noir 70% cacao minimum.",                                                     emoji: "🍫", recommended: false },
  { id: 714,name: "Rhubarbe, Miel & Framboise",   category: "desserts", price: 40.00, description: "Rhubarbe, framboises, miel, jus de citron.",                                                                              emoji: "🫐", recommended: false },
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
