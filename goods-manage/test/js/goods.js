(function(window){
	function Goods(goodsList, targetTableId) {
		this.targetTableId = targetTableId;
		this.originData = goodsList;

		this.searchData = [];
	}

	// 新增商品
	Goods.prototype.add = function() {

	}

	// 修改商品
	Goods.prototype.update = function() {

	}

	// 搜索商品
	Goods.prototype.search = function(shopName, goodsName) {
	    var _shopName = shopName || "",
	    	_goodsName = goodsName || "";


	    console.log(this.originData);
	    console.log(this.targetTableId);

	    this.searchData = [];

	    // 如果两个字段都为空
	    if (!_shopName && !_goodsName) {
	    	this.searchData = this.originData;

	    }
	    // 如果店铺名称为空，商品名称不为空
	    if(!_shopName && _goodsName){
	    	for(var i=0;i<this.originData.length;i++){
	    		if(this.originData[i].goodsName.indexOf(_goodsName)>-1){
	    			this.searchData.push(this.originData[i]);
	    		}
	    	}
	    }

	    // 如果店铺名称为不空，商品名称为空
	    if(_shopName && !_goodsName){
	    	for(var i=0;i<this.originData.length;i++){
	    		if(this.originData[i].shopName.indexOf(_shopName)>-1){
	    			this.searchData.push(this.originData[i]);
	    		}
	    	}
	    }

	    // 如果店铺名称不为空，商品名称不为空
	    if(_shopName && _goodsName){
	    	for(var i=0;i<this.originData.length;i++){
	    		if(this.originData[i].shopName.indexOf(_shopName)>-1&&this.originData[i].goodsName.indexOf(_goodsName)>-1){
	    			this.searchData.push(this.originData[i]);
	    		}
	    	}
	    }

	    this.renderTable(this.searchData);
	}

	// 渲染表格
	Goods.prototype.renderTable = function(renderList) {
	    var result = '';

	    if(renderList.length == 0){
	    	result = "<tr>" +
	    		"<td colspan=\"4\"><h3 class=\"text-center\">没有符合条件的结果～</h3></td>" +
	            "</tr>";
	    }
	    else{
	    	for (var i = 0; i < renderList.length; i++) {
		        result += "<tr>" +
		            "<td>" + renderList[i].id + "</td>" +
		            "<td>" + renderList[i].shopName + "</td>" +
		            "<td>" + renderList[i].goodsName + "</td>" +
		            "<td><a href=\"javascript:void(0);\">修改</a></td>" +
		            "</tr>";
		    }
	    }

	    $("#"+this.targetTableId).find("tbody").html(result);
	}

	window.Goods = Goods;

})(window);
