import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([9, 0, 1, -3]);

numbersCollection.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("sbxzZxYanq");

charactersCollection.sort();

console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(10);
linkedList.add(8);
linkedList.add(2);

linkedList.sort();
linkedList.print();
