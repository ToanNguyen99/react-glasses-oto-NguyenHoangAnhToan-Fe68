import * as gameOanTuTiConstants from '../constants/gameOanTuTiConstants'

export const actChonKeoBuaBao = chonKeoBuaBao => ({
    type: gameOanTuTiConstants.CHON_KEO_BUA_BAO,
    payload: chonKeoBuaBao
})
export const actOanTuTi = oanTuTi => ({
    type: gameOanTuTiConstants.OAN_TU_TI_RA_CAI_GI,
    payload: oanTuTi
})