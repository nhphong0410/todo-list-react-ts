import { account } from 'core/appwrite'

export const createEmailSession = async (email: string, password: string) => {
    await account.createEmailSession(email, password)
}

export const getCurrentSession = async () => {
    const currentEmailSession = await account.get()
    return currentEmailSession
}

export const signOut = async () => {
    await account.deleteSession('current')
}

export type GetCurrentSession = ReturnType<typeof getCurrentSession>
