  function fileSelect() {
  	document.getElementById("fileToUpload").click();
  }

  function isSure() {
  	var mes = confirm("还未保存，您确定要退出吗？")
  	if(mes == true) {
  		window.location.href = "loginSuccessfully.html"
  	} else {
  		window.location.href = "userInfor.html"
  	}
  }
  function save(){
  	alert("保存成功！")
  }
