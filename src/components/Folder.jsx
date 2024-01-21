import React, { useState } from "react";
import "./Folder.css";

const Folder = ({ handleInsertNode, explorer }) => {
  const [expend, setExpend] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpend(true);

    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <>
      {explorer.isFolder ? (
        <>
          <div
            className="folder"
            onClick={() => {
              setExpend(!expend);
            }}
          >
            <span>
              {expend ? "📂" : "📁"} {explorer.name}
            </span>
            <div>
              <button onClick={(e) => handleNewFolder(e, true)}>
                Folder +
              </button>
              <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
            </div>
          </div>
          <div style={{ display: expend ? "block" : "none", paddingLeft: 25 }}>
            {showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder ? "📁" : "📄"}</span>
                <input
                  className="inputContainer__input"
                  autoFocus
                  onKeyDown={onAddFolder}
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  type="text"
                />
              </div>
            )}

            {explorer.items.map((item) => {
              return (
                <Folder
                  handleInsertNode={handleInsertNode}
                  key={item.id}
                  explorer={item}
                />
              );
            })}
          </div>
        </>
      ) : (
        <span className="file">📄 {explorer.name}</span>
      )}
    </>
  );
};

export default Folder;
