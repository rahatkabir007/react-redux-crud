import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, setShowModal } from '../../features/postsSlice';

const RemoveModal = ({ modalData }) => {
    const dispatch = useDispatch();
    return (
        <div className="fixed z-50 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity">
                    <div
                        onClick={() => { dispatch(setShowModal(false)) }}
                        className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="rounded-lg py-8 px-24 shadow-lg bg-white z-10" >
                    <div className="flex flex-col gap-y-10 items-center justify-center">
                        <div>
                            <p className='text-xl'> Are You Sure You Want To Delete This Post?</p>
                        </div>
                        <div className='flex justify-center gap-8'>
                            <div
                                onClick={() => { dispatch(setShowModal(false)) }}
                                className='px-3 py-2 bg-[#1A1A40] text-white rounded cursor-pointer'>
                                Cancel
                            </div>
                            <div
                                onClick={() => { dispatch(deletePost(modalData.id)) }}
                                className='px-3 py-2 bg-[#A13333] text-white rounded cursor-pointer'>
                                Delete
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RemoveModal;