/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const spotID = params.spotID;

	return { spotID };
};
