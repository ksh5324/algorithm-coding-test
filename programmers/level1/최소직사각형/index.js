function solution(sizes) {
  sizes = sizes.map((v) => {
    if (v[0] < v[1]) {
      return [v[1], v[0]];
    }
    return v;
  });
  sizes.sort((a, b) => b[0] - a[0]);
  const width = sizes[0][0];
  sizes.sort((a, b) => b[1] - a[1]);
  const height = sizes[0][1];

  return width * height;
}
