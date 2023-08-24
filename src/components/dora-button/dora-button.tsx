import { Component, Prop, Host, h } from '@stencil/core';

export type DoraButtonType = 'primary' | 'text' | 'link';

@Component({
  tag: 'dora-button',
  shadow: false,
})
export class DoraButton {
  /**
   * 类型
   */
  @Prop() type?: DoraButtonType;
  render() {
    return (
      <Host>
        <button
          class={{
            'p-lg rounded-lg border border-border': this.type === undefined,
            'p-lg rounded-lg bg-primary text-textInverse': this.type === 'primary',
            'p-lg rounded-lg hover:bg-bgHover': this.type === 'text',
            'p-lg text-primary': this.type === 'link',
          }}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
