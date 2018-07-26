import React from 'react';

export default class FilterCategories extends React.Component {
    onClick(e) {
        e.preventDefault();
        this.props.onFilter(e.target.id)
    }

    render() {
        let categories = this.props.categories;
        return (
            <div>
                {categories.map((categorie, index) => 
                    <span key={index}>
                        <a href={"#" + categorie.shortname}
                           id={categorie.id}
                           onClick={this.onClick.bind(this)}>
                           {categorie.name} 
                        </a> 
                    ||| </span>
                )}
            </div>
        )
    }
}