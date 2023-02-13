export default (x: number) => {
  const fontSize = Number(
    window.getComputedStyle(document.documentElement).fontSize.replace("px", "")
  );
  if (!(fontSize > 0)) {
    throw new Error("获取根元素font-size失败");
  }
  return x * fontSize;
};
