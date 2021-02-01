import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SearchBook.css";

function SearchBook({ id, year, title, summary, poster, actor, director }) {
    return (
        <div className="book">
            <Link
                to={{
                    pathname: `/detail/${id}`,
                    state: {
                        year,
                        title,
                        summary,
                        poster,
                        director,
                        actor
                    }
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="book__data">
                    <h3 className="book__title">{title}</h3>
                    <h5 className="book__year">{year}</h5>
                    <p className="book__director">{director}</p>
                    <p className="book__actor">{actor}</p>
                    <p className="book__summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

SearchBook.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired
};

export default SearchBook;