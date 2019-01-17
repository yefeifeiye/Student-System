var increase = 0; //变量increase用于记录全部学生信息的个数
var page = 1; //变量page用于记录当前学生信息页数，初值为1
var Page = 0; //变量Page用于记录学生信息总的页数
var students = new Array();

function student(Id, Name, Institute, Major, Grade, Class, Age) {
	this.Id = Id;
	this.Name = Name;
	this.Institute = Institute;
	this.Major = Major;
	this.Grade = Grade;
	this.Class = Class;
	this.Age = Age;
}
students.push(new student(11503080101, "齐桓公", "计算机科学与工程学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080102, "鲍叔牙", "数理学院", "软件工程", 2015, 3, 21));
students.push(new student(11503080103, "烛之武", "数理学院", "软件工程", 2015, 4, 21));
students.push(new student(11503080104, "孙膑", "经济与贸易学院", "软件工程", 2015, 2, 20));
students.push(new student(11503080105, "赵括", "经济与贸易学院", "软件工程", 2015, 2, 20));
students.push(new student(11503080106, "韩非", "重庆汽车学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080107, "孟子", "重庆汽车学院", "软件工程", 2015, 3, 22));
students.push(new student(11503080108, "荀子", "人文社会科学学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080109, "吕不韦", "人文社会科学学院", "软件工程", 2015, 2, 22));
students.push(new student(11503080110, "吴广", "工商管理学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080111, "樊哙", "工商管理学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080112, "嫪毐", "计算机科学与工程学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080113, "项庄", "计算机科学与工程学院", "软件工程", 2015, 4, 19));
students.push(new student(11503080114, "刘邦", "生物工程学院院", "软件工程", 2015, 2, 21));
students.push(new student(11503080115, "袁术", "生物工程学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080116, "吕禄", "计算机科学与工程学院", "软件工程", 2015, 2, 19));
students.push(new student(11503080117, "孙权", "商贸信息学院", "软件工程", 2015, 3, 21));
students.push(new student(11503080118, "曹操", "计算机科学与工程学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080119, "刘备", "商贸信息学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080120, "黄忠", "计算机科学与工程学院", "软件工程", 2015, 1, 21));
students.push(new student(11503080121, "马超", "计算机科学与工程学院", "软件工程", 2015, 2, 19));
students.push(new student(11503080122, "魏延", "重庆知识产权学院", "软件工程", 2015, 1, 21));
students.push(new student(11503080123, "法正", "计算机科学与工程学院", "软件工程", 2015, 2, 21));
students.push(new student(11503080124, "庞统", "重庆知识产权学院", "软件工程", 2015, 2, 21));

function inputInformation() {
	var j = 0; //变量j用于记录每页学生信息的个数
	var Table = document.getElementById("studentInformationTable");
	var Tbody = document.createElement("tbody");
	Table.appendChild(Tbody);
	for(; increase < students.length; increase++) {
		Tbody.insertRow(j);
		Tbody.rows[j].insertCell(0);
		var Input = document.createElement("input");
		Input.type = "checkbox";
		Tbody.rows[j].cells[0].appendChild(Input);
		Tbody.rows[j].insertCell(1);
		Tbody.rows[j].cells[1].appendChild(document.createTextNode(increase + 1));
		Tbody.rows[j].insertCell(2);
		Tbody.rows[j].cells[2].appendChild(document.createTextNode(students[increase].Id));
		Tbody.rows[j].insertCell(3);
		Tbody.rows[j].cells[3].appendChild(document.createTextNode(students[increase].Name));
		Tbody.rows[j].insertCell(4);
		Tbody.rows[j].cells[4].appendChild(document.createTextNode(students[increase].Institute));
		Tbody.rows[j].insertCell(5);
		Tbody.rows[j].cells[5].appendChild(document.createTextNode(students[increase].Major));
		Tbody.rows[j].insertCell(6);
		Tbody.rows[j].cells[6].appendChild(document.createTextNode(students[increase].Grade));
		Tbody.rows[j].insertCell(7);
		Tbody.rows[j].cells[7].appendChild(document.createTextNode(students[increase].Class));
		Tbody.rows[j].insertCell(8);
		Tbody.rows[j].cells[8].appendChild(document.createTextNode(students[increase].Age));
		Tbody.rows[j].insertCell(9);
		var lookUp = document.createElement("button");
		lookUp.innerHTML = "查看";
		lookUp.onclick = function() {
			lookUpStudentInformation(this);
		}
		var modify = document.createElement("button");
		modify.innerHTML = "修改";
		modify.onclick = function() {
			modifyStudentInformation(this);
		}
		Tbody.rows[j].cells[9].appendChild(lookUp);
		Tbody.rows[j].cells[9].appendChild(modify);
		j++;
		if(j == 10) {
			increase++; // 补上跳出循环时，变量i未自加的1；
			break;
		}
	}
	getPageInformation();
}

function getPageInformation() {
	Page = Math.ceil(students.length / 10); //Math.ceil()方法返回一个大于或等于数字的最小整数（向上取整）
	var pageInformation = document.getElementById("pageInformation");
	pageInformation.innerHTML = "第" + page + "页，共" + Page + "页，" + "共" + students.length + "条";
}

inputInformation(); //调用函数，显示信息

function appendStudent() {
	var Div = document.getElementById("Div2");
	Div.style.visibility = "visible";
	var H2 = document.getElementById("title2");
	H2.innerHTML = "新增学生信息";
	var Btn = document.getElementById("identify");
	Btn.style.visibility = "visible";
	var Form = document.getElementById("form");
	var Inputs = Form.getElementsByTagName("input");
	for(var i = 0; i < Inputs.length; i++) {
		Inputs[i].disabled = "";
		Inputs[i].value = "";
	}
	Btn.onclick = function() {
		var Id = Inputs[0].value;
		var Name = Inputs[1].value;
		var Institute = Inputs[2].value;
		var Major = Inputs[3].value;
		var Grade = Inputs[4].value;
		var Class = Inputs[5].value;
		var Age = Inputs[6].value;
		students.push(new student(Id, Name, Institute, Major, Grade, Class, Age));
		jumpLastPage();
		cancel();
	}
}

function deleteStudent() {
	var Table = document.getElementById("studentInformationTable");
	var Tbody = document.getElementsByTagName("tbody");
	var Inputs = Table.getElementsByTagName("input");
	/*if(Inputs[0].checked == true) {
		Table.removeChild(Tbody[0]);
		page = 1;
		increase = 0;
		inputInformation();
	}*/
	for(var i = 1; i < Inputs.length; i++) {
		if(Inputs[i].checked == true) {
			var lineInformation = Inputs[i].parentNode.parentNode; //获取被选中学生的一行表格
			increase = parseInt(lineInformation.cells[1].innerHTML) - 1;
			students.splice(increase, 1); //splice()方法可用于删除数组里面的某几个元素。
			page = Math.ceil((increase + 1) / 10); //向上取整
			increase = Math.trunc(increase / 10) * 10; //取整
			Table.removeChild(Tbody[0]);
			inputInformation();
		}
	}
}

function cancel() {
	var Btn = document.getElementById("identify");
	Btn.style.visibility = "hidden";
	var Div = document.getElementById("Div2");
	Div.style.visibility = "hidden";
}

function lookUpStudentInformation(btn) {
	var Div = document.getElementById("Div2");
	Div.style.visibility = "visible";
	var H2 = document.getElementById("title2");
	H2.innerHTML = "查看学生信息";
	var Btn = document.getElementById("identify");
	Btn.style.visibility = "hidden";
	var Form = document.getElementById("form");
	var Inputs = Form.getElementsByTagName("input");
	for(var i = 0; i < Inputs.length; i++) {
		Inputs[i].disabled = "disabled";
	}
	var lineInformation = btn.parentNode.parentNode; //获取被选中学生的一行表格
	var i = parseInt(lineInformation.cells[1].innerHTML) - 1;
	Inputs[0].value = students[i].Id;
	Inputs[1].value = students[i].Name;
	Inputs[2].value = students[i].Institute;
	Inputs[3].value = students[i].Major;
	Inputs[4].value = students[i].Grade;
	Inputs[5].value = students[i].Class;
	Inputs[6].value = students[i].Age;
}

function modifyStudentInformation(btn) {
	var Div = document.getElementById("Div2");
	Div.style.visibility = "visible";
	var H2 = document.getElementById("title2");
	H2.innerHTML = "修改学生信息";
	var Btn = document.getElementById("identify");
	Btn.style.visibility = "visible";
	var Form = document.getElementById("form");
	var Inputs = Form.getElementsByTagName("input");
	for(var i = 0; i < Inputs.length; i++) {
		Inputs[i].disabled = "";
	}
	var lineInformation = btn.parentNode.parentNode; //获取被选中学生的一行信息
	var i = parseInt(lineInformation.cells[1].innerHTML) - 1;
	Inputs[0].value = students[i].Id;
	Inputs[1].value = students[i].Name;
	Inputs[2].value = students[i].Institute;
	Inputs[3].value = students[i].Major;
	Inputs[4].value = students[i].Grade;
	Inputs[5].value = students[i].Class;
	Inputs[6].value = students[i].Age;
	Btn.onclick = function() {
		students[i].Id = Inputs[0].value;
		students[i].Name = Inputs[1].value;
		students[i].Institute = Inputs[2].value;
		students[i].Major = Inputs[3].value;
		students[i].Grade = Inputs[4].value;
		students[i].Class = Inputs[5].value;
		students[i].Age = Inputs[6].value;
		increase = Math.trunc(i / 10) * 10;
		var Table = document.getElementById("studentInformationTable");
		var Tbody = document.getElementsByTagName("tbody");
		Table.removeChild(Tbody[0]);
		inputInformation();
		cancel();
	}
}

function jumpFirstPage() {
	page = 1;
	increase = 0;
	updatePageInformation();
}

function jumpLastPage() {
	page = Math.ceil(students.length / 10); //Math.ceil()方法返回一个大于或等于数字的最小整数（向上取整）
	increase = Math.trunc(students.length / 10) * 10; //Math.trunc()方法用于取出数字的小数部分，保留整数部分
	updatePageInformation();
}

function jumpNextPage() {
	page++;
	if(increase == students.length) {
		increase = Math.trunc(students.length / 10) * 10;
		page--;
	}
	updatePageInformation();
}

function jumpPreviousPage() {
	page--;
	if(increase == 10) {
		increase = 0;
		page++;
	}
	else if(increase % 10 == 0)
		increase -= 20;
	else
		increase -= (10 + increase % 10);
	updatePageInformation();
}

function updatePageInformation() {
	var Table = document.getElementById("studentInformationTable");
	var Tbody = document.getElementsByTagName("tbody");
	Table.removeChild(Tbody[0]);
	inputInformation();
}