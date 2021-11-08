export enum UserRoles {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export interface IUser {
    id: string
    email: string
    role: UserRoles
    firstName: string
    lastName: string
    phone: string
    avatar?: string
    createdAt?: string
    updatedAt: string
}

export interface IUserToken {
    accessToken: string
    expiresIn: number
}

export interface IUserResponse {
    user: IUser
    token: IUserToken
}

export interface ILoginRequest {
    email: string
    password: string
}
