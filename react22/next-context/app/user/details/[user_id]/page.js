export default async function Page({ params, searchParams }) {
    const { user_id } = await params;
    const { search } = await searchParams;

    return <div>This is a user page: {user_id}, searched: {search}</div>
}
