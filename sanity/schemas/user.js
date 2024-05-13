/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'username',
            type: 'string',
            title: 'Username',
            validation: Rule => Rule.required()
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: Rule => Rule.required().email()
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
            hidden: true, // 패스워드는 관리자 인터페이스에서 숨깁니다
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
            options: {
                hotspot: true, // 이미지 핫스팟 활성화
            },
        },
        {
            name: 'isAdmin',
            type: 'boolean',
            title: 'Is Admin',
        },
    ],
};
