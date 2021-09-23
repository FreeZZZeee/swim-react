import style from '../component/Banner/Header/TopNav/TopNav.module.scss'
import logoReducer from "./logo-reducer";
let store = {
    _state: {
        // Header

        logo: {
            _id: '1', title: 'Бассейн ПНИПУ'
        },

        icons: [
            {_id: '1', href: '/#', classFa: 'fa', class: 'fa-facebook'},
            {_id: '2', href: '/#', classFa: 'fa', class: 'fa-twitter'},
            {_id: '3', href: '/#', classFa: 'fa', class: 'fa-rss'},
            {_id: '4', href: '/#', classFa: 'fa', class: 'fa-vk'},
        ],

        categories: [
            {
                navBarNav: [
                    {_id: '1', href: '#Banner', class: `nav-link ${style.active}`, title: 'Главная'},
                    {_id: '2', href: '#about', class: 'nav-link scroll', title: 'О нас'},
                    {_id: '3', href: '#gallery', class: 'nav-link scroll', title: 'Галерея'},
                    {_id: '4', href: '#team', class: 'nav-link scroll', title: 'Сотрудники'},
                    {_id: '5', href: '#services', class: 'nav-link scroll', title: 'Перечень услуг'},
                    {_id: '6', href: '#contact', class: 'nav-link scroll', title: 'Контакты'},
                ],
                navbarHeader: [
                    {_id: '1', class: 'sr-only', title: 'Toggle navigation'},
                    {_id: '2', class: 'icon-bar'},
                    {_id: '3', class: 'icon-bar'},
                    {_id: '4', class: 'icon-bar'}
                ]
            }
        ],

//About

        iconAndText: [
            {
                class: 'fa fa-cog',
                titleHead: 'Suspendisse consectetur dapibus volutpat.',
                titleText: 'Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat at lectus\n' +
                    '        ullamcorper, nec interdum neque hendrerit.'
            },
            {
                class: 'fa fa-heart',
                titleHead: 'Lorem ipsum dolor sit amet',
                titleText: 'Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat at lectus\n' +
                    '        ullamcorper, nec interdum neque hendrerit.'
            },
            {
                class: 'fa fa-paper-plane',
                titleHead: 'Suspendisse consectetur dapibus volutpat.',
                titleText: 'Phasellus dapibus felis elit, sed accumsan arcu gravida vitae. Nullam aliquam erat at lectus\n' +
                    '        ullamcorper, nec interdum neque hendrerit.'
            },
        ],

// Gallery

        gallery: [
            {
                img: 'images/g1.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g2.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g3.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g4.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g5.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g6.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g7.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g8.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g9.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g10.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g1.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
            {
                img: 'images/g2.jpg',
                dataTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula'
            },
        ],

// Our Team

        ourTeam: [
            {
                persons: [
                    {img: 'images/t1.jpg', name: 'Mary Jane', title: 'Vestibulum'},
                    {img: 'images/t2.jpg', name: 'Peter Parker', title: 'Vestibulum'},
                    {img: 'images/t3.jpg', name: 'Jennifer Watson', title: 'Vestibulum'},
                    {img: 'images/t4.jpg', name: 'Steven Wilson', title: 'Vestibulum'},
                ],
                socials: [
                    {href: '#', class: 'fa fa-facebook'},
                    {href: '#', class: 'fa fa-twitter'},
                    {href: '#', class: 'fa fa-rss'},
                    {href: '#', class: 'fa fa-vk'},
                ]
            }
        ],

// Services

        priceBlock: [
            {
                block: [
                    {class: 'package', name: 'Limited', trial: 'Available for a month'},
                    {class: 'package brilliant', name: 'Brilliant', trial: 'Free 30 day trial'},
                    {class: 'package', name: 'Basic', trial: 'Totally free'},
                ],
                pricing: [
                    {price: '1200 руб', title: 'team playlists'},
                    {price: '1500 руб', title: 'team playlists'},
                    {price: '1200 руб', title: 'team playlists'},
                ]
            }
        ],

        contactUs: [
            {}
        ]
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.logo = logoReducer(this._state.logo, action)
    }
}
export default store

