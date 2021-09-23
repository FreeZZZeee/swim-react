import style from "../component/Banner/Header/TopNav/TopNav.module.scss";

let initialState = [
    {_id: '1', href: '#Banner', class: `nav-link ${style.active}`, title: 'Главная'},
    {_id: '2', href: '#about', class: 'nav-link scroll', title: 'О нас'},
    {_id: '3', href: '#gallery', class: 'nav-link scroll', title: 'Галерея'},
    {_id: '4', href: '#team', class: 'nav-link scroll', title: 'Сотрудники'},
    {_id: '5', href: '#services', class: 'nav-link scroll', title: 'Перечень услуг'},
    {_id: '6', href: '#contact', class: 'nav-link scroll', title: 'Контакты'},
]

const categoriesReducer = (state = initialState, action) => {

    return state
}

export default categoriesReducer