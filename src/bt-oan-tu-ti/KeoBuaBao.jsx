import React, { Component } from 'react';
import './buble.css';
import { connect } from 'react-redux';
import { actChonKeoBuaBao } from '../store/action/gameOanTuTiAction';

class KeoBuaBao extends Component {
    render() {
        const { OTT, chonKeoBuaBao } = this.props;
        const { player, mangOanTuTi } = OTT;
        return (
            <div className="KeoBuaBao d-flex align-items-center justify-content-center">
                {mangOanTuTi.map((item, key) => (
                    <button
                        key={`slected ${key}`}
                        className={`${player === item.name && 'keobuabaoSelected'}`}
                        onClick={() => chonKeoBuaBao(item.name)}
                    >
                        <img src={item.hinhAnh} width="50px" alt="" />
                    </button>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    OTT: state.gameOanTuTiReducer,
});

const mapDispatchToProps = (dispatch) => ({
    chonKeoBuaBao: (chonKeoBuaBao) => {
        dispatch(actChonKeoBuaBao(chonKeoBuaBao));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(KeoBuaBao);
