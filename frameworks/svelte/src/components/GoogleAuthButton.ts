/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from 'firebaseui';


interface GoogleAuthButtonProps {
  
}

interface GoogleAuthButtonEvents {
  
}

interface GoogleAuthButtonSlots {
  default: any
}
  
/* generated by Svelte v3.34.0 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let google_auth_button;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			google_auth_button = element("google-auth-button");
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			insert(target, google_auth_button, anchor);

			if (default_slot) {
				default_slot.m(google_auth_button, null);
			}

			/*google_auth_button_binding*/ ctx[4](google_auth_button);
			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(google_auth_button);
			if (default_slot) default_slot.d(detaching);
			/*google_auth_button_binding*/ ctx[4](null);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(0, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	function google_auth_button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(0, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	return [__ref, getWebComponent, $$scope, slots, google_auth_button_binding];
}

class GoogleAuthButton extends SvelteComponent {
  $$prop_def: GoogleAuthButtonProps;
  $$events_def: GoogleAuthButtonEvents;
  $$slot_def: GoogleAuthButtonSlots;

  $on<K extends keyof GoogleAuthButtonEvents>(type: K, callback: (e: GoogleAuthButtonEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<GoogleAuthButtonProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { getWebComponent: 1 });
	}

	get getWebComponent(): HTMLGoogleAuthButtonElement | undefined {
		return this.$$.ctx[1];
	}
}

export default GoogleAuthButton;