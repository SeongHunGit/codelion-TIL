function counter() {
  let content = document.getElementById("jasoseol").value;
  if (content.length > 200) {
    content = content.substring(0, 200);
    document.getElementById("jasoseol").value = content;
  }
  document.getElementById("count").innerHTML = `(${content.length}/200)`;
}
counter();
