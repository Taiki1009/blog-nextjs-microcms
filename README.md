### Next.jsとmicroCMSで作るブログサイト 学習
- 概要
  - ブログ一覧ページ
    - 直近3件の投稿を表示
  - ブログ詳細ページ
    - 画像＋投稿内容＋サイドバー
      - 画像はMicroCMSに登録したものか、デフォルト画像
      - サイドバーはSNSリンクと投稿のタグを表示
  - vercelにデプロイし、webhookでmicroCMSと連携

- サービスリンク
https://blog-nextjs-microcms.vercel.app/

- 今後
  - 読書感想や学習内容を投稿
  - 別ページを作成してReactの練習
    - 本番環境でも動作確認をしたいため
    - darkSiteなど。権限など作成してみれないようにする



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
