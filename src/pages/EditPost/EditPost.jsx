import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import SvgIconRenderer from '../../components/SvgIconRenderer';
import { editPost } from '../../features/postsSlice';
import { SvgPaths } from '../../utils/SvgPaths';
import EditForm from './EditForm';
import { ToastMessage } from "../../utils/ToastMessage"

const EditPost = () => {

    const params = useParams();
    console.log(params, "params");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, posts } = useSelector(state => state.posts)
    const [values, setValues] = useState({
        title: "",
        body: ""
    });
    useEffect(() => {
        if (posts.length <= 0) {
            return
        }
        const existingPost = posts.find(post => post.id === parseInt(params.id))
        const { title, body } = existingPost
        setValues({
            title: title,
            body: body
        })
    }, [loading, params.id, posts])


    const handleEditPost = (e) => {
        e.preventDefault()
        setValues({ title: '', body: '' });
        dispatch(editPost({
            id: params.id,
            title: values.title,
            body: values.body
        }));
        ToastMessage.notifySuccess("Post Edited Successfully")
        navigate('/');
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
                    <EditForm
                        values={values}
                        setValues={setValues}
                        handleEditPost={handleEditPost}
                    />
                </div>
            </div>
        </div>
    );
};

export default EditPost;