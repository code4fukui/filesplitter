# filesplitter

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A command-line tool for splitting large files into smaller, manageable chunks and rejoining them. Useful for transferring files across systems with file size limitations (e.g., FAT32).

## Features

- **Split:** Divides a large file into 2 GiB chunks.
- **Verify:** Checks the integrity of the split chunks against the original file.
- **Join:** Recombines the split chunks to perfectly restore the original file.

## Requirements

- [Deno](https://deno.land/) runtime

## Usage

All scripts can be run directly from the web, without any local installation.

### 1. Split a File

To split a large file, provide its path to `split.js`. The script will create numbered chunks in the same directory.

```sh
deno run -A https://code4fukui.github.io/filesplitter/split.js [bigfile]
```

**Example:**
If you run `deno run -A .../split.js my_large_archive.zip`, it will generate:
- `my_large_archive.zip.000`
- `my_large_archive.zip.001`
- ...and so on.

### 2. Verify Split Files

To ensure the split files are not corrupted, use `check.js` with the path to the original file.

```sh
deno run -A https://code4fukui.github.io/filesplitter/check.js [bigfile]
```

**Example:**
Running `deno run -A .../check.js my_large_archive.zip` will compare the original file with its chunks. On success, the script will output `match!`.

### 3. Join Split Files

To reconstruct the original file, provide the path to the *first* split file (the `.000` file) and a destination directory to `join.js`.

```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js [first split file] [destination_directory]
```

**Example:**
```sh
deno run -A https://code4fukui.github.io/filesplitter/join.js my_large_archive.zip.000 ./restored
```
This command will create the original `my_large_archive.zip` inside the `./restored` directory.

## License

MIT License — see [LICENSE](LICENSE).