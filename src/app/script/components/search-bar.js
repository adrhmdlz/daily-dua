class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .search-container {
                    justify-content: center;
                    background: #ffffff;
                    align-items: center;
                    border-radius: 50px;
                    display: flex;
                    width: 270px;
                    height: 60px;
                    margin: auto;
                }
                
                input[type='text'] {
                    font-family: 'Poppins', sans-serif;
                    text-align: center;
                    padding-left: 5px;
                    margin-left: 10px;
                    max-width: 170px;
                    font-weight: 700;
                    font-size: 16px;
                    color: #739072;
                    border: none;
                }

                input[type='text']:focus {
                    outline: none;
                }
                
                input[type='text']::-webkit-search-decoration,
                input[type='text']::-webkit-search-cancel-button,
                input[type='text']::-webkit-search-results-button,
                input[type='text']::-webkit-search-results-decoration {
                    display: none;
                }

                input[type='text']::-ms-clear {
                    display: none;
                    width: 0;
                    height: 0;
                }

                input[type='text']::-ms-reveal {
                    display: none;
                    height: 0;
                    width: 0;
                }

                ::placeholder {
                    font-weight: 700;
                    font-size: 16px;
                    color: #739072;
                }
                
                button {
                    background: none;
                    border: none;
                }

                svg {
                    transition: .2s;
                    fill: #739072;
                }

                svg:hover {
                    fill: #4f6f52;
                }
            </style>

            <div class="search-container" id="search-container">
                <input type="text" placeholder="Mau cari doa apa?" id="searchElement" />
                <button id="searchButtonElement" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </button>
            </div>
        `;
    }
}

customElements.define('search-bar', SearchBar);
