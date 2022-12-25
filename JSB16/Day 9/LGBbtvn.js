function kt() {
    let a = 0
    let b = 0
    let ten = document.getElementById("ten")
    for (let i = 0; i < ten.value.length; i++) {
        if (isNaN(Number(ten.value.charAt(i)))===false) {
            console.log("sai");
        }
    }
    if (ten.value==="") {
        alert("Vui lòng nhập tên của bạn! ")
    }
    else if (b==1) {
        alert("Vui lòng nhập đúng tên của bạn!")
    }
    else {
        a++
    }
    
    let tuoi = document.getElementById("tuoi")
    if (tuoi.value==="") {
        alert("Vui lòng nhập tuổi của bạn! ")
    }
    else if(isNaN(Number(tuoi.value))===true||Number(tuoi.value)<=0||Number(tuoi.value)>=200){
        alert("Vui lòng nhập đúng số tuổi!")
    }
    else {
        a++
    }
    
    let sdt = document.getElementById("sdt")
    if (sdt.value==="") {
        alert("Vui lòng nhập số điện thoại của bạn! ")
    }
    else if(isNaN(Number(sdt.value))===true){
        alert("Vui lòng nhập đúng số điện thoại!")
    }
    // else if ((Number(tuoi.value)-100000000)<0) {
    //     alert("Vui lòng nhập đúng số điện thoại!")
    // }
    // else if ((Number(tuoi.value)-999999999)>0) {
    //     alert("Vui lòng nhập đúng số điện thoại!")
    // }
    else {
        a++
    }
    
    // let gt = document.getElementsByName("gt")
    // if (gt[0].checked==false&&gt[1].checked==false) {
    //     alert("Vui lòng chọn giới tính của ban!")
    // }
    // else {
    //     a+=1
    // }

    let gt = document.getElementById("gt")
    if (gt.value=="1") {
        alert("Vui lòng chọn giới tính của bạn")
    } 
    else if (gt.value=="4") {
        alert("Đây là giới tính không phải xu hướng tình dục ok!\nVui lòng chọn lại giới tính của bạn!")
    }
    else {
        a++
    }

    if (a===4) {
        alert("Đăng kí thành công.")
        console.log("Họ và tên: " + ten.value);
        console.log("Tuổi: " + tuoi.value);
        console.log("Số điện thoại: " + sdt.value);
        console.log("Giới tính: " + gt.options[gt.selectedIndex].text);
        
        // if (gt[0].checked==true) {
        //     console.log("Giới tính: Nam");
        // } else {
        //     console.log("Giới tính: Nữ");
        // }

        ten.value = ""
        tuoi.value = ""
        sdt.value = ""
        gt.value = "1"

        // gt[0].checked = false
        // gt[1].checked = false
    }
}

