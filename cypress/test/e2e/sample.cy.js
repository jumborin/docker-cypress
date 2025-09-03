describe('トップページの表示', () => {
  it('ページタイトルにアプリ名が含まれていること', () => {
    cy.visit('https://www.google.co.jp/');
    cy.title().should('include', 'Google');
    cy.screenshot('ページタイトルにアプリ名が含まれていること(成功)');
  });

  it('ナビゲーションバーに特定のリンクがあること', () => {
    cy.visit('https://www.google.co.jp/');
    cy.get('body').should('exist');
    cy.screenshot('ナビゲーションバーに特定のリンクがあること(成功)');
  });

  it('ボタンをクリックしてページ遷移する', () => {
    cy.visit('https://www.google.co.jp/');
    cy.get('body').should('exist');
    cy.url().should('include', 'google');
    cy.screenshot('ボタンをクリックしてページ遷移する(成功)');
  });
});
