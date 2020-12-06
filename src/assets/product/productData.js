'use strict'

export const madeItemData = [
         {
           id: 5,
           path: "image-airbnb.png",
           title: "サイト模写",
           link:
             "https://sukeo-sukeo.github.io/airbnb-copysite/airbnb/index.html",
           // './mades/airbnb/index.html',
           description: `
    学習開始３ヶ月目終盤、HTMLでの枠組みつくりは２時間で完成。分からない知識が明確になり、ググり力の明らかな向上を実感。メディアクエリをインプットしながら、６日間でレスポンシブまで完成。
    `,
         },
         {
           id: 101,
           path: "card-game.png",
           title: "ブラウザゲーム①",
           link: "https://sukeo-sukeo.github.io/js_game_learning/",
           movieLink:
             "https://sukeo-sukeo.github.io/original-browsgame-movie-1/made1.mov",
           // './mades/made1.mov',
           description: `
    ドットインストール等で一ヶ月のインプット後、javascriptを用いてゼロからつくったゲームです。完成までは２週間ほどでした。動作するゲームが作れたことに、感動したことを覚えています。
    `, 
         },
         {
           id: 102,
           path: "math-game.png",
           title: "ブラウザゲーム②",
           link: "https://sukeo-sukeo.github.io/js_game_practice_2/",
           movieLink:
             "https://sukeo-sukeo.github.io/original-browsgame-movie-2/made2.mov",
           // './mades/made2.mov',
           description: `
    小学２年生の娘の掛け算学習用に作成。各画面をclass構文を用いての管理にチャレンジ。かなりコードになり、エラーとの戦い方を学びました。冗長なコーディング内容となっていますが、ある程度javascriptの基本的な動きを理解するとともに、DOMの概念の理解や、最初の設計の大切さ、リファクタリングの重要性を学びました。サーバーやPCの仕組み自体に興味が湧く。
    `,
         },
         {
           id: 6,
           path: "portfolio.png",
           title: "ポートフォリオサイト",
           link: "https://sukeo-sukeo.github.io/my-portfolio/",
           description: `
    プログラミング学習開始８ヶ月目でようやく形にできたマイページです。
    vue.jsの学習を兼ねて作成しました。掲載の制作物はgithubにアップロードしています。
    `,
         },
         {
           id: 7,
           path: "todo.jpg",
           title: "シンプルなTODOアプリ",
           link: "https://whispering-temple-91855.herokuapp.com/",
           description: `
    ログイン機能自作。シンプルなTODOリストWEBアプリケーションです。サーバーとクライアントの通信の仕方や、データベースのCRUD操作の学習を念頭に制作しました。vue.js、express、mongodbを使用しています。また、シンプルかつ洗練された見た目を作るためCSSフレームワークにvuetifyを使用しました。gitの使用やターミナルコマンドの活用など、この制作を通して非常に多くのことを学ぶことができました。herokuにて公開しています。
    `,
         },
         {
           id: 8,
           path: "linebot.jpg",
           title: "モンハン弱点bot",
           link: "https://github.com/sukeo-sukeo/mylinebot",
           description: `
    モンスターハンターワールドのモンスター名を投げると弱点が返ってくるLINEbotです。プレイするときに弱点を調べる時間を短縮できると思い制作しました。ユーザーからのリクエストに対してオブジェクトや配列を操作、漏れなく適切なレスポンスを返します。herokuにて稼働中。QRコードからLINE友達登録にて使用可能です！
    `,
         },
         {
           id: 9,
           path: "flagcollection.jpg",
           title: "FlagCollectionApp",
           link: "https://sukeo-sukeo.github.io/FlagCollectionApp/index.html",
           description: `
    「leaflet」というグーグルマップに似た地図APIと「REST COUNTRIES」という国データを返してくれるAPIを組み合わせた国旗当てゲームです。国旗のコレクションを楽しみながら世界の国の勉強をしてもらえるアプリです。成績の保存はローカルストレージを使っています。cssフレームワークにはbootstrapを使用しています。また、実際のフロントエンド開発に近づけるためWebpackの導入によるモジュール化を意識して作成しましたが、実際にはファイル分割がうまくいかず次の制作への課題となりました。デザインやアニメーションなどやりたかったですが時間が足りませんので割愛としました。
    `,
         },
       ];

// const json = JSON.stringify(madeItemData)
// console.log(json);
// export const madeItemDataMov = [
//   {
//     id: 101,
//     path: "https://sukeo-sukeo.github.io/original-browsgame-movie-1/made1.mov",
//     // './mades/made1.mov',
//     title: "ブラウザゲーム①",
//     link: "https://sukeo-sukeo.github.io/js_game_learning/",
//     description: `
//     ドットインストール等で一ヶ月のインプット後、javascriptを用いてゼロからつくったゲームです。完成までは２週間ほどでした。動作するゲームが作れたことに、感動したことを覚えています。
//     `,
//     imgPath: "assets/minify/made1-image1.png",
//   },
//   {
//     id: 102,
//     path: "https://sukeo-sukeo.github.io/original-browsgame-movie-2/made2.mov",
//     // './mades/made2.mov',
//     title: "ブラウザゲーム②",
//     link: "https://sukeo-sukeo.github.io/js_game_practice_2/",
//     description: `
//     小学２年生の娘の掛け算学習用に作成。各画面をclass構文を用いての管理にチャレンジ。かなりコードになり、エラーとの戦い方を学びました。冗長なコーディング内容となっていますが、ある程度javascriptの基本的な動きを理解するとともに、DOMの概念の理解や、最初の設計の大切さ、リファクタリングの重要性を学びました。サーバーやPCの仕組み自体に興味が湧く。
//     `,
//     imgPath: "assets/minify/made2_image5_battle.png",
//   },
// ];