import React, { Component } from 'react'
import './buble.css'
import { connect } from 'react-redux'
import { actChonKeoBuaBao } from '../store/action/gameOanTuTiAction'

class KeoBuaBao extends Component {
    
    render() {
        const { player, chonKeoBuaBao } = this.props
        console.log(player);
        return (
            <div className="KeoBuaBao d-flex align-items-center justify-content-center">
                <button className={`${player==='keo' && "keobuabaoSelected"}`} onClick={() => chonKeoBuaBao('keo')}>
                    <img src="./images/game-oantuti/keo.png" width="50px"  alt="" />
                </button>
                <button className={`${player==='bua' && "keobuabaoSelected"}`} onClick={() => chonKeoBuaBao('bua')}>
                    <img src="./images/game-oantuti/bua.png" width="50px"  alt="" />
                </button>
                <button className={`${player==='bao' && "keobuabaoSelected"}`} onClick={() => chonKeoBuaBao('bao')}>
                    <img src="./images/game-oantuti/bao.png" width="50px"  alt="" />
                </button>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    player: state.gameOanTuTiReducer.player
})

const mapDispatchToProps = dispatch => ({
    chonKeoBuaBao: (chonKeoBuaBao) => {
        dispatch(actChonKeoBuaBao(chonKeoBuaBao))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(KeoBuaBao)
