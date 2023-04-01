import React from 'react';

const EditForm = ({
    values,
    setValues,
    handleEditPost
}) => {
    return (
        <div className="py-8">
            <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <form
                    onSubmit={handleEditPost}
                    className="p-6">
                    <div className="mb-4">
                        <label className="block text-orange-600 text-lg font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="appearance-none bg-gray-200 rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={values?.title}
                            onChange={(e) => setValues({ ...values, title: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-orange-600 text-lg font-bold mb-2" htmlFor="body">
                            Body
                        </label>
                        <textarea
                            rows={10}
                            style={{ resize: 'none' }}
                            className="appearance-none bg-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:border-gray-700"
                            id="body"
                            placeholder="Body"
                            value={values?.body}
                            onChange={(e) => setValues({ ...values, body: e.target.value })}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-orange-600 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Edit Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditForm;