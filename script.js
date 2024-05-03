// select the necessary downloader web app element
const fileInput = document.querySelector("input"),
  downloadBtn = document.querySelector("button");
// download eventlistener
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadBtn.innerText = "Downloading file..."; // change dwonload innerText
  fetchFile(fileInput.value); // fetching fileInput url
});
// fetchFile function
function fetchFile(url) {
  // url fetch
  fetch(url)
    .then((res) => res.blob())
    .then((file) => {
      let tempUrl = URL.createObjectURL(file); // pass the blob file
      const aTag = document.createElement("a"); // create <a></a> tag
      aTag.href = tempUrl;
      aTag.download = "download_image"; // download image
      document.body.appendChild(aTag); // append a tag in the body
      aTag.click(); // click a tag
      downloadBtn.innerText = "Download File";
      URL.revokeObjectURL(tempUrl);
      aTag.remove(); // remove <a></a> tag
    })
    .catch(() => {
      alert("Failed to download file!");
      downloadBtn.innerText = "Download File";
    });
}
