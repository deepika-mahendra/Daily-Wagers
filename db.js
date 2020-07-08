//show dbs
//db.emp.insert([{roll_no:103,name:"girish",salary:25000,role:"Developer",age:20,Gender:"male"}]);

//db.emp.insert([{roll_no:104,name:"deepika",salary:55000,role:"sr.Developer",age:20,Gender:"female"}]);

db.emp.insert([{roll_no:105,name:"Prachi",salary:15000,role:"jr.Developer",age:20,Gender:"female"}]);
//
db.emp.insert([{roll_no:106,name:"Yuwan",salary:35000,role:"Tester",age:19,Gender:"male"}]);

// db.emp.insert([{name:"Deepika"},{name:"prachi"},{name:"palak"},{name:"shashi"},
//{name:"yukta"},{name:"yuwan"}]);

//db.employee.insert([{salary:15000},{salary:20000},{salary:25000},{salary:30000},
//{salary:50000},{salary:50500}]);

//db.employee.insert([{role:"sr.Developer"},{role:"Tester"},{role:"jr.Developer"},{role:"HR"},
//{role:"jr.Developer"},{role:"Tester"}]);

//db.employee.insert([{age:20},{age:22},{age:23},{age:22},
//{age:25},{age:24}]);

//db.employee.insert([{Gender:"Female"},{Gender:"Female"},{Gender:"Female"},{Gender:"Female"},
//{Gender:"Female"},{Gender:"male"}]);

db.emp.find()
//use stud
//use dept
use emp
db.emp.find({age:{$lt:20}})
db.emp.find({age:{$eq:20}})
db.emp.find({salary:55000,age:20})
db.emp.find({$or:[{salary:25000},{age:20,gender:'female'}]});
use emp
db.emp.drop()
use dept
db.emp.aggregate([{$group:{_id:"$Gender",Total:{$sum:1}}}])