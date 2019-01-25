import React from 'react'
import {WingBlank,Icon} from 'antd-mobile'
import styles from  './Policy.css'
import pic from './Image/8.png'


export default class Activity extends React.Component{
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
      }
      componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render(){
        return(<div> 
                 <div >
                    <ul className={styles.tit}>
                        <li>
                            <h3>精彩活动</h3>
                        </li>
                        <li style={{marginTop:'0.5rem',marginBottom:'0.8rem'}}><span>帮你快速累积人脉，站在前沿</span></li>
                    </ul>
                    <ul className={styles.titRight}>
                        <li><Icon type='right' styles={{color:'#A4A3A3'}} /></li>
                    </ul>
                </div>
                <WingBlank style={{clear:'both'}}>
                   <div className={styles.content}>
                       <div>
                           <ul>
                               <li><img src={pic} alt='' /></li>
                               <li><span>2018中国投资人未来峰会</span></li>
                               <li><span>北京</span><span>9月29日更新</span></li>
                           </ul>
                           <ul>
                               <li><img src={pic} alt='' /></li>
                               <li><span>2018中国投资人未来峰会</span></li>
                               <li><span>北京</span><span>9月29日更新</span></li>
                           </ul>
                           <ul>
                               <li><img src={pic} alt='' /></li>
                               <li><span>2018中国投资人未来峰会</span></li>
                               <li><span>北京</span><span>9月29日更新</span></li>
                           </ul>
                           <ul>
                               <li><img src={pic} alt='' /></li>
                               <li><span>2018中国投资人未来峰会</span></li>
                               <li><span>北京</span><span>9月29日更新</span></li>
                           </ul>
                       </div>
                   </div>
                </WingBlank>
            </div>)
    }
}