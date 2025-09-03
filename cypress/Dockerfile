# ベースにCypress + ブラウザ付きの公式イメージを使用
# Check URL:https://hub.docker.com/r/cypress/browsers/tags
FROM cypress/browsers:node-22.19.0-chrome-139.0.7258.154-1-ff-142.0.1-edge-139.0.3405.125-1

# Xvfbと日本語フォント、ロケールをインストール
RUN apt-get update \
    && apt-get install -y xvfb fonts-noto-cjk locales \
    && locale-gen ja_JP.UTF-8 \
    && rm -rf /var/lib/apt/lists/*

# 日本語ロケール設定
ENV LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP:ja \
    LC_ALL=ja_JP.UTF-8

# 作業ディレクトリを設定
WORKDIR /e2e

# package.jsonとpackage-lock.jsonを先にコピーして依存インストール
COPY cypress/package*.json ./
RUN npm cache clean --force && \
    npm install && \
    npx cypress cache clear && \
    npx cypress install --force

# テストコードや設定をコピー
COPY cypress/ .

# エントリーポイント（任意）
CMD ["npx", "cypress", "run"]
