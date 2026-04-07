import React, { useState } from "react";
import "./style.css";

function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sp = [
    {
      id: 1,
      ten: 'Laptop Asus Vivobook Gaming K3605VC-RP431W i5-13420H/16GB/512GB/16" WUXGA/RTX 3050 4GB/W11',
      hinh: "https://cdn2.fptshop.com.vn/unsafe/ASUS_Vivobook_16_X_K3605_4_61e10b6de4.jpg",
      mota: "với sự kết hợp của CPU Intel Core i5 13420H cùng card đồ họa rời NVIDIA GeForce RTX 3050 sẽ giúp bạn hoàn thành mọi công việc phức tạp cũng như giải trí hàng ngày. Đặc biệt, chiếc laptop này vô cùng mỏng nhẹ và thời trang, đảm bảo tính di động trong cuộc sống hiện đại.",
      gia: 20290000,
    },
    {
      id: 2,
      ten: 'Laptop Asus TUF Gaming FA506NCG-HN184W R7-7445HS/16GB/512GB/15.6"/Nvidia GeForce RTX3050 4GB/Win11',
      hinh: "https://cdn2.fptshop.com.vn/unsafe/800x0/asus_tuf_gaming_fa506ncg_hn184w_1_226a14e0fd.jpg",
      mota: "Sở hữu độ bền chuẩn quân sự và mang lại hiệu năng tốt trong tầm giá, Asus TUF Gaming FA506NCG-HN184W là lựa chọn đáng tin cậy cho những ai yêu thích eSport và thiết kế đồ họa bán chuyên. Máy được trang bị chip xử lý AMD Ryzen 7 7445HS, card đồ họa NVIDIA GeForce RTX 3050 4GB GDDR6 cùng màn hình 15.6 inch Full HD tần số quét 144Hz.",
      gia: 22490000,
    },
    {
      id: 3,
      ten: 'Laptop Acer Aspire 7 Gaming A715-59G-57TU i5 12450H/16GB/512GB/15.6"FHD/Nvidia Geforce RTX3050 6GB/Win1',
      hinh: "https://cdn2.fptshop.com.vn/unsafe/800x0/acer_aspire_7_a715_59g_57tu_1_0826ef950a.jpg",
      mota: "Phiên bản Acer Aspire 7 A715-59G-57TU 16GB RAM là mẫu laptop đa năng đáp ứng tốt nhu cầu của những ai mong muốn hiệu năng cao cấp với mức giá thành không quá cao. Máy sở hữu chip Intel Core i5-12450H, card đồ họa RTX 3050 6GB và màn hình 144Hz cho trải nghiệm mượt mà. Thiết kế trung tính cùng khả năng tản nhiệt tốt giúp thiết bị vận hành ổn định trong nhiều tình huống.",
      gia: 20990000,
    },
    {
      id: 4,
      ten: 'Laptop Lenovo Gaming LOQ E 15IAX9E i5 12450HX/16GB/512GB/15.6"FHD/RTX 3050 6GB/Win 11',
      hinh: "https://cdn2.fptshop.com.vn/unsafe/800x0/lenovo_loq_essential_15iax9e_83lk0079vn_8_4cebc38d1f.jpg",
      mota: "Với Lenovo LOQ Essential 15IAX9E 83LK0079VN, các game thủ sẽ có được trải nghiệm giải trí tốt với mức giá hợp lý. Ngoài ra, mẫu laptop này còn là lựa chọn thông minh cho các sinh viên chuyên ngành công nghệ, dân văn phòng cần xử lý đồ họa hay những ai làm trong ngành sáng tạo nội dung. Sản phẩm được trang bị chip Intel Core i5 12450HX cùng card đồ họa rời RTX 3050. Màn hình 144Hz sẽ đem tới những khung hình mượt mà sống động.",
      gia: 22990000,
    },
  ];
  return (
    <div className="product-page">
      <div className="product-row">
        {sp.map((item) => (
          <div className="product-col" key={item.id}>
            <div className="product-card">
              <img alt={item.ten} className="product-image" src={item.hinh} />
              <div className="product-body">
                <h5 className="product-title">{item.ten}</h5>
                <p className="product-description">{item.mota}</p>
                <h5 className="product-price">{item.gia.toLocaleString()} VND</h5>
                <button
                  className="product-btn"
                  type="button"
                  onClick={() => setSelectedProduct(item)}
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div
          className="product-modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
          >
            <button
              className="product-modal-close"
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="Đóng"
            >
              ×
            </button>
            <div className="product-modal-body">
              <img
                className="product-modal-image"
                src={selectedProduct.hinh}
                alt={selectedProduct.ten}
              />
              <div className="product-modal-content">
                <h2 id="product-modal-title" className="product-modal-title">
                  {selectedProduct.ten}
                </h2>
                <p className="product-modal-description">
                  {selectedProduct.mota}
                </p>
                <p className="product-modal-price">
                  {selectedProduct.gia.toLocaleString()} VND
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
