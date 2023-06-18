import React from 'react';
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {

  async function creatPdf({
    doc,
    elements,
  }) {
    let top = 20;
    const padding = 10;

    for (let i = 0; i < elements.length; i++) {
      const el = elements.item(i);
      const imgData = await htmlToImage.toPng(el);

      let elHeight = el.offsetHeight;
      let elWidth = el.offsetWidth;

      const pageWidth = doc.internal.pageSize.getWidth();

      if (elWidth > pageWidth) {
        const ratio = pageWidth / elWidth;
        elHeight = elHeight * ratio - padding;
        elWidth = elWidth * ratio - padding;
      }

      const pageHeight = doc.internal.pageSize.getHeight();

      if (top + elHeight > pageHeight) {
        doc.addPage();
        top = 20;
      }

      doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
      top += elHeight;
    }
  }

  async function exportMultipleChartsToPdf() {
    const doc = new jsPDF("p", "px"); // (1)

    const elements = document.getElementsByClassName(rootElementId); // (2)

    await creatPdf({ doc, elements }); // (3-5)

    doc.save(downloadFileName); // (6)
  }

  return <div className="export-div" onClick={exportMultipleChartsToPdf}>
    <img className="export-image"></img>
    <label className="export-label">Export as PDF</label>
  </div>

}

export default GenericPdfDownloader;