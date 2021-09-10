import React from 'react';
import Event from '../events/Event';
import EventImg from '../../assets/images/event.jpg';
import EmptyState from './EmptyState';

const List = () => {

    const events = [
        {
            title: "Bvi stronger city construction",
            address: "yosemite , CA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dateFrom: "8 Nov",
            dateTo: "12 Nov",
            image: EventImg
        },
        {
            title: "Bvi stronger city construction",
            address: "yosemite , CA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dateFrom: "8 Nov",
            dateTo: "12 Nov",
            image: EventImg
        },
        {
            title: "Bvi stronger city construction",
            address: "yosemite , CA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dateFrom: "8 Nov",
            dateTo: "12 Nov",
            image: EventImg
        },
        {
            title: "Bvi stronger city construction",
            address: "yosemite , CA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dateFrom: "8 Nov",
            dateTo: "12 Nov",
            image: EventImg
        },
        {
            title: "Bvi stronger city construction",
            address: "yosemite , CA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dateFrom: "8 Nov",
            dateTo: "12 Nov",
            image: EventImg
        },
        {
            title: "Bvi stronger city construction",
            address: "yosemite , CA",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            dateFrom: "8 Nov",
            dateTo: "12 Nov",
            image: EventImg
        }
    ]

    return (
        <>
            {
                events.length > 0 && <div className="e-list d-flex flex-wrap flex-row margin-minus-15 mt-5">
                    {
                        events.map((event, index) => (
                            (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <Event key={index} event={event} />
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
