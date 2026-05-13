export interface FormulaireContact {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export interface FormulaireEtat {
  status: 'idle' | 'submitting' | 'success' | 'error'
}
