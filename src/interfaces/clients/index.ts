import { ReactNode } from "react"

export interface IClientRegister{
    id: string
    name: string
    email: string
    senha: string
    telefone: string
    created_at: Date
}

export interface IClientUpdate{
    name?: string
    email?: string
    senha?: string
    telefone?: string
}

export interface IClientLogin {
    email: string;
    password: string;
  }

export interface IClientProvidersProps{
    children: ReactNode
}

// export interface IClientContext{
//     registerClient: (

//     )
// }