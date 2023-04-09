import { PrismaClient } from '@prisma/client'
// PRISMAという名前のグローバルなオブジェクトを定義

declare let global: { prisma: PrismaClient }

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  // 条件分岐で本番環境の場合は毎回新しくPRISMAクライアントを新規作成するんですけども、
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    // グローバルなオブジェクトが存在しない場合だけ新規でクライアントを作成する。
    global.prisma = new PrismaClient()
  }
  // それ以外のローカルサーバーの場合は、GLOBALのPRISMAのオブジェクトが既に存在する場合は存在するものを再利用する処理になっている
  prisma = global.prisma
}
export default prisma

//ベストプラクティスの一つとして紹介されてる内容なんですけども、ローカルサーバーで開発を行なっていく時にローカルサーバーが起動するたびにPRISMAクライアントが生成されて、そのためにデーターベースの接続が行なわれてしまうので
//その頻繁なデーターベースへの再接続を防ぐ為の処理が書かれています。

// Learn more:
// https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes-auth/lib/prisma.ts
// https://pris.ly/d/help/next-js-best-practices
