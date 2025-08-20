function scrollTop(top = 0, smooth = true) {
  scrollTo({
    top,
    behavior: smooth ? "smooth" : "auto",
  });
}

function scrollTopByElem(id, smooth = true) {
  const elem = document.getElementById(id);
  if (elem) {
    scrollTo({
      top: elem.offsetTop - 20,
      behavior: smooth ? "smooth" : "auto",
    });
  } else scrollTop();
}

export { scrollTop, scrollTopByElem };
