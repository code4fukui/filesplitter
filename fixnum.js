export const fixnum = (n, m) => {
	const s = '00000000000000000' + n;
	return s.substring(s.length - m);
};
