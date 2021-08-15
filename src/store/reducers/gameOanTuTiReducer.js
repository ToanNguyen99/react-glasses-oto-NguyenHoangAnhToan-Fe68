import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants'
const initialState = {
    player: '',
    computer: '',
    soBanThang: 0,
    soBanChoi: 0,
    mangOanTuTi: [{
            name: "bua",
            hinhAnh: "./images/game-oantuti/keo.png"
        },
        {
            name: "keo",
            hinhAnh: "./images/game-oantuti/bua.png"
        },
        {
            name: "bao",
            hinhAnh: "./images/game-oantuti/bao.png"
        }
    ]
}

const gameOanTuTiReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case gameOanTuTiConstants.CHON_KEO_BUA_BAO:
            state.player = payload;
            return {...state };
        case gameOanTuTiConstants.OAN_TU_TI_RA_CAI_GI:
            // tang so lan choi len 1 khi click
            state.soBanChoi += 1;

            // random keo bua bao computer
            const soNgauNhien = Math.floor(Math.random() * 3) + 1;

            if (soNgauNhien === 1) {
                state.computer = 'keo'
            } else if (soNgauNhien === 2) {
                state.computer = 'bua'
            } else {
                state.computer = 'bao'
            }
            // tinh so ban thang
            if ((state.player === 'keo' && state.computer === 'bao') || (state.player === 'bua' && state.computer === 'keo') || (state.player === 'bao' && state.computer === 'bua')) {
                state.soBanThang += 1;
            }
            return {...state };
        default:
            return state;
    }
}
export default gameOanTuTiReducer;