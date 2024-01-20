import React, { useState } from "react";
import "./Folder.css";

const Folder = ({ explorer }) => {
  const [expend, setExpend] = useState(false);

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
            <span>📁 {explorer.name}</span>
          </div>
          <div style={{ display: expend ? "block" : "none", paddingLeft: 25 }}>
            {explorer.items.map((item) => {
              return <Folder key={item.id} explorer={item} />;
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
