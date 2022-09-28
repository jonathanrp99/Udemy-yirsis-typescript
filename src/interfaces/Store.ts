export default interface Store {
    name: string,
    lastName: string;
    age: number;
    student: boolean;
    growing?: () => void,
}