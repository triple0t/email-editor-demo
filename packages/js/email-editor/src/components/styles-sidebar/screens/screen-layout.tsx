import { __ } from '@wordpress/i18n';
import { DimensionsPanel } from '../panels/dimensions-panel';
import { ScreenHeader } from './screen-header';
import { recordEventOnce } from '../../../events';

export function ScreenLayout(): JSX.Element {
	recordEventOnce( 'styles_sidebar_screen_layout_opened' );
	return (
		<>
			<ScreenHeader title={ __( 'Layout', 'mailpoet' ) } />
			<DimensionsPanel />
		</>
	);
}
