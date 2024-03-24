"use client";

import { InitQuill } from "@/app/quill/init-quill";
import { useRef } from "react";

export default function Home() {
  const editorRef = useRef(null as HTMLDivElement | null);
  const toolbarRef = useRef(null as HTMLDivElement | null);
  return (
    <main>
      <div id="toolbox" ref={toolbarRef} className="min-h-10">
        <div className="ql-formats">
          <button type="button" aria-pressed="false" aria-label="bold" className="ql-bold"></button>
        </div>
      </div>
      <div id="editor" ref={editorRef} />
      <InitQuill editorRef={editorRef} toolbarRef={toolbarRef}></InitQuill>
    </main>
  );
}
