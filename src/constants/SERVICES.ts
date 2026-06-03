import type { Service } from "@types/service.types"

export const SERVICES: Service[] = [
  {
    id: "maconnerie",
    nom: "MAÇONNERIE GÉNÉRALE",
    description: "Gros œuvre, fondations, murs porteurs",
    fullDescription: `Notre équipe de maçons qualifiés réalise l'ensemble de vos travaux de maçonnerie générale en Alsace, du gros œuvre jusqu'aux finitions soignées. Forts de plus de 10 ans d'expérience dans le bâtiment, nous intervenons sur tous types de chantiers à Strasbourg, Illkirch-Graffenstaden et dans un rayon de 50 km.

Nous prenons en charge la construction de fondations solides et durables, l'édification de murs porteurs, la création d'ouvertures (portes, fenêtres, baies vitrées), la pose de linteaux et de dalles en béton armé. Chaque intervention est réalisée dans le strict respect des normes DTU en vigueur et des règles de l'art, pour vous garantir un ouvrage pérenne et sécurisé.

Que vous envisagiez une construction neuve, une extension de maison, la réhabilitation d'un bâtiment existant ou des travaux de rénovation, ABASSI BTP vous accompagne de la première pierre jusqu'à la réception du chantier. Notre chef de chantier veille personnellement à la qualité d'exécution et au respect des délais.`,
    image: "https://images.unsplash.com/photo-1597476374792-c9e5bfdca9ff?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Maçons certifiés RGE", detail: "Nos artisans disposent des qualifications professionnelles reconnues par l'État." },
      { titre: "Devis gratuit et détaillé", detail: "Nous établissons un devis précis et transparent sous 48h après visite du chantier." },
      { titre: "Respect des normes DTU", detail: "Tous nos travaux respectent les Documents Techniques Unifiés en vigueur." },
      { titre: "Garantie décennale", detail: "Vous bénéficiez de la garantie décennale obligatoire sur l'ensemble de nos ouvrages." },
    ],
    etapes: [
      { numero: 1, titre: "Étude et devis", description: "Visite gratuite sur site, analyse de vos besoins et remise d'un devis détaillé sous 48h." },
      { numero: 2, titre: "Préparation du chantier", description: "Mise en place du chantier sécurisé, approvisionnement des matériaux et planification des équipes." },
      { numero: 3, titre: "Réalisation des travaux", description: "Exécution des travaux de maçonnerie dans le respect des règles de l'art et des délais convenus." },
      { numero: 4, titre: "Contrôle qualité", description: "Vérification minutieuse de chaque étape et correction immédiate de tout défaut constaté." },
      { numero: 5, titre: "Livraison et réception", description: "Nettoyage du chantier, remise des documents (DOE, garanties) et réception contradictoire." },
    ],
    materiaux: ["Béton armé C25/30", "Parpaings creux et pleins", "Briques monomur", "Pierres naturelles", "Mortier de ciment CEM II", "Acier HA pour ferraillage"],
    faq: [
      { question: "Quel délai pour une extension de maison ?", reponse: "La durée dépend de la surface et de la complexité. Une extension de 30 m² nécessite généralement 6 à 10 semaines de travaux après obtention du permis de construire." },
      { question: "Faut-il un permis de construire pour des travaux de maçonnerie ?", reponse: "Cela dépend de la nature des travaux. Pour une surface inférieure à 20 m² en zone urbaine, une simple déclaration préalable suffit. Au-delà ou si vous êtes en lotissement, un permis de construire est requis. Nous vous guidons dans vos démarches administratives." },
      { question: "Intervenez-vous sur des bâtiments anciens en pierre ?", reponse: "Oui, nous avons une solide expérience de la rénovation de bâtiments anciens, notamment les maisons alsaciennes en colombages et les constructions en grès des Vosges." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Eschau", "Ostwald", "Geispolsheim", "Oberhausbergen", "Schiltigheim", "Hoenheim"],
  },
  {
    id: "ravalement",
    nom: "RAVALEMENT DE FAÇADES",
    description: "Rénovation et embellissement de façades",
    fullDescription: `Le ravalement de façade est une opération essentielle pour préserver la valeur et l'esthétique de votre bâtiment. Obligatoire tous les 10 ans dans certaines communes, il protège votre bien contre l'humidité, les moisissures et les dégradations liées aux intempéries alsaciennes.

ABASSI BTP réalise votre ravalement de façade à Strasbourg et dans toute la région du Bas-Rhin avec soin et expertise. Notre service comprend le nettoyage haute pression, le traitement des fissures et des zones dégradées, l'application d'enduits de protection et la mise en peinture finale.

Nous intervenons sur tous types de façades : crépi (monocouche ou bi-couche), pierre naturelle (grès des Vosges, calcaire), brique, enduit à la chaux, béton. Nous respectons scrupuleusement les réglementations des Architectes des Bâtiments de France (ABF) pour les secteurs protégés et les PLU locaux.`,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Étanchéité renforcée", detail: "Protection optimale contre les pluies et l'humidité fréquentes en Alsace." },
      { titre: "Valorisation immobilière", detail: "Un ravalement soigné peut augmenter la valeur de votre bien de 5 à 15 %." },
      { titre: "Aides financières", detail: "Éligibilité possible aux aides ANAH et MaPrimeRénov pour la rénovation de façade." },
      { titre: "Intervention en hauteur sécurisée", detail: "Utilisation d'échafaudages conformes aux normes CCTP et équipements de protection collectifs." },
    ],
    etapes: [
      { numero: 1, titre: "Diagnostic façade", description: "Analyse visuelle et sondages pour identifier les zones dégradées, fissures, décollements." },
      { numero: 2, titre: "Nettoyage et décapage", description: "Lavage haute pression, élimination des mousses, lichens et anciens enduits décollés." },
      { numero: 3, titre: "Traitement des désordres", description: "Rebouchage des fissures, reprise des joints, traitement anti-humidité si nécessaire." },
      { numero: 4, titre: "Application de l'enduit", description: "Projection ou talochage de l'enduit de finition en une ou deux couches selon le support." },
      { numero: 5, titre: "Finition et peinture", description: "Application de la peinture de façade ou de la teinte dans l'enduit, nettoyage complet." },
    ],
    materiaux: ["Enduit monocouche OC", "Enduit à la chaux naturelle NHL", "Peintures silicone et siloxane", "Résines de traitement", "Produits anti-mousse et anti-cryptogamiques", "Treillis de verre anti-fissures"],
    faq: [
      { question: "À quelle fréquence faut-il ravaler une façade ?", reponse: "En général tous les 10 à 15 ans, mais en Alsace où le climat est rude, nous recommandons un contrôle tous les 8 à 10 ans. Certaines communes imposent le ravalement par arrêté municipal." },
      { question: "Peut-on ravaler en hiver ?", reponse: "Les enduits et peintures de façade ne doivent pas être appliqués en dessous de 5°C. Nous planifions les travaux au printemps ou en été pour garantir une adhérence et un séchage optimaux." },
      { question: "Dois-je informer mes voisins du chantier ?", reponse: "Oui, la pose d'un échafaudage sur la voie publique nécessite une déclaration en mairie et un arrêté de voirie. Nous gérons toutes ces démarches administratives à votre place." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Lingolsheim", "Obernai", "Haguenau", "Sélestat", "Colmar", "Mulhouse"],
  },
  {
    id: "isolation",
    nom: "ISOLATION THERMIQUE ET PHONIQUE",
    description: "Isolation thermique et phonique",
    fullDescription: `L'isolation est l'investissement le plus rentable pour améliorer votre confort et réduire vos factures énergétiques. En Alsace, avec ses hivers rigoureux et ses étés de plus en plus chauds, une bonne isolation est indispensable pour maintenir une température agréable toute l'année.

ABASSI BTP propose des solutions d'isolation thermique et phonique complètes, adaptées à chaque type de bâtiment et chaque budget. Nous intervenons sur l'isolation des combles perdus ou aménagés (la priorité n°1 car 30 % de la chaleur s'échappe par le toit), l'isolation des murs par l'intérieur (ITI) ou par l'extérieur (ITE), et l'isolation des planchers bas sur vide sanitaire.

Notre approche intègre systématiquement une analyse de la performance thermique actuelle de votre logement, un conseil personnalisé sur les matériaux et techniques les plus adaptés, et une aide au montage des dossiers d'aides financières (MaPrimeRénov, CEE, Eco-PTZ).`,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Économies jusqu'à 40 %", detail: "Réduction significative de vos factures de chauffage et de climatisation." },
      { titre: "Aides financières importantes", detail: "MaPrimeRénov, CEE, Eco-PTZ : jusqu'à 90 % du coût pris en charge selon vos revenus." },
      { titre: "Confort acoustique amélioré", detail: "Réduction des nuisances sonores extérieures et entre logements." },
      { titre: "Valorisation du patrimoine", detail: "Amélioration de l'étiquette DPE, critère essentiel pour la vente ou la location." },
    ],
    etapes: [
      { numero: 1, titre: "Audit thermique", description: "Évaluation de la performance énergétique actuelle et identification des points de déperdition." },
      { numero: 2, titre: "Préconisation et devis", description: "Proposition de la solution technique optimale et devis incluant les aides disponibles." },
      { numero: 3, titre: "Préparation des surfaces", description: "Nettoyage, traitement de l'humidité éventuelle, pose des rails ou supports selon la technique." },
      { numero: 4, titre: "Pose de l'isolant", description: "Installation soignée de l'isolant en assurant la continuité et l'absence de ponts thermiques." },
      { numero: 5, titre: "Finition et contrôle", description: "Pose des pare-vapeur, finitions intérieures ou extérieures, test d'infiltrométrie si souhaité." },
    ],
    materiaux: ["Laine de verre ISOVER", "Laine de roche ROCKWOOL", "Ouate de cellulose projetée", "Polystyrène expansé (PSE) graphité", "Polyuréthane projeté", "Panneaux en fibre de bois"],
    faq: [
      { question: "Quelle est la meilleure isolation pour une maison alsacienne ?", reponse: "Pour les maisons à colombages, nous recommandons l'isolation par l'intérieur avec de la laine de bois ou de la ouate de cellulose, pour préserver l'aspect extérieur tout en améliorant les performances thermiques." },
      { question: "L'isolation par l'extérieur (ITE) est-elle adaptée à mon logement ?", reponse: "L'ITE est idéale pour les maisons individuelles de plain-pied ou peu élevées. Elle supprime tous les ponts thermiques et ne réduit pas la surface habitable. Nous évaluons la faisabilité lors de notre visite gratuite." },
      { question: "Quelles aides financières puis-je obtenir ?", reponse: "Selon vos revenus, vous pouvez bénéficier de MaPrimeRénov (jusqu'à 75 % du montant), des Certificats d'Économies d'Énergie (CEE) via votre fournisseur d'énergie, et de l'Eco-PTZ (prêt sans intérêt jusqu'à 50 000 €). Nous constituons les dossiers pour vous." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Eschau", "Fegersheim", "Lipsheim", "Blaesheim", "Geispolsheim", "Ostwald"],
  },
  {
    id: "bardage",
    nom: "BARDAGE",
    description: "Habillage et protection des façades",
    fullDescription: `Le bardage est une solution à la fois esthétique et performante pour habiller, protéger et isoler les façades de votre bâtiment. De plus en plus plébiscité en Alsace pour les constructions contemporaines et les rénovations, il allie durabilité et design moderne.

ABASSI BTP installe tous types de bardages, en s'adaptant à vos goûts, au style architectural de votre bâtiment et aux contraintes du site. Nous réalisons des études préalables pour définir le système le plus adapté (bardage ventilé, isolé ou décoratif), et nous vous proposons différents matériaux selon votre budget et vos objectifs.

Au-delà de son aspect décoratif, le bardage ventilé crée une lame d'air entre le parement et le support, ce qui améliore la ventilation naturelle de la façade, protège l'isolation de l'humidité et prolonge la durée de vie du bâtiment. Associé à une isolation thermique par l'extérieur, il représente la solution la plus performante pour rénover une façade tout en améliorant les performances énergétiques.`,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Esthétique contemporaine", detail: "Large choix de matériaux et de finitions pour personnaliser l'apparence de votre bâtiment." },
      { titre: "Protection maximale", detail: "Le bardage ventilé protège le mur porteur des intempéries et de l'humidité." },
      { titre: "Durabilité exceptionnelle", detail: "Les bardages en composite ou métal ont une durée de vie supérieure à 30 ans sans entretien majeur." },
      { titre: "Combinable avec l'ITE", detail: "Peut être associé à une isolation thermique par l'extérieur pour une rénovation globale performante." },
    ],
    etapes: [
      { numero: 1, titre: "Étude technique", description: "Analyse du support existant, choix du système de fixation et du type de bardage adapté." },
      { numero: 2, titre: "Pose de l'ossature", description: "Installation des rails et tasseaux de support en aluminium ou acier galvanisé." },
      { numero: 3, titre: "Isolation si nécessaire", description: "Mise en place de l'isolant thermique entre l'ossature si ITE combinée." },
      { numero: 4, titre: "Pose du parement", description: "Fixation des lames ou panneaux de bardage avec joints ventilés pour la lame d'air." },
      { numero: 5, titre: "Finitions", description: "Pose des habillages d'angles, des profils de fenêtres et finitions des joints." },
    ],
    materiaux: ["Lames de bardage bois thermochauffé", "Composite bois-polymère (WPC)", "Tôles acier prélaquées", "Panneaux en aluminium composite", "Fibres ciment (Cedral, HardiePlank)", "PVC cellulaire"],
    faq: [
      { question: "Le bardage bois nécessite-t-il beaucoup d'entretien ?", reponse: "Un bardage en bois naturel doit être entretenu tous les 2 à 3 ans (nettoyage et application d'une lasure). Le bois thermochauffé ou le composite bois sont beaucoup plus durables et nécessitent un simple nettoyage annuel." },
      { question: "Peut-on installer un bardage sur tous les types de façades ?", reponse: "Dans la quasi-totalité des cas, oui. Nous adaptons le système de fixation et le type d'ossature au support existant (béton, parpaing, brique, colombages). Certains secteurs historiques peuvent nécessiter une validation ABF." },
      { question: "Quelle est la différence entre bardage ventilé et non ventilé ?", reponse: "Le bardage ventilé laisse une lame d'air entre le parement et le mur, ce qui évacue l'humidité naturellement et prolonge la durée de vie. Il est systématiquement recommandé pour les constructions exposées à l'humidité." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Lingolsheim", "Holtzheim", "Entzheim", "Obernai", "Barr", "Molsheim"],
  },
  {
    id: "terrassement",
    nom: "TERRASSEMENT ET VRD",
    description: "Préparation de terrains et VRD",
    fullDescription: `Le terrassement est la première étape cruciale de tout projet de construction. Un terrassement bien exécuté conditionne la solidité et la pérennité de l'ouvrage à venir. ABASSI BTP dispose du savoir-faire et du matériel nécessaires pour mener à bien vos travaux de terrassement, du petit chantier résidentiel au grand projet commercial.

Nous réalisons l'ensemble des travaux de terrassement en Alsace : décapage de la terre végétale, excavation des fouilles pour fondations, nivellement et mise en forme du terrain, remblaiement contrôlé et compactage aux normes. Notre équipe intervient avec des engins adaptés à chaque configuration : mini-pelle pour les accès difficiles, tractopelle pour les surfaces intermédiaires, ou bull et compacteurs pour les grands chantiers.

Les travaux de VRD (Voirie et Réseaux Divers) complètent souvent le terrassement : création de tranchées pour les réseaux eau, électricité, gaz et télécommunications, pose de canalisations et fourreaux, création de drains et de systèmes d'évacuation des eaux pluviales, construction de voiries d'accès et aires de stationnement.`,
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Matériel professionnel adapté", detail: "Notre parc de machines couvre tous les types de chantiers, des plus petits aux plus complexes." },
      { titre: "Étude géotechnique intégrée", detail: "Nous tenons compte de la nature du sol pour adapter notre méthode et éviter tout tassement différentiel." },
      { titre: "Gestion des terres et déchets", detail: "Évacuation et valorisation des terres en décharge agréée, respect de la réglementation environnementale." },
      { titre: "Coordination avec les concessionnaires", detail: "Gestion des demandes de DICT auprès des réseaux avant tout début de travaux." },
    ],
    etapes: [
      { numero: 1, titre: "Étude de sol et DICT", description: "Analyse géotechnique si nécessaire, demandes aux concessionnaires de réseaux (DICT)." },
      { numero: 2, titre: "Décapage et excavation", description: "Enlèvement de la terre végétale, terrassement en fouilles ou en déblais selon le projet." },
      { numero: 3, titre: "Travaux VRD", description: "Tranchées pour réseaux, pose de canalisations, fourreaux, regards et branchements." },
      { numero: 4, titre: "Remblaiement et compactage", description: "Mise en place des matériaux de remblai sélectionnés et compactage par couches successives." },
      { numero: 5, titre: "Finitions et contrôle", description: "Mise en forme finale, essais de compactage (rapport Proctor), nettoyage du chantier." },
    ],
    materiaux: ["Graves naturelles et recyclées", "Béton de propreté", "Tuyaux PVC et béton pour réseaux", "Géotextiles de séparation", "Fourreaux TPC pour réseaux secs", "Enrobés bitumineux pour voiries"],
    faq: [
      { question: "Faut-il réaliser une étude géotechnique avant terrassement ?", reponse: "Pour une construction neuve, l'étude géotechnique G2 AVP est obligatoire depuis la loi ELAN de 2018 en zone d'aléa argile moyen ou fort. Elle est fortement recommandée dans tous les cas pour adapter les fondations à la nature réelle du sol." },
      { question: "Que faire des terres excavées ?", reponse: "Les terres excédentaires sont évacuées vers une décharge agréée ou valorisées en remblai sur un autre chantier. Nous gérons les bordereaux de suivi des déchets (BSD) et le transport conforme à la réglementation." },
      { question: "Pouvez-vous intervenir en milieu urbain dans des espaces restreints ?", reponse: "Oui, nous disposons de mini-pelles télécommandées capables de passer par une ouverture de 80 cm, idéales pour les chantiers en centre-ville de Strasbourg ou dans des jardins à accès difficile." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Eschau", "Erstein", "Benfeld", "Sélestat", "Obernai", "Molsheim"],
  },
  {
    id: "amenagement",
    nom: "AMÉNAGEMENTS EXTÉRIEURS",
    description: "Terrasses, allées, espaces extérieurs",
    fullDescription: `Vos espaces extérieurs méritent autant de soin que vos intérieurs. Que vous souhaitiez créer une terrasse pour profiter des beaux jours alsaciens, aménager une allée carrossable, construire un mur de clôture ou réaliser un parking, ABASSI BTP vous accompagne dans la conception et la réalisation de votre projet extérieur.

Nous créons des terrasses, allées, cours et jardins qui allient fonctionnalité, esthétique et durabilité. Notre palette de matériaux est large pour s'adapter à tous les styles et budgets : béton désactivé ou imprimé, dalles de pierre naturelle (granit, schiste, quartzite), pavés autobloquants, carrelage extérieur antidérapant, lames de terrasse en bois exotique ou composite.

Chaque aménagement extérieur est pensé dans sa globalité : gestion des eaux pluviales (pentes, drains, caniveaux), éclairage intégré, végétalisation et intégration paysagère. Nous veillons à ce que vos espaces extérieurs soient durables, résistants au gel et aux contraintes climatiques d'Alsace, et valorisent votre bien immobilier.`,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Valorisation immobilière", detail: "Une belle terrasse ou un jardin aménagé peut augmenter la valeur de votre bien de 10 à 20 %." },
      { titre: "Sur mesure et personnalisé", detail: "Chaque projet est unique, conçu en accord avec vos goûts et l'architecture de votre propriété." },
      { titre: "Matériaux résistants au gel", detail: "Tous nos matériaux sont sélectionnés pour résister aux cycles gel/dégel du climat alsacien." },
      { titre: "Drainage et évacuation des eaux", detail: "Conception intégrant la gestion des eaux pluviales pour éviter stagnation et infiltration." },
    ],
    etapes: [
      { numero: 1, titre: "Conception et plans", description: "Visite du site, prise de mesures, proposition de plan d'aménagement avec choix des matériaux." },
      { numero: 2, titre: "Terrassement et fondations", description: "Décapage, mise à niveau, pose du lit de pose sable/gravier selon le type de revêtement." },
      { numero: 3, titre: "Réseaux et drains", description: "Mise en place des canalisations d'évacuation des eaux, fourreaux pour éclairage." },
      { numero: 4, titre: "Pose du revêtement", description: "Dallage, pavage ou coulage du béton avec les finitions choisies (désactivé, imprimé, balayé)." },
      { numero: 5, titre: "Finitions et nettoyage", description: "Joints, bordures, pose des équipements (clôtures, portails), nettoyage et traitement." },
    ],
    materiaux: ["Béton désactivé et imprimé", "Dalles en granit et quartzite", "Pavés en calcaire et en béton", "Lames composite bois/PVC", "Carrelage grès cérame extérieur", "Mobilier béton banché"],
    faq: [
      { question: "Faut-il un permis pour créer une terrasse ?", reponse: "Une terrasse de plain-pied ne nécessite généralement pas de permis si elle est inférieure à 20 m² et non couverte. Au-delà, une déclaration préalable est nécessaire. Nous vous accompagnons dans les démarches." },
      { question: "Quelle terrasse choisir pour le climat alsacien ?", reponse: "Nous recommandons le béton désactivé, les dalles en pierre naturelle ou les pavés autobloquants pour leur excellente résistance au gel. Le bois naturel nécessite un entretien régulier ; le composite est plus facile d'entretien." },
      { question: "Combien de temps faut-il pour une terrasse de 40 m² ?", reponse: "En fonction de la complexité et du revêtement choisi, une terrasse de 40 m² est réalisée en 1 à 2 semaines de travaux, après la préparation du chantier." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Eschau", "Fegersheim", "Lipsheim", "Obernai", "Molsheim", "Haguenau"],
  },
  {
    id: "peinture",
    nom: "PEINTURE & REVÊTEMENTS",
    description: "Finitions intérieures et extérieures",
    fullDescription: `Les finitions font toute la différence dans la qualité d'un projet de construction ou de rénovation. Une peinture bien réalisée transforme radicalement l'ambiance d'un espace et lui confère une valeur ajoutée immédiate. Notre équipe de peintres professionnels intervient à Strasbourg et en Alsace pour tous vos travaux de peinture intérieure et extérieure.

Nous réalisons des travaux soignés sur tous types de supports : plâtre, béton, bois, PVC, métal, enduit. Avant toute mise en peinture, nous préparons méticuleusement les surfaces : rebouchage des fissures et trous, égrenage, application d'une sous-couche adaptée au support. Cette étape de préparation, souvent négligée, est pourtant la clé d'une finition durable et impeccable.

Notre offre couvre la peinture décorative (uni, effet béton ciré, enduit à la chaux, badigeon), la pose de papier peint (classique, intissé, panoramique), les revêtements muraux (toile de verre, papier fibre), et la mise en peinture des extérieurs (murs, volets, portails, menuiseries). Nous vous conseillons sur les tendances couleurs et les gammes de produits adaptées à chaque usage.`,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Préparation soignée des supports", detail: "Rebouchage, lissage et impression pour une finition parfaite et durable." },
      { titre: "Peintures écologiques disponibles", detail: "Gammes de peintures à faible émission de COV pour une meilleure qualité de l'air intérieur." },
      { titre: "Protection des meubles", detail: "Bâchage et protection de tous vos meubles et sols avant intervention." },
      { titre: "Délais maîtrisés", detail: "Planning précis respecté pour minimiser les nuisances dans votre quotidien." },
    ],
    etapes: [
      { numero: 1, titre: "Diagnostic et devis", description: "Visite du chantier, évaluation des surfaces à traiter et conseil sur les choix de couleurs et matériaux." },
      { numero: 2, titre: "Protection et préparation", description: "Bâchage des sols et meubles, décapage si nécessaire, rebouchage des défauts de surface." },
      { numero: 3, titre: "Application de la sous-couche", description: "Impression des surfaces pour garantir l'adhérence et l'homogénéité de la peinture de finition." },
      { numero: 4, titre: "Mise en peinture", description: "Application de 1 à 2 couches de peinture de finition au rouleau, pinceau ou pistolet selon la technique." },
      { numero: 5, titre: "Finitions et nettoyage", description: "Retouches, dépose des protections, nettoyage complet des lieux de travail." },
    ],
    materiaux: ["Peintures acryliques mat, satin, brillant", "Peintures à la chaux et à l'argile", "Enduits décoratifs (béton ciré, stuc)", "Papiers peints intissé et panoramique", "Toile de verre et papier fibre", "Lasures et vernis pour boiseries"],
    faq: [
      { question: "Combien de temps faut-il pour peindre un appartement de 70 m² ?", reponse: "Pour une rénovation complète (plafonds, murs, boiseries) d'un appartement de 70 m², comptez 5 à 8 jours de travaux avec une équipe de 2 peintres, hors délais de séchage entre les couches." },
      { question: "Peut-on rester dans l'appartement pendant les travaux de peinture ?", reponse: "Oui, dans la plupart des cas. Nous travaillons pièce par pièce pour minimiser les perturbations. Avec nos peintures acryliques à faible émission de COV, l'odeur est peu présente et les fenêtres suffisent à ventiler." },
      { question: "Comment choisir la couleur pour un intérieur ?", reponse: "Nous vous proposons des conseils en décoration colorielle et pouvons vous fournir des planches d'inspiration. Nous réalisons des échantillons peints sur vos murs avant de valider le choix final." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Schiltigheim", "Cronenbourg", "Lingolsheim", "Ostwald", "Geispolsheim", "Obernai"],
  },
  {
    id: "renovation",
    nom: "RÉNOVATION COMPLÈTE",
    description: "Rénovation complète de bâtiments",
    fullDescription: `La rénovation complète d'un bâtiment est un projet ambitieux qui nécessite une expertise globale et une coordination parfaite de tous les corps de métier. ABASSI BTP est votre partenaire unique pour tous vos projets de rénovation à Strasbourg et en Alsace : maison individuelle, appartement, local commercial ou immeuble entier.

Nous prenons en charge votre projet de rénovation de A à Z : diagnostic initial et état des lieux, conception et plans (en collaboration avec votre architecte si nécessaire), coordination de tous les corps de métier (maçonnerie, isolation, plâtrerie, électricité, plomberie, peinture, revêtements), suivi de chantier quotidien et contrôle qualité, jusqu'à la livraison finale avec remise des clés.

Nous avons une expertise particulière dans la rénovation de bâtiments anciens alsaciens : maisons à colombages, fermes typiques, maisons de ville en grès des Vosges. Nous savons concilier les techniques modernes avec la préservation du cachet architectural d'origine, pour un résultat qui allie confort contemporain et authenticité régionale.`,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    avantages: [
      { titre: "Interlocuteur unique", detail: "Un seul point de contact pour tous les corps de métier, pour une coordination sans stress." },
      { titre: "Maîtrise du budget", detail: "Devis global détaillé avec réserves contingentes clairement identifiées, sans mauvaises surprises." },
      { titre: "Expertise bâti ancien", detail: "Savoir-faire spécifique pour les maisons alsaciennes à colombages et les bâtiments classés." },
      { titre: "Aides à la rénovation", detail: "Accompagnement complet pour le montage des dossiers MaPrimeRénov, ANAH et Eco-PTZ." },
    ],
    etapes: [
      { numero: 1, titre: "Diagnostic et conception", description: "État des lieux complet, identification des désordres, conception du projet et chiffrage global." },
      { numero: 2, titre: "Démarches administratives", description: "Permis de construire ou déclaration préalable, dossiers d'aides financières, déclarations auprès des réseaux." },
      { numero: 3, titre: "Démolition et gros œuvre", description: "Dépose des éléments à remplacer, travaux de maçonnerie, planchers et ouvertures." },
      { numero: 4, titre: "Second œuvre et finitions", description: "Isolation, plâtrerie, menuiseries, électricité, plomberie, revêtements et peinture." },
      { numero: 5, titre: "Livraison et garanties", description: "Réception contradictoire, remise du Dossier des Ouvrages Exécutés (DOE) et des garanties." },
    ],
    materiaux: ["Matériaux de structure (béton, acier, bois)", "Isolants thermiques certifiés ACERMI", "Menuiseries double ou triple vitrage Uw inférieur à 1,1 W/m2.K", "Enduits à la chaux naturelle", "Revêtements de sol (parquet, carrelage, résine)", "Systèmes de chauffage basse consommation"],
    faq: [
      { question: "Faut-il quitter son logement pendant une rénovation complète ?", reponse: "Pour une rénovation totale, il est généralement nécessaire de quitter le logement pendant les travaux de gros œuvre (2 à 4 semaines). Pour des rénovations pièce par pièce, il est souvent possible de rester dans le logement." },
      { question: "Quelle est la durée d'une rénovation complète de maison ?", reponse: "Tout dépend de la surface et de l'ampleur des travaux. En moyenne, comptez 3 à 6 mois pour une maison de 100 à 150 m² entièrement rénovée. Nous établissons un planning détaillé dès la phase de conception." },
      { question: "Comment gérez-vous les imprévus de chantier ?", reponse: "Les travaux de rénovation peuvent révéler des surprises (humidité, mauvaise isolation existante, réseau vétuste). Nous incluons systématiquement une provision pour imprévus dans notre devis et vous consultons avant toute dépense supplémentaire." },
    ],
    zones: ["Strasbourg", "Illkirch-Graffenstaden", "Lingolsheim", "Obernai", "Sélestat", "Colmar", "Haguenau", "Saverne"],
  },
]
