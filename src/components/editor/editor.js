document.addEventListener("DOMContentLoaded", () => {
   console.log("Initializing CodeMirror...");

   const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      mode: "markdown",
      lineNumbers: true,
      theme: "base16-light",
      lineWrapping: true,
   });

   console.log("CodeMirror initialized:", editor);
   editor.setSize("100%", "100%");
});
