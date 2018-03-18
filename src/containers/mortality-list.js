import React, {Component} from "react"
import MortalityListItem from "../components/mortality-list-item"
import {getCountries, getMortality} from "../actions"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

class MortalityList extends Component {
    constructor(props){
        super(props);
        this.state = {selectedCountry: this.props.defaultCountry}
    }

    componentWillMount(){
        this.props.getMortality(this.state.selectedCountry)
    }

    renderMortalities(){
        const {mortalities} = this.props;
        return mortalities.map((data) =>{
            return <MortalityListItem key={data.country} mortality={data}/>
        })
    }

    render(){
        console.log(this.props.mortalities);
        return (
            <div >
                <table className={"table"}>
                    <thead>
                        <tr>
                            <th> Pays </th>
                            <th className={"col-md-6"}> Hommes</th>
                            <th className={"col-md-6"}> Femmes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderMortalities()}
                    </tbody>
                </table>

            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        mortalities: state.mortality
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getMortality}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MortalityList)