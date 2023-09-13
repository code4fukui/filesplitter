import { fixnum } from "./fixnum.js";

if (Deno.args.length < 1) {
  console.log("check srcfn");
  Deno.exit(1);
}

const fn = Deno.args[0];
const BUF_SIZE = 1024 * 16; // default Deno 1.12.0

const buf = new Uint8Array(BUF_SIZE);
const buf2 = new Uint8Array(BUF_SIZE);
const f = await Deno.open(fn);

A: for (let i = 0;; i++) {
  const fn2 = fn + "." + fixnum(i, 3);
  try {
    const f2 = await Deno.open(fn2);
    console.log(fn2)
    for (;;) {
      const len2 = await f2.read(buf2);
      if (!len2) {
        break;
      }
      const len = await f.read(buf);
      if (!len) {
        break A;
      }
      if (len != len2) {
        throw new Error("length not match: " + len + " " + len2);
      }
      for (let i = 0; i < len; i++) {
        if (buf[i] != buf2[i]) {
          throw new Error("data not math");
        }
      }
    }
    await f2.close();
  } catch (e) {
    const len = await f.read(buf);
    if (len) {
      throw new Error("data not enough");
    }
    break;
  }
}
await f.close();
console.log("match!");
