var listSanPham = [];
sanpham= {dmsp:"",name:"",priceold:"",price:"",img:"",};
var jsonsp = localStorage.getItem("localsanpham");
if (jsonsp != null)
    listSanPham = JSON.parse(jsonsp)
if (listSanPham == "") {
    var listSanPham = [
        //dien thoai
        //noibat
        sanpham= {
            dmsp: "giày nam",
            name: "sneaker  nam",
            priceold: "",
            price: 2900,
            img: "1.jpg"
        },
        sanpham= {
            dmsp: "giày nữ",
            name: "sneaker nữ",
            priceold: "",
            price: 3000,
            img: "2.jpg"
        },
        sanpham= {
            dmsp: "giày nam",
            name: "giày nam công sở",
            priceold: "",
            price: 3000,
            img: "3.jpg"
        },
        sanpham= {
            dmsp: "giày nam",
            name: "giày nam",
            priceold: "",
            price: 5000,
            img: "4.jpg"
        }
        
        
    ];
    this.listSanPham.push(sanpham);
    localStorage.setItem("localsanpham", JSON.stringify(this.listSanPham));
}