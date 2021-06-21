import React, { Component } from 'react';
import Counter from './Counter';

class RenderingConditional extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicks: 0,
        };
    }

    click() {
        this.setState({ clicks: this.state.clicks + 1 })
    }

    render() {
        return <div>
            <h3>Renderizado condicional</h3>

            <hr />

            <button onClick={() => this.click()}>Click</button>

            <span>{this.state.clicks}</span>

            {this.state.clicks % 2 === 0 ? 'Par' : 'Impar'}

            {this.state.clicks % 2 === 0 ? <b>'Par'</b> : <i>'Impar'</i>}

            {this.state.clicks % 2 === 0 && <Counter />}
        </div>

    }
}
export default RenderingConditional;