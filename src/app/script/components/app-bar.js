class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                h1 {
                    font-weight: 700;
                    font-size: 25px;
                }
                
                p {
                    font-weight: 500;
                    font-size: 16px;
                }
            </style>

            <h1>Kumpulan Doa-doa Harian</h1>
            <p>Assalamualaikum Akhi/Ukhti</p>
        `;
    }
}

customElements.define('app-bar', AppBar);
