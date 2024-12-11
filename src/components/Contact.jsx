import React from 'react'

function Contact() {
    return (
        <>
            <div className='flex  items-center justify-center dark:bg-slate-800 dark:text-white  '>
                <div className='w-[600px]'>
                    <form className=' modal-box w-96 dark:bg-slate-700 dark:text-white'>
                        <h1 className='text-center text-xl p-4'>Leave a Message</h1>
                        <div className='m-3'>
                            <label>Name :</label>
                            <input type="text" placeholder="Your Name"
                                className="w-80 px-4 py-2 border outline-none  rounded-md dark:bg-slate-700 dark:text-white" />
                        </div>
                        <div className='m-3'>
                            <label>Email :</label>
                            <input type="email" placeholder="Your Email id"
                                className="w-80 px-4 py-2 border outline-none rounded-md dark:bg-slate-700 dark:text-white" />
                        </div>
                        <div className='m-3'>
                            <label>Contact :</label>
                            <input type="number" placeholder="Your Contact Number"
                                className="w-80 px-4 py-2 border outline-none rounded-md dark:bg-slate-700 dark:text-white" />
                        </div>
                        <div className='m-3'>
                            <label>Subject :</label>
                            <input type="text" placeholder="Related to..."
                                className="w-80 px-4 py-2 border outline-none  rounded-md dark:bg-slate-700 dark:text-white" />
                        </div>
                        <div className='m-3'>
                            <label>Message :</label>
                            <textarea
                                className="textarea textarea-bordered w-80 px-4 py-2 border outline-none  rounded-md dark:bg-slate-700 dark:text-white "
                                placeholder="Write Your Query"></textarea>
                        </div>
                        <div className='text-center'>
                            <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                Submit Now
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
