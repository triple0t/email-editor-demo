import { doAction } from '@wordpress/hooks';
import {
	EMAIL_STRING,
	dispatcher,
	isEventTrackingEnabled,
} from './event-pipeline';

const eventListenerHandler = ( eventData ) => {
	doAction( 'mailpoet_email_editor_events', eventData.detail );
};

const initEventCollector = () => {
	if ( ! isEventTrackingEnabled ) {
		return;
	}

	dispatcher.addEventListener( EMAIL_STRING, eventListenerHandler );
};

window.addEventListener( 'unload', function () {
	if ( ! isEventTrackingEnabled ) {
		return;
	}

	dispatcher.removeEventListener( EMAIL_STRING, eventListenerHandler );
} );

export { initEventCollector };
