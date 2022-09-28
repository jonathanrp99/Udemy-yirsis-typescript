import { reactive } from "vue";
import type  Store  from '../interfaces/Store';

const store = reactive<Store>({
    name: "Willson",
    lastName: "Smith",
    age: 30,
    student: false,
    growing:() => {
        store.age++
    }
})

export default store