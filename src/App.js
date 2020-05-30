import hyperactiv from 'hyperactiv'
const { observe } = hyperactiv
import { html } from 'lit-html'
import { repeat } from 'lit-html/directives/repeat'

const state = observe(
    {
        count: 1,
        items: [1, 2, 3],
        addOne() {
            this.count++
        },
        addItem() {
            this.items.push(Math.max.apply(null, this.items) + 1)
        }
    },
    { bind: true }
)

export default props => html`
    <h1>Counter</h1>
    <p>
        count: ${state.count}
    </p>
    <button @click=${state.addOne}>+1</button>

    <hr />

    <h1>Expecting to see a list of items below</h1>
    <button @click=${state.addItem}>Add an item</button>

    <p>
        ${repeat(state.items, value => html` <li>Item ${value}</li> `)}
    </p>
`
