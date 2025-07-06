import { NextResponse } from "next/server";
import { data } from "@/app/api/todo/data";

export function GET() {
    return NextResponse.json(data);
}

export async function PUT(req) {
    const { text } = await req.json();

    console.log(req.body);

    data.push({ id: data.length + 1, text, done: false });

    console.log(data);

    return NextResponse.json(data.at(-1));
}

export async function POST(req) {
    const { id, text, done } = await req.json();

    const index = data.findIndex((item) => item.id == id);

    data[index] = {
        id,
        text,
        done,
    };

    return NextResponse.json(data[index]);
}

export async function DELETE(req) {
    const { id } = await req.json();

    const index = data.findIndex((item) => item.id == id);

    data.splice(index, 1);

    return NextResponse.json(data);
}
