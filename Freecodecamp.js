
<script>

---------------------- jQuery ------------------------ 


1.  addClass Using jQuery:

A.Target HTML Elements with Selectors Using jQuery

 Now we have a document ready Function:
  $("button").addClass("animated bounce");

 Additionally make sure to use 
  $("button").addClass("animated bounce");
 since single-quote selectors will not pass our tests.
  => Các button rung lên.

B. Target Elements by Class Using jQuery 

  $(".text-primary").addClass("animated shake");
  => tất cả "class" ".text-primary" sẽ rung lên và shake

C. Target Elements by ID Using jQuery

  Use: $("#target3")

  <script>
      $(document).ready(function() {
      $("button").addClass("animated bounce");
      $(".well").addClass("animated shake");
      $("#target3").addClass("fadeout");
      });
    <script>

------------------------------------------------------
2. jQuery more.

A.removeClass Using jQuery:
  $("button").removeClass("btn-default");

B. Change the CSS of an Element Using jQuery :
 jQuery has a Function called .css() that allows you to change the CSS of an element.
 Here is how we would change its color to blue:
  $("#target1").css("color", "blue");

C. Disable an Element Using jQuery 

 jQuery has a Function called .prop() that allows you to adjust the properties of elements.
 Here is how you would disable all buttons:
  $("button").prop("disabled", true);

------------------------------------------------------
3. Change Text Inside an Element Using jQuery

 jQuery has a Function called .html() that lets you add HTML tags and text within an element. 
 Any content previously within the element will be completely replaced with the content you provide using this Function.
 Here is how you would rewrite and emphasize the text of our heading:

  $("h3").html("<em>jQuery Playground</em>");
  => Viết lại Chữ jQuery Playground In nghiêng.

 jQuery also has a similar  Function called .text() that only alters text without adding tags. 
 In other words, this Function will not evaluate any HTML tags passed to it, 
 but will instead treat it as the text you want to replace the existing content with.

------------------------------------------------------
4. Remove an Element Using jQuery

  $("#target4").remove();
  => Xóa luôn target4.

------------------------------------------------------
5. Use appendTo to Move Elements with jQuery
 jQuery has a Function called appendTo() that allows you to select HTML elements and append them to another element.
 For example, if we wanted to move target4 from our right well to our left well, we would use:

  $("#target4").appendTo("#left-well");

------------------------------------------------------
6. Clone an Element Using jQuery ( Bắt chước, copy 1 đối tượng)

 jQuery has a Function called clone() that makes a copy of an element.
 For example, if we wanted to copy target2 from our left-well to our right-well, we would use:

  $("#target2").clone().appendTo("#right-well");

------------------------------------------------------
7. 
A. Target the Parent of an Element Using jQuery 

 Every HTML element has a parent element from which it inherits properties.
 For example, your jQuery Playground h3 element has the parent element of <div Class="container-fluid">, which itself has the parent body.
 jQuery has a Function called parent() that allows you to access the parent of whichever element you have selected.
 Here is an example of how you would use the parent() Function 
 if you wanted to give the parent element of the left-well element a background color of blue:

  $("#left-well").parent().css("background-color", "blue")

B. Target the Children of an Element Using jQuery 
  
  $("#left-well").children().css("color", "blue");

  => Màu chữ thành blue.

C. Target a Specific Child of an Element Using jQuery

   $(".target:nth-child(2)").addClass("animated bounce");

   => Đối tượng con thứ 2 của 2 bên đều rung. nth-child: Không biết thứ mấy - con.

D. Target Even/Odd Numbered Elements Using jQuery  (HƯỚNG ĐỐI TƯỢNG SỐ CHẴN/ LẺ.)
  
  $(".target:odd").addClass("animated shake");

  => Tất cả đối tượng số lẻ đều bị ảnh hưởng.
  Note that jQuery is zero-indexed, meaning that, counter-intuitively, :odd selects the second element, fourth element, and so on.

E. Use jQuery to Modify the Entire Page

   $("body").addClass("animated hinge");

  => Page bị nghiêng sang  phải và rơi theo kiểu bản lề.

------------------------------------------------------
8. HTML DOM innerHTML Property
    
  Get the HTML content of a <p> element with id="myP":

    var x = document.getElementById("myP").innerHTML;
  The result of x will be:
    I am a paragraph.

  Change the HTML content, URL, and target of a link:

    document.getElementById("myAnchor").innerHTML = "W3Schools";
    document.getElementById("myAnchor").href = "http://www.w3schools.com";
    document.getElementById("myAnchor").target = "_blank";
------------------------------------------------------



------------------------------------------------------------------------------------
          ------------------BASIC JAVASCRIPT ------------------------------

1. Comment your JavaScript Code 
 Comments are lines of code that JavaScript will intentionally ignore. 
 Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.
 There are two ways to write comments in JavaScript:
 Using "//" will tell JavaScript to ignore the remainder of the text on the current line:

	// This is an in-line comment.
 You can make a multi-line comment beginning with /* and ending with */:

 /* This is a 
    multi-line comment */

-----------------------------------
2. Declare JavaScript Variables 
 In computer science, data is anything that is meaningful to the computer. 
 JavaScript provides seven different data types which are undefined, null, boolean, string, symbol, number, and object.
 For example, computers distinguish between numbers, such as the number 12, and strings, such as "12", "dog", or "123 cats", 
 which are collections of characters. Computers can perform mathematical operations on a number, but not on a string.

 Variables allow computers to store and manipulate data in a dynamic fashion. 
 They Do this by using a "label" to point to the data rather than using the data itself. 
 Any of the seven data types may be stored in a variable.

 Variables are similar to the x and y variables you use in mathematics, 
 which means they are a simple name to represent the data we want to refer to. 
 Computer variables differ from mathematical variables in that they can store different values at different times.

 We tell JavaScript to create or declare a variable by putting the keyword var in front of it, like so:

	var ourName;
 creates a variable called ourName. In JavaScript we end statements with semicolons.

 Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.

------------------------------------------
3. Storing Values with the Assignment Operator 
 In JavaScript, you can store a value in a variable with the assignment operator.

	myVariable = 5;

---------------------------------------------------
4. Escaping Literal Quotes in Strings 
 When you are defining a string you must start and end with a single or double quote. 
 What happens when you need a literal quote: " " or ' ' inside of your string?

 In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

	var sampleStr = "Alan said, \"Peter is learning JavaScript\".";

-----------------------------------------
5. Quoting Strings with Single Quotes 
 String values in JavaScript may be written with single or double quotes, so long as you start and end with the same type of quote. 
 Unlike some languages, single and double quotes are functionally identical in Javascript.
	"This string has \"double quotes\" in it"

 The value in using one or the other has to Do with the need to escape quotes of the same type. 
 Unless they are escaped, you cannot have more than one pair of whichever quote type begins a string.
 If you have a string with many double quotes, this can be difficult to read and write. Instead, use single quotes:

	'This string has "double quotes" in it. And "probably" lots of them.'

------------------------------------------
6. Find the Length of a String 
 You can find the length of a String value by writing .length after the string variable or string literal.

	"Alan Peter".length; // 10

 For example, if we created a variable 
 	var firstName = "Charles", 
 we could find out how long the string "Charles" is by using the firstName.length property.

	myNameLength = myName.length;

 - Tìm kí tự thứ n:
	firstName1 = firstName[0];

