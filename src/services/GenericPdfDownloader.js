import React from 'react';
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
import autoTable from 'jspdf-autotable';

const GenericPdfDownloader = ({ rootElementId, downloadFileName, surveyData }) => {
  async function creatPdf({
    doc,
    elements,
  }) {
    let top = 20;
    const padding = 20;

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

      doc.addImage(imgData, "PNG", padding, top, elWidth - 10, elHeight, `image${i}`);
      top += elHeight;
      doc.addFont("Manrope");
      doc.setFontSize(22);
      if (i == 0) {
        doc.text("Overall Summary", 10, 10);
      }
      if (i < elements.length - 1) {
        top = createTable(doc, i, top);
      }
    }
  }
  const createTable = (doc, index, top) => {
    doc.addPage();
    top = 20;
    doc.text(surveyData.categories[index].category, 10, top);
    let rows = [];
    surveyData.categories[index].questions.forEach(question => {
      let rowData = [];
      rowData.push(question.heading);
      for (let i = 0; i < question.options.length; i++) {
        if (i < 4) {
          rowData.push(question.options[i]);
        } else {
          question.selectedOption == 5 ? rowData.push(question.options[5]) : rowData.push(question.options[4]);
          break;
        }
      }
      rows.push(rowData);
    })
    doc.autoTable(['Sub category', 'Level 1 (Low=1)', 'Level 2 (Medium=2)', 'Level 3 (High=3)', 'Level 4 (Maximum=4)', 'Other'], rows, {
      theme: 'grid',
      startY: top + 10,
      styles: {
        fontSize: 12,
        valign: 'top',
        halign: 'left'

      },
      headStyles: { fillColor: "#f4f4f4", textColor: "#000" },
      tableLineColor: "#e9e9e9",
      tableLineWidth: 0.1,
      columnStyles: {
        0: { fontStyle: 'bold' }
      },
      willDrawCell: function (data) {
        var doc = data.doc;
        var rows = data.table.body;
        if (rows.length === 1) {
        } else {
          if (data.row.section != "head") {
            let currentQuestion = surveyData.categories[index].questions[data.row.index];
            if (currentQuestion?.selectedOption == 4 || currentQuestion?.selectedOption == 5) {
              currentQuestion.selectedOption = 4;
            }
            if (data.column.index == (currentQuestion?.selectedOption + 1)) {
              doc.setFillColor("#feefd3");
            } else {

            }
          }
        }
      }
    });
    return doc.lastAutoTable.finalY + 10;
  }

  async function exportMultipleChartsToPdf() {
    const doc = new jsPDF(); // (1)

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