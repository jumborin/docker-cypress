describe('Redmineの全画面の画面表示テスト', () => {

  /**
   * 事前処理：Redmineにログインする。
   */
  beforeEach(() => {
    const TEST_SITE_URL = Cypress.env('TEST_SITE_URL') || 'http://158.179.191.24/';
    cy.visit(TEST_SITE_URL); //Redmineのトップ画面へ
    cy.get('#account ul li a.login').click();
    cy.get('input#username').type(Cypress.env('TEST_USERNAME')); //ユーザ名入力ボックス
    cy.get('input#password').type(Cypress.env('TEST_PASSWORD')); //パスワード入力ボックス
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
      cy.get('#loggedas').should('contain', Cypress.env('TEST_USERNAME')); //ログイン確認
    });
  });

  /**
   * 上部メニュー毎に画面遷移テスト
   */
  describe('画面遷移テスト', () => {
    describe('基本メニューテスト', () => {
      it('「ホーム」リンクをクリックし、「ホーム」画面に遷移すること', function () {
        cy.get('#top-menu ul li a.home').click();
        cy.url().should('include', '/');
      });
      it('「マイページ」リンクをクリックし、「マイページ」画面に遷移すること', function () {
        cy.get('#top-menu ul li a.my-page').click();
        cy.url().should('include', '/my/page');
      });
    });

    describe('プロジェクトメニューテスト', () => {
      it('「プロジェクト」リンクをクリックし、「プロジェクト」一覧画面に遷移すること', function () {
        cy.get('#top-menu ul li a.projects').click();
        cy.url().should('include', '/projects');
      });

      describe('プロジェクト＞タブリンクテスト', () => {

        beforeEach(() => {
          cy.get('#top-menu ul li a.projects').click(); //プロジェクト一覧画面へ
          cy.url().should('include', '/projects');

          //cy.get('#content div.contextual a.icon.icon-add').click(); //新規プロジェクト作成画面へ
          //cy.get('#project_name').type('TestProjectName'); //プロジェクト名
          //cy.get('#project_identifier').type('testprojectidentifier'); //プロジェクト識別子
          //cy.get('input[type=submit]').click(); //作成ボタン

          //cy.get('#top-menu ul li a.projects').click(); //プロジェクト一覧画面へ
        });

        afterEach(function () {
          cy.screenshot(this.currentTest.title);
        });

        it('「活動」タブをクリックし、「活動」画面に遷移すること', function () {
          cy.get('#main-menu ul li a.activity').click();
          cy.url().should('include', '/activity');
        });
        it('「チケット」タブをクリックし、「チケット」一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.issues').click();
          cy.url().should('include', '/issues');
        });
        it('「作業時間」タブをクリックし、「作業時間」一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.time-entries').click();
          cy.url().should('include', '/time_entries');
        });
        it('「ガントチャート」タブをクリックし、「ガントチャート」画面に遷移すること', function () {
          cy.get('#main-menu ul li a.gantt').click();
          cy.url().should('include', '/issues/gantt');
        });
        it('「カレンダー」タブをクリックし、「カレンダー」画面に遷移すること', function () {
          cy.get('#main-menu ul li a.calendar').click();
          cy.url().should('include', '/issues/calendar');
        });
        it('「ニュース」タブをクリックし、「ニュース」一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.news').click();
          cy.url().should('include', '/news');
        });
        it('「プロジェクト」タブをクリックし、「プロジェクト」一覧画面に遷移すること', function () {
          cy.get('#main-menu ul li a.projects').click();
          cy.url().should('include', '/projects');
        });
      });
    });

    describe('管理メニューテスト', () => {
      it('「管理」リンクをクリックし、「管理」画面に遷移すること', function () {
        cy.get('#top-menu ul li a.administration').click();
        cy.url().should('include', '/admin');
      });

      describe('管理＞ペインリンクテスト', () => {
        beforeEach(() => {
          cy.get('#top-menu ul li a.administration').click();
        });

        afterEach(function () {
          cy.screenshot(this.currentTest.title);
        });

        it('「プロジェクト」リンクをクリックし、「プロジェクト」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.projects').click();
          cy.url().should('include', '/admin/projects');
        });
        it('「ユーザー」リンクをクリックし、「ユーザー」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.users').click();
          cy.url().should('include', '/users');
        });
        it('「グループ」リンクをクリックし、「グループ」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.groups').click();
          cy.url().should('include', '/groups');
        });
        it('「ロールと権限」リンクをクリックし、「ロール」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.roles').click();
          cy.url().should('include', '/roles');
        });

        describe('管理＞ロールと権限＞リンクテスト', () => {
          beforeEach(() => {
            cy.get('#admin-menu ul li a.roles').click();
          });

          afterEach(function () {
            cy.screenshot(this.currentTest.title);
          });

          it('「新しいロール」リンクをクリックし、「新しいロール」の管理画面に遷移すること', function () {
            cy.get('#content div.contextual a.icon.icon-add').click();
            cy.url().should('include', '/roles/new');
          });
          it('「権限レポート」リンクをクリックし、「権限レポート」の管理画面に遷移すること', function () {
            cy.get('#content div.contextual a.icon.icon-summary').click();
            cy.url().should('include', '/roles/permissions');
          });
        });

        it('「トラッカー」リンクをクリックし、「トラッカー」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.trackers').click();
          cy.url().should('include', '/trackers');
        });

        describe('管理＞トラッカー＞リンクテスト', () => {
          beforeEach(() => {
            cy.get('#admin-menu ul li a.trackers').click();
          });

          afterEach(function () {
            cy.screenshot(this.currentTest.title);
          });

          it('「新しいトラッカー」リンクをクリックし、「新しいトラッカー」の管理画面に遷移すること', function () {
            cy.get('#content div.contextual a.icon.icon-add').click();
            cy.url().should('include', '/trackers/new');
          });
          it('「サマリー」リンクをクリックし、「サマリー」の管理画面に遷移すること', function () {
            cy.get('#content div.contextual a.icon.icon-summary').click();
            cy.url().should('include', '/trackers/fields');
          });
        });

        it('「チケットのステータス」リンクをクリックし、「チケット」のステータスの管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.issue-statuses').click();
          cy.url().should('include', '/issue_statuses');
        });

        it('「ワークフロー」リンクをクリックし、「ワークフロー」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.workflows').click();
          cy.url().should('include', '/workflows/edit');
        });

        describe('管理＞ワークフロー＞リンクテスト', () => {
          beforeEach(() => {
            cy.get('#admin-menu ul li a.workflows').click();
          });

          afterEach(function () {
            cy.screenshot(this.currentTest.title);
          });

          it('「コピー」リンクをクリックし、「ワークフロー＞＞コピー」画面に遷移すること', function () {
            cy.get('#content div.contextual a.icon.icon-copy').click();
            cy.url().should('include', '/workflows/copy');
          });
          it('「サマリー」リンクをクリックし、「ワークフロー＞＞サマリー」画面に遷移すること', function () {
            cy.get('#content div.contextual a.icon.icon-summary').click();
            cy.url().should('include', '/workflows');
          });
          it('「ステータスの遷移」タブをクリックし、「ワークフロー＞＞ステータスの遷移」画面に遷移すること', function () {
            cy.get('#content div.tabs ul li:nth-child(1) a').click();
            cy.url().should('include', '/workflows/edit');
          });
          it('「フィールドに対する権限」タブをクリックし、「ワークフロー＞＞フィールドに対する権限」画面に遷移すること', function () {
            cy.get('#content div.tabs ul li:nth-child(2) a').click();
            cy.url().should('include', '/workflows/permissions');
          });
        });

        it('「カスタムフィールド」リンクをクリックし、「カスタムフィールド」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.custom-fields').click();
          cy.url().should('include', '/custom_fields');
        });
        it('「選択肢の値」リンクをクリックし、「選択肢の値」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.enumerations').click();
          cy.url().should('include', '/enumerations');
        });
        it('「設定」リンクをクリックし、「設定」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.settings').click();
          cy.url().should('include', '/settings');
        });

        describe('管理＞設定＞タブメニューテスト', () => {
          beforeEach(() => {
            cy.get('#admin-menu ul li a.settings').click();
            cy.url().should('include', '/settings');
          });

          afterEach(function () {
            cy.screenshot(this.currentTest.title);
          });

          it('「全般」タブをクリックし、「全般」の設定画面に遷移すること', function () {
            cy.get('#tab-general').click();
            cy.url().should('include', '/settings?tab=general');
          });
          it('「表示」タブをクリックし、「表示」の設定画面に遷移すること', function () {
            cy.get('#tab-display').click();
            cy.url().should('include', '/settings?tab=display');
          });
          it('「認証」タブをクリックし、「認証」の設定画面に遷移すること', function () {
            cy.get('#tab-authentication').click();
            cy.url().should('include', '/settings?tab=authentication');
          });
          it('「API」タブをクリックし、「API」の設定画面に遷移すること', function () {
            cy.get('#tab-api').click();
            cy.url().should('include', '/settings?tab=api');
          });
          it('「プロジェクト」タブをクリックし、「プロジェクト」の設定画面に遷移すること', function () {
            cy.get('#tab-projects').click();
            cy.url().should('include', '/settings?tab=projects');
          });
          it('「ユーザー」タブをクリックし、「ユーザー」の設定画面に遷移すること', function () {
            cy.get('#tab-users').click();
            cy.url().should('include', '/settings?tab=users');
          });
          it('「チケットトラッキング」タブをクリックし、「チケットトラッキング」の設定画面に遷移すること', function () {
            cy.get('#tab-issues').click();
            cy.url().should('include', '/settings?tab=issues');
          });
          it('「時間管理」タブをクリックし、「時間管理」の設定画面に遷移すること', function () {
            cy.get('#tab-timelog').click();
            cy.url().should('include', '/settings?tab=timelog');
          });
          it('「ファイル」タブをクリックし、「ファイル」の設定画面に遷移すること', function () {
            cy.get('#tab-attachments').click();
            cy.url().should('include', '/settings?tab=attachments');
          });
          /*
          it('「メール通知」タブをクリックし、「メール通知」の設定画面に遷移すること', function () {
            cy.get('#tab-notifications').click();
            cy.url().should('include', '/settings?tab=notifications');
          });
          */
          it('「受信メール」タブをクリックし、「受信メール」の設定画面に遷移すること', function () {
            cy.get('#tab-mail_handler').click();
            cy.url().should('include', '/settings?tab=mail_handler');
          });
          it('「リポジトリ」タブをクリックし、「リポジトリ」の設定画面に遷移すること', function () {
            cy.get('#tab-repositories').click();
            cy.url().should('include', '/settings?tab=repositories');
          });
        });
        it('「LDAP認証」リンクをクリックし、「認証方式」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.ldap-authentication').click();
          cy.url().should('include', '/auth_sources');
        });
        it('「プラグイン」リンクをクリックし、「プラグイン」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.plugins').click();
          cy.url().should('include', '/admin/plugins');
        });
        it('「情報」リンクをクリックし、「情報」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.info').click();
          cy.url().should('include', '/admin/info');
        });
      });
    });

    describe('ヘルプメニューテスト', () => {
      it('ヘルプリンクをクリックし、Redmineガイドに遷移すること', function () {
        cy.get('#top-menu ul li a.help').click();
        //TODO:確認処理を追加
      });
    });

    describe('個人設定テスト', () => {
      it('「個人設定」リンクをクリックし、「個人設定」画面に遷移すること', function () {
        cy.get('#account ul li a.my-account').click();
        cy.url().should('include', '/my/account');
      });
    });
    
    describe('ログアウトテスト', () => {
      it('「ログアウト」リンクをクリックし、ログアウトすること', function () {
        cy.get('#account ul li a.logout').click();
        cy.url().should('include', '/');
      });
    });
  });
});
