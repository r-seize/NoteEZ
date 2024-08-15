document.addEventListener('DOMContentLoaded', () => {
   const saveButton = document.getElementById('save-button');
   const openButton = document.getElementById('open-button');

   if (!window.editor) {
      console.error("Editor is not initialized");
      return;
   }

   saveButton.addEventListener('click', () => {
      const blob = new Blob([window.editor.getValue()], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.md';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
   });

   openButton.addEventListener('click', () => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.md';
      input.addEventListener('change', () => {
         const file = input.files[0];
         const reader = new FileReader();
         reader.onload = (e) => {
            window.editor.setValue(e.target.result);
         };
         reader.readAsText(file);
      });
      input.click();
   });
});
