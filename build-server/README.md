# Билд-сервер

## Преднастройка

1. Установить nodejs `v12.16.2`.

2. В проекте лежит шаблон `server-conf-template.json`, его нужно скопировать,
переименовать в `server-conf.json` и прописать значения.

3. Через терминал:

- Перейти в папку с сервером `cd server`;
- Установить зависимости через `npm ci`;
- Поднять агента через `npm start`.

Либо одной командой `cd agent && npm ci && npm start`.
