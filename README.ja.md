# filesplitter

大きなファイルを扱いやすいサイズのチャンクに分割し、再結合するためのコマンドラインツールです。FAT32など、ファイルサイズに制限があるシステム間でファイルを転送する際に役立ちます。

## 機能

- **分割:** 大きなファイルを2 GiBのチャンクに分割します。
- **検証:** 分割されたチャンクの整合性を元のファイルと比較して確認します。
- **結合:** 分割されたチャンクを再結合し、元のファイルを完全に復元します。

## 必要条件

- [Deno](https://deno.land/) ランタイム

## 使い方

すべてのスクリプトは、ローカルにインストールすることなく、Webから直接実行できます。

### 1. ファイルの分割

大きなファイルを分割するには、そのファイルのパスを `split.js` に指定します。スクリプトは同じディレクトリに連番が振られたチャンクファイルを作成します。

```sh
deno run -A https://code4fukui.github.io/filesplitter/split.js [bigfile]
```

**例:**
`deno run -A .../split.js my_large_archive.zip` を実行すると、以下が生成されます:
- `my_large_archive.zip.000`
- `my_large_archive.zip.001`
- ...以下同様。

### 2. 分割ファイルの検証

分割ファイルが破損していないことを確認するには、元のファイルのパスを `check.js` に指定します。

```sh
deno run -A https://code4fukui.github.io/filesplitter/check.js [bigfile]
```

**例:**
`deno run -A .../check.js my_large_archive.zip` を実行すると、元のファイルとチャンクが比較されます。成功すると、スクリプトは `match!` と出力します。

### 3. 分割ファイルの結合

元のファイルを再構築するには、*最初の*分割ファイル（`.000` ファイル）のパスと出力先ディレクトリを `join.js` に指定します。

```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js [first split file] [destination_directory]
```

**例:**
```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js my_large_archive.zip.000 ./restored
```
このコマンドは、`./restored` ディレクトリ内に元の `my_large_archive.zip` を作成します。

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
