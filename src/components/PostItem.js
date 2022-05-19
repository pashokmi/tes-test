import React, {useRef, useState} from 'react';
import {deletePost, editPost} from "../store";

const PostItem = ({title, body, id,}) => {
    const [editTitle, setEditTitle] = useState(false)
    const [editBody, setEditBody] = useState(false)

    const titleRef = useRef(null)

    const saveEdit = () => {
        editPost({
            id,
            title: titleRef.current.value
        })
        setEditTitle(false)
    }


    return (

        <li style={{
            padding: '10px',
            border: '1px solid #000',
            marginBottom: '5px',
            listStyle: 'none'
        }}>
            {editTitle ?
                <div>
                    <input
                        style={{
                            border: 'none',
                            borderBottom: '2px solid #000',
                            width: '100%',
                            padding: '5px',
                        }}
                        ref={titleRef}
                        type={'text'}
                        defaultValue={title}
                        // onChange={onChange(id)}
                    />
                    <button onClick={() => saveEdit()}>Save changes</button>
                </div>
                :
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2>{title}</h2>
                    <button onClick={() => setEditTitle(true)}>Edit title</button>
                </div>
            }

            {editBody ?
                <div>
                    <input
                        style={{
                            border: 'none',
                            borderBottom: '2px solid #000',
                            width: '100%',
                            padding: '5px',
                        }}
                        type={'text'}
                        autoFocus
                        defaultValue={body}
                    />
                    <button onClick={() => setEditBody(false)}>Save changes</button>
                </div>
                :
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <p>{body}</p>
                    <button onClick={() => setEditBody(true)}>Edit body</button>
                </div>

            }

            <button
                onClick={() => deletePost(id)}
            >Delete post!
            </button>
        </li>
    );
};

export default PostItem;