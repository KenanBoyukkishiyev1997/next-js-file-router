import {useRouter} from 'next/router'

function SelectedProjectsPage(){
    const router = useRouter();
    console.log(router.query)
    return(
        <div>
            <h1>The  Projects Page for a spacifi Projects for a select </h1>
        </div>
    )
}

export default SelectedProjectsPage