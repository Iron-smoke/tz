# Авторизационная форма тестирования

## Описание

Данный проект содержит автоматизированные тесты для проверки формы авторизации. Тесты написаны с использованием Cypress для проверки корректности обработки ввода данных на форме авторизации.

## Тест-кейс

### Описание теста

Тест проверяет реакцию системы на попытку входа с использованием невалидного email адреса, который содержит знак вопроса (`?`), что обычно является недопустимым символом для email адресов.

### Шаги

1. Открытие страницы авторизации.
2. Ввод невалидного email (`foretest?@mail.ru`) и валидного пароля.
3. Нажатие на кнопку "Authorization".
4. Проверка отображения сообщения об ошибке "Email is not a valid email address".

### Ожидаемый результат

При вводе невалидного email адреса система должна вывести сообщение об ошибке, указывающее на некорректный формат email.

## Запуск тестов

Для запуска тестов необходимо иметь установленные Node.js и npm. Также должен быть установлен Cypress.

### Установка зависимостей

Перед запуском тестов установите необходимые зависимости командой:

```bash
npm install