-----------------------------------------
7. Understand String Immutability 
 In JavaScript, String values are immutable, which means that they cannot be altered once created.

 For example, the following code:

	var myStr = "Bob";
	myStr[0] = "J";
 cannot change the value of myStr to "Job", because the contents of myStr cannot be altered. 
 Note that this does not mean that myStr cannot be changed, just that the individual characters of a string literal cannot be changed. 
 The only way to change myStr would be to assign it with a new string, like this:

	var myStr = "Bob";
	myStr = "Job";

----------------------------------------
8. Modify Array Data With Indexes 
 Unlike strings, the entries of arrays are mutable and can be changed freely.

 Example

	var ourArray = [3,2,1];
	ourArray[0] = 1; // equals [1,2,1]

---------------------------------------
9. Access MultiDimensional Arrays With Indexes 
 One way to think of a multi-dimensional array, is as an array of arrays. 
 When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, 
 and each additional pair of brackets refers to the next level of entries inside.

 Example

	var arr = [
    	[1,2,3],
    	[4,5,6],
    	[7,8,9],
    	[[10,11,12], 13, 14]
	];
	arr[3]; // equals [[10,11,12], 13, 14]
	arr[3][0]; // equals [10,11,12]
	arr[3][0][1]; // equals 11

----------------------------------
10.  
A. Manipulate Arrays With push (add vào cuối mảng) 
 An easy way to append data to the end of an array is via the push() Function.
 .push() takes one or more parameters and "pushes" them onto the end of the array.

	var arr = [1,2,3];
	arr.push(4);
	// arr is now [1,2,3,4]

B. Manipulate Arrays With pop( remove từ cuối mảng) 

 Another way to change the data in an array is with the .pop() Function
 .pop() is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable.
 Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays. 
 For example, for the code:

 	var oneDown = [1, 4, 6].pop();
  	// the variable oneDown now holds the value 6 and the array becomes [1, 4].

C. Manipulate Arrays With shift (remove từ đầu mảng)
 
 pop() always removes the last element of an array. What if you want to remove the first?
 That is where .shift() comes in. It works just like .pop(), except it removes the first element instead of the last.

D. Manipulate Arrays With unshift ( Add vào đầu mảng)
 Not only can you shift elements off of the beginning of an array, 
 you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

 .unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
 unshift() adds the element at the beginning of the array.

------------------------------
11. Write Reusable JavaScript with Functions 
 In JavaScript, we can divide up our code into reusable parts called functions.
 Here is an example of a Function:

	function functionName() {
  		console.log("Hello World");
	}

-----------------------------
12. Global Scope and Functions 

 In JavaScript, scope refers to the visibility of variables. 
 Variables which are defined outside of a Function block have Global scope. 
 This means, they can be seen everywhere in your JavaScript code.

 Variables which are used without the var keyword are automatically created in the global scope. 
 This can create unintended consequences elsewhere in your code or when running a Function again. 
 You should always declare your variables with var.
 	var myGlobal=10;

	function fun1() {
  	// Assign 5 to oopsGlobal Here
 	 oopsGlobal = 5; // Khong can dung var =>  automatically created in the global scope.
	}

	// Only change code above this line
	function fun2() {
  	var output = "";
  	if (typeof myGlobal != "undefined") {
    	output += "myGlobal: " + myGlobal;
  	}
  	if (typeof oopsGlobal != "undefined") {
    	output += " oopsGlobal: " + oopsGlobal;
  	}
  	console.log(output);
	}

--------------------------------------
13. so sánh:
  	1==1; // True
  	1==3; // False
  	1=="1" // True
  	'3' == 3 // True

- So sánh chính xác:
  	3 === 3   // true
	3 === '3' // false

------------------------------------------
14. Switch case: 

 function chainToSwitch(val) {
  var answer = "";
  
  switch (val) {
    case "bob":
      answer = "Marley"; break;
    case 42:
      answer = "The Answer"; break;
    case 1:
      answer = "There is no #1"; break;
    case 99:
      answer = "Missed me by this much!"; break;
    case 7:
      answer = "Ate Nine"; break;
  }
  // Only change code above this line  
  return answer;  
 }

 chainToSwitch(7);

-----------------------------------------
15. A. Accessing Objects Properties with the Dot Operator (dùng dấu chấm khi ko có dấu cách)

	// Setup
	var testObj = {
  	"hat": "ballcap",
  	"shirt": "jersey",
  	"shoes": "cleats"
	};

	var hatValue = testObj.hat;      // Change this line
	var shirtValue = testObj.shirt;   

B. Accessing Objects Properties with Bracket Notation (Dùng dấu ngoặc khi thuộc tính có dấu cách)
	// Setup
	var testObj = {
  	"an entree": "hamburger",
  	"my side": "veggies",
  	"the drink": "water"
	};

	var entreeValue = testObj["an entree"];   // Change this line
	var drinkValue = testObj["the drink"];    // Change this line

C. Accessing Objects Properties with Variables
	var someProp = "propName";
	var myObj = {
  	propName: "Some Value"
	}
	myObj[someProp]; // "Some Value"

------------------------------------------------
16. 

A. Updating Object Properties 
	ourDog["name"] = "Happy Camper";
	or: 
	ourDog.name = "Happy Camper";

B. Add New Properties to a JavaScript Object :
  You can add new properties to existing JavaScript objects the same way you would modify them.
  Here is how we would add a "bark" property to ourDog:

	ourDog.bark = "bow-wow"; 

C. Delete Properties from a JavaScript Object 
  We can also delete properties from objects like this:
	
	delete ourDog.bark;

--------------------------------------
17. Testing Objects for Properties 
 Sometimes it is useful to check if the property of a given object exists or not. 
 We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name. 
 .hasOwnProperty() returns true or false if the property is found or not.

 	var myObj = {
 	top: "hat",
  	bottom: "pants"
	};
	myObj.hasOwnProperty("top");    // true
	myObj.hasOwnProperty("middle"); // false

---------------------------------------
18. 
A. Accessing Nested Objects
	var ourStorage = {
  		"desk": {
  			"drawer": "stapler"
  		},
  		"cabinet": {
    		"top drawer": { 
      			"folder1": "a file",
      			"folder2": "secrets"
    		},
    	"bottom drawer": "soda"
  		}
	};
	ourStorage.cabinet["top drawer"].folder2;  // "secrets"
	ourStorage.desk.drawer; // "stapler"

B. Accessing Nested Arrays

	var ourPets = [
  		{
    		animalType: "cat",
    		names: [
      			"Meowzer",
      			"Fluffy",
      			"Kit-Cat"
    		]
  		},
  		{
    		animalType: "dog",
    		names: [
      			"Spot",
      			"Bowser",
      			"Frankie"
    		]
  		}
	];

	ourPets[0].names[1]; // "Fluffy"
	ourPets[1].names[0]; // "Spot"

C. Nesting For Loops
 If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
 Here is an example:

	var arr = [
  		[1,2], [3,4], [5,6]
	];
	for (var i=0; i < arr.length; i++) {
  		for (var j=0; j < arr[i].length; j++) {
    		console.log(arr[i][j]);
  		}
	}

