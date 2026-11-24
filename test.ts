interface Employee {
    id: number;
    name: string;
    manager: number;
    reportees: Employee[];
}

const employees = [
    { id: 1, name: "A", manager: 0 },
    { id: 2, name: "B", manager: 1 },
    { id: 3, name: "C", manager: 1 },
    { id: 4, name: "D", manager: 2 },
    { id: 5, name: "E", manager: 2 },
    { id: 6, name: "F", manager: 3 },
];

// Step 1: Create a map of employees
const employeeMap = new Map<number, Employee>();

for (const emp of employees) {
    employeeMap.set(emp.id, {
        ...emp,
        reportees: []
    });
}

console.log("employeeMap => ", JSON.stringify(employeeMap.values()));

// Step 2: Build the hierarchy
const result: Employee[] = [];

for (const emp of employeeMap.values()) {
    console.log("emp => ", emp);
    if (emp.manager === 0) {
        // Top-level employee
        result.push(emp);
    } else {
        // Find the manager and add this employee to their reportees
        const manager = employeeMap.get(emp.manager);
        manager?.reportees.push(emp);
    }
}

for (const emp of employeeMap.values()) {
    console.log("# emp => ", emp);
}

console.log(JSON.stringify(result, null, 2));