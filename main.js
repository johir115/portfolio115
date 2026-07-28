// ============== all page start ========
// show date and time
function showdatetime(){
    let today = new Date();
    document.getElementById("showdatetime").textContent = today.toLocaleString();
    console.log(today);
    return true;

}
showdatetime()
// ============== all page start ========
// ============== contact page start ========
// code for form validaiton
function validationjohir (){

    let NameDoc=document.getElementById("name").value;
    let EmailDoc=document.getElementById("email").value;
    let TelDoc=document.getElementById("tel").value;
    let AddressDoc=document.getElementById("address").value;
    let MessageDoc=document.getElementById("message").value;

    console.log(NameDoc);
    console.log(EmailDoc);
    console.log(TelDoc);
    console.log(AddressDoc);
    console.log(MessageDoc);

    if(NameDoc == "" || EmailDoc == "" || TelDoc == "" || AddressDoc == "" || MessageDoc == ""){
        alert('please fill empty field')
        return false;
    }
    alert('sumit done!');
    return true;
}
// ============== contact page end ========
