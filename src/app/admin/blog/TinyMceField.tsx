"use client";

import { Editor } from "@tinymce/tinymce-react";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

export default function TinyMceField({ value, onChange }: Props) {
  return (
    <Editor
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      value={value}
      onEditorChange={(c) => onChange(c)}
      init={{
        height: 480,
        menubar: true,
        plugins: ["link", "lists", "code", "table", "image"],
        toolbar:
          "undo redo | blocks | bold italic underline | alignleft aligncenter alignright | bullist numlist | link image | code",
        skin_url: "/tinymce/skins/ui/oxide",
        content_css: "/tinymce/skins/content/default/content.min.css",
        branding: false,
      }}
    />
  );
}
