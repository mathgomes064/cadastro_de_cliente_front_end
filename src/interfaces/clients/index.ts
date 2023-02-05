export interface IClientRegister{
    id: string
    name: string
    email: string
    senha: string
    telefone: string
    created_at: Date
}

export interface IClientLogin {
    email: string;
    senha: string;
  }