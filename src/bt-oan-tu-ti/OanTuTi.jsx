import React, { Component } from 'react'
import './buble.css'
import KeoBuaBao from './KeoBuaBao'
import ThongTinGame from './ThongTinGame'
import { connect } from 'react-redux'
import { actOanTuTi } from '../store/action/gameOanTuTiAction'
class OanTuTi extends Component {
    render() {
        const { player, computer, oanTuTi } = this.props
        return (
            <div className="game-oantuti">
                
                <div className="container-fluid">
                    <div className="row text-center pt-5 d-flex align-items-center">
                        <div className="col-3">
                            <div className="player">
                                <div className=" speech-bubble mb-3">
                                    <img src={`./images/game-oantuti/${player}.png`} width="50px" alt="" />
                                </div>
                                <img src="./images/game-oantuti/player.png" width="150px" alt="" />
                            </div>
                            <KeoBuaBao/>
                        </div>
                        <div className="col-6">
                            <h1 className="text-center pt-2 pb-5 text-warning">I LOVE YOU 3000!</h1>
                            <ThongTinGame/>
                            
                        </div>
                        <div className="col-3">
                            <div className="player player-computer">
                                <div className=" speech-bubble mb-3">
                                    <img src={`./images/game-oantuti/${computer}.png`} width="50px" alt="" />
                                </div>
                                <img src="./images/game-oantuti/playerComputer.png" width="150px"  alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-oantuti text-center pt-5">
                        <button className="btn btn-danger mt-4 py-2" onClick={() => oanTuTi()}>Oẳn Tù Tì Ra Cái Gì</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    player: state.gameOanTuTiReducer.player,
    computer: state.gameOanTuTiReducer.computer
})

const mapDispatchToProps = dispatch => ({
    oanTuTi: oanTuTi => {
        dispatch(actOanTuTi(oanTuTi))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OanTuTi)