import { deleteOrderAcCr } from '../../redux/toursReducer';
import Header from './Header'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        toursPage: state.toursPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteOrder: (id) => {
            dispatch(deleteOrderAcCr(id));
        }
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer