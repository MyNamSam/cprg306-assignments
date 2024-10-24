import ItemList from "./item-list";

export default function Page() {
    
    return (
        <main class="pb-3 bg-green-300">
            <h2 class="text-xl font-bold pl-4 pt-4">Shopping List</h2>
            <ItemList />
        </main>
    );
}