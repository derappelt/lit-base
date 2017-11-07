import {html, render} from '../node_modules/lit-html/lit-html.js';

export default (base) => class extends base {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  render(){/* implement html function */}

  async invalidate(){
    if(!this.needsRender){
      this.needsRender = true;
      await 0;
      this.needsRender = false;
      render(this.render(), this.shadowRoot);
    }
  }
}