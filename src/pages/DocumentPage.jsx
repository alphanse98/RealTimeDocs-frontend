import React, { useEffect, useRef } from "react";
import Quill from "quill";
import { useParams } from "react-router-dom";
import "quill/dist/quill.snow.css";
import { io } from "socket.io-client";

const DocumentPage = () => {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);
  const socket = useRef(null);

  const { id } = useParams();
  const docId = id;

  useEffect(() => {
    // Initialize socket connection
    socket.current = io("http://localhost:4000");

    // Initialize Quill editor
    if (!quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      // Listen for text changes and emit updates to the server
      quillInstance.current.on("text-change", (delta, oldDelta, source) => {
        if (source === "user") {
          const content = quillInstance.current.getContents();
          socket.current.emit("update-document", { docId, content });
        }
      });
    }

    // Listen for document updates from the server
    socket.current.on("document", (content) => {
      quillInstance.current.setContents(content);
    });

    // Load the initial document
    socket.current.emit("get-document", docId);

    return () => {
      socket.current.disconnect();
    };
  }, [docId]); 

  return (
    <div>
      <div
        ref={editorRef}
        style={{ height: "300px", border: "1px solid #ccc" }}
      ></div>
    </div>
  );
};

export default DocumentPage;
