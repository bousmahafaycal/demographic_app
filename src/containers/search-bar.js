import React, { Component } from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import  {getCountries, getMortality} from "../actions/index";

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {selectedCountry: this.props.defaultCountry}
    }

    renderSelectBox(){
        const {countries} = this.props;
        if (countries){
            return (
                <select className={"col-lg-12 form-control "} value={this.state.selectedCountry} onChange={(e) => this.search(e)}>
                {
                    countries.map((country) => {
                       return <option key={country} value={country}> {country}</option>
                    })
                }
                </select>
            )
        }else {
            <div>No country found</div>
        }
    }

    componentWillMount(){
        this.props.getCountries()
    }

    search(e){
        this.setState({selectedCountry: e.target.value}, function () {
            this.props.getMortality(this.state.selectedCountry)
        })
    }

    render() {
        return (
            <div className={"search-bar form-group"}>
                {this.renderSelectBox()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCountries, getMortality}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchBar)