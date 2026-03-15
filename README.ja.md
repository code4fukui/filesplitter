# filesplitter

2GB以上のファイルを分割し、結合することができるツールです。

## 機能
- 2GB以上のファイルを2GB以下のファイルに分割できます
- 分割したファイルの整合性を確認できます
- 分割したファイルを元のファイルに結合できます

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