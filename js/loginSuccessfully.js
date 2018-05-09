$(function() {
	var url = "";
	$.ajax({
		url: ,
		type: "get",
		async: true,
		success: function(result) {
			add_skill(result)
			add_like(result)
		}
	});
	
	function add_skill(result){
		var info = result.extent.pageInfo.list;
		$("#")
	}
	
	function add_like(result){
		
	}

})