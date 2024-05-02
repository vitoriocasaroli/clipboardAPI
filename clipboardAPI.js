
//Clipboard API

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText("Hello, World!");
    console.log("Text copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

const pasteFromClipboard = async () => {
  try {
    const text = await navigator.clipboard.readText();
    console.log("Pasted text: ", text);
  } catch (err) {
    console.error("Failed to paste: ", err);
  }
}

