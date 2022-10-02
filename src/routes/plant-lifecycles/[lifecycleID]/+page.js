/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const lifecycleID = params.lifecycleID;

	return { lifecycleID };
};
