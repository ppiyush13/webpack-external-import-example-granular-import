import React, { Component } from "react";
import ReactDOM from "react-dom";
import { ExternalComponent, corsImport, getChunkPath, importDependenciesOf, importWithDependencies } from 'webpack-external-import'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleUrl: null,
            manifestLoaded: false,
            loaded: false,
        };
    }

    componentDidMount() {
        import(/* webpackIgnore:true*/ 'http://localhost:7001/importManifest.js').then(() => {
            this.setState({ manifestLoaded: true });
            importWithDependencies(/* webpackIgnore:true*/ 'http://localhost:7001/', 'App1Manifest', 'App1.js').then(() => {
                console.log('got module, will render it');
                this.setState({ loaded: true });
            });
        });
    }

    renderDynamic() {
        const { loaded } = this.state;
        if (!loaded) return null;

        const app1 = __webpack_require__('App1')
        return app1.default();
    }

    render() {
        const { manifestLoaded, titleUrl } = this.state;
        if (!manifestLoaded) {
            return 'Loading...';
        }


        return <div>
            <div>Simple div</div>
            {
                this.renderDynamic()
            }
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));