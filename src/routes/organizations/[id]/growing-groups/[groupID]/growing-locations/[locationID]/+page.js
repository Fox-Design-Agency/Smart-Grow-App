/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const locationID = params.locationID;

	return { locationID };
};
