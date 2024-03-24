"use client";

import { InitQuill, QuillContext } from "@/app/quill/init-quill";
import { useContext, useRef } from "react";
import { Button } from "flowbite-react";
import { BaseProps } from "@/app/types";

export default function Home() {
  const editorRef = useRef(null as HTMLDivElement | null);
  const toolbarRef = useRef(null as HTMLDivElement | null);
  return (
    <main>
      <div id="toolbox" ref={toolbarRef} className="min-h-10">
        <div className="ql-formats">
          <button className="ql-bold"></button>
          <select className="ql-font">
            <option value="serif"></option>
            <option value="monospace"></option>
          </select>
        </div>
      </div>
      <div id="editor" ref={editorRef} />
      <InitQuill editorRef={editorRef} toolbarRef={toolbarRef}>
        <ProcessQuill className="p-4"></ProcessQuill>
      </InitQuill>
    </main>
  );
}

function ProcessQuill(props: BaseProps) {
  const quill = useContext(QuillContext);

  function debug_handler() {
    if (!quill) return;

    console.debug(quill.getContents());
    console.debug(quill.getText());
    console.debug(quill.getSemanticHTML());
  }

  return (
    <div {...props}>
      <Button onClick={debug_handler}>Debug</Button>
    </div>
  );
}
