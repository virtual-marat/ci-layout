## ci-layout

## Вопросы

### Правильное использование БЭМ-сущностей

Прошу использовать мою работу при разборе ДЗ 

#### Какие части макета являются одним и тем же блоком? ####

Сквозной блок шапки `Header` является одним и тем же блоком для страниц: 
 * `start screen - desktop (mobile)`;
 * `settings — desktop (mobile)`;
 * `build history — desktop (mobile)`;
 * `build details — desktop (mobile)`.

Как и сквозной блок подвала `Footer`.

Блок настройки `settings` для страницы  `settings — desktop (mobile)`.

Блок с логами `logs` для страницы `build details — desktop (mobile)`.

#### Какие стили относятся к блокам, а какие к элементам и модификаторам? ####

К блокам относятся стили, которые не изменяют внешнюю геометрию и не задают
позиционирование. Например, `padding`, `background-color`, `color`.

К модификаторам относятся стили, которые описывают внешний вид,
состояние или поведение блока либо элемента.

К элементам относятся стили, которые не изменяют внешнюю геометрию и не задают
позиционирование. Например, `padding`, `background-color`, `color`.

#### Где нужно использовать каскады и почему?

Каскады можно использовать если необходимо изменить стили элементов
в зависимости от модификатора. У меня в ДЗ css каскадов нет.

### Консистентность
#### Какие видите базовые и семантические константы?
Все константы, кроме шрифтов, описаны в файле `theme`.
Шрифты описаны в файле `font`.

Из базовых констант вижу:
 - Цвета 
 - Отступы
 - Разрешение экрана
 - Межстрочный интервал
 - Размеры шрифтов
 - Шрифты
 - Границы 
 - Закругление границ
 - Тени
 
 Для `цвета` у меня только семантические константы, потому что нет построение других цветов
 от базовых.
 
`Границы`, `закругление границ`, `бордеры` и `тени` не вынес в базовые константы,
прописал явно в блоках. Под конец выполнения задания уже не осталось
времени, чтобы вынести их в базовые константы.

#### Какие видите закономерности в интерфейсе?

 - Одинаковые отступы у кнопок;
 - Иконки статуса билда цветные, остальные черные;
 - Бордеры у инпутов и кнопок одинаковые;
 - В хедере, в мобильных версиях, уменьшается размер заголовков;
 - На форме, одинаковые отступы между лэйблами и одинаковые отступы между инпутами;
 - В мобильных версии, кнопка с иконкой и текстом становится просто кнопкой с иконкой;
 - У блоков `header`, `layout`, `footer`, в мобильных версиях, одинаковые отступы по бокам;
 - Блок `build-history` на странице `build-history` можно переиспользовать
 на странице `build details`;
 - Цвет текста описания на странице `start screen` является основным для всех страниц;
 - Второстепнный цвет серый.

### Адаптивность
#### Где видите вариативность данных и как это обрабатываете?

 - В зависимости от статуса билда меняю цвет. Цвет меняю добавлением модификатора
 цвета;
 - В зависимости от типа кнопки меняют цвет кнопки. Цвет меняю добавлением модификатора
 цвета фона.

#### Какие видите особенности, связанные с размером экрана?

При разрешении экрана в 320px: 

- Кнопка с иконкой и текстом становится просто кнопкой с иконкой;
- Уменьшаются заголовки и номер билда;
- Кнопки растягиюватся на весь экран.

#### Что еще повлияло на вашу вёрстку?

- Дедлайн

У меня много косяков в верстке. Отправил как есть. Не успел все поправить.
Все основные экраны сверстаны. Есть есть проблемы с адаптивностью.

#### TODO   