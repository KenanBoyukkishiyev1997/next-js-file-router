import { useRouter } from 'next/router'
function ClientsProjectsPage() {

    const route = useRouter()

    function loadProjectHandler() {
        route.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id:'max',clientprojectid:'project'}
    })
    }

    return (
        <div>
            <h1>The Clients Projects Page</h1>

            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientsProjectsPage