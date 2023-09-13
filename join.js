import { fixnum } from "./fixnum.js";
import { makePath } from "./makePath.js";

if (Deno.args.length < 2) {
  console.log("join srcfn dstpath");
  Deno.exit(1);
}

const fn0 = Deno.args[0];
const outpath = Deno.args[1];
const fns = fn0.substring(0, fn0.length - 4);
const fn = makePath(outpath, fns);
console.log(fn);
const BUF_SIZE = 1024 * 16; // default Deno 1.12.0

const buf = new Uint8Array(BUF_SIZE);
const f = await Deno.open(fn, {
  write: true,
  create: true,
  truncate: true,
});

A: for (let i = 0;; i++) {
  const fn2 = fns + "." + fixnum(i, 3);
  try {
    const f2 = await Deno.open(fn2);
    console.log(fn2)
    for (;;) {
      const len = await f2.read(buf);
      if (!len) {
        break;
      }
      if (len == BUF_SIZE) {
        await f.write(buf);
      } else {
        const buf2 = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          buf2[i] = buf[i];
        }
        await f.write(buf2);
      }
    }
    await f2.close();
  } catch (e) {
    break;
  }
}
await f.close();
