nameoffriendsarray=[];
function submitting(){
    friend1=document.getElementById("i1").value ;
    friend2=document.getElementById("i2").value ;
    friend3=document.getElementById("i3").value ;
    friend4=document.getElementById("i4").value ;
    nameoffriendsarray.push(friend1);
    nameoffriendsarray.push(friend2);
    nameoffriendsarray.push(friend3);
    nameoffriendsarray.push(friend4);
    document.getElementById("name_of").innerHTML=nameoffriendsarray ;
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="inline-block";
}

function sorting() {
nameoffriendsarray.sort();
document.getElementById("name_of").innerHTML=nameoffriendsarray;

}