interface OurDocumentInterface {
  content: string;
  name: string;
  postfix: string;
  // content: string;
  printContent(): void;
}

class ExcelDocument implements OurDocumentInterface {
  content: string;
  name = "Table document";
  postfix = "xlsx";
  printContent(): void {
    console.log(`Reading the Excel doc: ${this.content}`);
  }
}

class WordDocument implements OurDocumentInterface {
  content: string;
  name = "Text document";
  postfix = "docx";
  printContent(): void {
    console.log(`Reading the Word doc: ${this.content}`);
  }
}