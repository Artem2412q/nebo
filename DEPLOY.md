# Публикация через GitHub

## 1. Загрузить проект в GitHub

1. Создайте пустой репозиторий на GitHub.
2. Распакуйте архив `nebesny-sad-github-ready.zip`.
3. Загрузите **все файлы из корня распакованной папки** в корень репозитория.
4. Убедитесь, что `package.json`, папки `app`, `components`, `data` и `public` находятся сразу в корне репозитория.

Через Git CLI это выглядит так:

```bash
git init
git add .
git commit -m "Initial Nebesny Sad rebuild"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## 2. Запустить локально

Нужен Node.js 20+ (рекомендуется Node 22).

```bash
npm install
npm run dev
```

Откройте `http://localhost:3000`.

## 3. Опубликовать сайт

### Рекомендуемый вариант: Vercel

1. Откройте Vercel и выберите `Add New Project`.
2. Подключите GitHub и выберите созданный репозиторий.
3. Framework должен определиться как `Next.js` автоматически.
4. Добавьте переменную окружения:
   - `NEXT_PUBLIC_SITE_URL=https://ваш-домен.ru`
5. Если будет подключён реальный обработчик заявок на бронирование, добавьте:
   - `BOOKING_WEBHOOK_URL=https://адрес-вашего-webhook`
6. Нажмите Deploy.

Каждый следующий push в ветку `main` будет автоматически обновлять сайт.

## Важно про GitHub Pages

Этот проект использует Next.js API route `/api/booking`. Обычный GitHub Pages не запускает серверный код, поэтому для полной версии используйте Vercel, Timeweb Cloud или другой Node.js-хостинг.

Если `BOOKING_WEBHOOK_URL` не настроен, сайт намеренно **не имитирует успешную бронь**: форма сообщает, что онлайн-передача заявки недоступна, и предлагает опубликованный телефон ресторана.
