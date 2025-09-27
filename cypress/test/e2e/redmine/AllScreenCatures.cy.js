describe('Redmineの全画面の画面表示テスト', () => {

  /**
   * 事前処理：Redmineにログインする。
   */
  beforeEach(() => {
    cy.visit('http://158.179.191.24/');
    cy.get('#account ul li a.login').click();
    cy.get('input#username').type('TestUser'); //ユーザ名入力ボックス
    cy.get('input#password').type('p@ssw0rd'); //パスワード入力ボックス
    cy.get('input[name="login"]').click(); //ログインボタン
  });
  afterEach(function () {
    cy.screenshot(this.currentTest.title);
  });

  /**
   * ログイン処理のテスト。
   * ログイン処理自体はbeforeEachで実施済みのため、確認処理のみ。
   */
  describe('ログインテスト', () => {
    it('ログインリンクをクリックし、ログイン画面に遷移すること', function () {
      cy.get('#loggedas').should('contain', 'TestUser'); //ログイン確認
    });
  });

  /**
   * メニュー毎に画面遷移テスト
   */
  describe('画面遷移テスト', () => {
    describe('基本メニューテスト', () => {
      it('ホームリンクをクリックし、ホーム画面に遷移すること', function () {
        cy.get('#top-menu ul li a.home').click();
        cy.url().should('include', '158.179.191.24');
      });
      it('マイページリンクをクリックし、マイページ画面に遷移すること', function () {
        cy.get('#top-menu ul li a.my-page').click();
        cy.url().should('include', '/my/page');
      });
    });

    describe('プロジェクトメニューテスト', () => {
      it('プロジェクトリンクをクリックし、プロジェクト一覧画面に遷移すること', function () {
        cy.get('#top-menu ul li a.projects').click();
        cy.url().should('include', '/projects');
      });
      describe('タブリンクテスト', () => {
        it('活動タブをクリックし、活動画面に遷移すること', function () {
          cy.get('#main-menu ul li a.activity').click();
          cy.url().should('include', '/activity');
        });
        it('チケットタブをクリックし、チケット一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.issues').click();
          cy.url().should('include', '/issues');
        });
        it('作業時間タブをクリックし、作業時間一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.time-entries').click();
          cy.url().should('include', '/time_entries');
        });
        it('ガントチャートタブをクリックし、ガントチャート画面に遷移すること', function () {
          cy.get('#main-menu ul li a.gantt').click();
          cy.url().should('include', '/issues/gantt');
        });
        it('カレンダータブをクリックし、カレンダー画面に遷移すること', function () {
          cy.get('#main-menu ul li a.calendar').click();
          cy.url().should('include', '/issues/calendar');
        });
        it('ニュースタブをクリックし、ニュース一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.news').click();
          cy.url().should('include', '/news');
        });
        it('プロジェクトタブをクリックし、プロジェクト一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.projects').click();
          cy.url().should('include', '/projects');
        });
      });
    });

    describe('管理メニューテスト', () => {
      it('管理リンクをクリックし、管理画面に遷移すること', function () {
        cy.get('#top-menu ul li a.administration').click();
        cy.url().should('include', '/admin');
      });
      describe('ペインリンクテスト', () => {
        it('プロジェクトリンクをクリックし、プロジェクト管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.projects').click();
          cy.url().should('include', '/admin/projects');
        });
        it('ユーザーリンクをクリックし、ユーザー管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.users').click();
          cy.url().should('include', '/users');
        });
      });
    });


    describe('ヘルプメニューテスト', () => {
      it('ヘルプリンクをクリックし、Redmineガイドに遷移すること', function () {
        cy.get('#top-menu ul li a.help').click();
        //TODO:確認処理を追加
      });
    });
  });
});
