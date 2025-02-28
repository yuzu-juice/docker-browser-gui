FROM node:22-slim

# 画面表示に必要なパッケージをインストール
RUN apt-get update && apt-get install -y --no-install-recommends \
    pulseaudio \
    && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの作成
WORKDIR /app

# 必要なファイルをコピー
COPY package.json browser.js ./

# playwrightのインストール
RUN npm install && npx playwright install --with-deps chromium

# エントリーポイントを設定
CMD ["npm", "start"]
