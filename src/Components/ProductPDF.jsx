import { Document, Page, Text, Image, PDFDownloadLink } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

function ProductPDF({ product }) {
  const [qrImage, setQrImage] = useState(null);

  useEffect(() => {
    const generateQR = async () => {
      const value = `PRODUCT:${product.id}|NAME:${product.name}|PRICE:${product.price}`;
      const qr = await QRCode.toDataURL(value);
      setQrImage(qr);
    };

    generateQR();
  }, [product]);

  const PDFDocument = () => (
    <Document>
      <Page style={{ padding: 30 }}>
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Product Information
        </Text>

        <Text>ID: {product.id}</Text>
        <Text>Name: {product.name}</Text>
        <Text>Description: {product.description}</Text>
        <Text>Price: {product.price}</Text>
        <Text>Type: {product.type}</Text>

        {qrImage && (
          <>
            <Text style={{ marginTop: 20 }}>QR Code:</Text>
            <Image
              src={qrImage}
              style={{ width: 120, height: 120, marginTop: 10 }}
            />
          </>
        )}

        <Text style={{ marginTop: 20, fontSize: 10 }}>
          Generated: {new Date().toLocaleDateString()}
        </Text>
      </Page>
    </Document>
  );

  return (
    <PDFDownloadLink
      document={<PDFDocument />}
      fileName={`product-${product.id}.pdf`}
    >
      {({ loading }) =>
        loading ? "..." : (
          <img
            src="/pdficon.png"
            alt="pdf"
            width="25"
            style={{ cursor: "pointer" }}
          />
        )
      }
    </PDFDownloadLink>
  );
}

export default ProductPDF;
