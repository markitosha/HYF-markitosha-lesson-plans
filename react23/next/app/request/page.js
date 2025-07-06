export default async function Home() {
    // cookie
    // searchParams
    // headers -- ?

    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([]);
        }, 3000);
    });

    console.log(data);

    return <div>Request page</div>
}