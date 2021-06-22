import { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', surnames: '' };
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }, () => console.log('Actualizado', this.state))
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(this.state)
    }

    render() {
        return (
            <>
                <h3>Renderizado condicional</h3>

                <hr />

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            placeholder="Introduce nombre..."
                            type="text"
                            name="name"
                            value={this.state.name}
                            // onChange={this.handleChangeName}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Surnames:
                        <input
                            placeholder="Introduce apellidos..."
                            type="text"
                            name="surnames"
                            value={this.state.surnames}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default NameForm;