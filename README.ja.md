# filesplitter

2GB以上のファイルを分割するためのツールです。

## 機能
- 大きなファイルを2GB以下のファイルに分割できます。
- 分割したファイルを再結合できます。
- ファイルの整合性を確認できます。

## 使い方

ファイルを分割するには以下のコマンドを実行します:

```sh
deno run -A https://code4fukui.github.io/filesplitter/split.js [bigfile]
```

分割したファイルを確認するには以下のコマンドを実行します:

```sh
deno run -A https://code4fukui.github.io/filesplitter/check.js [bigfile]
```

分割したファイルを再結合するには以下のコマンドを実行します:

```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js [first split file] [dstpath]
```

## ライセンス
MIT License