-----------------------------------
19. 
A. Generate Random Fractions with JavaScript (hàm tạo số ngẫu nhiên) 
 	
 	Math.random()
 	Tạo random từ [0;1) 

B. Generate Random Whole Numbers with JavaScript ( Tạo số ngẫu nhiên trong khoảng (0;x) )

	Math.floor(Math.random() * 20);

	- Dùng hàm Math.floor() làm tròn xuống số nguyên gần nhất.
	- Dùng Math.random() tạo số ngẫn nhiên từ 0-1
	- Nhân Math.random() với 20.
	=> Tạo trong khoảng từ [0,19] ;

C. Generate Random Whole Numbers within a Range ( Tạo số ngẫu nhiên trong khoảng bất kì)

	Math.floor(Math.random() * (max - min + 1)) + min;

	Vd: Tạo random (10,30):
	Math.floor(Math.random() * 21 + 10);

-------------------------------------
20. 
A. Sift through Text with Regular Expressions (Tìm kiếm văn bản với 1 String)
  
 Regular expressions are used to find certain words or patterns inside of strings.
 For example, if we wanted to find the word the in the string The dog chased the cat, we could use the following regular expression: 
 	/the/gi
 	=> Tìm kiếm từ "the" trong toàn bộ văn bản. Bỏ qua từ in hoa, in thường.
 Let is break this down a bit:

 	"/" 	is the start of the regular expression.
 	"the" 	is the pattern we want to match.
 	"/" 	is the end of the regular expression.
 	"g" 	means global, which causes the pattern to return all matches in the string, not just the first one.
 	"i" 	means that we want to ignore the case (uppercase or lowercase) when searching for the pattern.

B. Find Numbers with Regular Expressions (Tìm các số trong String kết quả trả về số lượng chữ số trong String)

 We can use special selectors in Regular Expressions to select a particular type of value.
 One such selector is the digit selector "\d" which is used to retrieve one digit (e.g. numbers 0 to 9) in a string.
 In JavaScript, it is used like this: 
 	/\d/g

 Appending a plus sign (+) after the selector, 
  	/\d+/g 
  	=> allows this regular expression to match one or more digits (số 34 chỉ được tính 1 số)

 The trailing g is short for 'global', which allows this regular expression to find all matches rather than stop at the first match.

C. Find Whitespace with Regular Expressions 

 We can also use regular expression selectors like \s to find whitespace in a string.
 The whitespace characters are " " (space), 
 	\r (the carriage return), 
 	\n (newline), 
 	\t (tab), and 
 	\f (the form feed).

 The whitespace regular expression looks like this:
	/\s+/g
	=> Tìm kiếm số dấu cách " "

D. Invert Regular Expression Matches with JavaScript (Tìm kiếm những kí tự ko phải là dấu cách)
 
 => Sử dụng kí tự in hoa để đảo ngược tìm kiếm.
 You can invert any match by using the uppercase version of the regular expression selector.
 For example, \s will match any whitespace, and \S will match anything that is not whitespace.
 	/\S+/g 
 	=> Tìm kiếm ko phải dấu cách.

--------------------------------------
21. Construct JavaScript Objects with Functions 

 We are also able to create objects using constructor functions.
 A constructor Function is given a capitalized name to make it clear that it is a constructor.
 Here is an example of a constructor Function:

	var Car = function() {
  		this.wheels = 4;
  		this.engines = 1;
  		this.seats = 5;
	};
 In a constructor the this variable refers to the new object being created by the constructor. 
 So when we write,
  	this.wheels = 4;

 inside of the constructor we are giving the new object it creates a property called wheels with a value of 4.
 You can think of a constructor as a description for the object it will create.

---------------------------------
22. 
A. Make Instances of Objects with a Constructor Function 
 
 Now let is put that great constructor Function we made in the last lesson to use!
 To use a constructor Function we call it with the new keyword in front of it like:
	var myCar = new Car();

 myCar is now an instance of the Car constructor that looks like the object it described:

	{
  		wheels: 4,
  		engines: 1,
  		seats: 5
	}

B. Make Unique Objects by Passing Parameters to our Constructor ( Tạo 1 đối tượng riêng với các thuộc tính cho sẵn )

 To solve this we can add parameters to our constructor. We do this like the following example:
	
	var Car = function(wheels, seats, engines) {
  		this.wheels = wheels;
  		this.seats = seats;
  		this.engines = engines;
	};

 Now we can pass in arguments when we call our constructor.
	var myCar = new Car(6, 3, 1);

 This code will create an object that uses the arguments we passed in and looks like:

	{
  		wheels: 6,
  		seats: 3,
  		engines: 1
	}

C. Make Object Properties Private 
 
  Objects have their own attributes, called properties, and their own functions, called methods.
  In the previous challenges, we used the this keyword to reference public properties of the current object.
 We can also create private properties and private methods, which arenot accessible from outside the object.
  To do this, we create the variable inside the constructor using the var keyword we are familiar with, 
 instead of creating it as a property of this.
  This is useful for when we need to store information about an object but we want to control how it is used by outside code.
 For example, what if we want to store the speed our car is traveling at but we only want outside code 
 to be able to modify it by accelerating or decelerating, so the speed changes in a controlled way?

 	var Car = function() {
  		// this is a private variable
  		var speed = 10;

  		// these are public methods
  		this.accelerate = function(change) {
    		speed += change;
  		};

  		this.decelerate = function() {
    		speed -= 5;
  		};

  		this.getSpeed = function() {
    		return speed;
  		};
	};

--------------------------------------
23. Iterate over Arrays with map (Tạo 1 mảng mới)

 The map method is a convenient way to iterate through arrays. Here is an example usage:

	var oldArray = [1, 2, 3];
	var timesFour = oldArray.map(function(val){
  		return val * 4;
	});
	console.log(timesFour); // returns [4, 8, 12]
	console.log(oldArray);  // returns [1, 2, 3]

 The map method will iterate through every element of the array, 
 creating a new array with values that have been modified by the callback function, and return it. 
 Note that it does not modify the original array.

 In our example the callback only uses the value of the array element (the val argument) 
 but your callback can also include arguments for the index and array being acted on.

---------------------------------------------
24. 
A. Condense arrays with .reduce()  ( lặp lại 1 hàm trong từng phần tử của mảng, thường dùng tính tổng 1 mảng)

 The array method reduce is used to iterate through an array and condense it into one value.
 To use reduce you pass in a callback whose arguments are an accumulator (in this case, previousVal) and the current value (currentVal).
 The accumulator is like a total that reduce keeps track of after each operation. 
 The current value is just the next element in the array you are iterating through.
 reduce has an optional second argument which can be used to set the initial value of the accumulator. 
 If no initial value is specified it will be the first array element and currentVal will start with the second array element.

 Here is an example of reduce being used to sum all the values of an array +10 :
 	var array = [0,1,2];
	var singleVal = array.reduce(function(previousVal, currentVal) {
  		return previousVal + currentVal;
	}, 10);

	=> hàm reduce() gọi đi gọi lại hàm con của nó, tính dồn các giá trị.
	- Lần gọi thứ nhất: Lây 10 + currentVal (là 0) = return_Value = 10;
	- Lần gọi thứ hai : lấy previousVal (là return_Value) + currentVal = 10 + 1 =11;
	- Lần gọi thứ ba  : previousVal (= 11) + currentVal (=2) = 13;
	- Lần gọi thứ tư  : previousVal (=13) + currentVal (=3) = 15;

