import React from 'react'
import {Carousel, WingBlank,Icon} from 'antd-mobile'
import styles from  './Policy.css'


export default class Teacher extends React.Component{
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
                            <h3>专家导师</h3>
                        </li>
                        <li style={{marginTop:'0.5rem',marginBottom:'0.8rem'}}><span>与大咖面对面</span></li>
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