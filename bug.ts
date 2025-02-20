function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName);
  if (person.lastName) {
    console.log(person.lastName);
  }
}

const person1 = {firstName: 'John'};
printName(person1);

const person2 = {firstName: 'Jane', lastName: 'Doe'};
printName(person2);