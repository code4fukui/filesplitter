# filesplitter

Split large files over 2GB.

## Features
- Split files larger than 2GB into smaller chunks
- Verify the integrity of the split files
- Combine the split files back into the original file

## Requirements
- [Deno](https://deno.land/) runtime

## Usage

To split a file:

```sh
deno run -A https://code4fukui.github.io/filesplitter/split.js [bigfile]
```

To verify the split files:

```sh
deno run -A https://code4fukui.github.io/filesplitter/check.js [bigfile]
```

To join the split files back into the original file:

```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js [first split file] [dstpath]
```

## License
MIT License