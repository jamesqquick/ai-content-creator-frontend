import { Client, Databases, Account, Functions } from 'appwrite';

const client = new Client();

if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
  throw new Error('Must include Appwrite project id');
}
if (!process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_ID) {
  throw new Error('Must include Appwrite function id');
}

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);
const functions = new Functions(client);

export { client, databases, account, functions };
