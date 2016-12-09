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
$(".imagetable tr").each(function() {
		$(this).find("td").eq(3).click(function() {
			$("div#change").show();
		})

	})
$("#cancelIt").click(function() {
		$("div#change").hide();
	})
})