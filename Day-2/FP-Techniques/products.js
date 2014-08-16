var products = [
	{id :6, name : "Pen", cost : 80, units : 10, category : 1},
	{id :3, name : "Hen", cost : 40, units : 80, category : 1},
	{id :8, name : "Ten", cost : 50, units : 40, category : 2},
	{id :4, name : "Den", cost : 30, units : 60, category : 1},
	{id :2, name : "Len", cost : 90, units : 30, category : 2},
	{id :1, name : "Ken", cost : 10, units : 20, category : 1}
]

var sort = function(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if(list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

console.log("Initial list");
console.table(products);

console.log("After default sort..")
sort(products);
console.table(products);

var sort = function(list,attr){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if(list[i][attr] > list[j][attr]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}
console.log("After sorting by cost...")
sort(products, "cost");
console.table(products);

var sort = function(list,compareFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++)
			if(compareFn(list[i], list[j]) > 0 ){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
}

function productComparerByValue(p1,p2){
	var p1Value = p1.units * p1.cost,
		p2Value = p2.units * p2.cost;

	if (p1Value < p2Value) return -1;
	if (p1Value === p2Value) return 0;
	return 1;
}

console.log("After sorting by [value = units * cost]...")
sort(products, productComparerByValue);
console.table(products);

//Write a filter function that can be used to filter any list by any criteria

var filter = function(list, criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i]) === true)
			result.push(list[i]);
	return result;
}
console.log("All costly products [cost > 50]")
var costlyProductCriteria = function(product){
	return product.cost > 50;
}
var costlyProducts = filter(products,costlyProductCriteria);
console.table(costlyProducts);

console.log("All category-1 products");
var category1Criteria = function(product){
	return product.category === 1;
}

var allCategory1Products = filter(products,category1Criteria);
console.table(allCategory1Products);

//min
//max
//sum
//avg
//any
//all
//countBy

//groupBy
function groupBy(list,keySelectorFn){
	var result = {};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		result[key] = result[key] || [];
		result[key].push(list[i]);
	}
	return result;
}

var productsGroupedByCategory = groupBy(products, function(p){return p.category;});

var productClassificationByCost = function(product){
	return product.cost > 50 ? "costly" : "affordable";
}

var productsGroupedByCost = groupBy(products,productClassificationByCost);

