export const restaurants = [
    {
      id: 0,
      name: "L'Échappée",
      address: "9 rue de Paris, 75005 Paris",
      description_short: "Un moment à part",
      description_long:
        "L'Échappée réunit tous les critères pour un repas réussi : une cuisine gastronomique, récompensée d'une étoile au Guide Michelin, et une vue légendaire sur la célèbre cathédrale de Notre-Dame. Que demander de plus ?",
      img: "/assets/l'échappée.webp"
      /*"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg-3.journaldesfemmes.fr%2FH20vVHBaJmY2sDsnU2QmOldtvNI%3D%2F1500x%2Fsmart%2Fe215672b6c2c4199accb23e4406c5967%2Fccmcms-jdf%2F32506409.jpg&imgrefurl=https%3A%2F%2Fcuisine.journaldesfemmes.fr%2Fchefs-et-gastronomie%2F2786813-le-top-10-des-meilleurs-restaurants-avec-vue-a-paris%2F&tbnid=klNLrfmN6L_JzM&vet=12ahUKEwiIoLTX85n9AhVzSKQEHcp1DigQMygGegUIARDpAQ..i&docid=2OHHy64Of6XPgM&w=1500&h=1000&q=restaurants&ved=2ahUKEwiIoLTX85n9AhVzSKQEHcp1DigQMygGegUIARDpAQ"*/,
      menu: {
        entrees: ["Terrine de foie gras de canard, gelée de Sauternes et chutney de figues", "Ceviche de Saint-Jacques, mangue et avocat"],
        dishes: ["Filet de boeuf Rossini, pommes Pont-Neuf et sauce au vin rouge", "Dos de cabillaud rôti, risotto aux écrevisses et bisque de homard", "Suprême de pintade fermière, gratin de topinambours et jus truffé"],
        deserts: ["Soufflé chaud au Grand Marnier, glace vanille Bourbon", "Tarte fine aux pommes, crème légère à la vanille"],
      },
    },
    {
        id: 1,
        name: "Le Balto",
        address: "15 Rue Mazarine, 75006 Paris",
        description_short: "Brasserie parisienne",
        description_long:
          "Soupe à l'oignon, charcuterie et steaks servis dans une brasserie haut de gamme avec des salles décorées dans des styles différents.",
        img: "/assets/le balto.png"
        /*"https://www.google.com/maps/uv?pb=!1s0x47e671d8b9183cef:0x999004ac679e6812!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPLd5qp49GeRegeQVn4k65QcVF0UBSl5YMCKVDY%3Dw520-h350-n-k-no!5sme+balto+-+Recherche+Google!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPLd5qp49GeRegeQVn4k65QcVF0UBSl5YMCKVDY&hl=fr&sa=X&ved=2ahUKEwiRtump-5n9AhXEVaQEHdKxDzMQ7ZgBKAB6BAgUEAI"*/,
        menu: {
          entrees: ["Œufs mimosa à l'ancienne", "Salade de chèvre chaud sur lit de mesclun"],
          dishes: ["Confit de canard et ses pommes de terre sarladaises", "Steak-frites, sauce béarnaise", "Tartare de boeuf coupé au couteau, pommes grenaille et salade verte"],
          deserts: ["Tarte au citron meringuée", "Profiteroles au chocolat chaud"],
        },
      },
    {
        id: 2,
        name: "Higuma",
        address: "32bis Rue Sainte-Anne, 75001 Paris",
        description_short: "Cuisine japonaise, cadre à l'ambiance détendue",
        description_long:
          "Restaurant japonais de style décontracté servant ramens, plats sautés et donburis, accompagnés de bière et de saké.",
        img:  "/assets/higuma.png"
        /*"https://www.google.com/maps/uv?pb=!1s0x47e66e3acb056675:0xfe3f9961811e978c!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOgTJjdnpMoYT6XXw1LbLRmfNZqmGqRPUsWYDtx%3Dw520-h350-n-k-no!5shiguma+paris+-+Recherche+Google!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOgTJjdnpMoYT6XXw1LbLRmfNZqmGqRPUsWYDtx&hl=fr&sa=X&ved=2ahUKEwj34bLi-5n9AhV9TKQEHUP0DrgQ7ZgBKAB6BAgXEAI"*/,
        menu: {
          entrees: ["Gyoza, raviolis grillés à la viande et aux légumes", "Edamame, fèves de soja bouillies et salées"],
          dishes: ["Ramen shoyu, soupe de nouilles au porc, sauce soja et légumes", "Tempura de crevettes et légumes, accompagné de riz", "Donburi de boeuf, bol de riz japonais garni de boeuf tranché, d'oignons et d'oeuf"],
          deserts: ["Mochi glacé, boule de riz gluant fourrée de glace", "Dorayaki, pancake fourré à la pâte de haricot rouge"],
        },
      },
      {
        id: 3,
        name: "Le Bain",
        address: "75bis rue de l'eau, 29000 Quimper",
        description_short: "Familial et végétarien",
        description_long:
          "Pour les amoureux des légumes et des produits de saison, Le Bain est un endroit idéal. Le tout dans un lieu agréable et cosy.",
        img: "/assets/Le bain.jpg"
        /*"https://www.google.com/url?sa=i&url=https%3A%2F%2Fvisitbath.co.uk%2Ffood-and-drink%2Frestaurants&psig=AOvVaw08Wfzs5hb3qcBWRgVTZNFu&ust=1676632167576000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJD28dfzmf0CFQAAAAAdAAAAABAJ"*/,
        menu: {
          entrees: ["Soupe de lentilles corail et lait de coco, servie avec des croûtons de pain aux herbes", "Salade de roquette, avocat et tomates cerises, vinaigrette au citron vert et au miel"],
          dishes: ["Burger végan, galette de haricots rouges, tomates séchées et sauce au pesto, servi avec des frites de patates douces", "Curry de légumes, lait de coco et épices, accompagné de riz basmati et de naan au fromage végétal", "Risotto aux champignons et aux épinards, garni de parmesan végétal"],
          deserts: ["Tarte au citron végane, garnie de crème fouettée au coco", "Brownies végans, servis avec une boule de glace à la vanille de coco"],
        },
      },
    {
      id: 4,
      name: "Au Bascou",
      address: "38 rue Réaumur, 75002 Paris",
      description_short: "Cuisine basque et chaleureuse",
      description_long:
        "Plats basques gastronomiques dans un lieu aux tons chauds et colorés, avec chaises et comptoir en bois.",
      img: "/assets/au bascout.png"
      /*"https://www.google.com/maps/uv?pb=!1s0x47e66e0544d1174f:0xf21ae3437e56ebb!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOdlk8YKbDWmQDZIwkKagRpwDtEEmK_20FhP0mv%3Dw520-h350-n-k-no!5srestaurants+-+Recherche+Google!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOdlk8YKbDWmQDZIwkKagRpwDtEEmK_20FhP0mv&hl=fr&sa=X&ved=2ahUKEwju0sPp-pn9AhUfTKQEHdBqApkQ7ZgBKAB6BAgHEAI"*/,
      menu: {
        entrees: ["Piquillos farcis à la morue et aux légumes", "Salade de tomates, poivrons et oignons rouges, assaisonnée d'une vinaigrette à l'ail et au piment d'Espelette"],
        dishes: ["Axoa de veau, un ragoût de veau haché et de piments doux, servi avec du riz basmati", "Merlu koskera, un plat de poisson avec une sauce à base d'amandes, de vin blanc et de poivrons", "Piperade, un plat de légumes avec des poivrons, des oignons et des tomates, servi avec du jambon de Bayonne et des œufs brouillés"],
        deserts: ["Gâteau basque à la confiture de cerises noires, une tartelette à la pâte sablée et à la garniture de confiture de cerises noires", "Crème brûlée au piment d'Espelette, une crème anglaise aromatisée au piment d'Espelette et caramélisée au sucre roux"],
      },
    },
    {
      id: 5,
      name: "Le Bastringue",
      address: "67 quai de Seine, 75019 Paris",
      description_short: "Brasserie pittoresque de spécialités françaises",
      description_long:
        "Cuisine et boissons de brasserie parisienne classique dans un restaurant établi de longue date avec terrasse au bord du canal.",
      img: "/assets/le bastringue.png"
      /*"https://www.google.com/maps/uv?pb=!1s0x47e66dd0e3eb82df:0x9067c10bed8a820b!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOTX7AS7zZ5qVJWERvy8rru_MA22MXDv5pTAcpE%3Dw520-h350-n-k-no!5sle+bastringue+paris+19+-+Recherche+Google!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOTX7AS7zZ5qVJWERvy8rru_MA22MXDv5pTAcpE&hl=fr&sa=X&ved=2ahUKEwj6gK_J-5n9AhX9TKQEHXkjBxkQ7ZgBKAB6BAgSEAI"*/,
      menu: {
        entrees: ["Escargots de Bourgogne, des escargots cuits au beurre à l'ail et aux herbes, servis dans leur coquille", "Terrine de campagne, une terrine de viande de porc et de foie, servie avec des cornichons et de la moutarde"],
        dishes: ["Coq au vin, un plat de poulet mijoté dans du vin rouge avec des champignons, des oignons et du lard, servi avec des pommes de terre et des carottes glacées", "Steak-frites, un steak de bœuf grillé servi avec des frites croustillantes et une sauce au poivre ou au Roquefort", "Ratatouille provençale, un plat végétarien de légumes d'été mijotés ensemble, tels que des courgettes, des aubergines, des poivrons, des tomates et des oignons, servi avec du riz ou du pain"],
        deserts: ["Crème brûlée à la vanille, une crème anglaise parfumée à la vanille et caramélisée au sucre roux", "Tarte Tatin, une tarte aux pommes renversée, avec des pommes caramélisées et une pâte feuilletée croustillante"],
      },
    },
    {
        id: 6,
        name: "Aux filets bleus",
        address:
          "67 route du Port de Locquémeau Pointe de Sehar, 22300 Trédrez-Locquémeau",
        description_short: "Restaurant de poissons",
        description_long:
          "Aux filets bleus vous accueille pour venir déguster la pêche du jour ! Dans un cadre magnifique avec vue directe sur la mer.",
        img: "/assets/Les filets bleue.png"
        /*"https://www.google.com/maps/uv?pb=!1s0x4813d46038dbc27d:0x41469dae0cd46ea8!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPWYcBjbpnej2FQoHGYsqQmCY1NOA7v5n-0L49z%3Dw520-h350-n-k-no!5sfilets+bleus+-+Recherche+Google!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPWYcBjbpnej2FQoHGYsqQmCY1NOA7v5n-0L49z&hl=fr&sa=X&ved=2ahUKEwjtvb3--pn9AhX2WqQEHVWjAi4Q7ZgBKAB6BAgQEAI"*/,
        menu: {
          entrees: ["Soupe de poissons, une soupe de poisson riche et savoureuse, garnie de croûtons et de rouille", "Tartare de saumon, du saumon frais coupé en petits dés, mélangé avec des herbes, de l'échalote et de l'huile d'olive, servi avec des toasts de pain grillé"],
          dishes: ["Filet de dorade grillé avec une sauce au citron et aux herbes fraîches accompagné de riz basmati et de légumes grillés.", "Poisson du jour cuit en papillote avec des légumes de saison et une sauce à l'ail et au beurre.", "Pavé de saumon grillé avec une sauce hollandaise, servi avec des pommes de terre sautées et des légumes verts vapeur."],
          deserts: ["Carpaccio d'ananas frais avec une sauce au rhum et aux épices douces, garni de feuilles de menthe et de noix de coco râpée.", "Crumble de fruits rouges avec une crème anglaise à la vanille et une boule de glace à la fraise."],
        },
      },
  ];