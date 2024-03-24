"use client";

import { MutableRefObject, useEffect, useRef, useState } from "react";
import { ChildrenProps } from "@/app/types";
import { QuillContext } from "@/app/quill/context";

import Quill from "quill/core";

import Toolbar, { ToolbarProps } from "quill/modules/toolbar";
import Snow from "quill/themes/snow";

import Bold from "quill/formats/bold";
import Italic from "quill/formats/italic";
import Header from "quill/formats/header";
import { FontClass } from "quill/formats/font";

const register_options: Parameters<typeof Quill.register>[0] = {
  "modules/toolbar": Toolbar,
  "themes/snow": Snow,
  "formats/bold": Bold,
  "formats/italic": Italic,
  "formats/header": Header,
  "formats/font": FontClass,
};

export default function __InitQuill(
  props: {
    editorRef: MutableRefObject<HTMLElement | null>;
    toolbarRef: MutableRefObject<HTMLElement | null>;
    options?: ConstructorParameters<typeof Quill>[1];
  } & ChildrenProps,
) {
  const [quill, setQuill] = useState(null as Quill | null);
  const hasMounted = useRef(false);
  useEffect(() => {
    // Guard begin.
    if (hasMounted.current) return;

    const currentRef = props.editorRef.current;
    if (!currentRef) return;

    const toolbarRef = props.toolbarRef.current;
    if (!toolbarRef) return;

    // Guard end. Create Quill instance.

    Quill.register(register_options);

    const toolbarOptions: ToolbarProps = {
      container: toolbarRef,
    };

    const options: ConstructorParameters<typeof Quill>[1] = {
      theme: "snow",
      modules: { toolbar: toolbarOptions },

    };

    const _quill = new Quill(currentRef, { ...options, ...props.options });
    setQuill(_quill);

    hasMounted.current = true;
    console.debug("Init Quill.");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.editorRef.current, props.toolbarRef.current, props.options]);

  return (
    <QuillContext.Provider value={quill}>
      {props.children}
    </QuillContext.Provider>
  );
}
