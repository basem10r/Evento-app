import React from 'react';
import Event from '../events/Event';
import EmptyState from './EmptyState';

const List = ({ events }) => {

    return (
        <>
            {
                events.length > 0 && <div className="e-list d-flex flex-wrap flex-row margin-minus-15 mt-5 ">
                    {
                        events.map((event, index) => (
                            (
                                <div key={index} className="col-12 col-md-6 col-lg-4 ">
                                    <Event event={event} />
                                </div>
                            )
                        ))
                    }
                </div>
            }
            {
                events.length === 0 && <EmptyState />
            }
        </>


    )
}

export default List
