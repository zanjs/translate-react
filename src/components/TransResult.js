import React, { Component } from 'react';

export default class TransResult extends Component {
    render(){
        const { result,lang } = this.props

        return(
            <div>
                {result && <section className="text-box">
                    <div className="h2">翻译结果：</div>
                    <div className="result" dangerouslySetInnerHTML={{__html: result}}></div>
                    <div className="h2">您输入语言国家是：</div>
                    <div className="result">{lang}</div>
                    </section>
                }
            </div>
        )
    }
}