# The Tonbo Bunch サイト — Claude向けコンテキスト

## サイト情報
- URL: https://tombo-bunch.m-boogie.com/
- GitHub: https://github.com/tomurakami-source/tombo.git（mainブランチ）
- Vercel: 自動デプロイ設定済み

## バンド情報
- バンド名: The Tonbo Bunch（ザ・トンボバンチ）
- ジャンル: Neo-Heisei Soul Rock
- メンバー:
  - Vo / Gt: カミジョウ（写真: `/public/member_kamijo.png`）
  - B.: ヨネ助（写真: `/public/member_yonesuke.png`）
  - Dr.: ヨースケ（写真: `/public/member_yohsuke.png`）
- SNS:
  - X: https://twitter.com/the_tonbo_bunch
  - TikTok: https://www.tiktok.com/@thetonbobunch
  - Instagram: https://www.instagram.com/the_tonbo_bunch/

---

## 毎月のライブ更新ワークフロー

新しいライブが決まったら `/content/lives/YYYY-MM-DD.md` を作成するだけ。

```markdown
---
date: "2026-08-XX"
label: "2026年8月XX日（日）"
venue: "新大久保 CLUB Voice"
address: "東京都新宿区百人町1-5-1 メトロビルB1"
openTime: "OPEN 17:00"
startTime: "START 17:30"
price: 3000
discount: 500
photos: []
---
ライブの詳細・インタビューなど（アーカイブに表示される）
```

以下が自動で切り替わる：
- トップページのライブ情報・カウントダウン
- 予約フォームのライブ名・会場名
- 予約確認メールのライブ名・会場名
- 前のライブはアーカイブに自動移動

---

## 予約管理
- スプレッドシート: https://docs.google.com/spreadsheets/d/1TW9OefJCYunIYH_chUIj0DJEvWXM9Y_KBYz9dw9cgOM/
- 記録項目: 日時・名前・メール・枚数・ライブ名・会場名
- 予約完了後に確認メール自動送信（GAS + Gmail）
- キャンセル: 前日までにメール返信

---

## 技術スタック
- Next.js 16.2.6（App Router）
- TypeScript / Tailwind CSS v4 / Framer Motion / gray-matter

## 重要ファイル

| ファイル | 役割 |
|---|---|
| `/lib/lives.ts` | ライブ情報の読み込みロジック（`getCurrentLive()` / `getArchivedLives()`） |
| `/content/lives/` | ライブ情報Markdownファイル置き場 |
| `components/LiveInfo.tsx` | トップページのライブ情報（サーバーコンポーネント） |
| `components/CountdownTimer.tsx` | カウントダウン（クライアントコンポーネント） |
| `components/LiveArchive.tsx` | 過去ライブ一覧 |
| `components/Bio.tsx` | メンバー情報（photoフィールドで写真管理） |
| `components/LoadingScreen.tsx` | 初回ローディングアニメーション（バンド名タイピング） |
| `components/TwitterTimeline.tsx` | SNSセクション（X・TikTok・Instagram） |
| `app/reserve/ReserveForm.tsx` | 予約フォーム（クライアントサイドのみ、useStateでform→confirm→complete） |
| `app/api/reserve/route.ts` | GAS通知用API Route |
| `app/layout.tsx` | メタデータ・JSON-LD・GA4 |
| `app/sitemap.ts` | サイトマップ自動生成 |
| `public/robots.txt` | クローラー設定 |

## 環境変数（Vercelに設定済み）
- `NEXT_PUBLIC_GA_ID` = G-23KSLBN2KX
- `GAS_WEBHOOK_URL` = GASのWebhook URL

---

## SEO状況
- Google Search Console: 登録済み・インデックス済み（2026-06-28）
- サイトマップ: https://tombo-bunch.m-boogie.com/sitemap.xml
- ファビコン: 設定済み（Googleへの反映は数週間かかる見込み）

---

## 過去にやらかしたこと（注意点）

- **Next.js の `redirect()` を try/catch で囲まない** → 内部で例外をスローするため捕捉されると動かない
- **`searchParams` は Next.js 16 で Promise** → `async/await` でアクセスする
- **環境変数を Vercel で変更したら必ず再デプロイ** → 変更しただけでは反映されない
- **サーバーアクション経由の予約フローは不安定** → クライアントサイドのみ（useState）で完結させた
- **GAS の新しい権限（MailApp など）追加時は再承認が必要**

---

## メンバー写真の追加方法

1. `/public/` に画像を配置
2. `components/Bio.tsx` の該当メンバーの `photo` フィールドにパスを指定

```typescript
{ role: "Vo / Gt", name: "カミジョウ", photo: "/member_kamijo.png", desc: "..." }
```
