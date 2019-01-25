import { } from 'antd-mobile';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import React from 'react';
import styles from './InputBox.css'
import pic1 from './Image/14.png'
import pic2 from './Image/10.png'
import pic3 from './Image/11.png'
import pic4 from './Image/12.png'
import pic5 from './Image/13.png'
import pic6 from './Image/17.png'
import pic7 from './Image/16.png'
import pic8 from './Image/15.png'
import pic9 from './Image/1.png'

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        let date;
        
        if(this.props.date) {
            date = new Date(this.props.date);
        } else {
            date = new Date();
        }
        console.log(this.props)
        this.state = {
            text: this.props.text,
            todo: this.props.todo,
            notTodo: this.props.notTodo,
            date: date,
            files: [],
            picture: null,
            isShowModal: false
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className={styles.bannerWarp}>
                    <div className={styles.banner}></div>
                </div> 
                <div className={styles.title}><p>让创业者更懂创业</p></div>
                <div className={styles.pic}>
                    <ul className={styles.icon}>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic1} alt='' />
                              <p>政策</p>  
                            </div>   
                        </li>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic2} alt='' />
                              <p>课程</p>  
                            </div> 
                        </li>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic3} alt='' />
                              <p>直播</p>  
                            </div> 
                        </li>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic4} alt='' />
                              <p>活动</p>  
                            </div> 
                        </li>
                    </ul>
                    <ul className={styles.icon2}>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic5} alt='' />
                              <p>导师</p>  
                            </div> 
                        </li>
                        <li>
                             <div style={{textAlign:'center'}}>
                              <img src={pic6} alt='' />
                              <p>融资</p>  
                            </div> 
                        </li>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic7} alt='' />
                              <p>服务</p>  
                            </div> 
                        </li>
                        <li>
                            <div style={{textAlign:'center'}}>
                              <img src={pic8} alt='' />
                              <p>资讯</p>  
                            </div> 
                        </li>
                    </ul>
                </div>
               <div className={styles.ai}>
                    <img src={pic9} alt='' />
                    <p><span>政策申请直通车</span><span>一键智能匹配</span></p>
               </div>
            </React.Fragment>
        )
    }

    onSubmit() {
        if(!(this.state.text && this.state.picture)) {
            this.setState({isShowModal: true});
            return ;
        }

        const { text, todo, notTodo, date, picture } = this.state;

        this.props.dispatch({
            type: 'calendar/submit',
            payload: { text, todo, notTodo, picture, date: date.getTime() }
        });

        this.props.dispatch(routerRedux.push('/canvas'));
    }
}

function mapStateToProps(state) {
    return state.calendar;
}


export default connect(mapStateToProps)(InputBox);
