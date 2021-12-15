import './plogin.css';

function plogin(){
    return (
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Cliente</option>
        <option>Funcionario</option>
        <option>Fornecedor</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
  <button type="submit">
            Cadastrar
        </button>
</div>

    )
};
export default plogin;