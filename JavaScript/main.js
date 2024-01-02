function setCookie()  
{  
    document.cookie = "name=" + document.getElementById("name").value;  
    document.cookie = "email=" + document.getElementById("email").value;  
    document.cookie = "course=" + document.getElementById("course").value;  
}  
function getCookie()  
{  
    if (document.cookie.length != 0)  
    {  
        alert("Name="+document.getElementById("name").value+" Email="+document.getElementById("email").value+" Course="+document.getElementById("course").value);  
    }      
    else  
    {  
        alert("Cookie not available");  
    }  
}     