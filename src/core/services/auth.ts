import { account } from 'core/appwrite'

export const createEmailSession = async ({ email, password }: { email: string, password: string }) => {
    await account.createEmailSession(email, password)
}

export const getCurrentSession = async () => {
    const currentEmailSession = await account.get()

    return currentEmailSession
}

export const signOut = async () => {
    await account.deleteSession('current')
}

export const getJWTToken = async () => {
    const jwt = await account.createJWT()

    return jwt
}