B. Filter Arrays with filter ( Tạo 1 mạng mới bằng cách lọc ra các giá trị )

 The filter method is used to iterate through an array and filter out elements where a given condition is not true.
 filter is passed a callback Function which takes the current value (we have called that val) as an argument.
 Any array element for which the callback returns true will be kept and elements that return false will be filtered out.
 The following code is an example of using filter to remove array elements that are equal to five:
 Note: We omit the second and third arguments since we only need the value

	array = array.filter(function(val) {
  		return val !== 5;
	});

C. Sort Arrays with sort (Sắp xếp lại mảng theo thứ tự abc hoặc lớn bé)

 You can use the method sort to easily sort the values in an array alphabetically or numerically.
 Unlike the previous array methods we have been looking at, sort actually alters the array in place. 
 However, it also returns this sorted array.
 
      var fruit = ['cherries', 'apples', 'bananas'];
      fruit.sort(); // ['apples', 'bananas', 'cherries']

      var scores = [1, 10, 21, 2]; 
      scores.sort(); // [1, 10, 2, 21]
      // Watch out that 10 comes before 2,
      // because '10' comes before '2' in Unicode code point order.
  SyntaxEDIT
  
  arr.sort()
  arr.sort(compareFunction)

  Parameters
  compareFunction Optional
  Specifies a Function that defines the sort order. If omitted, the array is sorted according to each character''s Unicode code point value, according to the string conversion of each element.
  Return value

  The sorted array.

  DescriptionEDIT

  If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order.

  If compareFunction is supplied, the array elements are sorted according to the return value of the compare Function. If a and b are two elements being compared, then:

  If compareFunction(a, b) is less than 0, sort a to a lower index than b, i.e. a comes first.
  If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
  If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
  compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

 sort can be passed a compare Function as a callback. 
 The compare Function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.
 If no compare (callback) Function is passed in, it will convert the values to strings and sort alphabetically.

 Here is an example of using sort with a compare Function that will sort the elements from smallest to largest number:

	var array = [1, 12, 21, 2];
	
	array.sort(function(a, b) {
  		return a - b;
	});
	// array = [1,2,12,21] 

D. Reverse Arrays with reverse (Đảo ngược mảng)

 You can use the reverse method to reverse the elements of an array.
 reverse is another array method that alters the array in place, but it also returns the reversed array.

	var myArray = [1, 2, 3];
	myArray.reverse();
	// returns [3, 2, 1]

E. Concatenate Arrays with concat (Gộp 2 mảng với nhau)

 concat() can be used to merge the contents of two arrays into one.
 concat() takes an array as an argument and returns a new array with the elements of this array concatenated onto the end.
 Here is an example of concat being used to concatenate otherArray onto the end of oldArray:

	var oldArray = [1,2,3];
	var concatMe = [4,5,6];
	var newArray = [];

	newArray = oldArray.concat(concatMe);
	// newArray = [1,2,3,4,5,6]

F. Split Strings with split (Chia 1 chuỗi kí tự thành 1 mảng)

 You can use the split method to split a string into an array.
 split() uses the argument you pass in as a delimiter to determine which points the string should be split at.

 Here is an example of split being used to split a string at every space character:

	var string = "Split me into an array";
	var array = [];

	array = string.split(" ");
	// array = 	["Split", "me", "into", "an", "array"] 

G. Join Strings with join (Nối 1 mảng thành 1 chuỗi kí tự)
 
 Cú pháp:
 	array.join(separator);
 Chi tiết về tham số
	separator − Xác định một chuỗi để phân biệt riêng rẽ các phần tử trong một mảng. 
	Nếu bị bỏ qua, các phần tử trong mảng được phân biệt bởi dấu phảy.

 Trả về giá trị
	Trả về một chuỗi sau khi kết hợp tất cả các phần tử mảng.

 We can use the join method to join each element of an array into a string separated by whatever delimiter you provide as an argument.
 The following is an example of using join to join all of the elements of an array into a string with all the elements separated by word and:

	var veggies = ["Celery", "Radish", "Carrot", "Potato"];
	var salad = veggies.join(" and ");
	console.log(salad); // "Celery and Radish and Carrot and Potato"

-----------------------------------
 function findLongestWord(str) {
	str = str.split(' ');
	var strLength = str[0];
	for (var i = 0; i < str.length; i++) {
		if (str[i].length > strLength.length) {
			strLength = str[i];
		}
	}
	return strLength.length;
 }
 	
---------------------------------------------
25. str.substr(start [, length]) (Lấy xâu bên trong 1 xâu)
 
 Parameters:
 start
	Location at which to begin extracting characters. If a negative number is given, it is treated as strLength + start where strLength is the length of the string (for example, if start is -3 it is treated as strLength - 3.)
	length
	Optional. The number of characters to extract.
 
 Return value
 	A new string containing the extracted section of the given string. If length is 0 or a negative number, an empty string is returned.

 Example: 

 	var str = 'abcdefghij';

	console.log('(1, 2): '   + str.substr(1, 2));   // '(1, 2): bc' Lay 2 ki tu bat dau tu ki tu so 1.
	console.log('(-3, 2): '  + str.substr(-3, 2));  // '(-3, 2): hi'
	console.log('(-3): '     + str.substr(-3));     // '(-3): hij'
	console.log('(1): '      + str.substr(1));      // '(1): bcdefghij'
	console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
	console.log('(20, 2): '  + str.substr(20, 2));  // '(20, 2): '

---------------------------------
26. The slice() method (Sao chep 1 mảng từ mảng cũ)
 returns a shallow copy of a portion of an array into a new array object.

 Syntax
	arr.slice([begin[, end]])
 Parameters

 begin
 	Zero-based index at which to begin extraction.
 	As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
 	If begin is undefined, slice begins from index 0.
 end
	Zero-based index at which to end extraction. slice extracts up to but not including end.
	slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
	As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
	If end is omitted, slice extracts through the end of the sequence (arr.length).
	Return value

	A new array containing the extracted elements.

 Description
	slice does not alter. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

	For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.
	For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number or boolean in one array does not affect the other array.
	If a new element is added to either array, the other array is not affected.

 Examples
 Return a portion of an existing array

	var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
	var citrus = fruits.slice(1, 3);

 // fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
 // citrus contains ['Orange','Lemon']

