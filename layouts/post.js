import Nav from '@/layouts/Nav';

function Post(posts) {
    return ({children: content}) => {
        return (
            <>
                <Nav />
                <div className="mx-auto my-10 prose">{content}</div>
            </>
        );
    };
}

export default Post;
