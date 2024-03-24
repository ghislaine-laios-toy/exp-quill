"use client";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";

import type __InitQuill from "@/app/quill/__init-quill";
import dynamic from "next/dynamic";

const Inner = dynamic(() => import("@/app/quill/__init-quill"), { ssr: false });

export function InitQuill(props: Parameters<typeof __InitQuill>[0]) {
  return <Inner {...props}></Inner>;
}

export { QuillContext } from "@/app/quill/context";
