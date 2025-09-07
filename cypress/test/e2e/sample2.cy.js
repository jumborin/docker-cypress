describe('Redmine.orgの概要ページのサンプルテスト', () => {

  beforeEach(() => {
    cy.visit('https://www.redmine.org/projects/redmine');
  });
  afterEach(function () {
    cy.screenshot(this.currentTest.title);
  });

  describe('初期表示テスト', () => {
    it('ページタイトルにアプリ名が含まれていること', function () {
      cy.title().should('include', 'Redmine');
    });

    it('上部メニューに特定のリンクがあること', function () {
      cy.get('#top-menu ul li a.home').should('exist'); //ホームリンク
      cy.get('#top-menu ul li a.projects').should('exist'); //プロジェクトリンク
      cy.get('#top-menu ul li a.help').should('exist'); //ヘルプリンク
    });

    it('画面右上の検索機能があること', function () {
      cy.get('#quick-search form label a').should('exist'); //検索リンク
      cy.get('input#q').should('exist'); //検索用インプットボックス
      cy.get('#project-jump').should('exist'); //プロジェクトジャンプ
    });

    it('中段メインメニュータブに特定のリンクがあること', function () {
      cy.get('#header #main-menu ul li a.overview').should('exist'); //概要タブ
      cy.get('#header #main-menu ul li a.download').should('exist'); //ダウンロードタブ
      cy.get('#header #main-menu ul li a.activity').should('exist'); //活動タブ
      cy.get('#header #main-menu ul li a.roadmap').should('exist'); //ロードマップタブ
      cy.get('#header #main-menu ul li a.issues').should('exist'); //チケットタブ
      cy.get('#header #main-menu ul li a.news').should('exist'); //ニュースタブ
      cy.get('#header #main-menu ul li a.wiki').should('exist'); //Wikiタブ
      cy.get('#header #main-menu ul li a.boards').should('exist'); //フォーラムタブ
      cy.get('#header #main-menu ul li a.repository').should('exist'); //リポジトリタブ
    });

    it('画面表示内容が正常であること', function () {
      cy.get('#main').then(($main) => {
        if ($main.text().includes('チケット')) {
          cy.contains('チケットトラッキング').should('be.visible');
          cy.contains('最新ニュース').should('be.visible');
          cy.contains('メンバー').should('be.visible');
        } else {
          cy.contains('Issues').should('be.visible');
          cy.contains('News').should('be.visible');
          cy.contains('Members').should('be.visible');
        }
      });
      cy.get('div.issues.box').should('exist'); //チケットトラッキングボックス
      cy.get('div.news.box').should('exist'); //ニュースボックス
      cy.get('div.members.box').should('exist'); //メンバーボックス
    });
  });

  describe('画面遷移テスト', () => {
    it('検索画面に遷移できること', function () {
      cy.get('#quick-search form label a').click();
      cy.get('#main').then(($main) => {
        if ($main.text().includes('検索')) {
          cy.contains('検索').should('be.visible');
        } else {
          cy.contains('Search').should('be.visible');
        }
      });
      cy.get('input#search-input').should('be.visible'); //検索インプットボックス
      cy.get('select#scope').should('be.visible'); //検索対象プルダウン
      cy.get('input#all_words').should('be.visible'); //すべての単語チェックボックス
      cy.get('input#titles_only').should('be.visible'); //タイトルのみチェックボックス
      cy.get('input#issues').should('be.visible'); //チケットチェックボックス
      cy.get('input#documents').should('be.visible'); //文書チェックボックス
      cy.get('input#changesets').should('be.visible'); //更新履歴チェックボックス
      cy.get('input#wiki_pages').should('be.visible'); //Wikiページチェックボックス
      cy.get('input#messages').should('be.visible'); //メッセージチェックボックス
      cy.get('input#redmine_plugins').should('be.visible'); //Redmine pluginsチェックボックス
    });

    it('「ダウンロード」ボタンをクリックして、「Download」ページに遷移する', function () {
      cy.get('a.download').click();
      cy.url().should('include', 'Download');
    });

    it('「活動」ボタンをクリックして、「Activity」ページに遷移する', function () {
      cy.get('a.activity').click();
      cy.url().should('include', 'activity');
    });

    it('「ロードマップ」ボタンをクリックして、「Roadmap」ページに遷移する', function () {
      cy.get('a.roadmap').click();
      cy.url().should('include', 'roadmap');
    });

    it('「チケット」ボタンをクリックして、「Issues」ページに遷移する', function () {
      cy.get('a.issues').click();
      cy.url().should('include', 'issues');
    });

    it('「ニュース」ボタンをクリックして、「News」ページに遷移する', function () {
      cy.get('a.news').click();
      cy.url().should('include', 'news');
    });

    it('「wiki」ボタンをクリックして、「Wiki」ページに遷移する', function () {
      cy.get('a.wiki').click();
      cy.url().should('include', 'wiki');
    });

    it('「フォーラム」ボタンをクリックして、「Boards」ページに遷移する', function () {
      cy.get('a.boards').click();
      cy.url().should('include', 'boards');
    });

    it('「リポジトリ」ボタンをクリックして、「Repository」ページに遷移する', function () {
      cy.get('a.repository').click();
      cy.url().should('include', 'repository');
    });
  });
});
