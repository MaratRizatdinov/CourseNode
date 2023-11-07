# Задание

1. Создать сервер на Express.js + MongoDB на основе REST API из предыдущего урока.

2. REST API должно быть доступно по адресу 127.0.0.1:3005.

3. REST API должно:

- Отдавать список всех пользователей.
- Отдавать данные по пользователю на основе id.
- Изменять данные пользователя на основе id.
- Удалять данные пользователя на основе id.
- Отдавать список всех книг.
- Отдавать данные по книге на основе id.
- Изменять данные книги на основе id.
- Удалять данные книги на основе id.

4. Также REST API должно:

- Возвращать ошибку 404, если сущность не найдена или был запрошен несуществующий роут.
- Возвращать ошибку 500, если что-то пошло не так при обработке запроса.
- При успешном ответе сервера возвращать JSON-сущности.

5. Формат данных пользователя:

- Имя, строка, не менее 2 символов.
- Фамилия, строка, не менее 2 символов.
- Username, строка, не менее 5 символов.

6. Формат данных книги:

- Заголовок, строка, не менее 2 символов.
- Автор, строка, не менее 2 символов.
- Год выпуска, число.

# Чек-лист для самопроверки
1. В файле package.json в секции scripts есть dev, который запускает nodemon, и 
   start, который запускает сервер в обычном режиме.
2. Для чтения переменных окружения используется пакет dotenv.

3. В проекте есть .env.example, файл .env добавлен в .gitignore.

4. При запуске приложение подключается к серверу mongo.

5. При разных запросах сервер не падает и в консоли нет ошибок.

6. Настроен CORS через middleware.

7. Добавлен middleware логирования, который выводит в консоль адрес, на который пришел запрос (originalUrl).

8. У проекта понятная структура, код разбит на роуты, модели, контроллеры и middleware.