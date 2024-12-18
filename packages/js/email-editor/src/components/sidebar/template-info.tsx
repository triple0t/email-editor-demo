import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { Icon, layout } from '@wordpress/icons';
import { storeName } from '../../store';

export function TemplateInfo() {
	const template = useSelect(
		( select ) => select( storeName ).getCurrentTemplate(),
		[]
	);

	return (
		<Panel className="mailpoet-email-sidebar__email-type-info">
			<PanelBody>
				<PanelRow>
					<span className="mailpoet-email-type-info__icon">
						<Icon icon={ layout } />
					</span>
					<div className="mailpoet-email-type-info__content">
						<h2>
							{ /* @ts-expect-error Todo template type is not defined */ }
							{ template?.title || __( 'Template', 'mailpoet' ) }
						</h2>
						{ /* @ts-expect-error Todo template type is not defined */ }
						<span>{ template?.description || '' }</span>
					</div>
				</PanelRow>
			</PanelBody>
		</Panel>
	);
}
