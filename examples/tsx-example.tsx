import React = require('react');

export const Example: React.FunctionComponent = () => {
	return <div>foo</div>;
};

export const notFoundMiddleware = (): any => {
	return (
		<div style={{ width: '100%' }}>
			<div className="card">404 Not Found</div>
		</div>
	);
};
