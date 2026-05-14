export interface FormulaireContact {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
}

export interface FormulaireErreurs {
  name?: string
  email?: string
  phone?: string
  projectType?: string
  message?: string
}

export interface FormulaireTouched {
  name?: boolean
  email?: boolean
  phone?: boolean
  projectType?: boolean
  message?: boolean
}

export interface FormulaireEtat {
  status: 'idle' | 'submitting' | 'success' | 'error'
  loading: boolean
  success: boolean
  error: boolean
}