---------------------------------
27. The String.prototype.splice() method 
 changes the content of an array by removing existing elements and/or adding new elements.

 Syntax
	array.splice(start, deleteCount[, item1[, item2[, ...]]])
 Parameters

 start
	Index at which to start changing the array (with origin 0). If greater than the length of the array, 
	actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.
 
 deleteCount
	An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. 
  In this case, you should specify at least one new element. 
  If deleteCount is greater than the number of elements left in the array starting at start, 
  then all of the elements through the end of the array will be deleted.
	If deleteCount is omitted, deleteCount will be equal to (arr.length - start).
	item1, i tem2, ...
	The elements to add to the array, beginning at the start index. If you do not specify any elements, 
  splice() will only remove elements from the array.
 
 Return value
 	An array containing the deleted elements. If only one element is removed, an array of one element is returned. 
 	If no elements are removed, an empty array is returned.

 Description
 	var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

	// removes 0 elements from index 2, and inserts 'drum'
	var removed = myFish.splice(2, 0, 'drum');
	// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
	// removed is [], no elements removed

	// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon'] 
	// removes 1 element from index 3
	removed = myFish.splice(3, 1);
	// myFish is ['angel', 'clown', 'drum', 'surgeon']
	// removed is ['mandarin']

	// myFish is ['angel', 'clown', 'drum', 'surgeon'] 
	// removes 1 element from index 2, and inserts 'trumpet'
	removed = myFish.splice(2, 1, 'trumpet');
	// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
	// removed is ['drum']

	// myFish is ['angel', 'clown', 'trumpet', 'surgeon'] 
	// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
	removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
	// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
	// removed is ['angel', 'clown']

	// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon'] 
	// removes 2 elements from index 2
	removed = myFish.splice(myFish.length -3, 2);
	// myFish is ['parrot', 'anemone', 'surgeon']
	// removed is ['blue', 'trumpet']

-------------------------------------
28. String.prototype.indexOf()
 The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, 
 starting the search at fromIndex. Returns -1 if the value is not found.

 Syntax
	str.indexOf(searchValue[, fromIndex])

 Parameters:
 
 searchValue
	A string representing the value to search for.
 fromIndex Optional
	The index at which to start the searching forwards in the string. It can be any integer. 
	The default value is 0, so the whole array is searched. If fromIndex < 0 the entire string is searched. If fromIndex >= str.length, 
	the string is not searched and -1 is returned. Unless searchValue is an empty string, then str.length is returned.

 Return value
	The index of the first occurrence of the specified value; -1 if not found.

 Description
	Characters in a string are indexed from left to right. The index of the first character is 0, 
	and the index of the last character of a string called stringName is stringName.length - 1.

	'Blue Whale'.indexOf('Blue');     // returns  0
	'Blue Whale'.indexOf('Blute');    // returns -1
	'Blue Whale'.indexOf('Whale', 0); // returns  5
	'Blue Whale'.indexOf('Whale', 5); // returns  5
 	'Blue Whale'.indexOf('', 9);      // returns  9
	
  var array = [2, 9, 9];
  array.indexOf(2);     // 0
  array.indexOf(7);     // -1
  array.indexOf(9, 2);  // 2
  array.indexOf(2, -1); // -1
  array.indexOf(2, -3); // 0
-----------------------------------
29. Array.prototype.filter()
 The filter() method creates a new array with all elements that pass the test implemented by the provided function.

 Syntax
	var new_array = arr.filter(callback[, thisArg])
 
 Parameters

 callback
 Function is a predicate, to test each element of the array. Return true to keep the element, false otherwise, taking three arguments:
 
 element
 	The current element being processed in the array.
 
 index
 	The index of the current element being processed in the array.
 arrays
	The array filter was called upon.
 thisArg
	Optional. Value to use as this when executing callback.

Return value
 	A new array with the elements that pass the test.

Description
	filter() calls a provided callback Function once for each element in an array, and constructs a new array of all the values for which 
	callback returns a value that coerces to true. callback is invoked only for indexes of the array which have assigned values; 
	it is not invoked for indexes which have been deleted or which have never been assigned values. 
	Array elements which do not pass the callback test are simply skipped, and are not included in the new array.

 callback is invoked with three arguments:

	the value of the element
	the index of the element
	the Array object being traversed

 Examples
	Filtering out all small values

	The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.

		function isBigEnough(value) {
  			return value >= 10;
		}
		var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
		// filtered is [12, 130, 44]

------------------------------------
30. Arguments object
A. Vietsub
 Javascript cung cấp một biến cục bộ với tên “arguments” chứa các tham số được truyền vào hàm. 
 Bạn có thể cần sử dụng đối tượng này khi muốn thực hiện các công việc xử lý tham số một cách linh động bên trong hàm.
 Đối tượng arguments không phải là mảng nhưng có thể truy xuất bằng index như mảng.
 Tuy nhiên, bạn có thể chuyển đổi đối tượng này thành mảng bằng cách:
	var args = Array.prototype.slice.call(arguments);
 
 Bạn có thể sử dụng các thuộc tính sau của đối tượng argument.

	arguments.callee: Tham chiếu đến hàm hiện tại (đang chạy).
	arguments.caller : (Obsolete) Tham chiếu đến hàm gọi hàm hiện tại. Thuộc tính này đã được chuyển sang Function.caller.
	arguments.length: Số lượng tham số được truyền vào hàm. 
 Nếu cần xác định số lượng tham số mà hàm được khai báo (formal parameter), bạn cần dùng đến thuộc tính Function.length.
 Một trường hợp cho thấy công dụng của đối tượng arguments này chính là việc tạo ra các hàm với số lượng tham số bất kì. 
 Ví dụ ta có một hàm sum() với chức năng tính tổng của các tham số truyền vào:

	function sum(){
    	var total = 0;
    	for (var i = 0; i < arguments.length; i++) {
        	total += arguments[i];
    	}
    	return total;
	}
	sum(1,2,3,4); // 10

B. Engsub 
 The arguments object is an Array-like object corresponding to the arguments passed to a Function.

 Syntax
	arguments
 Description
	The arguments object is a local variable available within all functions. 
	You can refer to a Function is arguments within the Function by using the arguments object. 
	This object contains an entry for each argument passed to the Function, the first entry is index starting at 0. 
	For example, if a Function is passed three arguments, you can refer to them as follows:

		arguments[0]
		arguments[1]
		arguments[2]
	
	The arguments can also be set:
		arguments[1] = 'new value';
	The arguments object is not an Array. It is similar to an Array, but does not have any Array properties except length. 

	For example, it does not have the pop method. However it can be converted to a real Array:
		var args = Array.prototype.slice.call(arguments);
	You can also use the Array.from() method or the spread operator to convert arguments to a real Array:

		var args = Array.from(arguments);
		var args = [...arguments];

 Properties
 
 arguments.callee
	Reference to the currently executing Function.
 
 arguments.caller 
 	Reference to the Function that invoked the currently executing Function.
 
 arguments.length
	Reference to the number of arguments passed to the Function.

 arguments[@@iterator]
	Returns a new Array Iterator object that contains the values for each index in the arguments.

C. Call Function:
	object1 = {
	    name:'frank',
	    greet:function(){
	        alert('hello '+this.name)
	    }
	};

	object2 = {
	    name:'andy'
	};

	// Note that object2 has no greet method.
	// But we may "borrow" from object1:

	object1.greet.call(object2);

-----------------------------------
31. Array.prototype.sort()
 The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. 
 The default sort order is according to string Unicode code points.

 Syntax
	arr.sort([compareFunction])

 Parameters:

 compareFunction
	Optional. Specifies a Function that defines the sort order. 
	If omitted, the array is sorted according to each character Is Unicode code point value, according to the string conversion of each element.
 
 Return value
	The sorted array.

 Description
