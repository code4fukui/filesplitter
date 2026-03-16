# filesplitter

filesplitterは、2GB以上のファイルを2GB以下の小さなファイルにに分割し、元のファイルを復元することができるツールです。

## 機能
- 2GB以上のファイルを2GB以下の小さなファイルに分割できます
- 分割したファイルの整合性を確認できます
- 分割したファイルを元のファイルに結合できます

## 必要環境
- [Deno](https://deno.land/) ランタイム

## 使い方

ファイルを分割するには以下のコマンドを実行します:

```sh
deno run -A https://code4fukui.github.io/filesplitter/split.js [2GB以上のファイル]
```

分割したファイルの整合性を確認するには以下のコマンドを実行します:

```sh
deno run -A https://code4fukui.github.io/filesplitter/check.js [2GB以上のファイル]
```

分割したファイルを元のファイルに結合するには以下のコマンドを実行します:

```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js [分割された最初のファイル] [出力先ファイル]
```

## ライセンス
MIT License