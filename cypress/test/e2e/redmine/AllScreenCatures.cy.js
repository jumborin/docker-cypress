describe('Redmineの全画面の画面表示テスト', () => {

  beforeEach(() => {
    cy.visit('http://158.179.191.24/');
  });
  afterEach(function () {
    cy.screenshot(this.currentTest.title);
  });

  describe('上部メニュー遷移テスト', () => {
    it('ログインリンクをクリックし、ログイン画面に遷移すること', function () {
      cy.get('#account ul li a.login').click();
      cy.get('input#username').type('admin'); //ユーザ名入力ボックス
      cy.get('input#password').type('p@ssw0rd'); //パスワード入力ボックス
      cy.get('input[name="login"]').click(); //ログインボタン
      cy.get('#loggedas').should('contain', 'admin'); //ログイン確認
    
    });

    it('ホームリンクをクリックし、ホーム画面に遷移すること', function () {
      cy.get('#top-menu ul li a.home').click();
    });
    it('マイページリンクをクリックし、マイページ画面に遷移すること', function () {
      cy.get('#top-menu ul li a.my-page').click();
    });
    it('プロジェクトリンクをクリックし、プロジェクト一覧画面に遷移すること', function () {
      cy.get('#top-menu ul li a.projects').click();
    });
    it('管理リンクをクリックし、管理画面に遷移すること', function () {
      cy.get('#top-menu ul li a.administration').click();
    });
    it('ヘルプリンクをクリックし、ヘルプ画面に遷移すること', function () {
      cy.get('#top-menu ul li a.help').click();
    });
  });
});
