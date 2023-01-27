"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  /****** JSX with Babel Version *******/
  return <button onClick={() => setLiked(true)}>Like</button>;

  /*****  Vanilla JS function version  *****
  return React.createElement(
    "button",
    {
      onClick: () => setLiked(true),
    },
    "Like"
  );
  */
}

const roots = document.getElementsByClassName("root");

for (let i = 0; i < roots.length; i++) {
  let root = ReactDOM.createRoot(roots[i]);
  root.render(React.createElement(LikeButton));
}
