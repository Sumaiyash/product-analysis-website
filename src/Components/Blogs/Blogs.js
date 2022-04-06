import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div >

            <div className=' bg-indigo-100 border-4 mx-20 p-8 h-2/5 w-3/4 my-6' >
                <h1 className='text-4xl font-bold '>1. Purpose of Context API?</h1>
                <p>Context API helps passing data to child component without pops drilling. It is like mobile network.
                    By wrapping context API component any data can be passed through Context API to the child components
                    or file only. It creates a context and export to share file to another file. It provides two components
                    Provider and Consumer wrapped by Context API component. Last, in the Provider component any dynamic
                    or static data can pass through value, and catch from child component.</p>
            </div>


            <div className=' bg-indigo-100 border-4 mx-20 p-8 h-2/5 w-3/4 my-6'>
                <h1 className='text-4xl font-bold '>2. Semantic Tag?</h1>
                <p>HTML5 semantic tags define the purpose of the element. By using semantic markup,
                    you help the browser understand the meaning of the content instead of just displaying it.
                    By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster.</p>
            </div>

            <div className=' bg-indigo-100 border-4 mx-20 p-8 h-2/5 w-3/4'>
                <h1 className='text-4xl font-bold '>3. Difference between Inline Block and Inline Elements?</h1>
                <p> inline , the major difference is that inline-block allows to set a width and height on the element.
                    Also, with display: inline , top and bottom margins & paddings are not respected, and with display: inline-block they are.

                    display block: in display block, the elements don’t sit side by side.</p>
            </div>
        </div>
    );
};

export default Blogs;