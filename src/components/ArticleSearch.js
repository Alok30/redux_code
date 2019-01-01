import React, { Component } from 'react';
class ArticleSearch extends Component {
    constructor() {
        super(props);
        this.state = {
            query: '',
            start_date: '',
            end_date: '',
        };
        this.queryInputRef = React.createRef();
        this.createdInputRef = React.createRef();
        this.endInputRef = React.createRef();
    }
    search = (event) => {
        event.preventDefault();
        search(this.state)
            .then(data => this.props.history.push('/Home'))
            .catch(error => alert('Wrong Keyword'));
    }
    updateKeyword = () => {
        this.setState({
            query: this.queryInputRef.current.value,
            start_date: this.createdInputRef.current.value,
            end_date: this.endInputRef.current.value
        });
    }
    render() {
        return (
            <div>
                <div >
                    <form onSubmit={this.search}>
                        <div className="row">
                            <div className="col-md-3">
                                <div class="input-group">
                                    <input type="text" className="form-control" ref={this.queryInputRef} onChange={this.updateKeyword} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group">
                                    <input type="date" className="form-control" ref={this.createdInputRef} onChange={this.updateKeyword} />
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div class="input-group">
                                    <input type="date" className="form-control" ref={this.endInputRef} onChange={this.updateKeyword} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                                   </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                                   </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                                <span><button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-primary">Primary</button></span>
                            </div>
                            <div className="col-md-3">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                                   </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default ArticleSearch;