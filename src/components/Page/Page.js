import React, { Component } from 'react';
import client from '../../imports/sanityclient';
// import '../../css/skeleton.css';
import './Page.css';

const imageUrlBuilder = require('@sanity/image-url');
const builder = imageUrlBuilder(client);
function urlFor(source) {
    return builder.image(source)
  }

const blocksToHtml = require('@sanity/block-content-to-html');
const h = blocksToHtml.h
 const serializers = {
  types: {
    code: props => (
      h('pre', {className: props.node.language},
        h('code', props.node.code)
      )
    )
  }
}

export default class Page extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    componentDidMount(){
        console.log(this.props.location.pathname);

        client
            .fetch(`*[_type == "post" && slug.current == "${this.props.location.pathname}"][0]`)
            .then((res) => {
                console.log(res)
                if(res.mainImage === undefined || res.mainImage.asset === undefined){
                    this.setState({mainImage: "", padding: 0, color: "#222", marginTop: 30})
                } else {
                    this.setState({
                        mainImage: urlFor(res.mainImage).width(1800).url(),
                        padding: 75,
                        color: "#fff",
                        marginTop: '30px'
                    });
                }
                const el = blocksToHtml({
                    blocks: res.body,
                    serializers: serializers,
                    imageOptions: { h: 250, w: 100 },
                    projectId: 'y05gym0u',
                    dataset: 'production',
                })
                this.refs.page_title.innerHTML = res.title;
                this.refs.pageContent.innerHTML = el;

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return(
            <div>
                <div style={{backgroundImage: `url(${this.state.mainImage})`, color: this.state.color, height: this.state.height, backgroundPosition: 'center', backgroundSize: 'cover', padding: this.state.padding, marginBottom: 30}}>
                    <p ref="page_title" style={{fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', paddingTop: this.state.marginTop }}></p>
                </div>
                <div className="container page">
                    <div className="row">
                        <div className="eight columns offset-by-two pageContent" ref="pageContent">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}