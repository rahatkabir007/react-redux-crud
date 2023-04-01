import React, { useEffect, useState } from 'react';
import SvgIconRenderer from '../components/SvgIconRenderer'
import { SvgPaths } from '../utils/SvgPaths'
import { useDispatch, useSelector } from "react-redux";
import { getPosts, setShowModal } from '../features/postsSlice';
import { Link } from 'react-router-dom';
import ModalLoader from "../components/ModalLoader/ModalLoader"
import RemoveModal from './Modal/RemoveModal';

const Homepage = () => {

    const dispatch = useDispatch();

    const { loading, posts, showModal } = useSelector(state => ({ ...state.posts }))

    const [modalData, setModalData] = useState(null)

    const handleRemovePost = (data) => {
        if (data !== null) {
            dispatch(setShowModal(true))
            setModalData(data)
        }
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <>
            {
                showModal && <RemoveModal
                    modalData={modalData}
                />
            }
            <div className='container-x'>
                <div className='my-6 flex flex-col justify-center items-center'>
                    <div>
                        <p className='text-xl'> Right Now We Have <span className='text-2xl text-orange-600 mx-2'>{posts?.length}</span> Posts</p>
                    </div>
                    <div className='my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-3'>
                        {
                            posts?.length > 0 &&
                            posts?.map((data, ind) => {
                                return (
                                    <div key={data.id} className='flex justify-between items-center bg-slate-200 py-3 px-6 rounded-lg gap-20'>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <span className='font-semibold text-orange-600 mr-2'>TITLE:</span><span className='text-lg capitalize break-all'>{data.title}</span>
                                            </div>
                                            <div>
                                                <span className='font-semibold text-orange-600 capitalize mr-2'>BODY:</span> <span className='text-lg capitalize break-all'>{data.body}</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <Link to={`editPost/${data.id}`}>
                                                <div

                                                    className='rounded bg-[#1A1A40] p-1 inline-block cursor-pointer'>
                                                    <SvgIconRenderer
                                                        width="24px"
                                                        height="24px"
                                                        viewBox="0 0 24 24"
                                                        path={SvgPaths.edit}
                                                        pathFill={"#fff"}
                                                    />
                                                </div>
                                            </Link>
                                            <div
                                                onClick={() => handleRemovePost(data)}
                                                className='rounded bg-[#A13333] p-1 inline-block cursor-pointer'>
                                                <SvgIconRenderer
                                                    width="24px"
                                                    height="24px"
                                                    viewBox="0 0 24 24"
                                                    path={SvgPaths.delete}
                                                    pathFill={"#fff"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
            {
                loading && <ModalLoader />
            }
        </>
    );
};

export default Homepage;