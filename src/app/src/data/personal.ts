export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  cvDownloadUrl: string;
  logo: string;
  logoDark: string;
  logoLight: string;
  profileImage: string;
  bio: string;
}

export const personalInfo: PersonalInfo = {
  name: "ATHIES BATIMENT",
  title: "Artisan certifié RGE depuis 2015",
  email: "jeanbaptiste.prudhomme@sfr.fr",
  phone: "06.46.16.87.23",
  location: "Laon, Aisne (02)",
  website: "#",
  cvDownloadUrl: "#devis",
  logo: "AB",
  logoDark: "https://via.placeholder.com/160x50/06b6d4/ffffff?text=ATHIES+BATIMENT",
  logoLight: "https://via.placeholder.com/160x50/0f172a/06b6d4?text=ATHIES+BATIMENT",
  profileImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=800&fit=crop",
  bio: "Athies Batiment vous propose ses services pour réaliser vos travaux de maçonnerie générale et gros œuvre dans le secteur de Laon. Couverture, maçonnerie, menuiserie, isolation et peinture — artisans qualifiés selon vos besoins.",
};