[![CI](https://github.com/jumborin/docker-cypress/actions/workflows/ci.yml/badge.svg)](https://github.com/jumborin/docker-cypress/actions/workflows/ci.yml)

# docker-cypress

## DockerでCypressを動かしてCI環境を構築する

* 環境
  * ベースイメージの設定:[Dockerfile#L3-L3](./cypress/Dockerfile#L3-L3)

* 実行手順
```
docker compose build 
docker compose up -d
docker compose exec -T cypress npx cypress run --browser chrome --headless
docker compose exec -T cypress npx cypress run --browser edge --headless
```
* テストケース作成方法
  * cypress/test/e2eにsample.cy.jsを参考にjsファイルを追加

* 実行結果確認手順
  * cypress/test/screenshots: スクリーンショット保存先
  * cypress/test/videos: テスト実行動画保存先

以上