If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. 
For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, 
"80" comes before "9" in Unicode order.

	var fruit = ['cherries', 'apples', 'bananas'];
	fruit.sort(); // ['apples', 'bananas', 'cherries']

	var scores = [1, 10, 21, 2]; 
	scores.sort(); // [1, 10, 2, 21]
	// Watch out that 10 comes before 2,
	// because '10' comes before '2' in Unicode code point order.

	var things = ['word', 'Word', '1 Word', '2 Words'];
	things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
	// In Unicode, numbers come before upper case letters,
	// which come before lower case letters.

 To compare numbers: 
	var numbers = [4, 2, 5, 1, 3];
	numbers.sort(function(a, b) {
  		return a - b;
	});
	console.log(numbers);
	// [1, 2, 3, 4, 5]

--------------------------------------------
32. String.prototype.charCodeAt()
 Syntax
	str.charCodeAt(index)

 Parameters
 index
	An integer greater than or equal to 0 and less than the length of the string; if it is not a number, it defaults to 0.

 Return value
	A number representing the UTF-16 code unit value of the character at the given index; NaN if index is out of range.

 Description
	Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128 Unicode code points are a direct match of the ASCII character encoding.
	For information on Unicode, see the JavaScript Guide.
 	Note that charCodeAt() will always return a value that is less than 65536. This is because the higher code points are represented by a pair of (lower valued) "surrogate" pseudo-characters 
 	which are used to comprise the real character. Because of this, in order to examine or reproduce the full character for individual 
 	characters of value 65536 and above, for such characters, it is necessary to retrieve not only charCodeAt(i), 
 	but also charCodeAt(i+1) (as if examining/reproducing a string with two letters), or to use codePointAt(i) instead. 
 	See example 2 and 3 below.

	charCodeAt() returns NaN if the given index is less than 0 or is equal to or greater than the length of the string.

	Backward compatibilty: In historic versions (like JavaScript 1.2) the charCodeAt() method returns a number indicating the 
	ISO-Latin-1 codeset value of the character at the given index. The ISO-Latin-1 codeset ranges from 0 to 255. 
	The first 0 to 127 are a direct match of the ASCII character set.

 Examples
	Using charCodeAt()
	The following example returns 65, the Unicode value for A.

		'ABC'.charCodeAt(0); // returns 65

-------------------------------------
33. String.fromCharCode()
 The static String.fromCharCode() method returns a string created by using the specified sequence of Unicode values.

 Syntax
	String.fromCharCode(num1[, ...[, numN]])
 
 Parameters
	num1, ..., numN
 	A sequence of numbers that are Unicode values.

 Return value
 A string containing the characters corresponding to the sequence of Unicode values.

 Description
 This method returns a string and not a String object.

	Because fromCharCode() is a static method of String, you always use it as String.fromCharCode(), 
	rather than as a method of a String object you created.

 Examples
	Using fromCharCode()
		String.fromCharCode(65, 66, 67);  // "ABC"

-------------------------------------
34. Trigger Click Events with jQuery 
 In this section, we will learn how to get data from APIs. APIs - or Application Programming Interfaces - 
 are tools that computers use to communicate with one another.
 We will also learn how to update HTML with the data we get from these APIs using a technology called Ajax.

 First, let is review what the $(document).ready() Function does. This Function runs such that all of the code inside of it executes 
 only once our page has finished loading.

 So Let is start by implementing a click event handler inside of our $(document).ready() function by adding this code:
	$("#getMessage").on("click", function(){});

-------------------------------
35. Change Text with Click Events 
 When our click event happens, we can use jQuery to update an HTML element.
 Let is make it so that when a user clicks the "Get Message" button, we change the text of the element with the Class message 
 to say "Here is the message".

 We can do this by adding the following code within our click event:

 	<script>
  	$(document).ready(function() {
    	$("#getMessage").on("click", function(){
      		$(".message").html("Here is the message");
      		});
  		});
  	});
 	<\script>
 => Khi click vào nút getMessage thì đổi chữ HTML.


----------------------------------------
NOTE ABOUT ARRAY :

 Các phương thức của Array
 Dưới đây là danh sách các phương thức của đối tượng Array cùng với miêu tả của chúng.

	concat()
		Trả về một mảng mới bao gồm mảng này kết hợp với các mảng khác và/hoặc giá trị khác.
	every()
		Trả về true nếu mỗi phần tử trong mảng này thỏa mãn hàm kiểm tra đã cho.
	filter()
		Tạo một mảng mới với tất cả các phần tử của mảng này, mà hàm lọc đã cho trả về true.
	
	forEach()
		Gọi một hàm cho mỗi phần tử trong mảng.

	indexOf()
		Trả về chỉ mục đầu tiên (thấp nhưất) của một phần tử trong mảng tương đương với giá trị đã cho, hoặc -1 nếu không được tìm thấy.
	
	join()
		Kết hợp tất cả phần tử trong một mảng vào trong một chuỗi.
	
	lastIndexOf()
		Trả về chỉ mục cuối cùng (lớn nhất) của một phần tử trong mảng tương đương với giá trị đã cho, hoặc -1 nếu không được tìm thấy.

	map()
		Tạo một mảng mới với các kết quả của việc gọi một hàm đã cho trên mỗi phần tử của mảng này.

	pop()
		Gỡ bỏ phần tử cuối cùng từ một mảng và trả về phần tử đó.

	push()
		Thêm một hoặc nhiều phần tử tới phần cuối của một mảng và trả về độ dài mới của mảng.

	reduce()
		Áp dụng một hàm đồng thời với hai giá trị của mảng (từ trái qua phải) khi để giảm nó tới một giá trị đơn.

	reduceRight()
		Áp dụng một hàm đồng thời với hai giá trị của mảng (từ phải qua trái) khi để giảm nó tới một giá trị đơn.

	reverse()
		Đảo ngược thứ tự của các phần tử của một mảng – Đầu tiên trở thành cuối cùng và cuối cùng trở thành đầu tiên.

	shift()
		Gỡ bỏ phần tử đầu tiên từ một mảng và trả về phần tử đó.

	slice()
		Extract – trích một khu vực của một mảng và trả về một mảng mới.

	some()
		Trả về true nếu có ít nhất một phần tử trong mảng này thỏa mãn hàm kiểm tra đã cho.

	toSource()
		Biểu diễn code nguồn của một đối tượng.

	sort()
		Sắp xếp các phần tử của một mảng.

	splice()
		Thêm và/hoặc gỡ bỏ các phần tử từ một mảng.

	toString()
		Trả về một chuỗi biểu diễn mảng đó và các phần tử của nó.

	unshift()
		Thêm một hoặc nhiều phần tử tới phần đầu của một mảng và trả về độ dài mới của mảng.

-----------------------------------
36. Get JSON with the jQuery getJSON Method 
 You can also request data from an external source. This is where APIs come into play.
 Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another.
 You have already been using JSON whenever you create a JavaScript object. 
 JSON is nothing more than object properties and their current values, sandwiched between a { and a }.
 	<script>
  		$(document).ready(function() {
    		$("#getMessage").on("click", function(){
     			$.getJSON("/json/cats.json", function(json) {
        			$(".message").html(JSON.stringify(json));
        			}); 
   	 		});

  		});
  <\script>

  Once you HAve added this, click the "Get Message" button. 
  Your Ajax Function will replace the "The message will go here" text with the raw JSON output from the Free Code Camp Cat Photo APIs

