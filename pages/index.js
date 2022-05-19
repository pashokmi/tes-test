import React from 'react';
import {$posts} from "../src/store";
import {useStore} from "effector-react";
import PostItem from "../src/components/PostItem";


const Home = () => {
    const posts = useStore($posts)

    return (
        <>
            <div style={{
                margin:'0 auto',
                padding:'0 10px'
            }}>
                <ul>
                    {posts.map((item) => (
                        <PostItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Home;