import React, { Component } from 'react'
import dataGlasses from './dataGlasses.json'
export default class ChangeGlasses extends Component {
   
    state = {
        glassesItem: 0,
    }

    handleChangeGlasses = glassesItem => {
        this.setState({
            glassesItem,
        })
    }
    render() {
        const { glassesItem } = this.state;
        return (
            <div className="classesBox text-center" style={{background: "url('./images/glasses/background.jpg')", backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", padding: "40px 0"}}>
                <div className="container" style={{maxWidth: "992px"}}>
                    <div className="girlModal my-5" style={{position: "relative"}}>
                        <div className="imgModel" style={{position: "relative" , display: "inline-block"} }>
                            <img src="./images/glasses/model.jpg" width="200px" alt="" />
                            <div className="infoGlasses" style={{position: "absolute", bottom: "0", left: "0", width: "100%", background: "rgba(255, 165, 0, 0.3)"}}>
                                <div className="titleGlasses">
                                    <h3 style={{fontSize: "14px", textAlign: "left", paddingLeft: "5px", marginBottom: "0"}}>{`${dataGlasses[glassesItem].name}`}</h3>
                                </div>
                                <div className="descGlasses">
                                    <p style={{fontSize: "12px", textAlign: "left", paddingLeft: "5px", marginBottom: "0"}}>{`${dataGlasses[glassesItem].desc}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="glassChange" style={{position: "absolute", top: "33%", left: "50%", transform: "translate(-50%, -50%)"}}>
                            <img src={`${dataGlasses[glassesItem].url}`} width="100px" alt="" style={{ opacity: ".7" }}/>
                            
                        </div>
                    </div>
                    <div className="glassModel mt-5" style={{background: "#fff", border: "1px solid #000", padding: "10px 20px", marginTop: "90px", boxShadow: "0 0 15px #888888"}}>
                        <div className="row" >
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(0)}>
                                    <img src='./images/glasses/g1.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(1)}>
                                    <img src='./images/glasses/g2.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(2)}>
                                    <img src='./images/glasses/g3.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(3)}>
                                    <img src='./images/glasses/g4.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(4)}>
                                    <img src='./images/glasses/g5.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(5)}>
                                    <img src='./images/glasses/g6.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(6)}>
                                    <img src='./images/glasses/g7.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(7)}>
                                    <img src='./images/glasses/g8.jpg' width="100%"  alt="" />
                                </div>
                            </div>
                            <div className="col-2 d-flex align-items-center" >
                                <div className="glassesItem" style={{cursor: "pointer"}}  onClick={() => this.handleChangeGlasses(8)}>
                                    <img src='./images/glasses/g9.jpg' width="100%"  alt="" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
        
    }
}
