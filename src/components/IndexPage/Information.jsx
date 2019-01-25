import React from 'react'
import {Icon} from 'antd-mobile'
import styles from  './Information.css'
import pic1 from './Image/9.png'


export default class Information extends React.Component{
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
                            <h3>双创资讯</h3>
                        </li>
                        <li style={{marginTop:'0.5rem',marginBottom:'0.8rem'}}><span>资讯极速播报，让你跑的更快</span></li>
                    </ul>
                    <ul className={styles.titRight}>
                        <li><Icon type='right' styles={{color:'#A4A3A3'}} /></li>
                    </ul>
                </div>
                <div className={styles.banner}>
                    <img src={pic1} alt='' />
                    <ul className={styles.text}>
                        <li>“蜻蜓计划”（D）</li>
                        <li>2018阿里校友创业黄埔榜暨新年酒会</li>
                        <li>9月29日更新</li>
                    </ul>
                </div>
                <div className={styles.banner}>
                    <img src={pic1} alt='' />
                    <ul className={styles.text}>
                        <li>“蜻蜓计划”（D）</li>
                        <li>2018阿里校友创业黄埔榜暨新年酒会</li>
                        <li>9月29日更新</li>
                    </ul>
                </div>
                <div className={styles.bottom}>
                    <p>沃土教育</p>
                </div>
           
            </div>)
    }
}