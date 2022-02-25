import React from 'react';
import './rating.scss'
import './rating.scss'
export default function RatingDetails(props){

    const {rating, numReviews} = props;
    return (
        <div className="ratings">
            <span className='rating_boxs'>
            <i className=
                    
                     'fa fa-star'/>
                {' '}
                {rating}
            </span>
            
            {/* <span>
                <i className={
                    rating >=1 ? 'fa fa-star'
                    : rating >=0.5 ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                    }>
                </i>
            </span>
            <span>
                <i className={
                    rating >=2 ? 'fa fa-star'
                    : rating >=1.5 ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                    }>
                </i>
            </span>
            <span>
                <i className={
                    rating >=3 ? 'fa fa-star'
                    : rating >=2.5 ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                    }>
                </i>
            </span>
            <span>
                <i className={
                    rating >=4 ? 'fa fa-star'
                    : rating >=3.5 ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                    }>
                </i>
            </span>
            <span>
                <i className={
                    rating >=5 ? 'fa fa-star'
                    : rating >=4.5 ? 'fa fa-star-half-o'
                    : 'fa fa-star-o'
                    }>
                </i>
            </span>
            <span>
                {numReviews + 'Reviews'}
            </span> */}
            
        </div>

    )
}