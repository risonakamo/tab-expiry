import {createRoot} from "react-dom/client";

import "./popup-index.less";

function PopupIndex():JSX.Element
{
  return <>
    huh
  </>;
}

function main()
{
  createRoot(document.querySelector("main")!).render(<PopupIndex/>);
}

window.onload=main;