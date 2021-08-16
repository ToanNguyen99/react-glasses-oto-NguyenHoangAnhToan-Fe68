import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants'
const initialState = {
    player: '',
    computer: '',
    soBanThang: 0,
    soBanHoa: 0,
    soBanChoi: 0,
    soBanThua: 0,
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

            // thuật toán để check thắng hòa thua như sau:
            // tạo ra 1 list [keo,bua,bao]; mỗi lần người dùng chọn hoặc máy chọn thì dùng hàm findIndex để lấy index ra
            // để ý thấy cái mảng này, thì index của nó có quy luật thắng thua như sau
            // mình chọn cái gì bạn chọn đúng cái đó thì hòa, cái này dễ
            // mình chọn bất cứ cái gì, nếu bạn chọn sau mình 1 index, mình thua ("bua" thắng "keo", "bao" thang "bua"),
            // hoặc bạn chọn trước mình 2 đơn vị mình cũng thua(mình chọn "bao" bạn chọn "keo")
            // if(indexYou===indexMe){
            //     result ="DRAW";
            // }else if(indexMe===indexYou-1|| indexMe === indexYou+2){
            //     result ="LOSE";
            // }else{
            //     result ="WIN";
            // }

            if (soNgauNhien === 1) { // e có thể tham khảo thuật toán bên trên để bài làm ngắn gọn hơn
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
            // tinh so lan Hoa
            if ((state.player === 'keo' && state.computer === 'keo') || (state.player === 'bua' && state.computer === 'bua') || (state.player === 'bao' && state.computer === 'bao')) {
                state.soBanHoa += 1;
            }
            // tinh so ban thua
            if ((state.player === 'keo' && state.computer === 'bua') || (state.player === 'bua' && state.computer === 'bao') || (state.player === 'bao' && state.computer === 'keo')) {
                state.soBanThua += 1;
            }
            return {...state };
        default:
            return state;
    }
}
export default gameOanTuTiReducer;