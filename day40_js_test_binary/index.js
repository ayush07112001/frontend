const employees = [
    { name: 'Ayush', salary: 120000 },
    { name: 'shreeom', salary: 160000 },
    { name: 'kajal', salary: 155000 },
    { name: 'shubham', salary: 150000 },
    { name: 'harsh', salary: 169000 },
    { name: 'ram charan', salary: 157000 },
    { name: 'rishabh', salary: 130000 },
    { name: 'narayan', salary: 250000 },
    { name: 'rajul', salary: 140000 },
    { name: 'sid', salary: 200000 },
  ];
  
  const leftEmployees = [];
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary < 150000 || employees[i].salary > 170000) {
      leftEmployees.push(employees[i]);
    }
  }
  console.log('left employees:', leftEmployees);
  
  