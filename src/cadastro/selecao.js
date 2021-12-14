class selecao extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'cliente'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Escolha sua função' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Escolha sua Funação:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="cliente">Cliente</option>
              <option value="funcionario">Funcionário</option>
              <option value="Fornecedor">Coco</option>
              <option value="Veículo">Manga</option>
            </select>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }