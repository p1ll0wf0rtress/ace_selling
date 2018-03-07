import React, { Component } from 'react';
const sanityClient = require('@sanity/client');
const blocksToHtml = require('@sanity/block-content-to-html');

const client = sanityClient({
  projectId: 'y05gym0u',
  dataset: 'production',
  useCdn: false
})

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
        console.log(this.props.route.pathname);

        client
            .fetch(`*[_type == "post" && title == "${this.props.route.pathname}"][0]`)
            .then((res) => {
                const el = blocksToHtml({
                    blocks: res.body,
                    serializers: serializers
                })

                this.refs.pageContent.innerHTML = el;

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render(){
        return(
            <div ref="pageContent"></div>
        )
    }
}