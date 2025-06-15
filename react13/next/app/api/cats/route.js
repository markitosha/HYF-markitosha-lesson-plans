let cats = [
  {
    name: 'Waffle',
    age: 8,
    id: 1,
  }, {
    name: 'Cat',
    age: 1,
    id: 2
  }, {
    name: 'Dog',
    age: 20,
    id: 3
  }
];

export async function GET() {
  return Response.json(cats);
}

export async function POST(request) {
  const { name, age } = await request.json();
  if (!name || typeof age !== 'number') {
    return new Response('Invalid input', { status: 400 });
  }
  const newCat = { id: Date.now().toString(), name, age };
  cats.push(newCat);
  return Response.json(newCat, { status: 201 });
}

export async function DELETE(request) {
  const { id } = await request.json();
  if (!id) {
    return new Response('Missing id', { status: 400 });
  }
  const initialLength = cats.length;
  cats = cats.filter(cat => cat.id !== id);
  if (cats.length === initialLength) {
    return new Response('Cat not found', { status: 404 });
  }
  return new Response('Deleted', { status: 200 });
} 