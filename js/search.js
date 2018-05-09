$(function(){
	search()
	clickTabs()
	
	function search(){
		$('#txtSearch')
		.on('keyup focus',function(){
			var txt = this.value.trim()
			if (txt){
				$("#search-helper").show()
			}
		})
		.blur(function(){
			$('#search-helper').hide()
		})
	}
	
	function clickTabs(){
		var $lis = $('#search-detail>ul>li')
		var $contents = $('#search-detail>div')
		$lis.click(function(){
			$lis.removeClass('current')
			this.className = 'current'
			$contents.hide()
			var index = $(this).index()
			$contents.eq(index).show()
		})
	}
	
	
})