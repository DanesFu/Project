import React from 'react';
import styles from './Footer.css'
import pic1 from './Image/18.png'
import pic2 from './Image/19.png'
import pic3 from './Image/20.png'


export default class Footer extends React.Component{
    render(){
        return(<div className={styles.footer}>
            <ul>
                <li><ul>
                        <li><img src={pic2} alt='' /></li>
                        <li><span>首页</span></li>
                    </ul>
                </li>
                <li><img src={pic1} alt='' /></li>
                <li><ul>
                        <li><img src={pic3} alt='' /></li>
                        <li><span>我的</span></li>
                    </ul></li>
            </ul>
        </div>)
    }
}