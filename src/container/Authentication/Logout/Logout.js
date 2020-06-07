import React ,{Component} from "react";
import {connect} from 'react-redux'
import * as actions from '../../../store/actions/index';
import axios from "axios";
import { withRouter } from "react-router-dom";



class Logout extends Component {
    componentDidMount(){
        console.log(this.props.token);
        axios({
            method: 'get',
            url: '/doLogout?'
            ,
            headers: {
              'Authorization': `bearer ${this.props.token}`}
          })
          .then((response)=> {
            this.props.onLogout();
            this.props.history.push("/");
      })
      .catch((error)=>{
            console.log(error.response);
        });
    }

    state = { 
        isLoading:true
     }
    render() { 
        return (
            <div>
            </div>
          );
    }
}

const mapStateToProps = (state) => {      
    return {
        token: state.login.token
    }
  }

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(actions.logoutSuccess())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Logout));