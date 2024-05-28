/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: Rule => Rule.required().email()
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'username',
            type: 'string',
            title: 'Username',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            type: 'string',
            title: 'Profile Image'
        }
    ],
};
