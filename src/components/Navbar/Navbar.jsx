import React from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { RiDownload2Line } from "react-icons/ri";
import { MdDownloadDone } from "react-icons/md";
import pdfFile from "../../files/Estudio.pdf";

const Navbar = () => {
  const downloadPdf = () => {
    const button = document.querySelector('.app__navabr-content_second-download');
    const paragraph = document.querySelector(".paragraph");
    const line = document.querySelector(".line");
    const download = document.querySelector(".icon-download");
    const check = document.querySelector(".icon-check");
    fetch(pdfFile)
      .then((response) => response.blob())
      .then((blob) => {
        const fileName = "Estudio.pdf";
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
      });
    check.style.display = "flex";
    button.style.background = "var(--green-web)";
    paragraph.style.display = "none";
    line.style.display = "none";
    download.style.display = "none";
  };
  return (
    <nav className="app__navbar">
      <div className="app__navabr-content_first"></div>
      <div className="app__navbar-logo">
        <img className="app__navbar-logo_img" src={images.logo} alt="Logo" />
      </div>
      <div className="app__navabr-content_second">
        <div></div>
        <button
          className="app__navabr-content_second-download"
          onClick={downloadPdf}
        >
          <p className="paragraph">Curriculum</p>
          <div className="line"></div>
          <RiDownload2Line className="icon-download" />
          <MdDownloadDone className="icon-check" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
