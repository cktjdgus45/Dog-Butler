import { client } from './sanity';

type OAuthUser = {
    id: string;
    email: string;
    name: string;
    username: string;
    image?: string | null;
};

export async function addUser({ id, username, name, email, image }: OAuthUser) {
    const doc = {
        _type: 'user',
        _id: id,
        username,
        name,
        email,
        image,
    };
    return client.createIfNotExists(doc);
}
