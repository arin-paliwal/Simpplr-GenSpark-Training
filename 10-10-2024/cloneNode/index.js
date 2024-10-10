function cloneNode() {
  const nodeToClone = document.getElementById("clone-node");
  const clonedNode = nodeToClone.cloneNode(true);
  const cloneContainer = document.getElementById("clone-container");
  cloneContainer.appendChild(clonedNode);
}

document.addEventListener("DOMContentLoaded", function () {
  cloneNode();
});
document.getElementById("clone-btn").addEventListener("click", function () {
  cloneNode();
});
