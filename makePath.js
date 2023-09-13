export const makePath = (path, fn) => {
  path = path.replace(/\\/g, "/");
  if (path == "") {
    path = "./";
  } else if (!path.endsWith("/")) {
    path += "/";
  }
  fn = fn.replace(/\\/g, "/");
  const n = fn.lastIndexOf("/");
  if (n < 0) {
    return path + fn;
  }
  return path + fn.substring(n + 1);
};
