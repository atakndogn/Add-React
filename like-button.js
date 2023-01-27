"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return React.createElement(
    "button",
    {
      onClick: () => setLiked(true),
    },
    "Like"
  );
}

const roots = document.getElementsByClassName("root");
//console.log(roots);

for (let i = 0; i < roots.length; i++) {
  let root = ReactDOM.createRoot(roots[i]);
  root.render(React.createElement(LikeButton));
}

//const root1 = ReactDOM.createRoot(document.getElementById("root1"));
//root1.render(React.createElement(LikeButton));
