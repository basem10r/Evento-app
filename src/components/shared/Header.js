import React from 'react';
import { strings } from '../../static/Strings';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

const Header = ({ isList, onAdd, title, listLength }) => {
    return (
        <>
            {
                !isList && <Link to="/events" className="color-text d-flex align-items-center"><FaAngleLeft></FaAngleLeft>{strings.BACK}</Link>
            }
            <div className="e-header d-flex justify-content-between align-items-center mt-4">
                <div className="e-header__head">
                    <h2 className="e-header__tile font-bold">{title}</h2>
                    {
                        isList && <p className="color-text">{strings.THERE_ARE} <span className="e-header__count color-primary text-bold">{listLength} </span>{strings.TOTAL_EVENTS} </p>
                    }
                </div>
                {
                    isList && <div className="e-header__actions">
                        <Link onClick={onAdd} to="/events/add-event" className="btn btn-primary btn-shadow btn-icon"><span className="btn-circle"><FaPlus /></span>{strings.ADD_EVENT}</Link>
                    </div>
                }
            </div>
        </>

    )
}

export default Header
