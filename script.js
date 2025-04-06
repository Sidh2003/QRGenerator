let qr;

function generateQRCode() {
  const link = document.getElementById("linkInput").value.trim();
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";

  if (!link) {
    alert("Please enter a valid link.");
    return;
  }

  qr = new QRCode(qrContainer, {
    text: link,
    width: 200,
    height: 200,
    colorDark: "#ffffff",
    colorLight: "#1f2937",
    correctLevel: QRCode.CorrectLevel.H,
  });

  document.getElementById("form-section").style.display = "none";
  document.getElementById("qrcode-section").style.display = "block";
}

function goBack() {
  document.getElementById("form-section").style.display = "block";
  document.getElementById("qrcode-section").style.display = "none";
  document.getElementById("qrcode").innerHTML = "";
  document.getElementById("linkInput").value = "";
}

function downloadQRCode() {
  const img = document.querySelector("#qrcode img");
  if (img) {
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "qr-code.png";
    link.click();
  } else {
    alert("QR not generated yet!");
  }
}
