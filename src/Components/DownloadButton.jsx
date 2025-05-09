const DownloadButton = ({
  name = "Download Resume",
  fileUrl,
  containerClass = "",
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // optional: customize filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`btn font-bold ${containerClass}`}
    >
      {name}
    </button>
  );
};

export default DownloadButton;
