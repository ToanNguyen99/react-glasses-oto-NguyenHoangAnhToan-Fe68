import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinGame extends Component {
    render() {
        const { soBanThang, soBanThua, soBanHoa, soBanChoi} = this.props
        return (
            <div className="pt-1">
                
                <h1 className="text-success mb-2">Số Lần Thắng: <span className="text-white">{soBanThang}</span></h1>
                <h1 className="text-danger mb-2">Số Lần Thua: <span className="text-white">{soBanThua}</span></h1>
                <h1 className="text-info mb-2">Số Lần Hòa: <span className="text-white">{soBanHoa}</span></h1>
                <h1 className="text-warning mb-2">Số Lần Chơi: <span className="text-white">{soBanChoi}</span></h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    soBanThang: state.gameOanTuTiReducer.soBanThang,
    soBanThua: state.gameOanTuTiReducer.soBanThua,
    soBanHoa: state.gameOanTuTiReducer.soBanHoa,
    soBanChoi: state.gameOanTuTiReducer.soBanChoi
})

export default connect(mapStateToProps)(ThongTinGame)
