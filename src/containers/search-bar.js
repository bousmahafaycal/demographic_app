import React, { Component } from 'react'
import { connect } from "react-redux"
import {bindActionCreators} from "redux"
import  {getCountries} from "../actions/index";

class SearchBar extends Component {

    renderSelectBox(){
        const {countries} = this.props
        if (countries){
            return (
                <select className={"col-lg-12 input-group"}>
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
    render() {
        return <div>{this.renderSelectBox()}</div>
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCountries}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (SearchBar)