/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
	const levelID = params.levelID;

	return { levelID };
};
