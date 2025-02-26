# DV documentation

Страничка накопительных изменений в онлайн-документации. Главная фича - поиск в иерархическом дереве и фильтрация результатов.

### Технологии:

- Vue 3
- TypeScript
- Vite
- Quasar
- Pinia?
- pug
- scss

### Ветки:

Две ветки - master + dev.

- Master - содержит дизайн, чтобы посмотреть, как все выглядит на странице. Эта ветка выгружена сюда: https://dvdoc.vercel.app/#/version
- dev - доработки по получению данных с сервера, убрана навигация, заменены пути и пр. В реальной документации используется именно эта ветка.

### Установка и использование

```
npm install
npm run dev
npm run build
```

### Разработка внутри страницы документации

Клонировать репозитории:

- Antora-playbook https://github.com/Docsvision/antora-playbook/tree/dev-quick-build
- Antora-ui https://github.com/Docsvision/antora-ui-default

Установить все пакеты.

Собрать UI бандл в репозитории Antora-ui согласно файлу readme.

Собрать документацию и поднять http-server в репозитории Antora-playbook согласно файлу readme.

В директории wwwroot в репозитории Antora-playbook на странице с текущим проектом (например, /workerservice/6.1/common/patches-log/) открыть index.html файл и в скрипте получения файла `patches.min.js` заменить путь на локальный путь vite-сервера, например, `http://127.0.0.1:3000/vendor/patches.min.js`.

Если вы запускаете приложение не на стандартном 3000 порте, необходимо будет поменять его так же в настройках proxy файла `vite.config.ts`.