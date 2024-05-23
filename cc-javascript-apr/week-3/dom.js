let paragraphs = document.getElementsByTagName('p');
for (let count = 0; count <= paragraphs.length; count++){
  paragraphs[count].innerHTML = "new content";
}