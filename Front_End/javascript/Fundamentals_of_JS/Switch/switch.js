const fruits = prompt('enter the fruit name');

switch (fruits) {
  case 'Apple':
    console.log('Hey, its Apple');
    break;
  case 'Kiwi':
    console.log('Wow!, its a Kiwi');
    break;
  default:
    console.log(
      'Oh No its neither Apple not Kiwi'
    );
    break;
}
console.log('Outside Switch');