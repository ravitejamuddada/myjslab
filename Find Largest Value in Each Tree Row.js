function largestValues(root) {
  let arr = [];
  dfs(root, 0);
  return arr;
  
  function dfs(node, d) {
    if (!node) return null;
    const max = arr[d] === undefined ? -Infinity : arr[d];
    arr[d] = Math.max(max, node.val);
    dfs(node.left, d + 1);
    dfs(node.right, d + 1);
  }
}
