import AddForm from "@/app/todo/AddForm";

export default async function Todo() {
    const data = await fetch('http://localhost:3000/api/todo').then((res) => res.json());

    return <div>
        <AddForm />
        <div>
            {data.map((item) => (
                <div key={item.id}>{item.text}</div>
            ))}
        </div>
    </div>;
}