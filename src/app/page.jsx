"use client"
import Image from 'next/image'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { useEffect, useState } from "react";

import Split from "react-split";

//? Archivos md de prueba
import EditorMarkdown from '@/components/EditorMarkdown/EditorMarkdown';
import RenderMarkdown from '@/components/RenderMarkdown/RenderMarkdown';

import markdown from "raw-loader!../assets/markdown.md";

export default function Home() {
  const [text, setText] = useState(markdown);

  return (
    <div className="h-screen bg-dark ">


      <Split className="flex flex-row" sizes={[50, 50]} minSize={300} direction="horizontal" gutterSize={8} gutterAlign="center">


        <EditorMarkdown height="100vh" defaultValue={text} onChange={(value) => setText(value)}></EditorMarkdown>

        <RenderMarkdown text={text} style={{ maxHeight: '100vh', overflow: 'auto' }}></RenderMarkdown>

      </Split>

    </div>
  );
}
