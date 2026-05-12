export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master en Informatique",
    school: "Université Paris-Saclay",
    period: "2016 - 2018",
    description: "Spécialisation en développement web et applications distribuées",
  },
  {
    id: 2,
    degree: "Licence en Informatique",
    school: "Université de Lyon",
    period: "2013 - 2016",
    description: "Fondamentaux de l'informatique et programmation",
  },
];
