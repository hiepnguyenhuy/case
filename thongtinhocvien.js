class Sinhvien {
    ID;
    Hoten;
    Ngaysinh;
    Gioitinh;
    Lop;
    Anh;


    constructor(ID, Hoten, Ngaysinh, Gioitinh, Lop, Anh) {
        this.ID = ID;
        this.Hoten = Hoten;
        this.Ngaysinh = Ngaysinh;
        this.Gioitinh = Gioitinh;
        this.Lop = Lop;
        this.Anh = Anh;
    }


}

let sva = new Sinhvien(11, "Nguyễn Văn A", "07/07/1991", "Nam", "C09", "nguyenvanb.jpg");
let svb = new Sinhvien(12, "Nguyễn Văn B", "08/07/1991", "Nam", "C07", "nguyenvanb.jpg");
// let taphopsv = [sva, svb];
let taphopsv = JSON.parse(localStorage.getItem("sva"));

   
let divShow = document.getElementById("show");

function show() {

    let str = "";
    for (let i = 0; i < taphopsv.length; i++) {
        str += `<tr>
<td>${taphopsv[i].ID}</td>
<td>${taphopsv[i].Hoten}</td>
<td>${taphopsv[i].Ngaysinh}</td>
<td>${taphopsv[i].Gioitinh}</td>
<td>${taphopsv[i].Lop}</td>
<td><img src="${taphopsv[i].Anh}" width="150" height="100"></td>
<td><button style="width: fit-content" onclick="sua(${i})">Edit</button> </td>
<td><button style="width: fit-content;"  onclick="xoa(${i})">Delete</button> </td>
</tr>`
    }
    divShow.innerHTML = str;
}

show();

function xoa(index) {
    taphopsv.splice(index, 1);
    show();
    localStorage.setItem("sva",JSON.stringify(taphopsv));
}
function them() {
    let diachia = document.getElementById("id").value;
    let hoten = document.getElementById("hoten").value;
    let ngaysinh = document.getElementById("ngaysinh").value;
    let gioitinh = document.getElementById("gioitinh").value;
    let lop = document.getElementById("lop").value;
    let anh = document.getElementById("anh").value;
    let newPerson = new Sinhvien(diachia, hoten, ngaysinh, gioitinh, lop, anh);
    taphopsv.push(newPerson);
    show();
    localStorage.setItem("sva",JSON.stringify(taphopsv));
    clear();
}
function clear() {
    document.getElementById("id").value = '';
    document.getElementById("hoten").value = '';
    document.getElementById("ngaysinh").value = '';
    document.getElementById("gioitinh").value = '';
    document.getElementById("lop").value = '';
    document.getElementById("anh").value = '';
}

let j = 0

function sua(i) {
    document.getElementById("id").value = taphopsv[i].ID;
    document.getElementById("hoten").value = taphopsv[i].Hoten;
    document.getElementById("ngaysinh").value = taphopsv[i].Ngaysinh;
    document.getElementById("gioitinh").value = taphopsv[i].Gioitinh;
    document.getElementById("lop").value = taphopsv[i].Lop;
    document.getElementById("anh").value = taphopsv[i].Anh;

    j = i
    show()
    localStorage.setItem("sva",JSON.stringify(taphopsv));

}

function save() {

    let diachia = document.getElementById("id").value;
    let hoten = document.getElementById("hoten").value;
    let ngaysinh = document.getElementById("ngaysinh").value;
    let gioitinh = document.getElementById("gioitinh").value;
    let lop = document.getElementById("lop").value;
    let anh = document.getElementById("anh").value;
    taphopsv[j].ID = diachia;
    taphopsv[j].Hoten = hoten;
    taphopsv[j].Ngaysinh = ngaysinh;
    taphopsv[j].Gioitinh = gioitinh;
    taphopsv[j].Lop = lop;
    taphopsv[j].Anh = anh;
    show();
    clear();
    localStorage.setItem("sva",JSON.stringify(taphopsv));
}
