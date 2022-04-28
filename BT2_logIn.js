// SƠ ĐỒ 3 KHỐI

/**
 * INPUT : nhập tên user
 * 
 * PROCESS : 
 *  1. Input : tạo biến var user
 *  2. Tạo var resutl2 chứa giá trị đầu ra
 *  3. Cho người dùng nhập giá trị vào biến user : 
 *      user = B ==> Chào Bố
 *      user = M ==> Chào Mẹ
 *      user = A ==> Chào Anh Trai
 *      user = E ==> Chào Em Gái
 * 
 *      user # B, M, A, E ==> Người lạ
 *  4. Log kết quả ra man hình
 * 
 * OUTPUT : result2
 */


function logIn()
{
    var userEl = document.getElementById("user").value 
    var resultEl = document.getElementById("result2")

    if(userEl === "B")
    {
        resultEl.innerHTML = "Chào Bố"
    }
    else if(userEl === "M"){
        resultEl.innerHTML = "Chào Mẹ"
    }
    else if(userEl === "A")
    {
        resultEl.innerHTML = "Chào Anh Trai"
    }
    else if(userEl === "E")
    {
        resultEl.innerHTML = "Chào Em Gái"
    }
    else{
        resultEl.innerHTML = "Người lạ"
    }
}
