import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const firstReviews = reviews.slice(0, 3);
    return (
        <div className='container'>
            <div className=' grid grid-cols-2 m-4'>
                <div className='flex justify-center items-center'>
                    <div>
                        <h1 className='text-5xl'>Welcome to <span className='text-indigo-900'>Skin  Care BD</span></h1>
                        <p className='text-xl text-left mt-6'>Keep skin clean and pores clear with a daily face wash like Simple® Water
                            Boost Micellar Gel Wash. It's packed full of micellar cleansing bubbles that gently glide over the skin's
                            surface, lifting impurities, as it cleanses and hydrates—making it one of our best face washes
                            for sensitive skin.</p>
                        <button className='text-lg bg-indigo-500 text-white font-semibold my-10 px-6 py-2 rounded'>Live Demo</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="image/img-1.png" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-4xl my-6 text-indigo-900'>Customer Reviews</h1>
                <div className='grid grid-cols-3 gap-6  border-cyan-200'>
                    {
                        firstReviews.map(fr => <div key={fr.id} className='mb-6 p-5 bg-indigo-100 border-4 rounded'>
                            <div className='flex justify-center'>
                                <img className='w-20' src={fr.img} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold'>{fr.name}</h1>
                                <p>Review: "{fr.comment}"</p>
                                <p><small>Ratings: {fr.rating}/5</small></p>
                            </div>
                        </div>)
                    }
                </div>
                <Link to='/reviews'>
                    <button className='text-lg bg-indigo-500 text-white font-semibold px-4 py-2 rounded'>See All Reviews</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;