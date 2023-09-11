import React from 'react';
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
import autoTable from 'jspdf-autotable';

const GenericPdfDownloader = ({ rootElementId, downloadFileName, surveyData }) => {
  async function creatPdf({
    doc,
    elements,
    ulList
  }) {
    let top = 120;
    const padding = 10;

    for (let i = 0; i < elements.length; i++) {
      const el = elements.item(i);
      const imgData = await htmlToImage.toPng(el);
      const ulData = await htmlToImage.toPng(ulList);

      let elHeight = el.offsetHeight;
      let elWidth = el.offsetWidth;

      const pageWidth = doc.internal.pageSize.getWidth();

      if (elWidth > pageWidth) {
        const ratio = pageWidth / elWidth;
        elHeight = elHeight * ratio - padding;
        elWidth = elWidth * ratio - padding;
      }

      const pageHeight = doc.internal.pageSize.getHeight();

      doc.addImage(imgData, "PNG", padding, 120, elWidth - 10, elHeight, `image${i}`, 'FAST');
      doc.addFont("Manrope");
      doc.setTextColor("#27272A");
      doc.setFontSize(30);
      if (i == 0) {
        doc.text("Overall Summary", 10, 30, { fontWeight: "bold" });
        doc.setFontSize(12);
        doc.setTextColor("#7D7D7F");

        doc.text("Aut quia odit quae maiores fuga delectus. Voluptates id consectetur quam fuga. Reiciendis nesciunt sunt non. Labore odit iste eius eaque numquam eaque.", 10, 40, { maxWidth: 160, fontWeight: "normal" });
        doc.addImage(ulData, "PNG", padding, 50, 150, 50, `ul${i}`, 'FAST');
      }
      if (i < elements.length - 1) {
        top += elHeight;
        top = createTable(doc, i, top);
        doc.addPage();
        doc.addFont("Manrope");
        doc.setTextColor("#27272A");
        doc.setFontSize(30);
        doc.text(surveyData.categories[i].category, 10, 30, { fontWeight: "bold" });
        doc.setFontSize(12);
        doc.setTextColor("#7D7D7F");

        doc.text("Aut quia odit quae maiores fuga delectus. Voluptates id consectetur quam fuga. Reiciendis nesciunt sunt non. Labore odit iste eius eaque numquam eaque.", 10, 40, { maxWidth: 160, fontWeight: "normal" });
        doc.addImage(ulData, "PNG", padding, 50, 150, 50, `ul${i}`, 'FAST');
      }
    }
  }
  const createTable = (doc, index, top) => {
    doc.addPage();
    doc.addFont("Manrope");
    doc.setTextColor("#27272A");
    doc.setFontSize(30);
    top = 20;
    doc.text(surveyData.categories[index].category, 10, top);
    doc.setFontSize(12);
    doc.setTextColor("#7D7D7F");
    doc.text("Aut quia odit quae maiores fuga delectus. Voluptates id consectetur quam fuga. Reiciendis nesciunt sunt non. Labore odit iste eius eaque numquam eaque.", 10, 30, { maxWidth: 160, fontWeight: "normal" });

    doc.setTextColor("#27272A");
    doc.setFontSize(16);
    doc.text("Survey selections", 10, 50, { fontWeight: "bold" });

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
      startY: 60,
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
    const ulList = document.getElementById("radar-label-list");

    await creatPdf({ doc, elements, ulList }); // (3-5)

    doc.save(downloadFileName); // (6)
  }

  return <div className="export-div" onClick={exportMultipleChartsToPdf}>
    <img className="export-image"></img>
    <label className="export-label">Export as PDF</label>
  </div>

}

export default GenericPdfDownloader;