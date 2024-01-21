const useTraverseTree = () => {
  const insertNode = (tree, folderId, name, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((item) => {
      return insertNode(item, folderId, name, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
