import Link from 'next/link'
function HomePage() {
    const homes = [
        { id: 'portfolio', name: 'Portfolio' },
        { id: 'clients', name: 'Clients' }
    ]
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {homes.map(home => (
                    <li key={home.id}>
                        <Link href={`/${home.id}`}>{home.name}</Link>
                    </li>
                ))}


            </ul>
        </div>
    )
}


export default HomePage