import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import SvgIconRenderer from '../../components/SvgIconRenderer';
import { SvgPaths } from '../../utils/SvgPaths';
import AddForm from './AddForm';
import { addPost } from "../../features/postsSlice";
import { ToastMessage } from "../../utils/ToastMessage"

const AddPost = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        title: '',
        body: ''
    });

    const handleAddPost = (e) => {
        e.preventDefault();
        setValues({ title: '', body: '' });
        dispatch(addPost({
            id: Math.floor(Math.random() * 1000),
            userId: Math.floor(Math.random() * 1000),
            title: values.title,
            body: values.body
        }));
        ToastMessage.notifySuccess("Post Added Successfully")
    }
    return (
        <div className='container-x'>
            <div className='my-8'>
                <div className="flex mb-3">
                    <div className='inline-block p-3 bg-orange-600 text-white font-bold rounded-md cursor-pointer'>
                        <div className='flex gap-1 items-center'>
                            <div>
                                <SvgIconRenderer
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    path={SvgPaths.leftarrow}
                                    pathFill={"#fff"}
                                />
                            </div>
                            <div>
                                <Link to="/">View All Posts</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <AddForm
                        values={values}
                        setValues={setValues}
                        handleAddPost={handleAddPost}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddPost;