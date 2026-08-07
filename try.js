function copyEmail() {
    const email = "your.email@example.com";
    const copyBtn = document.getElementById("copyBtn");
    const copyText = document.getElementById("copyText");
  
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      // Visual feedback
      copyText.innerText = "Copied!";
      copyBtn.classList.add("copied");
  
      // Reset button after 2 seconds
      setTimeout(() => {
        copyText.innerText = "Copy Email";
        copyBtn.classList.remove("copied");
      }, 2000);
    });
  }