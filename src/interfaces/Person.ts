export default interface Person {
    name: string;
    lastName: string;
    age: number;
    student: boolean;
    growing?: () => void,
}