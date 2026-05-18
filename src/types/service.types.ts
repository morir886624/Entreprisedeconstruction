export interface Service {
  id: string
  nom: string
  image: string
}

export interface ServiceImageItem {
  src: string
  alt: string
  credit: string
}

export type ServiceImages = Record<string, ServiceImageItem>
