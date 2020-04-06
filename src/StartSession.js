import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login, api, loginAction, logoutAction, singIn, singOut } from './loginActions';

export class StartSession extends Component {
  static propTypes = {
    singIn: PropTypes.func,
    singOut: PropTypes.func,
    isLogged: PropTypes.bool
  }

  handleClickSingIn = () => {
    this.props.dispatch(singIn())
  }

  handleClickSingOut = () => {
    this.props.dispatch(singOut())
  }

  render() {
    const { isLogged } = this.props

    console.log('this.props', this.props)

    return (
      <div>
        {!isLogged
          ? <button onClick={this.handleClickSingIn}>Iniciar Session</button>
          : <React.Fragment>
            Está logueado <button onClick={this.handleClickSingOut}>Cerrar Session</button>
          </React.Fragment>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged
})

// const mapDispatchToProps = {
//   singIn: singIn,
//   singOut: singOut
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     singIn: () => {
//       dispatch(loginAction("Boruska"))
//       dispatch(logoutAction())
//     },
//     singOut: () => {
//       dispatch(logoutAction())
//     }
//   }
// }

export default connect(mapStateToProps)(StartSession)