-----------------------------------
37. Convert JSON Data to HTML
 Now that we are getting data from a JSON API, let is display it in our HTML.
 We can use the .forEach() method to loop through our data and modify our HTML elements.
 First, let is declare an html variable with var html = "";.
 Then, let is loop through our JSON, adding more HTML to that variable. When the loop is finished, we ill render it.

 Here is the code that does this:
 <script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {
        var html = "";
		json.forEach(function(val) {
  			var keys = Object.keys(val);
  			html += "<div class = 'cat'>";
  			keys.forEach(function(key) {
    			html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  			});
  			html += "</div><br>";
  		});
      });
    });
  });
 <\script>

--------------------------
38. Render Images from Data Sources 
 We have seen from the last two lessons that each object in our JSON array contains an imageLink key 
 with a value that is the URL of a cat is image.

 When we are looping through these objects, let is use this imageLink property to display this image in an img element.
 Here is the code that does this:
 <script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {

      $.getJSON("/json/cats.json", function(json) {
        var html = "";
        json.forEach(function(val) {
          html += "<div class = 'cat'>";
          html += "<img src = '" + val.imageLink + "'>"; // code this line
          html += "</div>";
        });

        $(".message").html(html);

      });
    });
  });
 <\script>

 ------------------------------------------------
 39. Math.max()
 The Math.max() Function returns the largest of zero or more numbers.

 Syntax
  Math.max([value1[, value2[, ...]]])
 Parameters
  value1, value2, ...
 Numbers.
  Return value

 The largest of the given numbers. If at least one of the arguments cannot be converted to a number, NaN is returned.

 Using Math.max()

    Math.max(10, 20);   //  20
    Math.max(-10, -20); // -10
    Math.max(-10, 20);  //  20

 --------------------------------------------------
40. Regular Expressions

	Một Regular Expression là một đối tượng miêu tả một pattern của các ký tự.

	Lớp JavaScript RegExp biểu diễn Regular Expression, và cả String và RegExp định nghĩa các phương thức mà sử dụng Regular Expression để thực hiện các hàm so khớp pattern và tìm kiếm-thay thế mạnh trên văn bản.

	Cú pháp
	Một Regular Expression có thể được định nghĩa với RegExp () constructor như sau:

	var pattern = new RegExp(pattern, attributes);

	or simply

	var pattern = /pattern/attributes;
	Miêu tả tham số:

	pattern − Một chuỗi mà xác định pattern của Regular Expression hoặc Regular Expression khác.

	attributes − Một chuỗi tùy chọn chứa bất kỳ thuộc tính "g", "i", và "m" mà xác định tương ứng Global, Không phân biệt kiểu chữ (case-insensitive), và nhiều so khớp (multiline matches)

	Các dấu ngoặc vuông
	Các dấu ngoặc vuông ([]) có một ý nghĩa đặc biệt khi được sử dụng trong Regular Expression. Chúng được sử dụng để tìm một dãy ký tự.

	Expression	Miêu tả
	[...]	Bất kỳ một ký tự nào trong dấu ngoặc vuông
	[^...]	Bất kỳ một ký tự nào không trong dấu ngoặc vuông 
	(CẨN THẬN) : /^hello/"Hello World" là kiểm tra xem "hello" có đứng ở đầu không nhá.
	[0-9]	Nó so khớp bất kỳ số thập phân nào từ 0 đến 9
	[a-z]	Nó so khớp bất kỳ ký tự chữ thường nào từ a đến z.
	[A-Z]	Nó so khớp bất kỳ ký tự chữ hoa nào từ A đến Z.
	[a-Z]	Nó so khớp bất kỳ ký tự nào từ chữ thường a đến chữ hoa Z.
	Các dãy được chỉ ở trên là chung; bạn cũng có thể sử dụng dãy [0-3] để so khớp bất kỳ số thập phân nào từ 0 đến 3, hoặc dãy [b-v] để so khớp bất kỳ ký tự chữ thường nào từ b đến v.

	Phép lượng hóa (Quantifier)
	Tần số và vị trí của các dãy ký tự và các ký tự đơn được bao trong các dấu ngoặc có thể được biểu thị bởi một ký tự đặc biệt. Mỗi ký tự đặc biệt có một phần mở rộng riêng biệt. Các +, * … theo sau một dãy ký tự.

	Expression	Miêu tả
	p+	Nó so khớp bất kỳ chuỗi nào chứa ít nhất một p.
	p*	Nó so khớp bất kỳ chuỗi nào chứa 1 hoặc nhiều p.
	p?	Nó so khớp bất kỳ chuỗi nào chứa 0 hoặc nhiều p
	p{N}	Nó so khớp bất kỳ chuỗi nào chứa một dãy có {N} p
	p{2,3}	Nó so khớp bất kỳ chuỗi nào chứa một dãy có 2 hoặc 3 p
	p{2, }	Nó so khớp bất kỳ chuỗi nào chứa một dãy có ít nhất 2 p
	p$	Nó so khớp bất kỳ chuỗi nào kết thúc với p
	^p	Nó so khớp bất kỳ chuỗi nào bắt đầu bằng p
	Ví dụ
	Ví dụ sau giải thích chi tiết hơn về so khớp các ký tự.

	Expression	Miêu tả
	[^a-zA-Z]	Nó so khớp bất kỳ chuỗi nào không chứa bất kỳ ký tự từ a đến z và từ A đến Z.
	p.p	Nó so khớp bất kỳ chuỗi nào chứa p, được theo sau bởi bất kỳ ký tự nào, theo sau bởi một ký tự p khác.
	^.{2}$	Nó so khớp bất kỳ chuỗi nào chứa chính xác 2 ký tự
	<b>(.*)</b>	Nó so khớp bất kỳ chuỗi nào trong thẻ <b> và </b>.
	p(hp)*	Nó so khớp bất kỳ chuỗi nào chứa p được theo sau bởi 0 hoặc nhiều dãy hp.
	Các ký tự Literal
	Ký tự	Miêu tả
	Alphanumeric	Chính nó
	\0	Ký tự NUL (\u0000)
	\t	Tab (\u0009)
	\n	Dòng mới (\u000A)
	\v	Tab dọc (\u000B)
	\f	Form feed (\u000C)
	\r	Carriage return (\u000D)
	\xnn	Ký tự Latin được xác định bởi số thập lục phân nn; ví dụ: \x0A là như \n
	\uxxxx	Ký tự Unicode được xác định bởi số thập lục phân xxxx; ví dụ: \u0009 là \t
	\cX	Ký tự điều khiển ^X; Ví dụ: \cJ tương đương với ký tự dòng mới \n
	Siêu ký tự (Metacharacter)
	Một metacharacter đơn giản là một ký tự chữ cái được đặt trước bởi một dấu gạch chéo ngược mà thực hiện so khớp một ý nghĩa đặc biệt.

	Ví dụ, bạn có thể tìm kiếm một lượng tiền lớn bởi sử dụng siêu ký tự '\d' là: /([\d]+)000/. Ở đây, \d sẽ tìm bất kỳ chuỗi ký tự số nào.

	Bảng sau liệt kê một tập hợp các siêu ký tự mà có thể được sử dụng trong PERL Style Regular Expression.

	Ký tự	Miêu tả
	.	Một ký tự đơn
	\s	Một ký tự khoảng trống trắng (space, tab, dòng mới)
	\S	Không phải ký tự khoảng trống trắng
	\d	Một chữ số (0-9)
	\D	Không là chữ số
	\w	Một ký tự từ (a-z, A-Z, 0-9, _)
	\W	Không là một ký tự từ
	[\b]	Một literal backspace (trường hợp đặc biệt)
	[aeiou]	So khớp một ký tự đơn trong tập hợp đã cho
	[^aeiou]	So khớp một ký tự đơn bên ngoài tập hợp đã cho
	(foo|bar|baz)	So khớp bất kỳ các dãy thay đổi nhau đã cho
	Lượng hóa (Modifier)
	Một số lượng hóa là có sẵn mà có thể xác định cách bạn làm việc với regexp, như phân biệt kiểu chữ, tìm kiếm nhiều dòng, …

	Modifier	Miêu tả
	i	Thực hiện so khớp không phân biệt kiểu chữ (case-insensitive).
	m	Xác định nếu chuỗi có các ký tự newline (dòng mới) hoặc carriage return , toán tử ^ và $ sẽ so khớp với một giới hạn newline (dòng mới), thay vì một giới hạn chuỗi.
	g	Thực hiện so khớp Global, mà tìm tất cả các so khớp thay vì dừng lại sau so khớp đầu tiên.
	Các thuộc tính của RegExp
	Bảng dưới liệt kê các thuộc tính của đối tượng RegExp và miêu tả:

	Thuộc tính	Miêu tả
	constructor	Xác định hàm tạo prototype của đối tượng.
	global	Xác định nếu lượng hóa "g" được thiết lập
	ignoreCase	Xác định nếu lượng hóa "i" được thiết lập
	lastIndex	Chỉ mục tại đó bắt đầu so khớp mới
	multiline	Xác định nếu lượng hóa "m" được thiết lập
	source	Văn bản của pattern
	Khi bạn nhấp chuột vào link, chúng ta sẽ có một số ví dụ minh họa cho các thuộc tính của đối tượng RegExp.

	Các phương thức của RegExp
	Bảng dưới liệt kê các phương thức của đối tượng RegExp và miêu tả:

	Phương thức	Miêu tả
	exec()	Thực thi một tìm kiếm cho một so khớp trong tham số chuỗi của nó.
	test()	Kiểm tra một so khớp trong tham số chuỗi của nó.
	toSource()	Trả về một literal đối tượng biểu diễn đối tượng đã cho; bạn có thể sử dụng giá trị này để tạo đối tượng mới.
	toString()	Trả về một chuỗi biểu diễn đối tượng đã cho.

 ------------------------------------------------------
