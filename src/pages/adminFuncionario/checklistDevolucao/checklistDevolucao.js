


function CheckListDevolucao() {
    let itens = [{ 'checkbox1': false }, { 'checkbox2': false }, { 'checkbox3': false }]

    const aproveChecklist = () => {
        let aprovacao = true

        itens.forEach((item) => {
            let value = item.value
            if (value === false) {
                aprovacao = false
            }
        })

        if (!aprovacao)
            alert('Veículo será enviado para manutenção, revisar valores de locação!')
    }

    const HandleChange = (e) => {
        const selectedCheckbox = e.target
        const checkboxKey = selectedCheckbox.name
        const isChecked = selectedCheckbox.checked

        console.log(itens)

        let checked = itens.find(element => element[checkboxKey] == checkboxKey)

        console.log(checked)

        checked.value = isChecked
    };

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    name={`checkbox1`}
                    onChange={HandleChange}
                />
                <label for="element" style={{ fontSize: 35 }}>
                    {"Veículo apresenta avarias externas?"}
                </label>
            </div>


            <div>
                <input
                    type="checkbox"
                    name={`checkbox2`}
                    onChange={HandleChange}
                />
                <label for="element2" style={{ fontSize: 35 }}>
                    {"Veículo apresenta barulho estranho ou sinais de mal funcionamento?"}
                </label>
            </div>

            <div>
                <input
                    type="checkbox"
                    name={`checkbox3`}
                    onChange={HandleChange}
                />
                <label for="element3" style={{ fontSize: 35 }}>
                    {"Veículo recebeu alguma multa no período de locação?"}
                </label>
            </div>

            <div>
                <button onClick={aproveChecklist}>Finalizar Checklist</button>
            </div>
        </div>
    )

}


export default CheckListDevolucao;