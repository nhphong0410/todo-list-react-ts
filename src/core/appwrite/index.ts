import { Client, Account, Models } from "appwrite"

export const client = new Client()
export const account = new Account(client)

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65239fbce9e2122a0120')

export type CurrentSession = Models.User<Models.Preferences>
export type JWT = Models.Jwt