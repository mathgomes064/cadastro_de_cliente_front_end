export interface IContactRegister{
    id: string
    name: string
    email: string
    telefone: string
    created_at: Date
}

export interface IContactUpdate{
    name?: string
    email?: string
    telefone?: string
}
