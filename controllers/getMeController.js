let data = {
    name: 'Синельников Максим Александрович',
    phone: '+7 705 279 81 96',
    email: 'sinelnikov-web@mail.ru',
    github: '/sinelnikov-web/',
    vk: '/sinelnikov_web/',
    instagram: '/sinelnikov.web/',
    city: 'Усть-Каменогорск',
    age: (new Date(Date.now())).getFullYear() - 2002,
    edu: [
        {
            loc: 'КГУ средняя школа №11 г.Алтай: Среднее',
            year: '2020'
        },
        {
            loc: 'Восточно-Казахстанский технический университет им. Серикбаева: Бакалавр',
            year: '2024',
            spec: 'Школа информационных технологий и интеллектуальных систем, Вычислительная техника и программное обеспечение'
        }
    ],
    courses: [
        {
            loc: 'КГУ средняя школа №11 г.Алтай',
            name: 'Веб верстальщик',
            year: '2019'
        },
        {
            loc: 'Coursera',
            name: 'Основы программирования на Python',
            year: '2019'
        },
        {
            loc: 'Udemy',
            name: 'Разработка vk/telegram ботов на Python',
            year: '2020'
        },
        {
            loc: 'JetBrains',
            name: 'Создание web приложений на Django',
            year: '2020'
        },
    ]
}

export const getMe = (req, res) => {
    res.status(200).json(data)
}