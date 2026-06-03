export interface ServiceBenefit {
  titre: string
  detail: string
}

export interface ServiceStep {
  numero: number
  titre: string
  description: string
}

export interface ServiceFaq {
  question: string
  reponse: string
}

export interface Service {
  id: string
  nom: string
  description: string
  fullDescription: string
  image: string
  avantages?: ServiceBenefit[]
  etapes?: ServiceStep[]
  materiaux?: string[]
  faq?: ServiceFaq[]
  zones?: string[]
}

export interface ServiceImageItem {
  src: string
  alt: string
  credit: string
}

export type ServiceImages = Record<string, ServiceImageItem>