41. String.replace()

	The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
	The pattern can be a string or a RegExp, and the replacement can be a string or a Function to be called for each match.

 Syntax
	str.replace(regexp|substr, newSubStr|Function)

 Parameters
   regexp (pattern)
	A RegExp object or literal. The match or matches are replaced with newSubStr or the value returned by the specified 
	Function.

   substr (pattern)
	A String that is to be replaced by newSubStr. It is treated as a verbatim string and is not interpreted 
	as a regular expression. Only the first occurrence will be replaced.
	newSubStr (replacement)
	The String that replaces the substring specified by the specified regexp or substr parameter. 
	A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.
	Function (replacement)
	A Function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.
	
 Return value
	A new string with some or all matches of a pattern replaced by a replacement.
 
 Examples:

  The following example will set newString to 'abc - 12345 - #$*%':
		function replacer(match, p1, p2, p3, offset, string) {
		  // p1 is nondigits, p2 digits, and p3 non-alphanumerics
		  return [p1, p2, p3].join(' - ');
		}
		var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
   Examples 2:
   	var re = /apples/gi;
	var str = 'Apples are round, and apples are juicy.';
	var newstr = str.replace(re, 'oranges');
	console.log(newstr);  // oranges are round, and oranges are juicy.
  
  Examples 3: 
  	var re = /(\w+)\s(\w+)/;
	var str = 'John Smith';
	var newstr = str.replace(re, '$2, $1');
	console.log(newstr);  // Smith, John

-----------------------------------------------------
42. Timing Events

 The window object allows execution of code at specified time intervals.
 These time intervals are called timing events.

 The two key methods to use with JavaScript are:

  setTimeout(Function, milliseconds)  // Thực hiện 1 lần.
    Executes a Function, after waiting a specified number of milliseconds. 

  setInterval(Function, milliseconds)
    Same as setTimeout(), but repeats the execution of the Function continuously. // Thực hiện liên tục.

 The setTimeout() and setInterval() are both methods of the HTML DOM Window object.

 How to Stop the Execution?

  The clearTimeout() method stops the execution of the Function specified in setTimeout().
    window.clearTimeout(timeoutVariable)

  The window.clearTimeout() method can be written without the window prefix.

  The clearTimeout() method uses the variable returned from setTimeout():
    myVar = setTimeout(Function, milliseconds);
    clearTimeout(myVar);

  If the Function has not already been executed, you can stop the execution by calling the clearTimeout() method:

  Example
    Same example as above, but with an added "Stop" button:

      <button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>
      <button onclick="clearTimeout(myVar)">Stop it</button>

The setInterval() Method
  The setInterval() method repeats a given Function at every given time-interval.
    window.setInterval(Function, milliseconds);
  
  The window.setInterval() method can be written without the window prefix.

  The first parameter is the Function to be executed.
  The second parameter indicates the length of the time-interval between each execution.

  This example executes a Function called "myTimer" once every second (like a digital watch).

  Example
  Display the current time:
    var myVar = setInterval(myTimer, 1000);

    Function myTimer() {
      var d = new Date();
      document.getElementById("demo").innerHTML = d.toLocaleTimeString();
  }

 Using clearInterval() to stop time in the previous example:

  var myVar = setInterval(function(){ myTimer() }, 1000);

  function myTimer() {
      var d = new Date();
      var t = d.toLocaleTimeString();
      document.getElementById("demo").innerHTML = t;
  }

  function myStopFunction() {
      clearInterval(myVar);
  }

-----------------------------------------------------
43. Object.keys()

  The Object.keys() method returns an array of a given object''s own enumerable properties, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).

  SyntaxEDIT
    Object.keys(obj)
  
  Parameters

  obj
    The object whose enumerable own properties are to be returned.
  
  Return value
  An array of strings that represent all the enumerable properties of the given object.

  DescriptionEDIT
  Object.keys() returns an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually.

  ExamplesEDIT
      var arr = ['a', 'b', 'c'];
      console.log(Object.keys(arr)); // console: ['0', '1', '2']

      // array like object
      var obj = { 0: 'a', 1: 'b', 2: 'c' };
      console.log(Object.keys(obj)); // console: ['0', '1', '2']

      // array like object with random key ordering
      var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
      console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

      // getFoo is property which isn't enumerable
      var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
      my_obj.foo = 1;

      console.log(Object.keys(my_obj)); // console: ['foo']