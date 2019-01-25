import React from 'react'
import {Carousel, WingBlank,Icon} from 'antd-mobile'
import styles from  './Policy.css'


export default class Policy extends React.Component{
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
                            <h3>政策对接</h3>
                        </li>
                        <li style={{marginTop:'0.5rem',marginBottom:'0.8rem'}}><span>帮你一键智能匹配轻松申请政策</span></li>
                    </ul>
                    <ul className={styles.titRight}>
                        <li><Icon type='right' styles={{color:'#A4A3A3'}} /></li>
                    </ul>
                </div>
                <WingBlank style={{clear:'both'}}>
                    <Carousel
                    autoplay={false}
                    infinite
                    slideWidth={0.7}
                    cellSpacing={10}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
            </WingBlank>
            </div>)
    }
}