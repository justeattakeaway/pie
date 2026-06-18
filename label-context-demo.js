import { LitElement, html, css, nothing } from 'lit';
import { createContext, ContextProvider, consume } from '@lit/context';

/* ─────────────────────────────────────────────────────────────────────────
 * Headless behaviour: a reactive controller that any host component can use.
 * It owns the context provider and the field state — but renders nothing and
 * has no opinion about markup. This is what makes the pattern design-agnostic:
 * field-label, interactive-card, a radio tile, etc. all reuse this and render
 * whatever they like.
 *
 * Context shape provided to descendants:
 *   id            – generated id the control applies to its own input
 *   labelText     – accessible name text (applied as aria-label by the control,
 *                   since aria-labelledby IDREFs can't cross shadow roots)
 *   registerFocus – control calls this to hand the host a focus/activate fn
 * ──────────────────────────────────────────────────────────────────────── */
class FieldController {
  // The shared context key belongs to the controller that provides it — no
  // free-floating module state. Consumers reference FieldController.context.
  static context = createContext('field');
  static #nextId = 0;

  #activate = null;

  constructor(host) {
    this.host = host;
    this.value = {
      id: `field-${++FieldController.#nextId}`,
      labelText: '',
      registerFocus: (fn) => { this.#activate = fn; },
    };
    this.provider = new ContextProvider(host, {
      context: FieldController.context,
      initialValue: this.value,
    });
  }

  /** Update the accessible name; notifies subscribed consumers. */
  setLabelText(text) {
    if (text === this.value.labelText) return;
    this.value = { ...this.value, labelText: text };
    this.provider.setValue(this.value);
  }

  /** Forward a host-level click to the slotted control. */
  activate() {
    this.#activate?.();
  }
}

/** Flatten the text content of a slot's assigned nodes. */
const slottedText = (slot) =>
  slot.assignedNodes({ flatten: true }).map((n) => n.textContent).join(' ').trim();

/* ─────────────────────────────────────────────────────────────────────────
 * Host #1 — <field-label>: minimal inline label + control.
 * ──────────────────────────────────────────────────────────────────────── */
class FieldLabel extends LitElement {
  field = new FieldController(this);

  render() {
    return html`
      <span @click=${() => this.field.activate()}>
        <slot name="label" @slotchange=${(e) => this.field.setLabelText(slottedText(e.target))}></slot>
      </span>
      <slot></slot>
    `;
  }
}
customElements.define('field-label', FieldLabel);

/* ─────────────────────────────────────────────────────────────────────────
 * Host #2 — <interactive-card>: completely different design, SAME behaviour.
 * The whole card is the activation surface; clicking anywhere toggles the
 * slotted control. It reuses FieldController without reimplementing anything.
 * ──────────────────────────────────────────────────────────────────────── */
class InteractiveCard extends LitElement {
  static styles = css`
    .card {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      cursor: pointer;
    }
    .card:hover { border-color: #888; }
    .text { display: flex; flex-direction: column; }
    .title { font-weight: 600; }
    .desc { color: #666; font-size: 0.875rem; }
  `;

  field = new FieldController(this);

  render() {
    return html`
      <div class="card" @click=${() => this.field.activate()}>
        <slot></slot>
        <span class="text">
          <span class="title">
            <slot name="label" @slotchange=${(e) => this.field.setLabelText(slottedText(e.target))}></slot>
          </span>
          <span class="desc"><slot name="description"></slot></span>
        </span>
      </div>
    `;
  }
}
customElements.define('interactive-card', InteractiveCard);

/* ─────────────────────────────────────────────────────────────────────────
 * The consuming control. Note it is identical regardless of which host wraps
 * it — that's the whole point. It just consumes the field context.
 * ──────────────────────────────────────────────────────────────────────── */
class PrimitiveCheckbox extends LitElement {
  @consume({ context: FieldController.context, subscribe: true })
  field;

  updated() {
    // Hand the host a way to activate this control on a host-level click.
    this.field?.registerFocus?.(() => {
      const input = this.renderRoot.querySelector('input');
      input?.focus();
      input?.click();
    });
  }

  render() {
    return html`
      <input
        type="checkbox"
        id=${this.field?.id ?? ''}
        aria-label=${this.field?.labelText || nothing}
      />
    `;
  }
}
customElements.define('primitive-checkbox', PrimitiveCheckbox);

/*
  Demo markup — same control, two designs:

  <field-label>
    <span slot="label">Accept terms and conditions</span>
    <primitive-checkbox></primitive-checkbox>
  </field-label>

  <interactive-card>
    <primitive-checkbox></primitive-checkbox>
    <span slot="label">Express delivery</span>
    <span slot="description">Get it within the hour for a small fee</span>
  </interactive-card>
*/
