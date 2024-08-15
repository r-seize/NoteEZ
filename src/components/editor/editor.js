document.addEventListener("DOMContentLoaded", () => {
   console.log("Initializing CodeMirror...");

   window.editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      mode: "markdown",
      lineNumbers: true,
      theme: "base16-light",
      lineWrapping: true,
   });

   window.editor.setSize("100%", "100%");
});
