import html2pdf from 'html2pdf.js';

export const downloadPDF = (elementRef) => {
  if (!elementRef.current) return;

  const element = elementRef.current;
  const opt = {
    margin: 10,
    filename: 'dashboard.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' },
  };

  html2pdf().from(element).set(opt).save();
};
