import { QRCodeCanvas } from "qrcode.react";

function ProductQR({ product }) {
  const qrValue = `PRODUCT:${product.id}|NAME:${product.name}|PRICE:${product.price}`;

  return (
    <div style={{ marginTop: 20, textAlign: "center" }}>
      <h4>Product QR Code</h4>

      <QRCodeCanvas
        value={qrValue}
        size={180}
        bgColor="#ffffff"
        fgColor="#000000"
      />

      <p style={{ fontSize: 12, color: "#666" }}>
        Scan to view product info
      </p>
    </div>
  );
}

export default ProductQR;
