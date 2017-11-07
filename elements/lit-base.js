import {html, render} from '../node_modules/lit-html/lit-html.js';
import LitRender from './LitRender.js';

export class LitBase extends LitRender(HTMLElement){
  constructor(){
    super();
    this.str = 'lit-html';
    setTimeout(()=>{
      this.str = 'lit-html is awesome';
    },5000);
  }

  get str() { return this._str; }
  set str(v) { this._str = v; this.invalidate(); }

  render(){
    return html`<div>${this.str}!</div>`;
  }
}
export default function register(){
  customElements.define('lit-base', LitBase);
}