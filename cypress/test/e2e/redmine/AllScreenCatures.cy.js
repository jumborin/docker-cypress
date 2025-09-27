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
   * 上部メニュー毎に画面遷移テスト
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

      describe('管理＞ペインリンクテスト', () => {
        beforeEach(() => {
          cy.get('#top-menu ul li a.administration').click();
        });

        afterEach(function () {
          cy.screenshot(this.currentTest.title);
        });

        it('「プロジェクト」リンクをクリックし、「プロジェクト管理画面」に遷移すること', function () {
          cy.get('#admin-menu ul li a.projects').click();
          cy.url().should('include', '/admin/projects');
        });
        it('「ユーザー」リンクをクリックし、「ユーザー管理画面」に遷移すること', function () {
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
        it('「トラッカー」リンクをクリックし、「トラッカー」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.trackers').click();
          cy.url().should('include', '/trackers');
        });
        it('「チケットのステータス」リンクをクリックし、「チケット」のステータスの管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.issue-statuses').click();
          cy.url().should('include', '/issue_statuses');
        });
        it('「ワークフロー」リンクをクリックし、「ワークフロー」の管理画面に遷移すること', function () {
          cy.get('#admin-menu ul li a.workflows').click();
          cy.url().should('include', '/workflows/edit');
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
  });
});
