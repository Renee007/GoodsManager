jQuery(document).ready(function() {

	$("#addgoods").click(function() {
		$("div#add").show();
	})
	$("#cancel").click(function() {
		$("div#add").hide();
	})
	$("#addGoods").click(function() {
			$("div#add").hide();
			var shopName = $("#shopName").val();
			var goodsName = $("#goodsName").val();
			var noVal = $("#last").prev().children().first().text();
			var no = parseInt(noVal) + 1;
			var addInfor = "<tr><td>" + no + "</td><td>" + shopName + "</td><td>" + goodsName + "</td><td>" + "修改" + "</td></tr>";
			$("#last").before(addInfor);
		})
		//选tr而非td
	$("#search").click(function() {
			var shopNameSear = $("#shopNameSearch").val();
			var goodsNameSear = $("#goodsNameSearch").val();
			var i = 0;
			if (i == 0) {
				$("tr").slice(3).hide();
				i++;
			}
			if (i == 1) {
				$("tr:contains('" + shopNameSear + "')").show();
				i--;
			}

		})
		//新添加的条目取不到
	$(".imagetable tr").each(function() {
		
		$(this).find("td").eq(3).click(function() {
			$("div#change").show(); obj=this;
			$("#shopName1").val($(obj).prev().prev().text());
			 $("#goodsName1").val($(obj).prev().text());
		})

	})
	$("#cancelIt").click(function() {
		$("div#change").hide();
	})

	$("#changeIt").click(function() {
		$("div#change").hide();
		var shopName1 = $("#shopName1").val();
		var goodsName1 = $("#goodsName1").val();
		$(obj).prev().text(goodsName1);
		$(obj).prev().prev().text(shopName1);


	})
	var obj;
})