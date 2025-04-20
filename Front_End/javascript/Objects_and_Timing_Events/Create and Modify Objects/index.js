

  var main = function () {
    let student, address;
    function setStudent() {
      student = {
        name: "ABC",
        age: 10,
        rollNumber: 50
      };
    }
    function setAddressAndUpdateStudent() {
      address = {
        city: "Mumbai",
        state: "Maharastra"
      };
      student.address = address;
    }
    function deleteRollNumber() {
      delete student.rollNumber;
    }
    function getStudent() {
      return student;
    }
    function getAddress() {
      return address;
    }
    return {
      setStudent,
      setAddressAndUpdateStudent,
      deleteRollNumber,
      getStudent,
      getAddress
    };
  };
  

// var main = function () {

//   let student, address;
//   function setStudent() {

//   }
//   function setAddressAndUpdateStudent() {

//   }
//   function deleteRollNumber() {
 
//   }
//   function getStudent() {
//     return student;
//   }
//   function getAddress() {
//     return address;
//   }
//   return {
//     setStudent,
//     setAddressAndUpdateStudent,
//     deleteRollNumber,
//     getStudent,
//     getAddress
//   };
// };
