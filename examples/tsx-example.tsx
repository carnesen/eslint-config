import React = require('react');

export const Example: React.FunctionComponent = () => <div>foo</div>;

export const notFoundMiddleware = (): any => (
	<div style={{ width: '100%' }}>
		<div className="card">404 Not Found</div>
	</div>
);
