# Goods filter
Test task for culinaryon.ru company

🎷 Deployed on [aws/s3](http://goods-filter.ru.s3-website.us-east-2.amazonaws.com/)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 🗿 Task description:
Необходимо разработать javascript-компонент для вывода списка товаров с дополнительными возможностями фильтрации для пользователя.

## Верстка:
Два селекта в ряд с возможностью множественного выбора (select multiple), Категории и Бренды. Под селектами через запятую выводить выбранные пользователем значения фильтров вида -
Категория: смартфоны, планшеты. Бренд: Samsung.
Вывод товаров по 4 в ряд для десктопа, 2 в ряд для планшетного разрешения, и 1 в ряд для мобильных устройств. Вид карточки товара ссылка name продукта, след. сторокой category и brand.

## Функционал:
Данные от сервера приходят в виде JSON массива.
Значения фильтров Бренды и Категории заполнить данными взятыми из массива.
Изначально выводить все продукты в том порядке в каком они расположены в массиве.
При выборе значений в фильтрах (селектах) скрывать часть продуктов не отвечающих выбранным условиям.
Реализовать использую Vue.js + плагины к нему на выбор.