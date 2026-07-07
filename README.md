# Madeniet Partners React

Готовая структура:

- `/madeniet-partners` — общая страница Madeniet Partners / Sponsors
- `/madeniet-partners/hyundai` — персональная страница Hyundai

## Запуск

```bash
npm install
npm run dev
```

Открой:

```text
http://localhost:5173/madeniet-partners
http://localhost:5173/madeniet-partners/hyundai
```

## Деплой

```bash
npm run build
```

Для Vercel/Netlify нужен fallback на `index.html`, потому что роутинг работает на клиенте.
