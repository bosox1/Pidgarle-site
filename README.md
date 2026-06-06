# PIDGARLE — Сайт гурту

## Старт

```bash
npm install
npm run dev
```

Відкрити: http://localhost:5173

## Деплой на Netlify

1. Пуш на GitHub
2. Netlify → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

Або просто — `netlify.toml` вже налаштований, все підхопить автоматично.

## Де міняти контент

Весь контент в одному файлі:

```
src/data/site.js
```

- `MEMBERS` — склад гурту
- `RELEASES` — альбоми і сингли (додати `url` коли вийде на стримінги)
- `SHOWS` — концерти (поки порожній масив, додавати сюди)
- `SOCIALS` — соцмережі та email

## Структура

```
src/
  components/
    Nav.jsx
    Hero.jsx
    Marquee.jsx
    About.jsx
    Members.jsx
    Shows.jsx
    Music.jsx
    Contact.jsx
    Footer.jsx
  data/
    site.js       ← ВСЕ ТУТ
  hooks/
    useReveal.js
  styles/
    index.css
  App.jsx
  main.jsx
```

## Форма контакту

Netlify Forms вбудований — жодних додаткових налаштувань не треба.  
Повідомлення приходять у Netlify Dashboard → Forms.
