import React, { useContext } from 'react';
import { Context } from './Wrapper';

import { FormattedMessage } from 'react-intl';

const LanguageSelect = () => {
	const context = useContext(Context);

	return (
		<div className="language">
			<h6 className="language-title">
				<FormattedMessage id="language.title" defaultMessage="Language" />
			</h6>
			<div className="language-buttons" value={context.locale}>
				<button
					className="language-button"
					value={'de'}
					onClick={context.selectLang}
				>
					DE
				</button>
				<button
					className="language-button"
					value={'en'}
					onClick={context.selectLang}
				>
					EN
				</button>
			</div>
		</div>
	);
};

export default LanguageSelect;
