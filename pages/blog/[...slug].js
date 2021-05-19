import {useRouter} from 'next/router'
function BlogPostPage() {
    console.log(useRouter().query)
    return (
        <div>
            <h1>The Blog Post</h1>
        </div>
    )
}

export default BlogPostPage;