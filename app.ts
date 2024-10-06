// User Interface
interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

// Task Interface
interface Task {
    id: string;
    title: string;
    description: string;
    assignedTo: User;
    status: 'pending' | 'in-progress' | 'completed';
    priority: 'low' | 'medium' | 'high';
    dueDate?: Date; // Optional
    createdAt: Date;
    updatedAt: Date;
}

// Project Interface
interface Project {
    id: string;
    name: string;
    description: string;
    tasks: Task[];
    members: User[];
    startDate: Date;
    endDate?: Date; // Optional
    createdAt: Date;
    updatedAt: Date;
}

// Response for API calls
interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}
function createTask(task: Task): ApiResponse<Task> {
    // Logic to create a task
    return {
        data: task,
        message: "Task created successfully!",
        success: true,
    };
}
class Animal {
    constructor(
        public name: string,
        public species: string,
        public age: number
    ) {}

    makeSound(): string {
        return "Some generic sound";
    }

    getInfo(): string {
        return `${this.name} is a ${this.age}-year-old ${this.species}.`;
    }
}
class Dog extends Animal {
    constructor(
        name: string,
        age: number,
        public breed: string
    ) {
        super(name, 'Dog', age); // Call the constructor of the base class
    }

    makeSound(): string {
        return "Woof! Woof!";
    }

    getInfo(): string {
        return `${this.name} is a ${this.age}-year-old ${this.breed} dog.`;
    }
}
const myDog = new Dog("Buddy", 3, "Golden Retriever");

console.log(myDog.getInfo()); // "Buddy is a 3-year-old Golden Retriever dog."
console.log(myDog.makeSound()); // "Woof! Woof!"
