export default () =>
  Number(
    window.getComputedStyle(document.documentElement).fontSize.replace("px", "")
  );
