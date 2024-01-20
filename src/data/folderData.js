const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "style.css",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "index.js",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "7",
          name: "app.js",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "index.js",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};

export default explorer;
