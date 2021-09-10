import React from 'react';
import { strings } from '../../static/Strings';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ isForm, onAdd, title }) => {
    return (
        <div className="e-header d-flex justify-content-between align-items-center">
            <div className="e-header__head">
                <h2 className="e-header__tile font-bold">{title}</h2>
                {
                    isForm && <p className="color-text">{strings.THERE_ARE} <span className="e-header__count color-primary text-bold">35 </span>{strings.TOTAL_EVENTS} </p>
                }
            </div>
            {
                isForm && <div className="e-header__actions">
                    <Link onClick={onAdd} to="events/add-event" className="btn btn-primary btn-shadow btn-icon"><span className="btn-circle"><FaPlus /></span>{strings.ADD_EVENT}</Link>
                </div>
            }
        </div>
    )
}

export default Header
