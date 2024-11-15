describe('Login Form Tests', () => {
  beforeEach(() => {
    // Предположим, что это URL страницы авторизации
    cy.visit('https://stellantis.autocrm.ru/login');
  });

  it('Displays an error message for invalid email', () => {
    // Ввод невалидного email со специальным символом
    cy.get('input#loginform-email').type('foretest?@mail.ru');

    // Ввод пароля
    cy.get('input#loginform-password').type('123567651');

    // Нажатие на кнопку авторизации
    cy.get('.btn-primary.btn-block.mb-20').click();

    // Проверка наличия сообщения об ошибке
    cy.contains('Email is not a valid email address').should('be.visible');
  });
});