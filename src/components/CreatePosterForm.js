import React, { Component } from 'react';

class CreatePosterForm extends Component {
    render() {
        return (
            <div className="column">
                <form className="poster-details">
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={this.props.getPosterTitle}
                    />
                    <input
                        type="text"
                        placeholder="Subtitle"
                        onChange={this.props.getPosterSubtitle}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        onChange={this.props.getImageURL}
                    />
                </form>
            </div>
        );
    }
}

export default CreatePosterForm;
