import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinGame extends Component {
    render() {
        const { soBanThang, soBanChoi } = this.props
        return (
            <div className="pt-1">
                
                <h1 className="text-success">Số Bàn Thắng: <span className="text-white">{soBanThang}</span></h1>
                <h1 className="text-success">Số Bàn Chơi: <span className="text-white">{soBanChoi}</span></h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    soBanThang: state.gameOanTuTiReducer.soBanThang,
    soBanChoi: state.gameOanTuTiReducer.soBanChoi
})

export default connect(mapStateToProps)(ThongTinGame)
