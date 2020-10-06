import React, { useState, createContext } from 'react';
import { IntlProvider } from 'react-intl';
import German from '../languages/de.json';
import English from '../languages/en-US.json';

export const Context = createContext();
const local = navigator.language;

let lang;
if (
	local === 'de' ||
	local === 'de-DE' ||
	local === 'de-AT' ||
	local === 'de-CH'
) {
	lang = German;
} else {
	lang = English;
}

const Wrapper = (props) => {
	const [locale, setLocale] = useState(local);
	const [messages, setMessages] = useState(lang);

	function selectLang(e) {
		const newLocale = e.target.value;
		setLocale(newLocale);
		switch (newLocale) {
			case 'de':
				setMessages(German);
				break;
			case 'de-DE':
				setMessages(German);
				break;
			case 'de-AT':
				setMessages(German);
				break;
			case 'de-CH':
				setMessages(German);
				break;
			default:
				setMessages(English);
				break;
		}
		/* if (newLocale === 'de' || 'de-DE' || 'de-AT' || 'de-CH') {
			setMessages(German);
		} else {
			setMessages(English);
		} */
	}

	return (
		<Context.Provider value={{ locale, selectLang }}>
			<IntlProvider messages={messages} locale={locale}>
				{props.children}
			</IntlProvider>
		</Context.Provider>
	);
};

export default Wrapper;
