import { fixnum } from "./fixnum.js";

if (Deno.args.length < 1) {
  console.log("split srcfn");
  Deno.exit(1);
}

const fn = Deno.args[0];
const BUF_SIZE = 1024 * 16; // default Deno 1.12.0
//const SPLIT_SIZE = 4 * 1024 * 1024 * 1024; // 4G // NG
const SPLIT_SIZE = 2 * 1024 * 1024 * 1024; // 2G
//const SPLIT_SIZE = BUF_SIZE * 2; // test

const buf = new Uint8Array(BUF_SIZE);
const f = await Deno.open(fn);

A: for (let i = 0;; i++) {
  const fn2 = fn + "." + fixnum(i, 3);
  const f2 = await Deno.open(fn2, {
    write: true,
    create: true,
    truncate: true,
  });
  let flen = SPLIT_SIZE;
  for (;;) {
    const len = await f.read(buf);
    if (!len) {
      break A;
    }
    if (len == BUF_SIZE) {
      await f2.write(buf);
    } else {
      const buf2 = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        buf2[i] = buf[i];
      }
      await f2.write(buf2);
    }
    flen -= len;
    if (flen <= 0) {
      break;
    }
  }
  await f2.close();
}
await f.close();
