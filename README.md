# docker-cypress
## DockerでCypressを動かしてCI環境を構築する

* 実行手順
```
docker compose build 
docker compose up -d
docker compose exec -T cypress npx cypress run --browser chrome
```
* テストケース
  * cypress/test/e2eにsample.cy.jsを参考にjsファイルを追加

* 実行結果確認手順
  * cypress/test/screenshots
  * cypress/test/videos

以上